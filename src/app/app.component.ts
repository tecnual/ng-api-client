import { Component } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-client';

  data: any = null;

  constructor(private _http: Http) {
  this.getApiData();
}

private getApiData() {
  return this._http.get('http://192.168.1.150:3000/api/products')
              .map((res: Response) => res.json())
              .subscribe(data => {
                      this.data = JSON.stringify(data);
                      console.log(this.data);
              });
}
}
