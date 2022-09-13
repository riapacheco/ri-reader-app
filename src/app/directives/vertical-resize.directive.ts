import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appVerticalResize]'
})
export class VerticalResizeDirective {
  prevClientY = 0;
  isGrabbing = false;

  @Input() height!: number;
  @Output() heightChange: EventEmitter<any> = new EventEmitter<any>();

  /* -------------------------------------------------------------------------- */
  /*                                MOUSE EVENTS                                */
  /* -------------------------------------------------------------------------- */
  /* ------------------------------- Mouse Move ------------------------------- */
  @HostListener('body:mousemove', ['$event'])
  public onMousemove(event: MouseEvent) {
    if (!this.isGrabbing) { return; }

    this.height += (event.clientY - this.prevClientY);
    this.heightChange.emit(this.height);
    this.prevClientY = event.clientY;
  }

  /* -------------------------------- Mouse Up -------------------------------- */
  @HostListener('mouseup', ['$event'])
  public onMouseup(event: MouseEvent) { this.isGrabbing = false; }
  
  /* ------------------------------- Mouse Down ------------------------------- */
  @HostListener('mousedown', ['$event'])
  public onMousedown(event: MouseEvent) {
    this.isGrabbing = true; 
    this.prevClientY = event.clientY;
  }

  /* -------------------------------------------------------------------------- */
  /*                                TOUCH EVENTS                                */
  /* -------------------------------------------------------------------------- */
  /* ------------------------------- Touch Move ------------------------------- */
  @HostListener('body:touchmove', ['$event'])
  public onTouchmove(event: TouchEvent) {
    if (!this.isGrabbing) { return; }

    this.height += (event.touches[0].clientY - this.prevClientY);
    this.heightChange.emit(this.height);
    this.prevClientY = event.touches[0].clientY;
  }

  /* -------------------------------- Touch End ------------------------------- */
  @HostListener('touchend', ['$event'])
  public onTouchend(event: TouchEvent) { this.isGrabbing = false; }

  /* ------------------------------- Touch Start ------------------------------ */
  @HostListener('touchstart', ['$event'])
  public onTouchstart(event: TouchEvent) {
    this.isGrabbing = true;
    this.prevClientY = event.touches[0].clientY;
  }
}
