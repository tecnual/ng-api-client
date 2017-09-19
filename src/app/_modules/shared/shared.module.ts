import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'angular2-moment';
import { FormsModule } from '@angular/forms';

import { NgxGalleryModule } from 'ngx-gallery';

import { StoryComponent } from './story.component';
import { GalleryComponent } from './gallery.component';
import { UploadService } from './upload.service';

@NgModule({
  imports: [
    MomentModule,
    CommonModule,
    NgxGalleryModule
  ],
  exports: [
    StoryComponent,
    GalleryComponent,
    CommonModule,
    FormsModule
  ],
  providers: [
    UploadService
  ],
  declarations: [
    StoryComponent,
    GalleryComponent
  ]
})
export class SharedModule { }
