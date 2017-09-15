import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpRequest,
  HttpProgressEvent,
  HttpEvent
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// import { Ticket } from './ticket';

@Injectable()
export class UploadService {
  private uploadUrl = 'http://192.168.1.150:3000/upload';

  constructor(private http: HttpClient) {}

  public uploadFiles(filesList: Array<any>): Observable<HttpEvent<any>> {
    if (!filesList || filesList.length === 0) {
      return Observable.throw('Please select a file.');
    }

    const formData: FormData = new FormData();

    filesList.forEach(fileItem => {
      formData.append(fileItem.name, fileItem);
    });

    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http
      .post(this.uploadUrl, formData, {
        headers: this.jwt(),
        reportProgress: true,
        observe: 'events'
      })
      .map(response => response || {})
      .catch((error: HttpErrorResponse) => {
        console.error('observable error: ', error);
        return Observable.throw(error);
      });
  }

  private jwt() {
      // create authorization header with jwt token
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser && currentUser.token) {
          const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + currentUser.token });
          return headers;
      }
  }
}
