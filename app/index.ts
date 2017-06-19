import {Config, RecordConfig} from './client-config';
import GoogleAuth = require('google-auth-library');
import {AssistantClient} from './assistant';
import {Authentication} from './authentication';
import fs = require('fs');
const { Polly, S3 } = require('aws-sdk');

const debug = require('debug');

let allConfig;

if (process.env.VOICE_CONFIG) {
  allConfig = <Config>require(process.env.VOICE_CONFIG);
} else if (!fs.exists('./config.json')) {
  console.error('Cannot find config.json file, please specify full path in VOICE_CONFIG environment constiable.');
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

const polly = new Polly({
  accessKeyId: process.env.AWS_POLLY_AK,
  secretAccessKey: process.env.AWS_POLLY_SECRET,
  region: 'eu-west-1'
});

const s3 = new S3({
  accessKeyId: process.env.AWS_S3_KEY,
  secretAccessKey: process.env.AWS_S3_SECRET
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
        const stream = this.response.httpResponse.createUnbufferedStream();
        assistant.requestAssistant(stream);
      }
    })
    .on('error', (response) => console.error('Error while querying Polly', response))
    .send();
};

const Alexa = require('alexa-sdk');
const NOT_FOUND = 'Sorry I don\'t know this command';
const UNHANDLED_RESP = 'Are you talking to me?';
const ERROR_RESP = 'Oops something went wrong';

exports.handler = function(event, context, callback) {
  const alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.APP_ID = process.env.APP_ID;
  alexa.execute();
};

const callAssistant = function(query) {
  let that = this;
  auth.on('oauth-ready', (oauth2Client) => {
    const assistant = new AssistantClient(allConfig, oauth2Client);

    allConfig.debug('assistant');

    assistant.on('audio-file', path => {
      let fileName = path.split('/').pop();
      var params = {ACL:'public-read', Bucket: 'echo-assistant', Key: fileName, Body: fs.createReadStream(path)};
      s3.upload(params, (err, data) => {
        console.log(err, data);
        if (!err) {
          this.emit(':tell', `<speak><audio src="${data.Location}" /></speak>`)
        }
      });
    });
    sendAudio(query, assistant);
  });

  auth.on('token-needed', () => {
    this.emit(':tell', 'Token needed');
  });

  auth.loadCredentials();
};

//callAssistant('hello');

const handlers = {
  'Assist': function () {
    const query = this.event.request.intent.slots.query ? this.event.request.intent.slots.query.value : null;
    const that = this;
    console.log('Execute query: ', query);

    if (!query) return this.emit(':tell', 'No query found, please try again');

    callAssistant(query);
  },
  'Unhandled': function() {
    console.log('Tell:', UNHANDLED_RESP);
    this.emit(':tell', UNHANDLED_RESP);
  }
};
