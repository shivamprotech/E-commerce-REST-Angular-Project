import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class UserService {
    url: string;
    constructor(private http: HttpClient) {
        this.url = 'http://127.0.0.1:8080/'
     }

    createUserservice(User): Observable<any> {
        return this.http.post('http://127.0.0.1:8080/customers/create/', User);
    }

    createloginservice(LoginUser): Observable<any> {
        return this.http.post(this.url + 'customers/loginapi/', LoginUser);
    }

    logoutuser(): Observable<any> {
        return this.http.post(this.url + 'customers/logoutapi/', '');
    }

    setToken(token: string, user: string) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', user);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    getUser() {
        return localStorage.getItem('user');
    }

    deleteToken() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    isLoggedIn() {
        if (this.getToken()) {
            return true;
        }
        return false;
    }
}
