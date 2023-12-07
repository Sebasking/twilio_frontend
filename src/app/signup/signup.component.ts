import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  constructor(private loginService: LoginService, private _router: Router) { }

  onSubmit(form: any) {
    const { value: { email: email, password: password } } = form
    this.loginService.signUp(email, password).subscribe(jwt => {
      if (jwt !== '') {
        this.loginService.setJwt(jwt)
        this._router.navigateByUrl('/show')
      } else {

      }
    })
  }
}
