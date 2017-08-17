import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { AlertService, UserService } from '../_services/index';

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
        private alertService: AlertService) { }

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
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    const response = JSON.parse(error._body);
                    console.log(error);
                    this.alertService.error(response.message);
                    this.loading = false;
                });
    }
}
