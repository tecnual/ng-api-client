import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { StoriesService } from '../_services/';
import { AlertsService } from '../../../_modules/alerts/_services';

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.scss']
})
export class CreateStoryComponent implements OnInit {
    model: any = {};
    loading = false;

  constructor(
    private router: Router,
    private storiesService: StoriesService,
    private titleService: Title,
    private alertsService: AlertsService
  ) { }

  ngOnInit() {
  }
  publishStory() {
    this.loading = true;
    this.storiesService.newStory(this.model)
      .subscribe(
      data => {
        // set success message and pass true paramater to persist the message after redirecting to the login page
        console.log(data);

        this.alertsService.success(data.message, true);
        // this.router.navigate(['/']);
        this.loading = false;
      },
      error => {
        console.log(error.status);
        switch (error.status) {
          case 403: {
            const response = JSON.parse(error._body);
            this.alertsService.error('No estás conectado');
            break;
          }
          case 422: {
            this.alertsService.error('No hay conexión con el servicio API RESTFull');
            break;
          }
          case 0: {
            this.alertsService.error('No hay conexión con el servicio API RESTFull');
            break;
          }
          default: {
            this.alertsService.error('Error inesperado');
            break;
          }
        }
        this.loading = false;
      });
  }
}
