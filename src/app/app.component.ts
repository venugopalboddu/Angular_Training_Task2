import { Component } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  imgResultBeforeCompress: string;

  imgResultAfterCompress: string;

  constructor(private imageCompress: NgxImageCompressService) { }
  message:any;

  compressFile(event) {
    const size = event.srcElement.files[0].size;
    if (size > 9000) {
      this.imageCompress.uploadFile().then(({ image, orientation }) => {
        this.imgResultBeforeCompress = image;
        console.warn('Size in bytes was:', this.imageCompress.byteCount(image));
  
        this.imageCompress.compressFile(image, orientation, 75, 50).then(
          result => {
            console.log(result);
            this.imgResultAfterCompress = result;
            console.warn('Size in bytes is now:', this.imageCompress.byteCount(result));
          }
        );
  
      });
    }
    else {
      this.imageCompress.uploadFile().then(({ image, orientation }) => {
        this.imgResultBeforeCompress = image;
        console.warn('Size in bytes was:', this.imageCompress.byteCount(image));
      });
      this.message = "Image Uploaded Successfully";
    }
   

  }
}

