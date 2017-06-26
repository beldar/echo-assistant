"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
const grpc = require("grpc");
const EmbeddedAssistantClient = require('./google/assistant/embedded/v1alpha1/embedded_assistant_grpc_pb').EmbeddedAssistantClient;
const fs = require("fs");
const client_config_1 = require("./client-config");
const temp = require("temp");
const path = require("path");
const lame = require("lame");
const embedded_assistant_pb_1 = require("./google/assistant/embedded/v1alpha1/embedded_assistant_pb");
const events_1 = require("events");
class AssistantClient extends events_1.EventEmitter {
    constructor(config, oauth2Client) {
        super();
        this.config = config;
        this.oauth2Client = oauth2Client;
        this.callCreds = new grpc.Metadata();
        this.setupAssistant();
        this.finished = false;
    }
    setupAssistant() {
        const caCerts = fs.readFileSync(path.join(__dirname, 'ca.crt'));
        if (!this.config.assistant) {
            this.config.assistant = new client_config_1.AssistantConfig();
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
        this.assistant = new EmbeddedAssistantClient(assistantConfig.assistantApiEndpoint, grpc.credentials.combineChannelCredentials(sslCreds, call_creds));
    }
    createAudioConfig() {
        const audioInConfig = new embedded_assistant_pb_1.AudioInConfig();
        audioInConfig.setEncoding(embedded_assistant_pb_1.AudioInConfig.Encoding.LINEAR16);
        audioInConfig.setSampleRateHertz(this.config.assistant.audioSampleRate);
        const audioOutConfig = new embedded_assistant_pb_1.AudioOutConfig();
        audioOutConfig.setSampleRateHertz(16000);
        audioOutConfig.setEncoding(embedded_assistant_pb_1.AudioOutConfig.Encoding.LINEAR16);
        audioOutConfig.setVolumePercentage(80);
        const converseConfig = new embedded_assistant_pb_1.ConverseConfig();
        converseConfig.setAudioInConfig(audioInConfig);
        converseConfig.setAudioOutConfig(audioOutConfig);
        if (this.currentConversationState) {
            const converseState = new embedded_assistant_pb_1.ConverseState();
            converseState.setConversationState(this.currentConversationState);
            converseConfig.setConverseState(converseState);
        }
        const converseRequest = new embedded_assistant_pb_1.ConverseRequest();
        converseRequest.setConfig(converseConfig);
        return converseRequest;
    }
    converseResponse(resp) {
        if (resp.hasEventType()) {
            this.config.debug('event', resp.getEventType());
            if (resp.getEventType() === embedded_assistant_pb_1.ConverseResponse.EventType.END_OF_UTTERANCE) {
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
            this.config.debug('> request text', result.getSpokenRequestText());
            this.emit('request-text', result.getSpokenRequestText());
            this.emit('result', result);
        }
        if (!resp.hasEventType() && !resp.hasAudioOut() && !resp.hasError() && !resp.hasResult()) {
            this.config.debug('unknown packet', resp);
        }
    }
    setupConversationAudioRequestStream(converseStream) {
        const audioPipe = new stream_1.Writable();
        const size = this.config.assistant.chunkSize;
        audioPipe._write = (chunk, enc, next) => {
            if (!chunk.length) {
                this.config.debug('ignoring');
                return;
            }
            const parts = Math.ceil(chunk.length / size);
            for (let count = 0; count < parts; count++) {
                const converseRequest = new embedded_assistant_pb_1.ConverseRequest();
                const end = ((count + 1) * size) > chunk.length ? chunk.length : ((count + 1) * size);
                const bit = new Uint8Array(chunk.slice(count * size, end));
                converseRequest.setAudioIn(bit);
                try {
                    converseStream.write(converseRequest);
                }
                catch (err) {
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
    setupConversationStream() {
        const options = {};
        const writer = this.assistant.converse(this.callCreds, options);
        writer.on('data', (data) => {
            this.converseResponse(data);
        });
        writer.on('end', (err) => {
            if (err) {
                this.config.debug('failed ', err);
            }
            else {
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
    requestAssistant(stream) {
        if (!stream) {
            this.config.error('No stream passed');
        }
        const converseStream = this.setupConversationStream();
        const audioRequestStream = this.setupConversationAudioRequestStream(converseStream);
        this.config.debug('Setting up streams');
        this.tmpStream = temp.createWriteStream({ suffix: '.mp3' });
        this.encoder = new lame.Encoder({
            channels: 1,
            bitDepth: 16,
            sampleRate: 16000,
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
exports.AssistantClient = AssistantClient;
