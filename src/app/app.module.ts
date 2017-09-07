import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app.routing';
import { AuthenticationService, UserService } from './_services/index';
import { AppComponent } from './app.component';
import { AuthGuard } from './_guards/index';
import { User } from './_models/index';
import { AlertsModule } from './_modules/alerts/alerts.module';
import { StoriesModule } from './_modules/stories/stories.module';
import { UserModule } from './_modules/user/user.module';
import { FooterModule } from './_modules/footer/footer.module';
import { NavbarComponent } from './_modules/navbar/navbar.component';
import { SidebarComponent } from './_modules/sidebar/sidebar.component';
import { FullLayoutComponent } from './_modules/layouts/full-layout.component';
import { SimpleLayoutComponent } from './_modules/layouts/simple-layout.component';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    BreadcrumbsComponent,
    NAV_DROPDOWN_DIRECTIVES,
    AsideToggleDirective,
    SIDEBAR_TOGGLE_DIRECTIVES,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AlertsModule,
    StoriesModule,
    FooterModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    User
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
