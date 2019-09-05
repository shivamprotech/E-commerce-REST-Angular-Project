import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { CanActivateRouteGuard } from './guards/can-activate-route.guard';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'signup', component: SignupComponent},
  {path : 'login', component: LoginComponent},
  {path : 'logout', component: LogoutComponent},
  {path : 'product', component: ProductListComponent},
  {path : 'product-detail', component: ProductDetailComponent},
  {path : 'cart-detail', component: CartDetailComponent, canActivate: [CanActivateRouteGuard] },
  {path : 'order', component: OrderComponent, canActivate: [CanActivateRouteGuard] },
  {path : 'payment', component: PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
