import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ThemeService } from 'src/app/services/theme.service';
import { Platform } from '@angular/cdk/platform';
import { BREAKPOINT_VALUE } from 'src/app/enums/breakpoint.enums';


@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.scss']
})
export class CaptureComponent implements OnInit, OnDestroy {
  // image!: any;
  passageText = 'Passage text';

  /* --------------------------- EDITING PROPERTIES --------------------------- */
  highlightedText!: any;

  /* ------------------------- PRESENTATION PROPERTIES ------------------------ */
  modules = { toolbar: [ ['bold', 'italic', 'underline'], [{'list':'ordered'},{'list':'bullet'}],] }; // Quill editor
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

  @HostListener('mouseup', ['$event']) public onTextSelect() {
    const text = this.getSelectedText();
    console.log(text);
  }
  @HostListener('touchend', ['$event']) public onTextTouch() {
    const text = this.getSelectedText();
    console.log('touch => ', text);
  }

  private getSelectedText(): string | undefined {
    const selectedTextExists = window.getSelection()?.toString().length;
    const selectedText = window.getSelection()?.toString();

    if (selectedTextExists) { return selectedText; }
    return selectedText;
  }

  private clearSelectedText() {
    window.getSelection()?.empty(); // Chrome
    window.getSelection()?.removeAllRanges(); // Firefox
    document.getSelection()?.removeAllRanges(); // IE
  }
}
