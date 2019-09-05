import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  return: any;
  token: string;

  LoginUser = this.fb.group({
    username: [''],
    password: [''],
  });

  constructor(private fb: FormBuilder, private loginservice: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => this.return = params['return'] || '/product');
  }

  login() {
    this.loginservice.createloginservice(this.LoginUser.getRawValue()).subscribe(
      data => {
        console.log(data);
        this.loginservice.setToken(data.token, data.user);
        this.router.navigate(['']);
      },
      err => {
        this.router.navigate(['login']);
      }
    );
  }
}
