import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
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


  showsMobileMenu = false;
  // Mobile or not based on viewport [breakpoint.enums file]
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
    
  }

  /* ------------------------ Check Device via Observer ----------------------- */
  private observeLayout() {
    this.observer.observe([BREAKPOINT_VALUE.mobile]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[BREAKPOINT_VALUE.mobile]) { this.isMobile = true; }
      else { this.isMobile = false; }
    })
  }

  onMenuOpen(value: any) {
    if (value) { this.showsMobileMenu = true; }
  }
  onMenuClose(value: any) {
    if (value) { this.showsMobileMenu = false; }
  }
}
