import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-list/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  productId: string;
  params: string;
  sub: Subscription;
  showMsg: boolean;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.sub = this.route.paramMap.subscribe((params) => {
    //   this.params = params.get('product');
    // });
    // console.log(this.params);
    this.productId = this.route.snapshot.paramMap.get('productId');
    return this.productService.detailProduct(this.productId).subscribe(data => {
      this.product = data;
      this.showMsg = true;
      console.log(this.product);
    });
  }
}
