import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private jwt = new BehaviorSubject('')
  getJwt = this.jwt.asObservable
  constructor() { }

  setJwt(jwt: string) {
    this.jwt.next(jwt)
  }

}
