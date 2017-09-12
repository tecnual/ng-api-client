import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { RequestOptions, Http, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { StoriesService } from './_services/';
import { AlertsService } from '../../_modules/alerts/_services';
import { AuthenticationService, UserService } from '../../_services/';
import { User } from '../../_models/';
import { Story } from './_models/';

const URL = 'http://192.168.1.150:3000/upload';

@Component({
  selector: 'sadapp-new-story',
  templateUrl: '../../layout/default/new-story.component.backup.html',
})
export class NewStoryComponent implements OnInit {
    model: any = {};
    loading = false;
    title = 'Tecnual - New Story';
    user = new User;
    stories = new Array<Story>();
    refresh: number;
    moreIcon = 'plus';
    public filePreviewPath = new Array<SafeUrl>();
    public uploader: FileUploader = new FileUploader({url: URL});
    public hasBaseDropZoneOver = false;
    public hasAnotherDropZoneOver = false;

    public fileOverBase(e: any): void {
      this.hasBaseDropZoneOver = e;
    }

    public fileOverAnother(e: any): void {
      this.hasAnotherDropZoneOver = e;
    }

  constructor(
    private router: Router,
    private storiesService: StoriesService,
    private userService: UserService,
    private titleService: Title,
    private authenticationService: AuthenticationService,
    private alertsService: AlertsService,
    private route: ActivatedRoute,
    private http: Http,
    private sanitizer: DomSanitizer
  ) {
    this.authenticationService.whoAmI()
      .subscribe(r => {
        this.user = r;
      });
    this.authenticationService.getStories()
      .subscribe(r => {
        this.stories = r;
    });

  }

  ngOnInit() {
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
            // console.log(item);
            console.log(`Item: ${item.file.name} - Response: ${response}`);
        };
    this.uploader.onAfterAddingFile = (fileItem) => {
      fileItem.withCredentials = false;
      console.log(fileItem);
      this.filePreviewPath.push(this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(fileItem._file))));
      // console.log(this.filePreviewPath);
    };
    this.route.params.subscribe(params => {
      this.refresh = params.refresh || 0;
    });
  }
  newStory() {
    // if (this.model.story === '') {return false; }
//    console.log(this.uploader);
//    if (1 === 1) {return false; }
    this.loading = true;
    this.model.user = this.user;
    this.storiesService.newStory(this.model)
      .subscribe(
      data => {
        // set success message and pass true paramater to persist the message.
        console.log(data.story);
        this.stories.unshift(data.story);
        this.alertsService.success(data.message, true);
        this.user.counter.beats++;
        this.model.story = '';
        this.model.more = '';
        this.loading = false;
        this.uploader.uploadAll();
        // this.clearQueue();
      },
      error => {
        console.error(error);
        try {
          if (error.status !== 0) {
            const response = JSON.parse(error._body);
            this.alertsService.error(response.message);
          } else {
            this.alertsService.error('API RESTFull is not connected');
          }
        } catch (e) {
          this.alertsService.error('Unexpected error!');
        }
        this.loading = false;
      });
  }

  toggleMoreIcon() {
    return this.moreIcon === 'plus' ? this.moreIcon = 'minus' : this.moreIcon = 'plus';
  }
  clearQueue() {
    this.filePreviewPath = [];
    this.uploader.clearQueue();
  }
//  fileChange(event) {
//
//    console.log('Upload');
//    console.log(this.uploader.queue);
//    const fileList: FileList = event.target.files;
//    if (fileList.length > 0) {
//        const file: File = fileList[0];
//        const formData: FormData = new FormData();
//        formData.append('body', '{ story: this.model }');
//        formData.append('uploadFile', file, file.name);
//        const headers = new Headers();
//        /** No need to include Content-Type in Angular 4 */
//        // headers.append('Content-Type', 'multipart/form-data');
//        // headers.append('Accept', 'application/json');
//        const options = new RequestOptions({
//          headers: headers
//         });
//        this.http.post(`http://localhost:3000/upload`, formData, options)
//            .map(res => res.json())
//            .catch(error => Observable.throw(error))
//            .subscribe(
//                data => console.log('success'),
//                error => console.log(error)
//            );
//    }
//  }
}
