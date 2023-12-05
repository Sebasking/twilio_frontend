import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  constructor(private loginService: LoginService) { }

  onSubmit(form: any) {
    const { value: { email: email, password: password } } = form
    let result = this.loginService.signUp(email, password)
    console.log("result", result)
  }
}
