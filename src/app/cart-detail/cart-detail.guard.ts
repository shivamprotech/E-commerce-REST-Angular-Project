// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { UserService } from '../userservices/user.service';

// @Injectable()
// export class CanActivateRouteGuard implements CanActivate {

//   constructor(private users: UserService, private router: Router) {}

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//     if (this.users.isLoggedIn()) {
//         console.log('activate');
//         this.router.navigate(['cart-detail']);
//         return true;
//     }
//     console.log('inactivate');
//     this.router.navigate(['login']);
//     return false;
//   }
// }
