import {IEnvironment} from "./ienvironment";

const apiHost = '';
const apiUrl = `https://${apiHost}/api/`

export const environment : IEnvironment = {
  apiHost,
  apiUrl,
  enableDebugTools: false,
  logLevel: 'debug',
  production: true
};
