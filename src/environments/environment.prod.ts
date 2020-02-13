
import { Environment } from './environment.type';

export const environment: Environment = {
  production: true,
  env: 'prod',

  baseRef: '/reamer-grocery-ui/', // for gh-pages

  // TODO: Update auth variables for production. Currently still the same as dev.
  authDomain: 'dev-tetrovolt.auth0.com',
  authClientID: '3U4UPMPaBKrI43EWtvIgkkTcYyJfq3ja',
  authRedirectURI: 'https://tetrovolt.github.io/reamer-grocery-ui/',

  apiBase: '',
};