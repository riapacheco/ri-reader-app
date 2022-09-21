import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { BREAKPOINT_VALUE } from './enums/breakpoint.enums';
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
  showsMobileMenu = false;
  isMobile!: boolean;

  // Subscription utility
  private sub = new Subscription();

  // Other Elements
  @ViewChild('scrollToTopDiv') scrollToTopDiv!: ElementRef;

  constructor(
    private observer: BreakpointObserver,
    public theme: ThemeService,
    public auth: FireAuthService,
    public device: DeviceOsService
  ) {}

  ngOnInit(): void {
    this.sub.add(this.observeLayout());
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
   * Observe layout populates 
   */
  private observeLayout() {
    this.observer.observe([BREAKPOINT_VALUE.mobile]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[BREAKPOINT_VALUE.mobile]) { this.isMobile = true; }
      else { this.isMobile = false; }
    })
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

  /**
   * 
   * @param toggleEvent Simply tracks the actual click event and uses localStorage to manage state
   * 
   */
  onThemeChange(toggleEvent: any) {
    if (toggleEvent && this.lightTheme) {
      this.lightTheme = false;
      this.theme.updateTheme('darkTheme');
    } else if (toggleEvent && !this.lightTheme) {
      this.lightTheme = true;
      this.theme.updateTheme('lightTheme');
    }
    setTimeout(() => {
      this.showsMobileMenu = false;
    }, 800);
  }

  /**
   * 
   * @param value event that signals that the user has clicked the menuOpen button
   */
  onMenuOpen(value: any) {
    if (value) { this.showsMobileMenu = true; }
  }
  /**
   * 
   * @param value event that signals that the user has clicked the close button
   */
  onMenuClose(value: any) {
    if (value) { this.showsMobileMenu = false; }
  }

  /* ------------------------- BOTTOM MOBILE MENU BAR ------------------------- */
  /**
   * 
   * @param value Signals that the main (center) Action Button on the mobile bottom bar has been clicked
   *              This param passes through the value of whatever the specified target is from its data source
   */
  onActionButtonClick(value: any) {
    console.log(value);
  }
}
