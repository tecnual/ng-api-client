import { Component, OnInit } from '@angular/core';

import { AlertService, AuthenticationService } from '../../_services/index';
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
    private alertService: AlertService
  ) {
    this.authenticationService.isLoggedIn()
      .subscribe(r => {
        this.loggedIn = r;
      });
  }

  ngOnInit() {
    // get users from secure api end point
    // get users from secure api end point
    this.authenticationService.getSettings()
      .subscribe(result => {
        this.user = result.user;
        if (result) {
          console.log(result);
          this.loggedIn = true;
        } else {
          console.log(result);
          console.log('Incorrecto: ');
        }
      },
      err => {
        this.loggedIn = false;
        console.log(err.status);
        // const response = JSON.parse(err._body);
        if (err.status !== 0) {
          const response = JSON.parse(err._body);
          this.alertService.error(response.message);
        } else {
          this.alertService.error('No hay conexión con el servicio API RESTFull');
        }
      });
  }
}
