import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../userservices/user.service';


@Injectable()
export class CartDetailService {
    constructor(private http: HttpClient,private userService: UserService) {
    }

    createCartDetail(productName: any, noOfQuantity: any): Observable<any> {
        return this.http.post('http://127.0.0.1:8080/carts/create/', {
            product: productName,
            quantity: noOfQuantity});
    }

    showCartDetail(id): Observable<any> {
        return this.http.get('http://127.0.0.1:8080/carts/detail/' + String(id));
    }
}