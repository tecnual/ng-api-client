import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';  // debug
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthenticationService {
    public token: string;
    constructor(private http: Http) {
        // set token if saved in local storage
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(email: string, password: string): Observable<boolean> {
        return this.http.put('http://192.168.1.150:3000/auth/login', { email: email, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                console.log ('status: ' + response.status);
                const token = response.json() && response.json().token;
                console.log('Token: ' + token);

                if (token) {
                    // set token property
                    this.token = token;
                    // store email and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ email: email, token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    console.log(response.json());
                    return false;
                }
            }
          );
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }

}
