import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { SettingsComponent } from './settings.component';
import { UserRoutingModule } from './user-routing.module';
import { FollowersComponent } from './followers.component';
import { FriendsComponent } from './friends.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    FollowersComponent,
    FriendsComponent
  ]
})
export class UserModule { }
