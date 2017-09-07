import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewStoryComponent } from './_modules/stories/new-story.component';
import { RegisterComponent } from './_modules/user/register.component';
import { SettingsComponent } from './_modules/user/settings.component';
import { UserTimelineComponent } from './_modules/stories/user-timeline.component';
import { AuthGuard } from './_guards/index';
import { FullLayoutComponent } from './_modules/layouts/full-layout.component';
import { SimpleLayoutComponent } from './_modules/layouts/simple-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FullLayoutComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'home',
        loadChildren: './_modules/stories/stories.module#StoriesModule'
      }
    ]
  },
  {
    path: 'user',
    component: SimpleLayoutComponent,
    data: {
      title: 'User'
    },
    children: [
      {
        path: '',
        loadChildren: './_modules/user/user.module#UserModule',
      }
    ]
  },
  {
    path: ':user',
    component: FullLayoutComponent,
    data: {
      title: 'User'
    },
    children: [
      {
        path: '',
        loadChildren: './_modules/user/user.module#UserModule',
      }
    ]
  },
  {
    path: 'account',
    component: FullLayoutComponent,
    data: {
      title: 'account'
    },
    children: [
      {
        path: '',
        loadChildren: './_modules/user/user.module#UserModule',
      }
    ]
  },
  {
    path: 'beats',
    component: FullLayoutComponent,
    data: {
      title: 'Beats'
    },
    children: [
      {
        path: '',
        loadChildren: './_modules/stories/stories.module#StoriesModule',
      }
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        loadChildren: './_modules/pages/pages.module#PagesModule',
      }
    ]
  },
  {
    path: 'search',
    component: FullLayoutComponent,
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        loadChildren: './_modules/search/search.module#SearchModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
