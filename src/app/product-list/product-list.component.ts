import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
    products: any[]
    constructor(private productService: ProductService) { }

    getProductList() {
        this.productService.getProducts().subscribe(data => {
            this.products = data;
        });
    }

    deleteProductComponent(product: any){
        for(let i = 0; i < this.products.length; ++i){
            if (this.products[i].id === product.id) {
            this.products.splice(i,1);
            }
        }
        this.productService.deleteProduct(product).subscribe();
    }
}