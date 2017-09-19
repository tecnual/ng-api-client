import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
// import { RequestOptions, Http, Headers } from '@angular/http';
import { NgForm } from '@angular/forms';
import {
  HttpEventType,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
// import { FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { GlobalConfig, ToastrService } from 'ngx-toastr';

import { UploadService} from '../shared/upload.service';
import { StoriesService } from './_services/';
import { AlertsService } from '../../_modules/alerts/_services';
import { AuthenticationService, UserService } from '../../_services/';
import { User } from '../../_models/';
import { Story, File } from './_models/';

const URL = 'http://192.168.1.150:3000/upload';

@Component({
  selector: 'app-new-story',
  templateUrl: '../../layout/default/new-story.component.html',
})
export class NewStoryComponent implements OnInit {
  options: GlobalConfig;
  model: any = {};
  title = 'Tecnual - New Story';
  user = new User;
  stories = new Array<Story>();
  refresh: number;
  moreIcon = 'plus';

  queueProgress: number;
  isUploading: boolean;
  uploadTimeRemaining: number;
  uploadTimeElapsed: number;
  uploadSpeed: number;
  filesList = new Array<FileList>();

  public filePreviewPath = new Array<SafeUrl>();

  constructor(
    private router: Router,
    private storiesService: StoriesService,
    private userService: UserService,
    private titleService: Title,
    private authenticationService: AuthenticationService,
    private alertsService: AlertsService,
    private route: ActivatedRoute,
    private uploadService: UploadService,
    private sanitizer: DomSanitizer,
    public toastr: ToastrService
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
    this.route.params.subscribe(params => {
      this.refresh = params.refresh || 0;
    });
  }

  fileChange(event) {
    Array.prototype.forEach.call(event.target.files, fileItem => {
      this.filesList.push(fileItem);
      this.filePreviewPath.push(this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(fileItem))));
    });
  }
  submitForm(form: any) {
    // console.log('this.model', this.model);
    // console.log('form.value', form.value);

    // const fileInput: HTMLInputElement = this.screenshotInput.nativeElement;
    // console.log('fileInput.files', fileInput.files);

    // TODO: Hay que diferenciar entre fotos, videos y demás ficheros.
    (this.filesList.length > 0) ? this.uploadFiles() : this.newStory(null);
    form._submitted = false;
  }
  uploadFiles() {
    this.queueProgress = 0;
    this.isUploading = true;
    let startTime = Date.now();
    this.uploadService.uploadFiles(this.filesList).subscribe(
      (event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Sent:
            startTime = Date.now();
            // console.trace('Request sent!');
            break;
          case HttpEventType.DownloadProgress:
          case HttpEventType.UploadProgress:
            if (event.total) {
              this.queueProgress = Math.round(event.loaded / event.total * 100);

              const timeElapsed = Date.now() - startTime;
              const uploadSpeed = event.loaded / (timeElapsed / 1000);
              this.uploadTimeRemaining = Math.ceil(
                (event.total - event.loaded) / uploadSpeed
              );
              this.uploadTimeElapsed = Math.ceil(timeElapsed / 1000);
              this.uploadSpeed = uploadSpeed / 1024 / 1024;
            }
            break;
          case HttpEventType.Response:
            this.queueProgress = 100;
            this.isUploading = false;
            // console.trace('Done! ResponseBody:', event.body);
            this.newStory(event.body.filesSaved);
            break;
        }
      },
      (error: HttpErrorResponse) => {
        this.isUploading = false;
        console.error(error);
        error = JSON.parse(error.error);
        this.toastr.error(error.message, 'Error!', {
          closeButton: true,
          timeOut: 5000
        });
      }
    );
  }
  newStory(files: File[]) {
    // console.log(files);
    this.model.user = this.user;
    this.model.files = files;
    // console.log(this.model);
    this.storiesService.newStory(this.model)
      .subscribe(
      data => {
        // set success message and pass true paramater to persist the message.
        // console.log(data.story);
        this.stories.unshift(data.story);
        this.toastr.success(data.message, 'Done!', {
          closeButton: true,
          timeOut: 2000
        });
        this.user.counter.beats++;
        this.model.story = '';
        this.model.more = '';
        this.filesList = [];
        this.queueProgress = 0;
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
      });
  }

  toggleMoreIcon() {
    return this.moreIcon === 'plus' ? this.moreIcon = 'minus' : this.moreIcon = 'plus';
  }
}
