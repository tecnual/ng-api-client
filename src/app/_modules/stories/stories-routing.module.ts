import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserTimelineComponent } from './user-timeline.component';

const routes: Routes = [
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
