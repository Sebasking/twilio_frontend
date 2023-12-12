import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MessagesCreateComponent } from './messages-create/messages-create.component';
import { MessagesShowComponent } from './messages-show/messages-show.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'create', component: MessagesCreateComponent },
    { path: 'show', component: MessagesShowComponent },
    { path: '**', component: SignupComponent }
];
