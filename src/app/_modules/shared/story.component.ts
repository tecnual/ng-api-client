// TODO: Poner la imagen del usuario en la historia.

import { Component, OnInit, Input } from '@angular/core';

import { Story } from '../stories/_models/';
import { StoriesService } from '../stories/_services/';
import { AlertsService } from '../../_modules/alerts/_services';
import { AuthenticationService, UserService } from '../../_services/';
import { User } from '../../_models/';

@Component({
  selector: 'app-story',
  templateUrl: '../../layout/default/story.component.html',
})

export class StoryComponent implements OnInit {
  @Input() story = new Story;
  @Input() index: number;

  user: any = new User();
  stories = Array<Story>();

  constructor(
    private storiesService: StoriesService,
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private alertsService: AlertsService
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
    // console.log(this.story);
  }
  destroyStory() {
    this.storiesService.destroyStory(this.story._id)
      .subscribe(
      data => {
        // set success message and pass true paramater to persist the message after redirecting to the login page
        // console.log(data);
        // const response = JSON.parse(data._body);
        this.alertsService.success(data.message, true);
        this.user.counter.beats--;
        this.stories.splice(this.index, 1);
      },
      error => {
        console.error(error);
        try {
          if (error.status !== 0) {
            const response = JSON.parse(error._body);
            this.alertsService.error(response.message);
          } else {
            this.alertsService.error('No hay conexión con el servicio API RESTFull');
          }
        } catch (e) {
          this.alertsService.error('Unexpected error!');
        }
      });

  }
}
