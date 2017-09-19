import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GlobalConfig, ToastrService } from 'ngx-toastr';

import { SearchService } from './search.service';
import { User } from '../../_models/user.model';
import { Story } from '../../_modules/stories/_models/story.model';
import { AuthenticationService, UserService } from '../../_services/';

@Component({
  selector: 'app-search',
  templateUrl: '../../layout/default/search.component.html'
})
export class SearchComponent implements OnInit {
  users = new Array<User>();
  stories = new Array<Story>();
  userLogged = new User;
  isFollow: boolean;

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
    private userService: UserService,
    private authenticationService: AuthenticationService,
    public toastr: ToastrService
  ) {
    this.authenticationService.whoAmI()
      .subscribe(r => {
        this.userLogged = r;
        // console.log(this.userLogged);
     });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      // Defaults to 0 if no query param provided.
      // console.log(params['search']);
      this.searchService.search(params['search'])
      .subscribe(
      data => {
        // set success message.
        this.users = data.users;
        this.stories = data.stories;
        // console.log(this.users.length);
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
  follow(userId) {
    this.userService.followUser(userId)
      .subscribe(
      data => {
        // set success message and pass true paramater to persist the message after redirecting to the login page
        // console.log(data);
        this.userLogged.friends = data.user.friends;
        this.userLogged.counter.friends++;
      },
      error => {
        console.error(error);
        try {
          if (error.status !== 0) {
            const response = JSON.parse(error._body);
            this.toastr.error(response.message, 'Error!', {
              closeButton: true,
              timeOut: 5000
            });
          } else {
            this.toastr.error('No hay conexión con el servicio API RESTFull', 'Error!', {
              closeButton: true,
              timeOut: 5000
            });
          }
        } catch (e) {
          this.toastr.error('Unexpected error!', 'Error!', {
            closeButton: true,
            timeOut: 5000
          });
        }
      });
  }
  unFollow(userId) {
    this.userService.unFollowUser(userId)
      .subscribe(
      data => {
        // set success message and pass true paramater to persist the message
        // console.log(data);
        this.userLogged.friends = data.user.friends;
        this.userLogged.counter.friends--;
      },
      error => {
        console.error(error);
        try {
          if (error.status !== 0) {
            const response = JSON.parse(error._body);
            this.toastr.error(response.message, 'Error!', {
              closeButton: true,
              timeOut: 5000
            });
          } else {
            this.toastr.error('No hay conexión con el servicio API RESTFull', 'Error!', {
              closeButton: true,
              timeOut: 5000
            });
          }
        } catch (e) {
          this.toastr.error('Unexpected error!', 'Error!', {
            closeButton: true,
            timeOut: 5000
          });
        }
      });
  }
}
