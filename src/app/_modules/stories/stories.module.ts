import { NgModule } from '@angular/core';

import { NewStoryComponent } from './new-story.component';
import { UserTimelineComponent } from './user-timeline.component';

import { StoriesService } from './_services/stories.service';
import { StoriesRoutingModule } from './stories-routing.module';
import { HomeTimelineComponent } from './home-timeline.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    StoriesRoutingModule,
    SharedModule
  ],
  declarations: [
    NewStoryComponent,
    UserTimelineComponent,
    HomeTimelineComponent
  ],
  providers: [
    StoriesService
  ]
})
export class StoriesModule { }
