import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { RouteConfigLoadEnd, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  personOrder: any[] = [];
  orderForm = this.fb.group({
    first_name: [''],
    last_name: [''],
    email: [''],
    address: [''],
    postal_code: [''],
    city : [''],
  });
  firstName: any;
  lastName: any;
  email: any;
  address: any;
  postalCode: any;
  city: any;
  totalPrice: string;

  constructor(private fb: FormBuilder, private orderService: OrderService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.totalPrice = this.route.snapshot.paramMap.get('totalPrice');
    console.log(this.totalPrice);
  }

  orderCreateComponent() {
    this.orderService.createOrder(this.orderForm.getRawValue()).subscribe(data => {
      this.firstName = this.orderForm.get('first_name').value;
      this.lastName = this.orderForm.get('last_name').value;
      this.email = this.orderForm.get('email').value;
      this.address = this.orderForm.get('address').value;
      this.postalCode = this.orderForm.get('postal_code').value;
      this.city = this.orderForm.get('city').value;
      return this.router.navigate(['payment', {firstName : this.firstName,
        lastName : this.lastName,
        email: this.email,
        address: this.address,
        postalCode: this.postalCode,
        city: this.city,
        totalPrice: this.totalPrice
      }]);
    });
  }
}
