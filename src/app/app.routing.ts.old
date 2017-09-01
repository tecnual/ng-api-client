import { RouterModule } from '@angular/router';

import { CreateStoryComponent } from './_modules/stories/create-story/create-story.component';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { SettingsComponent } from './settings/index';
import { UserTimelineComponent } from './_modules/stories/user-timeline/user-timeline.component';
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
  { path: 'create-story', component: CreateStoryComponent },
  { path: ':displayName', component: UserTimelineComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);
