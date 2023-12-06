import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private loginService: LoginService) { }

  onLogin(form: any) {
    const { value: { email, password } } = form
    let result = this.loginService.logIn(email, password).subscribe(jwt => this.loginService.setJwt(jwt))
    console.log('result', result)
  }
}
