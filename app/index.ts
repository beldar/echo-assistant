import {Config, RecordConfig} from './client-config';
import GoogleAuth = require('google-auth-library');
import {AssistantClient} from './assistant';
import {Hotword} from './hotword';
import {Authentication} from './authentication';
import fs = require('fs');
import {Duplex} from 'stream';
const { Polly } = require('aws-sdk');

const debug = require('debug');

let allConfig;

if (process.env.VOICE_CONFIG) {
	allConfig = <Config>require(process.env.VOICE_CONFIG);
} else if (!fs.exists('./config.json')) {
	console.error('Cannot find config.json file, please specify full path in VOICE_CONFIG environment variable.');
	process.exit(-1);
} else {
	allConfig = <Config>require('./config.json');
}

allConfig.debug = debug('node-assistant');

allConfig.authentication.clientId = process.env.ASSISTANT_CLIENT_ID;
allConfig.authentication.clientSecret = process.env.ASSISTANT_CLIENT_SECRET;

if (process.env.DEBUG === 'node-assistant') {
	allConfig.verbose = true; // for other logging
}

if (!allConfig.record) {
	allConfig.record = new RecordConfig();
	allConfig.record.programme = 'rec';
}

const hotword = allConfig.hotwords.active ? new Hotword(allConfig) : null;


const polly = new Polly({
  accessKeyId: process.env.AWS_POLLY_AK,
  secretAccessKey: process.env.AWS_POLLY_SECRET,
  region: 'eu-west-1'
});


const auth = new Authentication(allConfig);

const sendAudio = (text, assistant: AssistantClient) => {
  let params = {
    OutputFormat: "pcm",
    SampleRate: "16000",
    Text: text,
    TextType: "text",
    VoiceId: "Joanna"
  };

  polly.synthesizeSpeech(params)
    .on('httpHeaders', function(statusCode, headers) {
      if (statusCode < 300) {
        var stream = this.response.httpResponse.createUnbufferedStream();
        assistant.requestAssistant(stream);
      }
    })
    .on('error', (response) => console.error('Error while querying Polly', response))
    .send();
};

auth.on('oauth-ready', (oauth2Client) => {
	console.log('We have configured credentials');

	const assistant = new AssistantClient(allConfig, oauth2Client);

  allConfig.debug('assistant');

  if ( allConfig.hotwords.active ) {
    hotword.on('hotword', (match, index) => {
  		process.nextTick(() => {
  			allConfig.debug('assistant');
  			//assistant.requestAssistant();
  		});
  	});

  	hotword.start();

  	assistant.on('speaker-closed', () => {
  		// we seem to get this callback slightly before the speaker has finished
  		// which can cause it to be cut off
  		setTimeout(() => {
  			hotword.start();
  		}, 500);
  	});
  }

	console.log('write something to interact with assistant');
  process.stdin.setEncoding('utf8');

  process.stdin.on('readable', () => {
    var chunk = process.stdin.read();
    if (chunk !== null) {
      sendAudio(chunk, assistant);
    }
  });
	// process.stdin.resume();
	// process.stdin.on('data', (data) => {
	// 	 console.log('New data', data.text())
	// });
});

auth.loadCredentials();
