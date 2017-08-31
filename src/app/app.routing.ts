import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateStoryComponent } from './_modules/stories/create-story/create-story.component';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { SettingsComponent } from './settings/index';
import { UserTimelineComponent } from './_modules/stories/user-timeline/user-timeline.component';
import { HomeComponent } from './home/index';
import { AuthGuard } from './_guards/index';
import { FullLayoutComponent } from './_modules/layouts/full-layout.component';
import { SimpleLayoutComponent } from './_modules/layouts/simple-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './_modules/dashboard/dashboard.module#DashboardModule'
      }
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
