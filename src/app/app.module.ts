import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { SharedModule } from './_modules/shared/shared.module';
import { AuthenticationService, UserService } from './_services/index';
import { AppComponent } from './app.component';
import { AuthGuard } from './_guards/index';
import { User } from './_models/index';
import { AlertsModule } from './_modules/alerts/alerts.module';
import { StoriesModule } from './_modules/stories/stories.module';
import { SearchModule } from './_modules/search/search.module';
import { UserModule } from './_modules/user/user.module';
import { FooterModule } from './_modules/footer/footer.module';
import { NavbarComponent } from './_modules/navbar/navbar.component';
import { SidebarComponent } from './_modules/sidebar/sidebar.component';
import { FullLayoutComponent } from './_modules/layouts/full-layout.component';
import { SimpleLayoutComponent } from './_modules/layouts/simple-layout.component';
import { BreadcrumbsComponent } from './_modules/shared/breadcrumb.component';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { SearchBoxComponent } from './_modules/search/search-box.component';

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
    NavbarComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    AlertsModule,
    StoriesModule,
    FooterModule,
    SearchModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot()
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
