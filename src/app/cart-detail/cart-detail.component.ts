import { Component, OnInit } from '@angular/core';
import { CartDetailService } from '../services/cart-detail.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {
  productId: any[] = [];
  products: any;
  customerProducts: any[] = [];
  // product: any;
  productstesting: any;
  totalPrice = 0;
  constructor(
    private cartDetailService: CartDetailService,
    private route: Router,
    private router: ActivatedRoute,
    private userService: UserService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.cartDetailService.showCartDetail().subscribe(data => {
      this.products = data[0].customer_cart_detail;
      const apis = this.products.map(items => {
        return this.productService.detailProduct(items.product).subscribe(data => {
            data.quantity = items.quantity;
            this.totalPrice = this.totalPrice + data.cost * data.quantity;
            this.customerProducts.push(data);
            console.log(items);
          });
      });
    });
  }

  createOrder() {
    return this.route.navigate(['/order', {totalPrice: this.totalPrice}]);
  }
}
