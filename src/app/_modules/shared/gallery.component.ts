import { Component, OnInit, Input } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { File } from '../stories/_models/';


@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
})

export class GalleryComponent implements OnInit {
    @Input() images = Array<File>();

    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];


    ngOnInit(): void {
        this.galleryImages = [];
        const nImg = this.images.length !== 1;
        this.images.forEach(image => {
          // console.log(image.filename);
          const url = 'http://192.168.1.150:3000/img/' + image.filename;
          this.galleryImages.push(
              {
                  small: url,
                  medium: url,
                  big: url
              }
          );
        });

        this.galleryOptions = [
            {
                width: '300px',
                height: '200px',
                thumbnailsColumns: 4,
                imageAnimation: NgxGalleryAnimation.Rotate,
                imageSwipe: true,
                thumbnails: nImg,
                imageArrows: nImg
            },
            // max-width 800
            {
                breakpoint: 400,
                width: '100%',
                height: '300px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 200,
                preview: false
            }
        ];
    }
}
