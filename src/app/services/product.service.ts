import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ProductService {
    constructor(private http: HttpClient){
    }

    getProducts(): Observable<any> {
        return this.http.get('http://127.0.0.1:8080/products/');
    }

    detailProduct(productId): Observable<any> {
        return this.http.get('http://127.0.0.1:8080/products/detail/' + String(productId) + '/');
    }

    deleteProduct(product): Observable<any> {
        const id = product.id;
        return this.http.delete('http://127.0.0.1:8080/products/delete/' + String(id) + '/');
    }

    searchProduct(name): Observable<any> {
        console.log(name);
        return this.http.get('http://127.0.0.1:8080/products/?search=' + name);
    }
}
