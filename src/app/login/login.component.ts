import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';

import { AuthenticationService } from '../_services/index';
import { AlertsService } from '../_modules/alerts/_services';

import 'rxjs/add/operator/catch';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';
    title = 'Tecnual - Login';
    returnUrl: string;

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private titleService: Title,
      private _http: Http,
      private authenticationService: AuthenticationService,
      private alertsService: AlertsService
    ) { }

    ngOnInit() {
        // reset login status
      this.authenticationService.logout();
      this.titleService.setTitle(this.title);
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/']);
                } else {
                    console.log('Incorrecto');
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            },
          err => {
            const response = JSON.parse(err._body);
            console.log('DATA: ', response.message);
            this.alertsService.error(response.message);
            this.error = response.message;
            this.loading = false;
          });
    }
}
