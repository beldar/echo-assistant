# echo-assistant

## Overview

This is a nodejs + typescript Alexa Skill interfacing with the Assistant from Google (tm). It uses the alpha sdk to talk to it,
so it may stop working with major revision changes.


It uses Amazon Polly to translate text into voice that its send to the Assistant SDK, and the resulting audio is
encoded and stored on a Amazon S3 bucket for later playback on the Amazon Echo (Alexa).

You'll need some environmental variables set up to make it run:

```bash
# Amazon Polly for TTS
AWS_POLLY_AK      # Access Key
AWS_POLLY_SECRET  # Secret

# Amazon S3 for transient audio file storage
AWS_S3_KEY        # Access Key
AWS_S3_SECRET     # Secret

# Google Assistant credentials
ASSISTANT_CLIENT_ID     # Client Id
ASSISTANT_CLIENT_SECRET # Secret
REDIRECT_URL            # oAuth2 redirect url

# Alexa
APP_ID    # Application ID

# Internal app vars
DEBUG        # Debug key (default: 'node-assistant')
```

## Considerations

- When running this code on AWS Lambda context the node modules with bindings of this project need to be
compiled for Linux instead of MacOS or Windows, therefore before zipping and uploading this
to AWS you need to do that extra step (if you're not already in Linux). There is a little script just to do that on `app/build-deps.ts`, which you can invoke with `yarn build:deps`.

- You can use the `payload.json` file as a tests event on Lambda.


## Installation

I use yarn, but you should be able to use npm.

If you want to use yarn just install it globally:

```
npm i yarn -g
```

And then on the root folder:

```
yarn install
```

## Build

Build scripts:

```bash
yarn build       # Copies files and compiles ts into js on dist/
yarn build:watch # Build and watch files to recompile
yarn build:deps  # Build node dependencies for lambda (linux) on the dist folder (uses docker)
yarn build:zip   # Create a zip file with the code on dist/app (ready to upload to lambda)
yarn build:all   # Do all of the previous tasks in one go
```

## Debugging

All logging goes through `node-debug`, so you need to set the environmental variable before running it:

```
DEBUG=node-assistant node index
```

which tells it to turn debugging on.

##  Running

```
yarn start
```

## Thanks

To @rvowles for his amazing repo which I forked and allowed me to make this work quicker
