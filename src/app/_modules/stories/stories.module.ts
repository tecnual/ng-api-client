import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';

import { NewStoryComponent } from './new-story.component';
import { UserTimelineComponent } from './user-timeline.component';
import { StoryComponent } from './story.component';

import { StoriesService } from './_services/stories.service';
import { StoriesRoutingModule } from './stories-routing.module';
import { HomeTimelineComponent } from './home-timeline.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MomentModule,
    StoriesRoutingModule
  ],
  declarations: [
    NewStoryComponent,
    UserTimelineComponent,
    StoryComponent,
    HomeTimelineComponent
  ],
  providers: [
    StoriesService
  ]
})
export class StoriesModule { }
