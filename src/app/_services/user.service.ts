import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/auth/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    getSettings() {
        return this.http.get('http://192.168.1.150:3000/account/settings/', this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('http://192.168.1.150:3000/auth/register', user, this.jwt()).map((response: Response) => response.json());
    }

    changeSettings(user: User) {
        return this.http.put(
          'http://192.168.1.150:3000/account/settings',
          user,
          this.jwt()).map((response: Response) => response.json());
    }
    update(user: User) {
        return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
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
