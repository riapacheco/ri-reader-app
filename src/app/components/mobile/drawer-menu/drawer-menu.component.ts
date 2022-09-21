import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { menuSlideOut } from 'src/app/constants/animation.constants';
import { BREAKPOINT_VALUE } from 'src/app/enums/breakpoint.enums';
import { DeviceOsService } from 'src/app/services/device-os.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-drawer-menu',
  templateUrl: './drawer-menu.component.html',
  styleUrls: ['./drawer-menu.component.scss'],
  animations: [ menuSlideOut ]
})
export class DrawerMenuComponent implements OnInit, OnDestroy {

  @Input() showsMenu = false; // mobile menu
  @Input() toggleOff!: boolean; // from toggle component, then passed to parent
  @Output() closeClick: EventEmitter<any> = new EventEmitter<any>(); // to close mobile menu
  @Output() themeUpdate: EventEmitter<any> = new EventEmitter<any>(); // to update theme
  
  isMobile!: boolean;
  private sub = new Subscription();

  constructor(
    public theme: ThemeService,
    private observer: BreakpointObserver,
    public device: DeviceOsService
  ) { }

  ngOnInit(): void {
    this.sub.add(this.checkDeviceView());
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  // check device viewport
  private checkDeviceView() {
    this.observer.observe([BREAKPOINT_VALUE.mobile]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[BREAKPOINT_VALUE.mobile]) { this.isMobile = true; }
      else { this.isMobile = false; }
    })
  }

  onThemeUpdate(toggleEvent: any) {
    this.themeUpdate.emit(toggleEvent);
  }

  onCloseClick(e: any) {
    this.closeClick.emit(e);
  }
}
