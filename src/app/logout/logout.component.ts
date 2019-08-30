import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../userservices/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent {
  isLoggedout = true;
  constructor(private logoutservice: UserService, private router: Router) { }
}
