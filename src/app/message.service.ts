import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, of } from 'rxjs';
import { Message } from './model/message';


@Injectable({
  providedIn: 'root'
})


export class MessageService {
  private baseUrl = "http://killthedj.ngrok.io/"
  private messageUrl = this.baseUrl + 'api/v1/messages'
  private messages = new BehaviorSubject<Message[]>([])
  constructor(private http: HttpClient) { }

  getMessages = this.messages.asObservable
  setMessages(messages: Message[]) {
    this.messages.next(messages)
  }

  createMessages(jwt: string, to?: string, body?: string) {
    return this.http.post(this.messageUrl,
      { message: { to, body } },
      {
        headers: { 'Authorization': `${jwt}`, 'Accept': 'application/json' },
        observe: 'response'
      })
  }

  retrieveMessages(jwt: string) {
    return this.http.get(this.messageUrl,
      {
        headers: { 'Authorization': `${jwt}`, 'Accept': 'application/json' },
        observe: 'response'
      })
  }
}
