import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: '../../layout/default/pages/status-http.component.html'
})
export class StatusHttpComponent implements OnInit, OnDestroy {
  private sub: any;
  status: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      // this.param = + params['status']; // (+) converts string 'id' to a number
      switch (params['status']) {
        case '404':
          this.status = {
            code: params['status'],
            title: 'Oops! You\'re lost.',
            description: 'The page you are looking for was not found.'
          };
          break;
        case '503':
          this.status = {
            code: params['status'],
            title: 'Houston, we have a problem!',
            description: 'The service is temporarily unavailable.'
          };
          break;
        default:
          this.status = {
            code: params['status'],
            title: 'Houston, we have a problem!',
            description: 'Error inesperado'
          };
      }
      // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
