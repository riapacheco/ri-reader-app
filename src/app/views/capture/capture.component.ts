import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ThemeService } from 'src/app/services/theme.service';
import { Platform } from '@angular/cdk/platform';
import { BREAKPOINT_VALUE } from 'src/app/enums/breakpoint.enums';
import { QUILL_MODULES, QUILL_STYLES } from 'src/app/constants/quill.constants';


@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.scss']
})
export class CaptureComponent implements OnInit, OnDestroy {
  // image!: any;
  passageText = '';

  /* --------------------------- EDITING PROPERTIES --------------------------- */
  highlightedText!: any;
  @ViewChild('passageEditor') passageEditor!: ElementRef;


  /* ------------------------- PRESENTATION PROPERTIES ------------------------ */
  // QUILL EDITOR
  modules = QUILL_MODULES;
  style = QUILL_STYLES;

  // MAIN PRESENTATION PROPS
  viewClass: string[] = []; // Wrapper class
  viewTitle = 'Add New Passage'; // Top Bar
  isMobile!: boolean;
  private sub = new Subscription();

  constructor(
    private observer: BreakpointObserver,
    private theme: ThemeService,
    private platform: Platform
  ) { }

  ngOnInit(): void {
    this.viewClass = ['capture'];
    this.checkDeviceAndTheme();

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private checkDeviceAndTheme() {
    this.sub.add(this.observer.observe([BREAKPOINT_VALUE.mobile]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[BREAKPOINT_VALUE.mobile]) {
        this.isMobile = true;
        this.viewClass.push('mobile');
      } else {
        this.isMobile = false;
        this.viewClass = this.viewClass.filter((e: any) => e !== 'mobile');
      }
    }));

    const theme = this.theme.getInitTheme();
    if (theme == 'dark') { this.viewClass.push('dark'); }
    else if (theme == 'light') { this.viewClass = this.viewClass.filter((e: any) => e !== 'dark'); }

    if (this.platform.ANDROID || this.platform.IOS) { this.viewClass.push('platform'); }
    else { this.viewClass = this.viewClass.filter((e: any) => e !== 'platform'); }
  }

  onSelect(textData: any){
    console.log(textData);
  }

  @HostListener('mouseup', ['$event']) public onMouseTextSelect() {
    const textExists = window.getSelection()?.toString().length;
    const selectedText = window.getSelection()?.toString();
    const editor = this.passageEditor.nativeElement;

    if (textExists) {
      this.highlightedText = selectedText;
      console.log(`User mouse-highlighted "${selectedText}" from within the rich text editor`)
    }    
  }

  @HostListener('touchend', ['$event']) public onTouchTextSelect() {
    const textExists = window.getSelection()?.toString().length;
    const selectedText = window.getSelection()?.toString();
    const editor = this.passageEditor.nativeElement;

    if (textExists) {
      this.highlightedText = selectedText;
      console.log(`User touch-highlighted "${selectedText}" from within the rich text editor`);
    }

  }

  onOutsideClick(e: any) {
    console.log(e);
  }
}
