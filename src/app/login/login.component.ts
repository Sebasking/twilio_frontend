import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private loginService: LoginService, private _router: Router) { }

  onLogin(form: any) {
    const { value: { email, password } } = form
    this.loginService.logIn(email, password).subscribe(jwt => {
      if (jwt !== '') {
        this.loginService.setJwt(jwt)
        this._router.navigateByUrl('/show')
      }
    })
  }
}
