import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BREAKPOINT_VALUE } from 'src/app/enums/breakpoint.enums';
import { ThemeService } from 'src/app/services/theme.service';

export type TBadgeState = 'success' | 'danger';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit, OnDestroy {
  @Input() viewClass!: string[];
  @Input() userImage = 'https://ik.imagekit.io/fuc9k9ckt2b/IMG_0632_copy_a_RDINYPh.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1657595086839';
  @Input() titleText = ''; // if left blank, will use greeting
  @Input() actionButtonIcon = 'add';
  @Input() searchText = '';
  @Input() input = { placeholder: 'Search + Enter', boundedString: '', prefixIcon: 'search' };
  @Input() showsInputField = true;
  @Input() badge = { state: 'success' }

  @Output() avatarClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() actionButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() enterDown: EventEmitter<any> = new EventEmitter<any>();


  @ViewChild('actionButtonRect') actionButtonRect!: ElementRef;


  /* ------------------------- PRESENTATION PROPERTIES ------------------------ */

  // viewClass = ['top-nav', 'dark'];
  isMobile!: boolean;
  isLargeBar = true;
  inputFocused!: boolean;
  greetings = [ 'Good morning', 'Good afternoon', 'Good evening' ];
  private sub = new Subscription();
  constructor(
    private observer: BreakpointObserver,
    private theme: ThemeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.viewClass = ['top-nav'];
    this.updateGreeting();
    this.checkDeviceAndTheme();
    // this.theme.updateTheme('dark');
  }
  
  ngOnDestroy() { this.sub.unsubscribe(); }

  /**
   * Checks breakpoints (responsivity and PWA), theme, and platform. Adds to class list array applied to template.
   */
  private checkDeviceAndTheme() {
    this.sub.add(this.observer.observe([BREAKPOINT_VALUE.mobile]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[BREAKPOINT_VALUE.mobile]) {
        this.isMobile = true;
        this.viewClass.push('mobile');
      } else {
        this.isMobile = false;
        this.viewClass = this.viewClass.filter((x: any) => x !== 'mobile');
      }
    }));


    const theme = this.theme.getInitTheme();
    if (theme == 'dark') { this.viewClass.push('dark'); }
    else if (theme == 'light') { this.viewClass = this.viewClass.filter((x: any) => x !== 'dark'); }
  }

  // Greeting based on time of day
  updateGreeting() {
    if (!this.titleText) {
      const hour = new Date().getHours();
      if (hour < 12) { this.titleText = this.greetings[0]; }
      else if (hour < 18) { this.titleText = this.greetings[1]; }
      else { this.titleText = this.greetings[2]; }
    } else { return; }
  }

  onInputFocusToggle(inputState: string) {
    if (inputState == 'typing') { this.inputFocused = true; }
    else if (inputState == 'done') { this.inputFocused = false; }
    else { this.inputFocused = false; }
  }

  // Methods
  onAvatarClick(event: any) {
    if (event) { this.router.navigateByUrl('/account'); }
  }
  onActionClick(event: any) { this.actionButtonClick.emit(event); }
  onEnter() { this.enterDown.emit(this.searchText); }
}
