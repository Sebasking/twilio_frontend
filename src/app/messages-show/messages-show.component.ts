import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from '../login.service';
import { MessageService } from '../message.service';
import { Message } from '../model/message'

@Component({
  selector: 'app-messages-show',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messages-show.component.html',
  styleUrl: './messages-show.component.scss'
})
export class MessagesShowComponent implements OnInit {
  messages: Message[] = []
  jwt = ''
  constructor(private login: LoginService, private message: MessageService) {
    this.login.getJwt.subscribe(jwt => this.jwt = jwt)
  }

  ngOnInit(): void {
    this.message.retrieveMessages(this.jwt).subscribe(messages => {
      console.log("in here slime")
      console.log(messages)
      // this.messages = messages
    })
  }
}
