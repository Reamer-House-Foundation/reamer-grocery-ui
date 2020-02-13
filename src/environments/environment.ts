
import { Environment } from './environment.type';

export const environment: Environment = {
  production: false,
  env: 'dev',

  baseRef: '/',
  
  authDomain: 'dev-tetrovolt.auth0.com',
  authClientID: '3U4UPMPaBKrI43EWtvIgkkTcYyJfq3ja',
  authRedirectURI: 'http://localhost:4200',

  apiBase: 'http://localhost:4000',
};
