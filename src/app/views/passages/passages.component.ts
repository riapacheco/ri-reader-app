import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BREAKPOINT_VALUE } from 'src/app/enums/breakpoint.enums';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-passages',
  templateUrl: './passages.component.html',
  styleUrls: ['./passages.component.scss']
})
export class PassagesComponent implements OnInit, OnDestroy {

  passagesClassList: string[] = [];
  isMobile!: boolean;
  private sub = new Subscription();
  constructor(
    private observer: BreakpointObserver,
    private theme: ThemeService,
    private platform: Platform
  ) { }

  ngOnInit(): void {
    this.passagesClassList = ['passages'];
    this.checkDeviceAndTheme();
  }
  ngOnDestroy() { this.sub.unsubscribe(); }

  /* -------------------------- CHECK COMPONENT STATE ------------------------- */
  private checkDeviceAndTheme() {
    this.sub.add(this.observer.observe([BREAKPOINT_VALUE.mobile]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[BREAKPOINT_VALUE.mobile]) {
        this.isMobile = true;
        this.passagesClassList.push('mobile');
      } else {
        this.isMobile = false;
        this.passagesClassList = this.passagesClassList.filter((e: any) => e !== 'mobile');
      }
    }));

    const theme = this.theme.getInitTheme();
    if (theme == 'dark') { this.passagesClassList.push('dark'); }
    else if (theme == 'light') { this.passagesClassList = this.passagesClassList.filter((e: any) => e !== 'dark'); }

    if (this.platform.ANDROID || this.platform.IOS) { this.passagesClassList.push('platform'); }
    else { this.passagesClassList = this.passagesClassList.filter((e: any) => e !== 'platform'); }
  }
}
