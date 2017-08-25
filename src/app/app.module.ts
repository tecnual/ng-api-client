import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AuthenticationService, UserService } from './_services/index';
import { Routing } from './app.routing';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { SettingsComponent } from './settings/index';
import { AuthGuard } from './_guards/index';
import { User } from './_models/index';
import { AlertsModule } from './_modules/alerts/alerts.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    AlertsModule,
    LayoutModule,
    HomeModule,
    BrowserModule,
    Routing
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
