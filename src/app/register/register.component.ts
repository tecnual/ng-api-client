import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { UserService } from '../_services/index';
import { AlertsService } from '../_modules/alerts/_services';

@Component({
  moduleId: module.id,
  templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;
  title = 'Tecnual - Register';

  constructor(
    private router: Router,
    private userService: UserService,
    private titleService: Title,
    private alertsService: AlertsService
  ) { }

  ngOnInit() {
    // reset login status
    this.titleService.setTitle(this.title);
  }

  register() {
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
      data => {
        // set success message and pass true paramater to persist the message after redirecting to the login page
        this.alertsService.success('Registration successful', true);
        this.router.navigate(['/login']);
      },
      error => {
        // console.log(error.status);
        switch (error.status) {
          case 403: {
            const response = JSON.parse(error._body);
            this.alertsService.error('No estás conectado');
            break;
          }
          case 422: {
            this.alertsService.error('No hay conexión con el servicio API RESTFull');
            break;
          }
          case 0: {
            this.alertsService.error('No hay conexión con el servicio API RESTFull');
            break;
          }
          default: {
            this.alertsService.error('Error inesperado');
            break;
          }
        }

        this.loading = false;
      });
  }
}
