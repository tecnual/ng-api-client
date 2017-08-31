import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing';
import { AuthenticationService, UserService } from './_services/index';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { SettingsComponent } from './settings/index';
import { AuthGuard } from './_guards/index';
import { User } from './_models/index';
import { AlertsModule } from './_modules/alerts/alerts.module';
import { StoriesModule } from './_modules/stories/stories.module';
import { FooterModule } from './_modules/footer/footer.module';
import { NavbarModule } from './_modules/navbar/navbar.module';
import { FullLayoutComponent } from './_modules/layouts/full-layout.component';
import { SimpleLayoutComponent } from './_modules/layouts/simple-layout.component';


import { BreadcrumbsComponent } from './shared/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    HttpModule,
    FormsModule,
    AppRoutingModule,
    AlertsModule,
    StoriesModule,
    HomeModule,
    BrowserModule,
    FooterModule,
    NavbarModule
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
