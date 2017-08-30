import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { StoriesService } from '../_services/stories.service';
import { Story } from '../_models/';
import { User } from '../../../_models/';

@Component({
  selector: 'app-profile',
  templateUrl: './user-timeline.component.html',
  styleUrls: ['./user-timeline.component.scss']
})
export class UserTimelineComponent implements OnInit {
  name: string;
  stories: Story[];
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storiesService: StoriesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // console.log(params['displayName']);
      this.storiesService.getUserStories(params['displayName'])
      .subscribe(data => {
        // console.log('data');
        // console.log(data.stories);
        this.stories = data.stories;
        this.user = data.user;
      },
      error => {
        // console.log('error');
        console.error(error);
      });


    });
  }
}
