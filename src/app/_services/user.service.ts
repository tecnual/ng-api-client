import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getSettings() {
        return this.http.get('http://192.168.1.150:3000/account/settings/', this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('http://192.168.1.150:3000/auth/register', user, this.jwt()).map((response: Response) => response.json());
    }

    saveSettings(user: User) {
        return this.http.put(
          'http://192.168.1.150:3000/account/settings',
          user,
          this.jwt()).map((response: Response) => response.json());
    }

    followUser(userId: string) {
      // console.log(`Follow: ${userId}`);

      return this.http.post(
        'http://192.168.1.150:3000/friendships/follow',
        { userId },
        this.jwt()).map((response: Response) => response.json()
      );
    }

    unFollowUser(userId: string) {
      // console.log(`unFollow: ${userId}`);

      return this.http.post(
        'http://192.168.1.150:3000/friendships/unfollow',
        { userId },
        this.jwt()).map((response: Response) => response.json()
      );
    }

    getFollowersList(userName: string) {
      return this.http.get(
        'http://192.168.1.150:3000/' + userName + '/followers',
        this.jwt()).map((response: Response) => response.json()
      );
    }

    getFriendsList(userName: string) {
      return this.http.get(
        'http://192.168.1.150:3000/' + userName + '/friends',
        this.jwt()).map((response: Response) => response.json()
      );
    }
    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            const headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
