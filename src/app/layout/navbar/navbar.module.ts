import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './index';
import { AuthenticationService } from '../../_services/index';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  providers: [
    AuthenticationService
  ]
})

export class NavbarModule { }
