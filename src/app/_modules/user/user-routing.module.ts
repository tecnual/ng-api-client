import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { P404Component } from './404.component';
// import { P500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { SettingsComponent } from './settings.component';
import { FollowersComponent } from './followers.component';
import { FriendsComponent } from './friends.component';

const routes: Routes = [
  {
    path: 'followers',
    component: FollowersComponent,
    data: {
      title: 'Followers'
    }
  },
  {
    path: 'friends',
    component: FriendsComponent,
    data: {
      title: 'Friends'
    }
  },
  {
    path: '',
    data: {
      title: 'users'
    },
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Login Page'
        }
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          title: 'Register Page'
        }
      },
      {
        path: 'settings',
        component: SettingsComponent,
        data: {
          title: 'Settings Page'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
