import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthenticationService, UserService } from '../../_services/index';
import { User } from '../../_models/index';
import { AlertsService } from '../../_modules/alerts/_services';

@Component({
  selector: 'app-friends',
  templateUrl: '../../layout/default/friends.component.html',
})
export class FriendsComponent implements OnInit {
  friends = new Array<User>();
  userLogged = new User;
  private sub: any;

  constructor(
    private userService: UserService,
    private alertsService: AlertsService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute
  ) {
    this.authenticationService.whoAmI()
      .subscribe(r => {
        this.userLogged = r;
        // console.log(this.userLogged);
     });
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       // console.log(params); // (+) converts string 'id' to a number
       this.userService.getFriendsList(params.user)
       .subscribe(
       data => {
         // set success message and pass true paramater to persist the message after redirecting to the login page
         // console.log(data.user);
         this.friends = data.user.friends;
       },
       error => {
         console.error(error);
         try {
           if (error.status !== 0) {
             const response = JSON.parse(error._body);
           } else {
             this.alertsService.error('No hay conexión con el servicio API RESTFull');
           }
         } catch (e) {
           this.alertsService.error('Unexpected error!');
         }
       });
    });
  }

  follow(userId) {
    this.userService.followUser(userId)
      .subscribe(
      data => {
        // set success message and pass true paramater to persist the message
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
