import { Component, OnInit } from '@angular/core';
import { CartDetailService } from '../checkoutservices/cart-detail.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../userservices/user.service';
import { ProductService } from '../product-list/product.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {
  productId: any;
  products: any;
  quantity: any;
  constructor(private cartDetailService: CartDetailService,
              private route: Router,
              private router: ActivatedRoute,
              private userService: UserService,
              private productService: ProductService ) { }

  ngOnInit() {
   
  }
}
