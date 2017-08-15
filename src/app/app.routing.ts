import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { HomeComponent } from './home/index';
import { AuthGuard } from './_guards/index';

const appRoutes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: { title: 'Tecnual - Home' }
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);
