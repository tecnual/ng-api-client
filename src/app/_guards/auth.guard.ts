import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, ReplaySubject, Observable } from 'rxjs/Rx';

import { AuthenticationService } from '../_services/index';
import { User } from '../_models/index';

@Injectable()
export class AuthGuard implements CanActivate {
    user = new User;

    constructor(
      private router: Router,
      private authenticationService: AuthenticationService
    ) { }

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ) {
        // console.log(this.connected);
        this.authenticationService.isConnected()
              .subscribe(r => {
                // console.log(this.connected);
                if (!r) {
                  this.router.navigate(['/pages/503'], { queryParams: { returnUrl: state.url }});
                }
              });

        if (localStorage.getItem('currentUser')) {
            // logged in so return true
          return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/user/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
