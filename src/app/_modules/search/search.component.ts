import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: '../../layout/default/search.component.html'
})
export class SearchComponent implements OnInit {

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      // Defaults to 0 if no query param provided.
      // console.log(params['search']);
      this.searchService.search(params['search'])
      .subscribe(
      data => {
        // set success message and pass true paramater to persist the message after redirecting to the login page
        // console.log(data);
            },
      error => {
        console.error(error);
        try {
          if (error.status !== 0) {
            const response = JSON.parse(error._body);
          } else {
            // this.alertsService.error('No hay conexión con el servicio API RESTFull');
          }
        } catch (e) {
          // this.alertsService.error('Unexpected error!');
        }
      });

    });

  }

}
