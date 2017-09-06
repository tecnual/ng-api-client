import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersListComponent } from './users-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'search'
    },
    children: [
      {
        path: 'users',
        component: UsersListComponent,
        data: {
          title: 'Users List'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
