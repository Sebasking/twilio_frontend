import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, of } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private jwt = new BehaviorSubject('')
  private baseUrl = environment.apiUrl
  private signUpUrl = `${this.baseUrl}signup`
  private loginUrl = `${this.baseUrl}login`
  private logOutUrl = `${this.baseUrl}logout`
  private handleError(result: any) {
    return (error: any) => {
      return of(result)
    }
  }

  constructor(private http: HttpClient) { }

  getJwt = this.jwt.asObservable()

  setJwt(jwt: string) {
    this.jwt.next(jwt)
    localStorage.setItem("twilioAppSession", jwt)
  }

  logIn(email: string, password: string) {
    return this.http.post(this.loginUrl,
      { user: { email, password } },
      { headers: { 'Accept': 'application/json' }, observe: 'response' }
    ).pipe(catchError(this.handleError('')))
  }

  signUp(email: string, password: string) {
    return this.http.post(this.signUpUrl,
      { user: { email, password } },
      { headers: { 'Accept': 'application/json' }, observe: 'response' },
    ).pipe(catchError(this.handleError('')))
  }

  signOut(jwt: string) {
    return this.http.delete(this.logOutUrl, {
      headers: { 'Accept': 'application/json', 'Authorization': jwt },
      observe: 'response'
    }
    ).pipe(catchError(this.handleError('')))
  }
}
