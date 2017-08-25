import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subject, ReplaySubject, Observable } from 'rxjs/Rx';


import { AuthenticationService, UserService } from '../_services/index';
import { AlertsService } from '../_modules/alerts/_services';
import { User } from '../_models/index';

@Component({
  moduleId: module.id,
  templateUrl: 'settings.component.html'
})

export class SettingsComponent implements OnInit {
  loading = false;
  title = 'Tecnual - Settings';
  user: User;
  constructor(
    private newUser: User,
    private router: Router,
    private userService: UserService,
    private titleService: Title,
    private authenticationService: AuthenticationService,
    private alertsService: AlertsService) {
      this.authenticationService.whoAmI()
        .subscribe(r => {
          this.user = r;
        });
    }

  ngOnInit() {
    // reset login status
    this.titleService.setTitle(this.title);
  }
  saveSettings() {
    this.loading = true;
    this.userService.saveSettings(this.user)
      .subscribe(
      data => {
        // set success message and pass true paramater to persist the message after redirecting to the login page
        console.log(data);
        this.alertsService.success('Successful changes', true);
        this.loading = false;
      },
      error => {
        console.log(error);
        try {
          if (error.status !== 0) {
            const response = JSON.parse(error._body);
            this.alertsService.error(response.message);
          } else {
            this.alertsService.error('No hay conexión con el servicio API RESTFull');
          }
        } catch (e) {
          this.alertsService.error('Unexpected error!');
        }
        this.loading = false;
      });
  }
}
