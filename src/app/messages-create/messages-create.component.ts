import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../message.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-messages-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './messages-create.component.html',
  styleUrl: './messages-create.component.scss'
})
export class MessagesCreateComponent {
  constructor(private loginService: LoginService, private messageService: MessageService) { }
  onSubmit() {
    // const { value: { to, body } } = form
    const jwt = this.loginService.getJwt
    // let result = this.messageService.createMessages(to, body)
  }
}
