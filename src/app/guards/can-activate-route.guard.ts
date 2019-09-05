import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor(private users: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.users.isLoggedIn()) {
        return true;
    } else {
        this.router.navigate(['login'], {
            queryParams: {
                return : state.url
            }
        });
        return false;
    }
  }
}
