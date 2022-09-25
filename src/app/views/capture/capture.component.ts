import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { OcrService } from 'src/app/services/ocr.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.scss']
})
export class CaptureComponent implements OnInit, OnDestroy {
  image!: any;
  passageText = '';
  showCheck = true;

  private sub = new Subscription();
  constructor(
    public ocr: OcrService 
  ) { }

  ngOnInit(): void {
    this.sub.add(this.ocr.ocrResult$.subscribe((res: any) => {
      setTimeout(() => {
        this.passageText = res;
      }, 100);
    }))
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  async captureImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      source: CameraSource.Prompt,
      resultType: CameraResultType.Base64
    });
    
    if (image) {
      this.image = `data:image/jpeg;base64,${image.base64String}`!;
    }
  }
  onClear() {
    this.ocr.clearText();
  }
}
