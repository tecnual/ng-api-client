import { RouterModule } from '@angular/router';

 import { LoginComponent } from './login/index';
 import { HomeComponent } from './home/index';
import { AuthGuard } from './auth/index';

// import { AuthGuard } from './_guards/index';

const appRoutes = [
    { path: 'login', component: LoginComponent },
    //    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '',
     component: HomeComponent,
     canActivate: [AuthGuard],
     data: { title: 'Tecnual - Home' }
   },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);
