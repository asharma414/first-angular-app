import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { User } from './user.model';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new Subject<User>();

  constructor(private http: HttpClient) { }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAVSKuOptzfil0BWl4G3WGEgSpPQigoRwY', {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError), tap(res => this.handleAuthentication(res.email, res.localId, res.idToken, +res.expiresIn)));
  }

  signin(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAVSKuOptzfil0BWl4G3WGEgSpPQigoRwY', {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError), tap(res => this.handleAuthentication(res.email, res.localId, res.idToken, +res.expiresIn)));
  }

  private handleError(err: HttpErrorResponse) {
    let errorMsg = 'An unknown error occured';
      if (!err.error || !err.error.error) {
        return throwError(errorMsg);
      }
      switch (err.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMsg = 'This email exists already';
          break;
        case 'EMAIL_NOT_FOUND':
          errorMsg = 'This email does not exist';
          break;
        case 'PASSWORD_INVALID':
          errorMsg = 'This password is not correct';
          break;
      }
      return throwError(errorMsg);
  }

  private handleAuthentication(email: string, id: string, token: string, expiresIn: number) {
    const expiration = new Date(new Date().getTime() + expiresIn * 1000)
    const user = new User(email, id, token, expiration)
    this.user.next(user);
  }
}
