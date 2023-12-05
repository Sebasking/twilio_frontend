import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-messages-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './messages-create.component.html',
  styleUrl: './messages-create.component.scss'
})
export class MessagesCreateComponent {
  onSubmit() {
    console.log("submitting")
  }
}
