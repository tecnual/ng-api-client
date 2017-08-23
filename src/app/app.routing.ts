import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { SettingsComponent } from './settings/index';
import { HomeComponent } from './home/index';
import { AuthGuard } from './_guards/index';

const appRoutes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'settings', component: SettingsComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);
