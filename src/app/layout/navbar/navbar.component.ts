import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../_services/index';

import { User } from '../../_models/index';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  name: any;
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
    // get users from secure api end point
    // get users from secure api end point
    console.log('loggedIn: ' + JSON.stringify(this.loggedIn));
    console.log('whoAmI: ' + JSON.stringify(this.user));
  }
}
