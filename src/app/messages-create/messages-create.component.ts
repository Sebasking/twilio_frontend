import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../message.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Message } from '../model/message';

@Component({
  selector: 'app-messages-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './messages-create.component.html',
  styleUrl: './messages-create.component.scss'
})
export class MessagesCreateComponent {
  private jwt = localStorage.getItem("twilioAppSession") || ''
  public message: Message = { to: '', body: '', timestamp: '' }
  constructor(
    private loginService: LoginService,
    private messageService: MessageService,
    private _router: Router
  ) { }
  onSubmit() {
    this.messageService.createMessages(this.jwt, this.message.to, this.message.body).subscribe({
      next: (response) => {
        if (response.status === 201) {
          this._router.navigateByUrl("/show")
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
