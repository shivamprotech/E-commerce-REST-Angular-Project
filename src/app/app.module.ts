import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  ProductListComponent } from './product-list/product-list.component'
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './services/user.service';
import { ProductService } from './services/product.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CartDetailService } from './services/cart-detail.service';
import { TokenInterceptor } from './authentication-interceptor';
import { OrderComponent } from './order/order.component';
import { OrderService } from './services/order.service';
import { PaymentComponent } from './payment/payment.component';
import { CanActivateRouteGuard } from './guards/can-activate-route.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListComponent,
    SignupComponent,
    LogoutComponent,
    HomeComponent,
    ProductDetailComponent,
    CartDetailComponent,
    OrderComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UserService, ProductService, CartDetailService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }, OrderService, CanActivateRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
