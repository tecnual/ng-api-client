import { NgModule } from '@angular/core';

import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
  imports: [
    NavbarModule,
    FooterModule
  ],
  exports: [
    NavbarModule,
    FooterModule
  ],
})

export class LayoutModule { }
