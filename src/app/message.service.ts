import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, of } from 'rxjs';
import { Message } from './model/message';


@Injectable({
  providedIn: 'root'
})



export class MessageService {
  private baseUrl = "http://killthedj.ngrok.io/api/v1/"
  private createUrl = this.baseUrl + '/create'
  private showUrl = this.baseUrl + '/index'
  private messages = new BehaviorSubject<Message[]>([])
  private handleError(result: any) {
    return (error: any) => {
      return of(result)
    }
  }
  constructor(private http: HttpClient) { }

  getMessages = this.messages.asObservable
  setMessages(messages: Message[]) {
    this.messages.next(messages)
  }

  createMessages(jwt: string, to: string, body: string) {
    return this.http.post(this.createUrl, { jwt, to, body }, { headers: { 'Authorization': `Bearer ${jwt}` } }).pipe(catchError(this.handleError([])))
  }

  retrieveMessages(jwt: string) {
    return this.http.get(this.showUrl, { headers: { 'Authorization': `Bearer ${jwt}` } }).pipe(catchError(this.handleError([])))
  }
}
