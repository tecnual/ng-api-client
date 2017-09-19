import { NgModule } from '@angular/core';

import { SearchRoutingModule } from './search-routing.module';
import { UsersListComponent } from './users-list.component';
import { SearchService } from './search.service';
import { SearchComponent } from './search.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SearchRoutingModule,
    SharedModule
  ],
  declarations: [
    UsersListComponent,
    SearchComponent
  ],
  providers: [SearchService]
})

export class SearchModule { }
