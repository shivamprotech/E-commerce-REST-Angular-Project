import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'signup', component: SignupComponent},
  {path : 'login', component: LoginComponent},
  {path : 'logout', component: LogoutComponent},
  {path : 'product', component: ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
