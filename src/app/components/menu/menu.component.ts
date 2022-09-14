import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BREAKPOINT_VALUE } from 'src/app/enums/breakpoint.enums';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isMobile!: boolean;

  private sub = new Subscription();

  constructor(
    private observer: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.checkPlatform();
  }

  /* ---------------------------- Toggle Platforms ---------------------------- */
  private checkPlatform() {
    this.observer.observe([BREAKPOINT_VALUE.mobile]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[BREAKPOINT_VALUE.mobile]) { this.isMobile = true; console.log('mobile'); }
      else { this.isMobile = false; console.log('desktop'); }
    })
  }
}
