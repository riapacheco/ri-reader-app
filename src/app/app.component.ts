import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from './services/theme.service';
import { OcrService } from './services/ocr.service';
import { LoadingOverlayService } from './services/loading-overlay.service';
import { CameraService } from './services/camera.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { BREAKPOINT_VALUE } from './enums/breakpoint.enums';
import { TShadowStyle } from './components/bottom-nav/bottom-nav.component';
import { Router } from '@angular/router';



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
  bottomNavShadow: TShadowStyle = 'faint';
  private sub = new Subscription();
  @ViewChild('scrollToTopDiv') scrollToTopDiv!: ElementRef;

  constructor(
    public theme: ThemeService,
    private observer: BreakpointObserver,
    public loading: LoadingOverlayService,
    private router: Router
  ) {}

  /** @ignore */
  ngOnInit(): void {
    this.theme.getInitTheme();
    this.checkDeviceAndTheme();
    // this.theme.updateTheme('dark');
    // this.theme.updateTheme('light');
  }

  /** @ignore */
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  /* ------------------------- CHECK DEVICE AND THEME ------------------------- */
  private checkDeviceAndTheme() {
    this.sub.add(this.observer.observe([BREAKPOINT_VALUE.mobile]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[BREAKPOINT_VALUE.mobile]) {
        this.isMobile = true;
      } else { this.isMobile = false; }
    }))

    const theme = this.theme.getInitTheme();
    if (theme == 'dark') { console.log('Dark theme ON'); }
    else if (theme == 'light') { console.log('Dark theme OFF'); }
  }

  onRouteActivation() {
    this.scrollToTopDiv.nativeElement.scrollIntoView();
    if (this.router.url == '/books') { this.bottomNavShadow = 'dark'; }
    else { this.bottomNavShadow = 'faint'; }
  }

}
