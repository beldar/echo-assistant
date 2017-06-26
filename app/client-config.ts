export class AuthenticationConfig {
  public clientId: string;
  public clientSecret: string;
  // one or other
  public scope: string;
  public scopes: string[];
  public codeRedirectUri: string;
  public googleOAuthEndpoint: string;
  public urlGoogleAccount: string;
  public credentialsFilePath: string;
  public maxDelayBeforeRefresh: number;
}

export class AssistantConfig {
  public assistantApiEndpoint : string;
  public audioSampleRate : number;
  public chunkSize : number;
  public volumePercent : number;
}

export class AudioConfig {
  public sampleRate : number;
  public sampleSizeInBits : number;
  public channels : number;
}

export class Config {
  public debug : any; // comes from index.ts
  public error: any;
  public verbose : boolean;
  public authentication: AuthenticationConfig;
  public assistant : AssistantConfig;
  public audio : AudioConfig;
}
