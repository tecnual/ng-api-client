import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { AlertService, AuthenticationService } from '../_services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
  title = 'Tecnual - Home';
  returnUrl: string;

  constructor(
    private router: Router,
    private titleService: Title,
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.alertService.error('hola', true);
    this.titleService.setTitle(this.title);
    // get users from secure api end point
  }
}
