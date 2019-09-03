import { Component } from '@angular/core';
import { UserService } from './userservices/user.service';
import { Router, NavigationExtras } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product-list/product.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'second-project';
    products: any[];
    searchName: any;
     constructor(private userService: UserService,
                 private router: Router,
                 private productlist: ProductService, private fb: FormBuilder) { }

        searchProductName = this.fb.group({
            search : ['']
        });

    isLogin() {
        return this.userService.isLoggedIn();
    }

    islogout() {
        this.userService.logoutuser();
        this.userService.deleteToken();
        this.router.navigate(['']);
    }

//   getproduct() {
//     return this.productlist.getProducts().subscribe(
//       data => {this.products = data;
//                this.router.navigate(['/product']);
//       });
//   }

    getproduct() {
        return this.router.navigate(['/product']);
    }

    searchProductComponent() {
        this.searchName = this.searchProductName.get('search').value;
        return this.router.navigate(['/product', {search: this.searchName }]);
    }

    getUser() {
        return this.userService.getUser();
    }
}
