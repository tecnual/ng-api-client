import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/catch';

import { AuthenticationService } from '../../_services/index';
import { AlertsService } from '../../_modules/alerts/_services';

@Component({
  moduleId: module.id,
  templateUrl: '../../layout/default/login.component.html'
})

export class LoginComponent implements OnInit {
  loading = false;
  model: any = {};
  error = '';
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertsService: AlertsService,
    private _http: Http
  ) { }

  ngOnInit() {
    // this.authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
      this.loading = true;
      this.authenticationService.login(this.model.email, this.model.password)
          .subscribe(result => {
              if (result === true) {
                  this.router.navigate(['/']);
              } else {
                  console.error('Incorrecto');
                  this.error = 'Username or password is incorrect';
                  this.loading = false;
              }
          },
        err => {
          const response = JSON.parse(err._body);
          // console.log('DATA: ', response.message);
          this.alertsService.error(response.message);
          this.error = response.message;
          this.loading = false;
        });
  }
}
