import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StoriesRoutingModule } from './stories-routing.module';
import { CreateStoryComponent } from './create-story/create-story.component';
import { UserTimelineComponent } from './user-timeline/user-timeline.component';
import { StoriesService } from './_services/stories.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    StoriesRoutingModule
  ],
  declarations: [
    CreateStoryComponent,
    UserTimelineComponent
  ],
  providers: [
    StoriesService
  ]
})
export class StoriesModule { }
