import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-capture-image',
  templateUrl: './capture-image.component.html',
  styleUrls: ['./capture-image.component.scss']
})
export class CaptureImageComponent implements OnInit {
  imageData = '';

  constructor() { }

  ngOnInit(): void {
  }

  public async captureImage() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      source: CameraSource.Prompt,
      resultType: CameraResultType.Base64
    });

    if (image) {
      this.imageData = `data:image/jpeg;base64,${image.base64String}`;
      console.log(this.imageData);
    }
  }
}
