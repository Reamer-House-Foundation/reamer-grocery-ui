import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import decode from 'jwt-decode';

export enum LoginState {
  LOGGED_IN = 'LOGGED_IN',
  LOGGED_OUT = 'LOGGED_OUT',
  LOGGING_IN = 'LOGGING_IN',
  LOGIN_ERROR = 'LOGGIN_ERROR'
};

export interface UserDeets {
  userEmail: string,
  userPassword: string,
};

@Injectable()
export class AuthService {
  loginState: LoginState;
  loginStateChange: Subject<LoginState>;

  constructor() {
    this.loginState = LoginState.LOGGED_OUT;

    this.loginStateChange = new Subject<LoginState>();
    this.loginStateChange.subscribe(loginState => {
      this.loginState = loginState;
    });
  }

  private setLoginState(loginState: LoginState): void {
    this.loginStateChange.next(loginState);
  }

  public isAuthenticated(): boolean {
    return this.loginState === LoginState.LOGGED_IN;
  }

  getLoginState(): Observable<LoginState> {
    return this.loginStateChange.asObservable();
  }

  logoutUser(): void {
    this.setLoginState(LoginState.LOGGED_OUT);
    sessionStorage.removeItem('token');
  }

  getProfile() {
    if (this.isAuthenticated()) {
      const token = sessionStorage.getItem('token');
      const tokenPayload = decode(token);
      return tokenPayload;
    }
    return null;
  }

  loginUser(userDeets: UserDeets): Promise<void> {
    this.setLoginState(LoginState.LOGGING_IN);

    return new Promise<void>((resolve, reject) => {
      sessionStorage.setItem('token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');

      this.setLoginState(LoginState.LOGGED_IN);
      resolve();
    });
  }
}