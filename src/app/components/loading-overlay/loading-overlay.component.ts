import { Component, OnInit } from '@angular/core';
import { LoadingOverlayService } from 'src/app/services/loading-overlay.service';
import { OcrService } from 'src/app/services/ocr.service';

@Component({
  selector: 'app-loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrls: ['./loading-overlay.component.scss']
})
export class LoadingOverlayComponent implements OnInit {

  constructor(
    public ocr: OcrService,
    public loadingOverlay: LoadingOverlayService
  ) { }

  ngOnInit(): void {
  }

}
