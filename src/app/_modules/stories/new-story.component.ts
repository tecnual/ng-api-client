import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { StoriesService } from './_services/';
import { AlertsService } from '../../_modules/alerts/_services';
import { AuthenticationService, UserService } from '../../_services/';
import { User } from '../../_models/';
import { Story } from './_models/';

@Component({
  selector: 'app-new-story',
  templateUrl: '../../layout/default/new-story.component.html',
})
export class NewStoryComponent implements OnInit {
    model: any = {};
    loading = false;
    title = 'Tecnual - New Story';
    user = new User;
    stories = new Array<Story>();
    refresh: number;

  constructor(
    private router: Router,
    private storiesService: StoriesService,
    private userService: UserService,
    private titleService: Title,
    private authenticationService: AuthenticationService,
    private alertsService: AlertsService,
    private route: ActivatedRoute
  ) {
    this.authenticationService.whoAmI()
      .subscribe(r => {
        this.user = r;
      });
    this.authenticationService.getStories()
      .subscribe(r => {
        this.stories = r;
    });

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.refresh = params.refresh || 0;
    });
  }
  newStory() {
    this.loading = true;

    this.model.user = this.user;

    this.storiesService.newStory(this.model)
      .subscribe(
      data => {
        // set success message and pass true paramater to persist the message.
        this.stories.unshift(data.story);
        this.alertsService.success(data.message, true);
        this.user.counter.beats++;
        this.model.story = '';
        this.model.more = '';
        this.loading = false;
      },
      error => {
        console.error(error);
        try {
          if (error.status !== 0) {
            const response = JSON.parse(error._body);
            this.alertsService.error(response.message);
          } else {
            this.alertsService.error('API RESTFull is not connected');
          }
        } catch (e) {
          this.alertsService.error('Unexpected error!');
        }
        this.loading = false;
      });
  }
}
