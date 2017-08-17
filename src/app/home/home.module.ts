import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [
    AlertService,
    AuthenticationService
  ]
})

export class HomeModule { }
