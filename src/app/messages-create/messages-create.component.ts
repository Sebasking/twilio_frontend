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
    this.loginService.getJwt().subscribe(jwt => {
      // let result = this.messageService.createMessages(jwt.toString(), to, body)
      console.log('jwt', jwt.toString())
    })
  }
}
