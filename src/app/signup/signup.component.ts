import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../userservices/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder, private signupservice: UserService , private router: Router) {}
  createUser = this.fb.group({
    first_name : [''],
    last_name : [''],
    username : [''],
    email : [''],
    password : [''],
    date_of_birth : [''],
    address : [''],
    phone_number : [''],
  });

  ngOnInit() {}

  createuser() {
    this.signupservice.createUserservice(this.createUser.getRawValue()).subscribe(
      data => console.log('Success', data),
      error => console.error('Error', error));
    this.router.navigate( ['/login']);
  }
}
