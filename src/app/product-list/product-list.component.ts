import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from './product.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Observable, Subscription } from 'rxjs';
import { UserService } from '../userservices/user.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
    products: any;
    name: string;
    params: string;
    sub: Subscription;

    constructor(private productService: ProductService,
                private fb: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private userService: UserService) { }

    ngOnInit() {
        this.sub = this.route.paramMap.subscribe((params) => {
            this.params = params.get('search');
            this.getProducts();
        });
    }

    getProducts() {
        if (this.userService.getToken()) {
            if (this.params) {
                this.name = this.route.snapshot.paramMap.get('search');
                this.productService.searchProduct(this.name).subscribe(data => {
                    this.products = data;
                });
            } else {
                this.productService.getProducts().subscribe(data => {
                    this.products = data;
                });
            }
        }
    }

    // deleteProductComponent(product: any) {
    //     for (let i = 0; i < this.products.length; ++i) {
    //         if (this.products[i].id === product.id) {
    //             this.products.splice(i, 1);
    //         }
    //     }
    //     this.productService.deleteProduct(product).subscribe();
    // }

    detailProductComponent(products: any) {
        this.router.navigate(['/product-detail', { productId: products.id}]);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
