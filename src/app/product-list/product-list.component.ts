import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';
import { CartDetailService } from '../services/cart-detail.service';

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
    quantity: any;
    productId: any;
    cartItem = 0;
    showMsg = false;
    addToCart = true;
    buttonDisabled: boolean;

    constructor(private productService: ProductService,
                private fb: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private userService: UserService,
                private cartDetailService: CartDetailService) { }

    quantityForm = this.fb.group({
        quantity: ['1', [Validators.required]]
    });

    ngOnInit() {
        this.sub = this.route.paramMap.subscribe((params) => {
            this.params = params.get('search');
            this.getProducts();
        });
    }

    getProducts() {
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

    cartDetail(product) {
        if (this.userService.isLoggedIn) {
            this.productId = product.id;
            this.quantity = this.quantityForm.get('quantity').value;
            this.cartDetailService.createCartDetail(this.productId, this.quantity).subscribe(data => {
                this.showMsg = true });
        } else {
            return this.router.navigate(['login']);
        }

    }

    cartButton(event) {
        event.textContent = 'View Cart';
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
