import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'angular2-moment';
import { FormsModule } from '@angular/forms';

import { StoryComponent } from './story.component';

@NgModule({
  imports: [
    MomentModule
  ],
  exports: [
    StoryComponent,
    CommonModule,
    FormsModule
  ],
  declarations: [
    StoryComponent
  ]
})
export class SharedModule { }
