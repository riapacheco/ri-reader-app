import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { FireAuthService } from './services/fire-auth.service';
import { ThemeService } from './services/theme.service';
import { DeviceOsService } from './services/device-os.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {


  // States
  lightTheme = true;
  isMobile!: boolean;

  // Subscription utility
  private sub = new Subscription();

  // Other Elements
  @ViewChild('scrollToTopDiv') scrollToTopDiv!: ElementRef;

  constructor(
    public theme: ThemeService,
    public auth: FireAuthService,
    public device: DeviceOsService
  ) {}

  ngOnInit(): void {
    this.checkTheme();
    this.device.runPlatformMonitor();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  /**
   * On activation, scrolls to top since
   */
  onRouteActivation() {
    this.scrollToTopDiv.nativeElement.scrollIntoView();
  }

  /**
   * Calls {@link ThemeService} to check user's localStorage for theme reference
   * If none, defaults to light theme
   */
  private checkTheme() {
    const themeState = this.theme.getInitTheme();
    if (themeState == 'lightTheme') {
      this.lightTheme = true;
    } else if (themeState == 'darkTheme') {
      this.lightTheme = false;
    } else { console.log('Duno'); }
  }
}
