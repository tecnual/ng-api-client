import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NewStoryComponent } from './new-story.component';
import { UserTimelineComponent } from './user-timeline.component';
import { StoryComponent } from './story/story.component';

import { StoriesService } from './_services/stories.service';
import { StoriesRoutingModule } from './stories-routing.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    StoriesRoutingModule
  ],
  declarations: [
    NewStoryComponent,
    UserTimelineComponent,
    StoryComponent
  ],
  providers: [
    StoriesService
  ]
})
export class StoriesModule { }
