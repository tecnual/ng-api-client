import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchRoutingModule } from './search-routing.module';
import { UsersListComponent } from './users-list.component';
import { SearchService } from './search.service';
import { SearchComponent } from './search.component';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule
  ],
  declarations: [UsersListComponent, SearchComponent],
  providers: [SearchService]
})

export class SearchModule { }
