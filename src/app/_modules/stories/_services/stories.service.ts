import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Story } from '../_models/index';

@Injectable()
export class StoriesService {
    constructor(private http: Http) { }

    newStory(story: Story) {
        return this.http.post('http://192.168.1.150:3000/stories/new', story, this.jwt()).map((response: Response) => response.json());
    }
    getUserStories(userName: string) {
      return this.http.get(
        'http://192.168.1.150:3000/stories/user_timeline/' + userName,
        this.jwt())
        .map((
          response: Response
        ) => response.json());
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
