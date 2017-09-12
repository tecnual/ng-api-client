import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BehaviorSubject, ReplaySubject, Observable } from 'rxjs/Rx';

import { StoriesService } from './_services/stories.service';
import { Story } from './_models/';
import { User } from '../../_models/';
import { AuthenticationService } from '../../_services/index';

@Component({
  selector: 'app-home-timeline',
  templateUrl: '../../layout/default/user-timeline.component.html'
})
export class HomeTimelineComponent implements OnInit {

  user = new User;
  name: string;
  stories = new Array<Story>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storiesService: StoriesService,
    private authenticationService: AuthenticationService,
  ) {
    this.authenticationService.whoAmI()
      .subscribe(r => {
        this.user = r;
      });
      this.storiesService.getHomeTimeline()
      .subscribe(data => {
        this.stories = data.stories;
  //            console.log('data');
  //            console.log(this.stories);
        // this.user = data.user;
      },
      error => {
        console.log('error');
        console.error(error);
      });
  }
  ngOnInit() {


  }


}
