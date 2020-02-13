
export interface Environment {
  production: boolean;
  env: 'dev' | 'prod';

  baseRef: string;

  authDomain: string;
  authClientID: string;
  
  apiBase: string;
};
