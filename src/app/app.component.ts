import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from './services/theme.service';
import { OcrService } from './services/ocr.service';
import { LoadingOverlayService } from './services/loading-overlay.service';
import { CameraService } from './services/camera.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  /* -------------------------------------------------------------------------- */
  /*                       GENERAL APP AND VIEW PROPERTIES                      */
  /* -------------------------------------------------------------------------- */
  lightTheme = true;
  isMobile!: boolean;
  isLoading = false; // for overlay spinner combo
  private sub = new Subscription();
  @ViewChild('scrollToTopDiv') scrollToTopDiv!: ElementRef;

  constructor(
    public theme: ThemeService,
    public ocr: OcrService,
    public loading: LoadingOverlayService,
    public camService: CameraService,
  ) {}

  /** @ignore */
  ngOnInit(): void {
    this.checkTheme();
  }

  /** @ignore */
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  onRouteActivation() {
    this.scrollToTopDiv.nativeElement.scrollIntoView();
  }
  private checkTheme() {
    const themeState = this.theme.getInitTheme();
    if (themeState == 'lightTheme') {
      this.lightTheme = true;
    } else if (themeState == 'darkTheme') {
      this.lightTheme = false;
    } else { console.log('Duno'); }
  }
}
