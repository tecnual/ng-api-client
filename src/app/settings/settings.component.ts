import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { AlertService, AuthenticationService, UserService } from '../_services/index';
import { User } from '../_models/index';

@Component({
  moduleId: module.id,
  templateUrl: 'settings.component.html'
})

export class SettingsComponent implements OnInit {
  loading = false;
  title = 'Tecnual - Settings';
  user = new User;

  constructor(
    private router: Router,
    private userService: UserService,
    private titleService: Title,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { }

  ngOnInit() {
    // reset login status
    this.titleService.setTitle(this.title);
    this.authenticationService.getSettings()
      .subscribe(result => {
        this.user = result.user;
        if (result) {
          console.log(result);
        } else {
          console.log(result);
          console.log('Incorrecto: ');
        }
      },
      err => {
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

  changeSettings() {
    this.loading = true;
    this.userService.create(this.user)
      .subscribe(
      data => {
        // set success message and pass true paramater to persist the message after redirecting to the login page
        this.alertService.success('Successful changes', true);
        this.router.navigate(['/login']);
      },
      error => {
        console.log(error.status);
        if (error.status !== 0) {
          const response = JSON.parse(error._body);
          this.alertService.error(response.message);
        } else {
          this.alertService.error('No hay conexión con el servicio API RESTFull');
        }
        this.loading = false;
      });
  }
}
