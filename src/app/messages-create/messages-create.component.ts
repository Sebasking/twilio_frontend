import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../message.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './messages-create.component.html',
  styleUrl: './messages-create.component.scss'
})
export class MessagesCreateComponent {
  private jwt = ''
  constructor(
    private loginService: LoginService,
    private messageService: MessageService,
    private _router: Router
  ) {
    this.loginService.getJwt.subscribe(jwt => this.jwt = jwt)
  }

  onSubmit() {
    let body = ''
    let to = ''
    this.messageService.createMessages(this.jwt, to, body).subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (err) => {
        if (err.status === 401) {
          this._router.navigateByUrl("/login")
        }
      }
    })
  }
}
