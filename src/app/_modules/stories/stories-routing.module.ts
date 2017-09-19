import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserTimelineComponent } from './user-timeline.component';
import { HomeTimelineComponent } from './home-timeline.component';

const routes: Routes = [
  {
    path: '',
    component: HomeTimelineComponent,
    data: {
      title: 'Timeline'
    }
  },
  {
    path: 'user-timeline',
    component: UserTimelineComponent,
    data: {
      title: 'User Beats'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoriesRoutingModule { }
