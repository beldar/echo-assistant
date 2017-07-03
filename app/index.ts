import {Config, AuthenticationConfig} from './client-config';
import {AssistantClient} from './assistant';
import {Authentication} from './authentication';
import fs = require('fs');
import { Polly, S3 } from 'aws-sdk';
import debug from'debug';
import {PassThrough} from 'stream';

const Alexa = require('alexa-sdk');

/** Constant declarations **/
const TESTING                 = process.env.TESTING || false,
      NOT_FOUND               = 'Sorry I don\'t know this command',
      UNHANDLED_RESP          = 'Are you talking to me?',
      ERROR_RESP              = 'Oops something went wrong',
      LINK_ACCOUNT            = 'You must link your Google account to use this skill. Please use the link in the Alexa app to authorise your Google Account.',
      AWS_REGION              = process.env.AWS_REGION || 'eu-west-1',
      AWS_S3_BUCKET           = process.env.AWS_S3_BUCKET,
      ASSISTANT_CLIENT_ID     = process.env.ASSISTANT_CLIENT_ID,
      ASSISTANT_CLIENT_SECRET = process.env.ASSISTANT_CLIENT_SECRET,
      REDIRECT_URL            = process.env.REDIRECT_URL,
      APP_ID                  = process.env.APP_ID;

let polly = new Polly({region: AWS_REGION});
let s3 = new S3({region: AWS_REGION});
const allConfig = new Config();

allConfig.debug = debug('node-assistant');
allConfig.error = debug('node-assistant:error');
allConfig.authentication = new AuthenticationConfig();
allConfig.authentication.clientId = ASSISTANT_CLIENT_ID;
allConfig.authentication.clientSecret = ASSISTANT_CLIENT_SECRET;
allConfig.authentication.codeRedirectUri = REDIRECT_URL;

if (process.env.DEBUG === 'node-assistant') {
  allConfig.verbose = true; // for other logging
}

const auth = new Authentication(allConfig);

const sendAudio = (text, assistant: AssistantClient, context) => {
  let params = {
    OutputFormat: "pcm",
    SampleRate: "16000",
    Text: text,
    TextType: "text",
    VoiceId: "Joanna"
  };
  allConfig.debug('Polly synthesize speech params:', params);
  polly.synthesizeSpeech(params)
    .on('httpHeaders', function(statusCode, headers) {
      if (statusCode < 300) {
        allConfig.debug('Polly finished, requesting assistant...');
        const stream = this.response.httpResponse.createUnbufferedStream();
        assistant.requestAssistant(stream, s3);
      } else {
        allConfig.debug('Polly returned an error status code: ', statusCode);
      }
    })
    .on('error', (response) => allConfig.error('Error while querying Polly', response))
    .send();
};

const assertConstants = ( context ) => {
  if ( !AWS_S3_BUCKET ) {
    allConfig.debug('AWS_S3_BUCKET is not set');
    context.emit(':tell', 'Amazon S3 Bucket environmental variable is not set');
    return false;
  }

  if ( !ASSISTANT_CLIENT_ID ) {
    allConfig.debug('ASSISTANT_CLIENT_ID is not set');
    context.emit(':tell', 'Google Assistant Client ID environmental variable is not set');
    return false;
  }

  if ( !ASSISTANT_CLIENT_SECRET ) {
    allConfig.debug('ASSISTANT_CLIENT_SECRET is not set');
    context.emit(':tell', 'Google Assistant Client Secret environmental variable is not set');
    return false;
  }

  if ( !REDIRECT_URL ) {
    allConfig.debug('REDIRECT_URL is not set');
    context.emit(':tell', 'Redirect URL environmental variable is not set');
    return false;
  }

  return true;
};

const checkS3Bucket = function() {
  return new Promise(function(fullfil, reject){
    s3.headBucket({Bucket: AWS_S3_BUCKET}, function(err, data) {
      if (err) {
        allConfig.debug('S3 Bucket doesn\'t exist');
        s3.createBucket({Bucket: AWS_S3_BUCKET}, function(err, data) {
          if (err) {
            allConfig.error('Bucket creation failed', err.stack);
            reject('S3 Bucket could not be created, make sure you have set up the IAM role properly or alternatively try a different random bucket name');
          } else {
            allConfig.debug(`S3 Bucket ${AWS_S3_BUCKET} Created`);
            s3.putBucketLifecycle({
              Bucket: AWS_S3_BUCKET,
              LifecycleConfiguration: {
                Rules: [ /* required */
                  {
                    Prefix: '', /* required */
                    Status: 'Enabled', /* required */
                    Expiration: {
                      Days: 1
                    },
                    ID: 'onedaylife'
                  }
                ]
              }
            }, function(err, data) {
              if (err) {
                allConfig.error('S3 Bucket Lifecycle failed', err);
                reject('S3 Bucket Lifecycle failed');
              } else {
                allConfig.debug('S3 Bucket Lifecycle successfuly created');
                fullfil();
              }
            })
          }
        });
      } else {
        //Bucket exists
        fullfil();
      }
    });
  });
};

