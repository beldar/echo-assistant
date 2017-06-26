
import {Writable, Readable} from 'stream';
import grpc = require('grpc');
const EmbeddedAssistantClient = require('./google/assistant/embedded/v1alpha1/embedded_assistant_grpc_pb').EmbeddedAssistantClient;
import fs = require('fs');
import {Config, AssistantConfig} from './client-config';
import temp = require('temp');
import path = require('path');
import lame = require('lame');

import {
  AudioInConfig, AudioOutConfig, ConverseState,
  ConverseConfig, ConverseRequest, ConverseResponse
} from './google/assistant/embedded/v1alpha1/embedded_assistant_pb';
import {EventEmitter} from 'events';

export class AssistantClient extends EventEmitter {
  private currentConversationState;
  private callCreds;
  private assistant;
  private finished : boolean;
  private tmpStream;
  private encoder;

  constructor( private config: Config, private oauth2Client ) {
    super();

    this.callCreds = new grpc.Metadata();

    this.setupAssistant();

    this.finished = false;
  }

  private setupAssistant() {
    // this file actually comes from node_modules/grpc/etc/roots.pem
    const caCerts = fs.readFileSync(path.join(__dirname, 'ca.crt'));

    if (!this.config.assistant) {
      this.config.assistant = new AssistantConfig();
    }

    const assistantConfig = this.config.assistant;

    if (!assistantConfig.assistantApiEndpoint) {
      assistantConfig.assistantApiEndpoint = 'embeddedassistant.googleapis.com';
    }

    if (!assistantConfig.audioSampleRate) {
      assistantConfig.audioSampleRate = 16000;
    }

    if (!assistantConfig.chunkSize) {
      assistantConfig.chunkSize = 6400;
    }

    if (!assistantConfig.volumePercent) {
      assistantConfig.volumePercent = 100;
    }

    const sslCreds = grpc.credentials.createSsl(caCerts);
    const call_creds = grpc.credentials.createFromGoogleCredential(this.oauth2Client);

    this.assistant = new EmbeddedAssistantClient(assistantConfig.assistantApiEndpoint,
      grpc.credentials.combineChannelCredentials(sslCreds, call_creds) );
  }

  private createAudioConfig() : ConverseRequest {
    const audioInConfig = new AudioInConfig();
    audioInConfig.setEncoding(AudioInConfig.Encoding.LINEAR16);
    audioInConfig.setSampleRateHertz(this.config.assistant.audioSampleRate);

    const audioOutConfig = new AudioOutConfig();
    audioOutConfig.setSampleRateHertz(16000);
    audioOutConfig.setEncoding(AudioOutConfig.Encoding.LINEAR16);
    audioOutConfig.setVolumePercentage(80);

    const converseConfig = new ConverseConfig();
    converseConfig.setAudioInConfig(audioInConfig);
    converseConfig.setAudioOutConfig(audioOutConfig);

    if (this.currentConversationState) {
      const converseState = new ConverseState();
      converseState.setConversationState(this.currentConversationState);
      converseConfig.setConverseState(converseState);
    }

    const converseRequest = new ConverseRequest();
    converseRequest.setConfig(converseConfig);

    return converseRequest;
  }

  private converseResponse(resp: ConverseResponse) {
    if (resp.hasEventType()) {
      this.config.debug('event', resp.getEventType());

      if (resp.getEventType() === ConverseResponse.EventType.END_OF_UTTERANCE) {
        this.config.debug('end of utterance');
      }

      this.emit('event', resp.getEventType());
    }

    if (resp.hasAudioOut()) {
      let audio = resp.getAudioOut().getAudioData_asU8();
      this.encoder.write(new Buffer(audio));
    }

    if (resp.hasError()) {
      const error = resp.getError();
      this.config.error(error);
      this.emit('error', error);
    }

    if (resp.hasResult()) {
      const result = resp.getResult();
      this.config.debug('> request text', result.getSpokenRequestText())
      this.emit('request-text', result.getSpokenRequestText());
      this.emit('result', result);
    }

    if (!resp.hasEventType() && !resp.hasAudioOut() && !resp.hasError() && !resp.hasResult()) {
      this.config.debug('unknown packet', resp);
    }
  }

  private setupConversationAudioRequestStream(converseStream: Writable) : Writable {
    const audioPipe = new Writable();
    const size = this.config.assistant.chunkSize;

    audioPipe._write = (chunk, enc, next) => {
      if (!chunk.length) {
        this.config.debug('ignoring');
        return;
      }

      const parts = Math.ceil(chunk.length / size);

      for(let count = 0; count < parts; count ++) {
        const converseRequest = new ConverseRequest();
        const end = ((count+1) * size) > chunk.length ? chunk.length : ((count+1) * size);
        const bit = new Uint8Array(chunk.slice(count * size, end));

        converseRequest.setAudioIn(bit);
        try {
          converseStream.write(converseRequest);
        } catch (err) {
          this.config.error(err);
        }
      }

      next();
    };

    audioPipe.on('end', () => {
      this.config.debug('end of audio');
      converseStream.end();
    });

    return audioPipe;
  }

  private setupConversationStream(): Writable {
    const options = {};
    const writer = this.assistant.converse(this.callCreds, options);

    writer.on('data', (data : ConverseResponse) => {
      this.converseResponse(data);
    });

    writer.on('end', (err) => {
      if (err) {
        this.config.debug('failed ', err);
      } else {
        this.finished = true;
        this.encoder.end();
        this.emit('audio-file', this.tmpStream.path);
        this.config.debug('finished');
        this.emit('end');
      }
    });

    this.config.debug('write audio config');
    writer.write(this.createAudioConfig());
    return writer;
  }

  public requestAssistant(stream: Readable ) {
    if ( !stream ) {
      this.config.error('No stream passed');
    }

    const converseStream = this.setupConversationStream();
    const audioRequestStream = this.setupConversationAudioRequestStream(converseStream);

    this.config.debug('Setting up streams');

    this.tmpStream = temp.createWriteStream({suffix:'.mp3'});

    this.encoder = new lame.Encoder({
      // input
      channels: 1,        // 1 channel
      bitDepth: 16,       // 16-bit samples
      sampleRate: 16000,  // 16000 Hz sample rate

      // output
      bitRate: 48,
      outSampleRate: 16000,
      mode: lame.MONO
    });

    this.encoder.pipe(this.tmpStream);

    stream.pipe(audioRequestStream);
    stream.on('end', () => {
      this.config.debug('closing conversation');
      converseStream.end();
    });
  }
}
