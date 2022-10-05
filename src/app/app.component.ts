import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from './services/theme.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { BREAKPOINT_VALUE } from './enums/breakpoint.enums';
import { TShadowStyle } from './components/bottom-nav/bottom-nav.component';
import { Router } from '@angular/router';
import { SupabaseService } from './services/supabase.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  /* ---------------------------------- AUTH ---------------------------------- */
  session = this.supabase.session;

  /* -------------------------------------------------------------------------- */
  /*                       GENERAL APP AND VIEW PROPERTIES                      */
  /* -------------------------------------------------------------------------- */
  lightTheme = true;
  isMobile!: boolean;
  bottomNavShadow: TShadowStyle = 'faint';
  showsBottomNav = true;
  private sub = new Subscription();
  @ViewChild('scrollToTopDiv') scrollToTopDiv!: ElementRef;

  constructor(
    private readonly supabase: SupabaseService,
    public theme: ThemeService,
    private observer: BreakpointObserver,
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
    const accountView = this.router.url == '/account';
    if (this.router.url == '/books') { this.bottomNavShadow = 'dark'; }
    else if (accountView) { this.showsBottomNav = false; }
    else { this.bottomNavShadow = 'faint'; }
  }

}
