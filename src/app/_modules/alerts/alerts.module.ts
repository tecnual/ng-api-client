import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AlertsComponent } from './alerts.component';
import { AlertsService } from './_services';
import { AlertModel, AlertTypeModel } from './_models';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AlertsComponent
  ],
  exports: [
    AlertsComponent
  ],
  providers: [
    AlertsService
  ]
})

export class AlertsModule { }
