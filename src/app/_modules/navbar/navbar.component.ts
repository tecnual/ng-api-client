import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../_services/index';
import { User } from '../../_models/index';

@Component({
  selector: 'app-navbar',
  templateUrl: '../../layout/default/navbar.component.html',
})

export class NavbarComponent implements OnInit {
  user = new User;
  loggedIn: boolean;
  constructor(
    private authenticationService: AuthenticationService,
  ) {
    this.authenticationService.isLoggedIn()
      .subscribe(r => {
        this.loggedIn = r;
      });
    this.authenticationService.whoAmI()
      .subscribe(r => {
        this.user = r;
      });
  }
  ngOnInit() {
    // console.log('loggedIn: ' + JSON.stringify(this.loggedIn));
    // console.log('whoAmI: ' + JSON.stringify(this.user));
  }
}
