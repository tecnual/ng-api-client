import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'angular2-moment';
import { FormsModule } from '@angular/forms';

import { StoryComponent } from './story.component';

import { UploadService } from './upload.service';

@NgModule({
  imports: [
    MomentModule,
  ],
  exports: [
    StoryComponent,
    CommonModule,
    FormsModule,
  ],
  providers: [
    UploadService
  ],
  declarations: [
    StoryComponent
  ]
})
export class SharedModule { }
