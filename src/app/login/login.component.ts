import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../userservices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  token: string;
  constructor(private fb: FormBuilder, private loginservice: UserService, private router: Router) { }

  LoginUser = this.fb.group({
    username: [''],
    password: [''],
  });

  login() {
    this.loginservice.createloginservice(this.LoginUser.getRawValue()).subscribe(
      data => {
        this.loginservice.setToken(data.token);
        this.router.navigate(['']);
      },
      err => {
        this.router.navigate(['/login']);
      }
    );
  }
}
