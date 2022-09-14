import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { BREAKPOINT_VALUE } from 'src/app/enums/breakpoint.enums';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() leftButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() rightButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() titleClick: EventEmitter<any> = new EventEmitter<any>();
  @Input() config = {
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
  };

  isMobile!: boolean;
  private sub = new Subscription();
  constructor(
    private observer: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.sub.add(this.checkPlatform());
  }

  /* ---------------------------- Toggle Platforms ---------------------------- */
  private checkPlatform() {
    this.observer.observe([BREAKPOINT_VALUE.mobile]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[BREAKPOINT_VALUE.mobile]) { this.isMobile = true; console.log('mobile'); }
      else { this.isMobile = false; console.log('desktop'); }
    })
  }

  /* ------------------------------- USER EVENTS ------------------------------ */

  onTitleClick(target: string) {
    if (target && this.config.title.canClick) { this.titleClick.emit(target); }
    else { console.warn('Title not made clickable'); }
  }

  onLeftClick(targetString: string) {
    if (targetString && this.config.leftButton.target) { this.leftButtonClick.emit(targetString); }
    else { console.warn('Left button may not have a target'); }
  }

  onRightClick(targetString: string) {
    if (targetString && this.config.rightButton.target) { this.rightButtonClick.emit(targetString); }
    else { console.warn('Right button may not have a target'); }
  }
}