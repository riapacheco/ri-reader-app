import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BREAKPOINT_VALUE } from './enums/breakpoint.enums';
import { FireAuthService } from './services/fire-auth.service';
import { ThemeService } from './services/theme.service';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  /* -------------------------- TEMPORARY PROPS START ------------------------- */
  platformStatus = {
    ios: false,
    android: false,
    web: false,
  }

  printMessage = '';
  /* --------------------------- TEMPORARY PROPS END -------------------------- */

  // States
  lightTheme = true;
  showsMobileMenu = false;
  isMobile!: boolean;

  // Subscription utility
  private sub = new Subscription();

  constructor(
    private observer: BreakpointObserver,
    public theme: ThemeService,
    public auth: FireAuthService,
    private platform: Platform,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.sub.add(this.observeLayout());
    this.sub.add(this.checkPlatform());
    this.checkTheme();
    // this.meta.addTag({ name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  /* --------------------------- VIEWPORT MANAGEMENT -------------------------- */
  private observeLayout() {
    this.observer.observe([BREAKPOINT_VALUE.mobile]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[BREAKPOINT_VALUE.mobile]) { this.isMobile = true; }
      else { this.isMobile = false; }
    })
  }

  /* ---------------------------- THEME MANAGEMENT ---------------------------- */
  private checkPlatform() {
    if (this.platform.IOS) {

      this.platformStatus = {
        ios: true,
        android: false,
        web: false,
      }
    }
    else if (this.platform.ANDROID) {
      this.platformStatus = {
        ios: false,
        android: true,
        web: false,
      }
    }
    else if (this.platform.isBrowser) {
      this.platformStatus = {
        ios: false,
        android: false,
        web: true,
      }
    }
    else {
      this.platformStatus = {
        ios: false,
        android: false,
        web: false,
      }
    }
  }

  

  private checkTheme() {
    const themeState = this.theme.getInitTheme();

    if (themeState == 'lightTheme') {
      this.lightTheme = true;
    } else if (themeState == 'darkTheme') {
      this.lightTheme = false;
    } else { console.log('Duno'); }
  }



  // Update theme
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

  /* ------------------------------- MOBILE MENU ------------------------------ */
  onMenuOpen(value: any) {
    if (value) { this.showsMobileMenu = true; }
  }
  onMenuClose(value: any) {
    if (value) { this.showsMobileMenu = false; }
  }

  /* ------------------------- BOTTOM MOBILE MENU BAR ------------------------- */
  onActionButtonClick(value: any) {
    console.log(value);
    this.printMessage = 'Add Book Passage!';

    setTimeout(() => {
      this.printMessage = '';
    }, 1500);
  }
}
