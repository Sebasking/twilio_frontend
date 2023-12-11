import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from '../login.service';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages-show',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messages-show.component.html',
  styleUrl: './messages-show.component.scss'
})
export class MessagesShowComponent implements OnInit {
  public messages: any = []
  jwt = ''
  constructor(
    private login: LoginService,
    private message: MessageService,
    private _router: Router
  ) {
    this.login.getJwt.subscribe(jwt => this.jwt = jwt)
  }

  ngOnInit(): void {
    this.message.retrieveMessages(this.jwt).subscribe({
      next: (response) => {
        const { body: messages } = response
        if (messages) {
          this.messages = messages
        }
      },
      error: (err) => {
        alert("Session is expired")
        this._router.navigateByUrl("/login")
      }
    })
  }
}
