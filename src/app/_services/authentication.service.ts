import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { ReplaySubject, Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import { User } from '../_models/index';

@Injectable()
export class AuthenticationService {
    private logged = new ReplaySubject<boolean>(1); // Resend 1 old value to new subscribers

    constructor(private http: Http) {}
    isLoggedIn(): ReplaySubject<boolean> {
      return this.logged;
    }

    login(username: string, password: string) {
        this.logged.next(true);
        return this.http.put('http://192.168.1.150:3000/auth/login', { email: username, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                const user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    return true;
                }

                return false;
            });
    }

    logout() {
        this.logged.next(false);
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
