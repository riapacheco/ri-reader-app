import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { FireAuthService } from './services/fire-auth.service';
import { ThemeService } from './services/theme.service';
import { DeviceOsService } from './services/device-os.service';
import { Router } from '@angular/router';
import { INavButton } from './components/bottom-nav/bottom-nav.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  routerLinks: INavButton[] = [
    {
      icon: 'auto_stories',
      label: 'books',
      target: '',
      routerLink: '/books',
      isActive: true
    },
    {
      icon: 'bookmarks',
      label: 'passages',
      target: '',
      routerLink: '/passages',
      isActive: false
    },
    {
      icon: 'auto_graph',
      label: 'insights',
      target: '',
      routerLink: '/dashboard',
      isActive: false
    },
    {
      icon: 'bookmark_add',
      label: 'Add',
      target: '',
      routerLink: '/capture',
      isActive: false
    }
  ];
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
    public device: DeviceOsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.checkTheme();
    this.device.runPlatformMonitor();

    /* --------------------------- DELETE THESE LATER --------------------------- */
    this.router.navigateByUrl('/books');
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  /**
   * On activation, scrolls to top since
   */
  onRouteActivation() {
    this.scrollToTopDiv.nativeElement.scrollIntoView();
    this.routerLinks.map((each: any) => {
      if (each.routerLink == this.router.url) {
        each.isActive = true;
      }
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


  // MOBILE BOTTOM BAR
  onMobileBottomBarClick(val: any) {
    const {
      icon,
      label,
      target,
      routerLink,
      isActive
    } = val;
    
    if (routerLink) {
      this.routerLinks.map((obj: any) => {
        if (obj.routerLink == routerLink) {
          this.resetActivations();
          obj.isActive = true;
          this.router.navigateByUrl(obj.routerLink);
        }
      })
    } else if (!routerLink && target) {
      this.routerLinks.map((obj: any) => {
        this.resetActivations();
        obj.isActive = true;

      })
    } else {
      console.log('missing data => ', val);
    }
  }

  private resetActivations() {
    this.routerLinks.map((each: any) => Object.assign(each, { isActive: false }));
  }
}
