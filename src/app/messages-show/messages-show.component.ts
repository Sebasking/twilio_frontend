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
  private jwt = localStorage.getItem("twilioAppSession") || ''

  constructor(
    private message: MessageService,
    private _router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.message.retrieveMessages(this.jwt).subscribe({
      next: (response) => {
        const { body: messages } = response
        if (messages) {
          this.messages = messages
        }
      },
      error: (err) => {
        if (err.status === 401) {
          this.loginService.signOut(this.jwt).subscribe({
            next: (_response) => {
              alert("Session is expired")
              this._router.navigateByUrl("/login")
            },
            error: (er) => { alert("Something went wrong") }
          })
        }
      }
    })
  }
}
