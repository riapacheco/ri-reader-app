import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BREAKPOINT_VALUE } from 'src/app/enums/breakpoint.enums';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit, OnDestroy {

  @Input() isOpen = false;
  @Input() summaryTitle = 'View preview';
  @Input() secondaryButtonIcon = 'add';

  viewClass: string[] = [];
  isMobile!: boolean;
  private sub = new Subscription();
  constructor(
    private observer: BreakpointObserver,
    private theme: ThemeService,
  ) { }

  ngOnInit(): void {
    this.viewClass = ['accordion'];
    this.checkDeviceAndTheme();
  }
  ngOnDestroy() { this.sub.unsubscribe(); }

  /* ----------------------------- CHECK APP STATE ---------------------------- */
  private checkDeviceAndTheme() {
    this.sub.add(this.observer.observe([BREAKPOINT_VALUE.mobile]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[BREAKPOINT_VALUE.mobile]) {
        this.isMobile = true;
        this.viewClass.push('mobile');
      } else {
        this.isMobile = false;
        this.viewClass = this.viewClass.filter((e: any) => e !== 'mobile');
      }
    }))

    const theme = this.theme.getInitTheme();
    if (theme == 'dark') { this.viewClass.push('dark'); }
    else if (theme == 'light') { this.viewClass = this.viewClass.filter((e: any) => e !== 'dark'); }
  }

  onClick() {
    console.log(this.isOpen);
  }
}
