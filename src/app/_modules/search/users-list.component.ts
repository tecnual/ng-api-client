import { Component, OnInit } from '@angular/core';

import { AuthenticationService, UserService } from '../../_services/index';
import { SearchService } from './search.service';
import { AlertsService } from '../../_modules/alerts/_services';
import { User } from '../../_models/index';

@Component({
  selector: 'app-users-list',
  templateUrl: '../../layout/default/users-list.component.html'
})
export class UsersListComponent implements OnInit {
  users = new Array<User>();
  userLogged = new User;
  isFollow: boolean;

  constructor(
    private searchService: SearchService,
    private alertsService: AlertsService,
    private authenticationService: AuthenticationService,
    private userService: UserService
   ) {
     this.authenticationService.whoAmI()
       .subscribe(r => {
         this.userLogged = r;
         // console.log(this.userLogged);
      });
      }

  ngOnInit() {
    this.searchService.getUsersList()
    .subscribe(
    data => {
      // set success message and pass true paramater to persist the message after redirecting to the login page
      // console.log(data);
      this.users = data.users;
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
            this.alertsService.error(response.message);
          } else {
            this.alertsService.error('No hay conexión con el servicio API RESTFull');
          }
        } catch (e) {
          this.alertsService.error('Unexpected error!');
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
