import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class OrderService {
    constructor(private http: HttpClient){
    }

    createOrder(orderForm): Observable<any> {
        return this.http.post('http://127.0.0.1:8080/carts/order/create/', orderForm);
    }

    showOrder(): Observable<any> {
        return this.http.get('http://127.0.0.1:8080/carts/order/detail/');
    }
}
