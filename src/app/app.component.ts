import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BREAKPOINT_VALUE } from './enums/breakpoint.enums';
import { FireAuthService } from './services/fire-auth.service';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // States
  lightTheme!: boolean;
  showsMobileMenu = false;
  isMobile!: boolean;

  // Subscription utility
  private sub = new Subscription();

  constructor(
    private observer: BreakpointObserver,
    public theme: ThemeService,
    public auth: FireAuthService
  ) {}

  ngOnInit(): void {
    this.sub.add(this.observeLayout());
    this.sub.add(this.checkTheme());
  }

  /* --------------------------- VIEWPORT MANAGEMENT -------------------------- */
  private observeLayout() {
    this.observer.observe([BREAKPOINT_VALUE.mobile]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[BREAKPOINT_VALUE.mobile]) { this.isMobile = true; }
      else { this.isMobile = false; }
    })
  }

  /* ---------------------------- THEME MANAGEMENT ---------------------------- */
  private checkTheme() {
    const themeState = this.theme.getInitTheme();

    if (themeState == 'lightTheme') {
      this.lightTheme = true;
    } else if (themeState == 'darkTheme') {
      this.lightTheme = false;
    } else { console.log('Duno'); }
  }
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
    }, 550);
  }

  /* ------------------------------- MOBILE MENU ------------------------------ */
  onMenuOpen(value: any) {
    if (value) { this.showsMobileMenu = true; }
  }
  onMenuClose(value: any) {
    if (value) { this.showsMobileMenu = false; }
  }
}
