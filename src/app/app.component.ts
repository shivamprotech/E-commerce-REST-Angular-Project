import { Component } from '@angular/core';
import { UserService } from './userservices/user.service';
import { Router } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product-list/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'second-project';
  constructor(private userService: UserService,
              private router: Router,
              private productlist: ProductService) { }

  isLogin() {
    return this.userService.isLoggedIn();
  }

  islogout() {
    this.userService.logoutuser();
    this.userService.deleteToken();
    this.router.navigate(['']);
  }

  getproduct() {
    return this.productlist.getProducts().subscribe(
      data => this.router.navigate(['/product']));

  }
}
