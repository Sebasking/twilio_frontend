import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, of } from 'rxjs';

interface Message {
  to: string,
  body: string
}

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

  createMessages(jwt: string, user_id: string) {
    return this.http.post(this.createUrl, {}).pipe(catchError(this.handleError([])))
  }

  retrieveMessages(jwt: string, user_id: string) {
    return this.http.get(this.showUrl).pipe(catchError(this.handleError([])))
  }
}
