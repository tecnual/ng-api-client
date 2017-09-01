import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { UserService } from '../../_services/index';
import { AlertsService } from '../../_modules/alerts/_services';

@Component({
  moduleId: module.id,
  templateUrl: '../../layout/default/register.component.html'
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
    if (this.model.password !== this.model.repassword) {
      this.alertsService.error('Las contraseñas no coinciden', true);
      return false;
    }
    // this.alertsService.success('ok', true);
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
      data => {
        // set success message and pass true paramater to persist the message after redirecting to the login page
        this.alertsService.success('Registration successful', true);
        this.loading = false;
        this.router.navigate(['/user/login']);
      },
      error => {
        // console.log(error.status);
          console.error(error);
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
