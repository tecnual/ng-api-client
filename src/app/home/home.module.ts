import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthenticationService } from '../_services/index';
import { AlertsService } from '../_modules/alerts/_services';

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [
    AlertsService,
    AuthenticationService
  ]
})

export class HomeModule { }
