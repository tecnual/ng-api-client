import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './index';
import { AlertComponent } from '../../_directives/index';
import { AlertService, AuthenticationService } from '../../_services/index';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [
    AlertComponent,
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  providers: [
    AlertService,
    AuthenticationService
  ]
})

export class NavbarModule { }
