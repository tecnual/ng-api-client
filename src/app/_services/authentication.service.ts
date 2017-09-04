import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { BehaviorSubject, ReplaySubject, Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import { User } from '../_models/index';
import { Story } from '../_modules/stories/_models/story.model';
import { StoriesService } from '../_modules/stories/_services/stories.service';

@Injectable()
export class AuthenticationService {
    private logged = new ReplaySubject<boolean>(1); // Resend 1 old value to new subscribers
    private connected = new ReplaySubject<boolean>(1); // Resend 1 old value to new subscribers
    private user = new ReplaySubject<User>(null);
    private stories = new ReplaySubject<Story[]>(null);

    constructor(
      private http: Http,
      private storiesService: StoriesService
    ) {

      this.getSettings()
        .subscribe(result => {
          if (result) {
            // console.log('result' + JSON.stringify(result));
            this.logged.next(true);
            this.connected.next(true);
            this.user.next(result.user);
            this.storiesService.getUserStories(result.user.userName)
            .subscribe(data => {
              this.stories.next(data.stories);
//            console.log('data');
//            console.log(this.stories);
              // this.user = data.user;
            },
            error => {
              // console.log('error');
              console.error(error);
            });
          } else {
            // console.log(result);
            console.error('Incorrecto: ');
          }
        },
        err => {
          // console.log(err.status);
          if (err.status !== 0) {
            const response = JSON.parse(err._body);
            this.connected.next(true);
            // console.log(response);
            // this.alertService.error(response.message);
          } else {
            this.connected.next(false);
            // console.log('No hay conexión con el servicio API RESTFull');
          }
        });
    }
    isLoggedIn(): ReplaySubject<boolean> {
      return this.logged;
    }
    whoAmI(): ReplaySubject<User> {
      return this.user;
    }
    getStories(): ReplaySubject<Story[]> {
      return this.stories;
    }
    isConnected(): ReplaySubject<boolean> {
      return this.connected;
    }

    login(username: string, password: string) {
        return this.http.put('http://192.168.1.150:3000/auth/login', { email: username, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                const user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.user.next(user.user);
                    this.logged.next(true);
                    return true;
                }

                return false;
            });
    }

    logout() {
        this.logged.next(false);
        this.user.next(null);
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
    getSettings() {
      return this.http.get('http://192.168.1.150:3000/account/settings/', this.jwt()).map((response: Response) => response.json());
    }
    private jwt() {
        // create authorization header with jwt token
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            const headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
