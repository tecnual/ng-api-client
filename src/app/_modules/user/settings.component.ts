import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subject, ReplaySubject, Observable } from 'rxjs/Rx';
import {
  HttpEventType,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { GlobalConfig, ToastrService } from 'ngx-toastr';

import { UploadService} from '../shared/upload.service';
import { AuthenticationService, UserService } from '../../_services/index';
import { AlertsService } from '../../_modules/alerts/_services';
import { User, File } from '../../_models/index';

const URL = 'http://192.168.1.150:3000/upload';

@Component({
  moduleId: module.id,
  templateUrl: '../../layout/default/settings.component.html'
})

export class SettingsComponent implements OnInit {
  loading = false;
  title = 'Tecnual - Settings';
  user = new User;
  avatarUrl: SafeUrl;

  queueProgress: number;
  isUploading: boolean;
  uploadTimeRemaining: number;
  uploadTimeElapsed: number;
  uploadSpeed: number;
  filesList = new Array<FileList>();
  public filePreviewPath: SafeUrl;

  constructor(
    private router: Router,
    private userService: UserService,
    private titleService: Title,
    private authenticationService: AuthenticationService,
    private alertsService: AlertsService,
    private uploadService: UploadService,
    private sanitizer: DomSanitizer,
    public toastr: ToastrService,
  ) {
      this.authenticationService.whoAmI()
        .subscribe(r => {
          this.user = r;
          if (this.user.avatar) this.avatarUrl = 'http://192.168.1.150:3000/img/' + this.user.avatar.filename;
          else this.avatarUrl = 'http://192.168.1.150:3000/img/beat.svg';
        });
    }

  ngOnInit() {
    // reset login status
    this.titleService.setTitle(this.title);
  }
  fileChange(event) {
    // console.log(event.target.files[0]);
    this.filesList = [];
    this.filesList.push(event.target.files[0]);
    this.filePreviewPath = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(event.target.files[0])));
    this.avatarUrl = this.filePreviewPath;
    // console.log(this.filePreviewPath);
  }
  submitForm(form: any) {
    console.log(this.filesList);
    (this.filesList) ? this.uploadFiles() : this.saveSettings(null);
    form._submitted = false;
  }

  uploadFiles() {
    console.log('Upload');
    this.queueProgress = 0;
    this.isUploading = true;
    let startTime = Date.now();
    this.uploadService.uploadFiles(this.filesList).subscribe(
      (event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Sent:
            startTime = Date.now();
            console.trace('Request sent!');
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
            console.trace('Done! ResponseBody:', event.body);
            this.saveSettings(event.body.filesSaved[0]);
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
        });      }
    );
  }
  saveSettings(file: File) {
    this.loading = true;
    this.user.avatar = file;
    this.userService.saveSettings(this.user)
      .subscribe(
      data => {
        // set success message and pass true paramater to persist the message after redirecting to the login page
        // console.log(data);
        this.alertsService.success('Successful changes', true);
        this.loading = false;
      },
      error => {
        console.error(error);
        try {
          if (error.status !== 0) {
            const response = JSON.parse(error._body);
            this.alertsService.error(response.message);
          } else {
            this.alertsService.error('No hay conexión con el servicio API RESTFull');
          }
        } catch (e) {
          this.alertsService.error('Unexpected error!');
        }
        this.loading = false;
      });
  }
}
