import { Component, OnInit } from '@angular/core';
import { OcrService } from 'src/app/services/ocr.service';
import * as Tesseract from 'tesseract.js';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.scss']
})
export class CaptureComponent implements OnInit {

  worker: Tesseract.Worker = Tesseract.createWorker();
  ocrReady!: boolean;
  ocrResult!: string;
  imageChangedEvent!: any;
  base64Image!: any;

  constructor(
    public ocr: OcrService
  ) { }

  ngOnInit(): void {

  }

  handleUpload(event: any) {
    this.ocr.scanImage(event);
  }

}
