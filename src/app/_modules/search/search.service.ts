import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()

export class SearchService {

  constructor(private http: Http) { }

  getUsersList() {
    return this.http.get('http://192.168.1.150:3000/search/users/', this.jwt()).map((response: Response) => response.json());
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
