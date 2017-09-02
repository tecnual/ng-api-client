import { NgModule } from '@angular/core';

import { P404Component } from './404.component';
import { P500Component } from './500.component';
import { StatusHttpComponent } from './status-http.component';

import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [ PagesRoutingModule ],
  declarations: [
    P404Component,
    P500Component,
    StatusHttpComponent
  ]
})
export class PagesModule { }
