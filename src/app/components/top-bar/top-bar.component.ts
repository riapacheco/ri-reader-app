import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { BREAKPOINT_VALUE } from 'src/app/enums/breakpoint.enums';
import { ThemeService } from 'src/app/services/theme.service';

export type TBarStyle = 'main' | 'context' | 'none' | '' ;

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit, OnDestroy {

  /* ------------------------------- BOTH STYLES ------------------------------ */
  @Input() barStyle: TBarStyle = 'main';
  @Input() mainTitle = '';

  /* ------------------------------- Main Style ------------------------------- */
  @Output() menuClick: EventEmitter<any> = new EventEmitter<any>();

  /* ------------------------------ Context Style ----------------------------- */
  @Input() button = {
    left: {
      icon: 'west',
      target: 'targetBack'
    },
    right: {
      icon: 'settings',
      target: ''
    }
  }
  @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>();
  @Input() contextTitle = 'Preview';

  /* ----------------------------- Greeting Props ----------------------------- */
  defaultGreeting = '';
  hour = new Date().getHours();
  greetings = ['Good Morning', 'Good Afternoon', 'Good Evening'];

  /* -------------------------------- Structure ------------------------------- */
  isMobile!: boolean;

  private sub = new Subscription();

  constructor(
    public theme: ThemeService,
    private observer: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.sub.add(this.checkBreakpoints());
    this.checkTime();
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  // breakpoints
  private checkBreakpoints() {
    this.observer.observe([BREAKPOINT_VALUE.mobile]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[BREAKPOINT_VALUE.mobile]) { this.isMobile = true; }
      else { this.isMobile = false; }
    })
  }
  // check time
  private checkTime() {
    if (this.hour < 12) { this.defaultGreeting = this.greetings[0]; }
    else if (this.hour < 18) { this.defaultGreeting = this.greetings[1]; }
    else { this.defaultGreeting = this.greetings[2]; }
  }

  /* ----------------------------- User Controlsx ----------------------------- */
  onMenuClick(e: any) {
    if (e) { this.menuClick.emit(e); }
  }

  onButtonClick(targetValue: string) {
    if (targetValue) { this.buttonClick.emit(targetValue); }
  }
}
