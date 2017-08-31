import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './index';
import { AuthenticationService } from '../../_services/index';

import { SIDEBAR_TOGGLE_DIRECTIVES } from '../../shared/sidebar.directive';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [
    NavbarComponent,
    SIDEBAR_TOGGLE_DIRECTIVES
  ],
  exports: [
    NavbarComponent
  ],
  providers: [
    AuthenticationService
  ]
})

export class NavbarModule { }