if ( TESTING ) {
  allConfig.debug = console.log;
  allConfig.error = console.error;
  //Outside of Lambda we need to pass specific keys and secrets
  polly = new Polly({region: AWS_REGION, accessKeyId: process.env.AWS_POLLY_AK, secretAccessKey: process.env.AWS_POLLY_SECRET,});
  s3 = new S3({region: AWS_REGION, accessKeyId: process.env.AWS_S3_KEY, secretAccessKey: process.env.AWS_S3_SECRET});
  const query = 'hello';
  const context = { emit: (a,b)=> allConfig.debug(a,b) };
  const google = require('googleapis');
  const client = new google.auth.OAuth2(ASSISTANT_CLIENT_ID, ASSISTANT_CLIENT_SECRET, REDIRECT_URL);
  //If the token expires --> auth.getNewCredentials();
  client.setCredentials(require('./creds.json'));
  const assistant = new AssistantClient(allConfig, client);
  assistant.on('encoder-ready', encoder => {
    const fileName = Date.now() + '.mp3';
    const params = {ACL:'public-read', Bucket: AWS_S3_BUCKET, Key: fileName, Body: encoder};
    s3.upload(params, (err, data) => {
      if (!err) {
        allConfig.debug('Tell: ', data.Location);
      } else {
        allConfig.error('Error uploading to S3: ', err);
      }
    });
  });
  sendAudio('what time is it?', assistant, context);
}

export const handlers = {
  'LaunchRequest': function() {
    allConfig.debug('---- LaunchRequest handler');

    if (assertConstants( this )) {
      allConfig.debug('All env vars are set');
      const ACCESS_TOKEN = this.event.session.user.accessToken;
      if (!ACCESS_TOKEN) {
        allConfig.debug('Access Token not found, tellWithLinkAccountCard', LINK_ACCOUNT);
        this.emit(':tellWithLinkAccountCard', LINK_ACCOUNT);
      } else {
        allConfig.debug('Access Token found, carry on');
        this.emit(':ask', 'How can I help you?');
      }
    } else {
      allConfig.debug('Some env vars are NOT set!');
    }
  },

  'Assist': function () {
    const QUERY = this.event.request.intent.slots.query ? this.event.request.intent.slots.query.value : null;
    const ACCESS_TOKEN = this.event.session.user.accessToken;

    allConfig.debug('---- Assist handler', QUERY);

    if (!QUERY) {
      this.emit(':tell', 'No query found, please try again');
    } else if (assertConstants( this )) {
      if (!ACCESS_TOKEN) {
        allConfig.debug('Access Token not found, tellWithLinkAccountCard', LINK_ACCOUNT);
        this.emit(':tellWithLinkAccountCard', LINK_ACCOUNT);
      } else {
        allConfig.debug('Access Token found, carry on');
        checkS3Bucket()
        .then(() => {
          const oauth2Client = auth.loadCredentials(ACCESS_TOKEN);
          const assistant = new AssistantClient(allConfig, oauth2Client);
          //This interval is to avoid lambda finishing execution before uploading to S3
          const interval = setInterval(function(){}, 1000);
          assistant.on('encoder-ready', encoder => {
            const fileName = Date.now() + '.mp3';
            const params = {ACL:'public-read', Bucket: AWS_S3_BUCKET, Key: fileName, Body: encoder};
            s3.upload(params, (err, data) => {
              if (!err) {
                allConfig.debug('Tell: ', data.Location);
                this.emit(':tell', `<audio src="${data.Location}" />`);
              } else {
                allConfig.error('Error uploading to S3: ', err);
              }
              clearInterval(interval);
            });
          });
          sendAudio(QUERY, assistant, this);
        })
        .catch(e => {
          allConfig.error('S3 Bucket creation failed');
          this.emit(':tell', e);
        });
      }
    } else {
      allConfig.debug('Some env vars are NOT set!');
    }
  },

  'Unhandled': function() {
    allConfig.debug('----- Unhandled query -----', this.event.request);
    this.emit(':tell', UNHANDLED_RESP);
  }
};

exports.handler = function(event, context, callback) {
  const alexa = Alexa.handler(event, context);
  alexa.appId = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};

process.on('uncaughtException', (err) => {
  allConfig.error('uncaughtException', err);
});
