import { Component, OnInit } from '@angular/core';
import { CartDetailService } from '../services/cart-detail.service';
import { ProductService } from '../services/product.service';
import { OrderService } from '../services/order.service';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { CartDetailComponent } from '../cart-detail/cart-detail.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  products: any;
  customerProducts: any[] = [];
  lastName: string;
  firstName: string;
  email: string;
  address: string;
  postalCode: string;
  city: string;
  totalPrice: string;

  constructor(private cartDetailService: CartDetailService,
              private productService: ProductService,
              private orderService: OrderService,
              private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.firstName = this.route.snapshot.paramMap.get('firstName');
    this.lastName = this.route.snapshot.paramMap.get('lastName');
    this.email = this.route.snapshot.paramMap.get('email');
    this.address = this.route.snapshot.paramMap.get('address');
    this.postalCode = this.route.snapshot.paramMap.get('postalCode');
    this.city = this.route.snapshot.paramMap.get('city');
    this.totalPrice = this.route.snapshot.paramMap.get('totalPrice');
    console.log('firstName' + this.firstName)
    return this.orderService.showOrder().subscribe(data => {
      this.cartDetailService.showCartDetail().subscribe(data => {
        this.products = data[0].customer_cart_detail;
        const apis = this.products.map(items => {
          this.productService.detailProduct(items.product).subscribe(data => {
              data.quantity = items.quantity;
              this.customerProducts.push(data);
              console.log(items);
            });
        });
      });
    });
  }
}