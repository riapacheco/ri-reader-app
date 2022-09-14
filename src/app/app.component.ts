import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BREAKPOINT_VALUE } from './enums/breakpoint.enums';
import { FireAuthService } from './services/fire-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  /* ----------------------------- MENU PROPERTIES ---------------------------- */
  showsMobileMenu = false;
  mobileMenuConfig = {
    title: {
      text: `<h1>RiReader</h1>`,
      // Optional: leave blank to omit
      icon: 'auto_stories',
      canClick: true,
      clickTarget: 'titleTargetString'
    },
    // Optional: Leave enclosed fields blank to remove
    leftButton: {
      icon: 'menu',
      target: 'triggerLeft'
    },
    // Optional: Leave enclosed fields blank to remove
    rightButton: {
      icon: 'search',
      target: 'triggerRight'
    }
  }


  // Mobile or not based on viewport [breakpoint.enums file]
  isMobile!: boolean;

  // Subscription utility
  private sub = new Subscription();

  constructor(
    private observer: BreakpointObserver,
    private router: Router,
    public auth: FireAuthService
  ) {}

  ngOnInit(): void {
    this.sub.add(this.observeLayout());
    console.log(this.router.url)
  }

  /* ------------------------ Check Device via Observer ----------------------- */
  private observeLayout() {
    this.observer.observe([BREAKPOINT_VALUE.mobile]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[BREAKPOINT_VALUE.mobile]) { this.isMobile = true; }
      else { this.isMobile = false; }
    })
  }

  /* ------------------------------- MOBILE MENU ------------------------------ */
  public onTopBarTitleClick(data: any) {
    console.log('Title in Top Bar Clicked');
  }
  public onLeftButtonClick(data: any) {
    console.log('Left button clicked');
    switch (true) {
      case this.router.url == '/': // Home
        if (this.showsMobileMenu) { this.showsMobileMenu = false; }
        else { this.showsMobileMenu = true; }
        break;
    }
  }
  public onRightButtonClick(data: any) {
    console.log('Right button clicked');
  }
  public onMenuClose(e: any) {
    if (e) { this.showsMobileMenu = false; }
  }

}
