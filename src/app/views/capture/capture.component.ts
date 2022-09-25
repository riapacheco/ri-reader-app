import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OcrService } from 'src/app/services/ocr.service';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.scss']
})
export class CaptureComponent implements OnInit {
  
  constructor(
    public ocr: OcrService
  ) { }

  ngOnInit(): void {
  }

}
