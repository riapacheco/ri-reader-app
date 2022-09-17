import { Component, EventEmitter, Input, Output } from '@angular/core';
import { toggleSlide } from 'src/app/constants/animation.constants';
import { ThemeService } from 'src/app/services/theme.service';

export type TToggleState = 'on' | 'off';

@Component({
  selector: 'app-toggle',
  template: `
  <div [ngClass]="(theme.isDark$ | async) ? 'toggle-wrapper is-dark' : 'toggle-wrapper'">
    <a
      (click)="toggle($event)"
      [ngClass]="toggleOff ? 'toggle-container' : 'toggle-container on-bg'">
      <div
        [@toggleControlTrigger]="toggleOff ? 'off' : 'on'"
        class="toggle-handle"></div>
    </a>
  </div>`,
  styleUrls: ['./toggle.component.scss'],
  animations: [ toggleSlide ]
})
export class ToggleComponent {
  @Input() toggleOff!: boolean;
  @Output() toggleClick: EventEmitter<any> = new EventEmitter<any>();

  constructor( public theme: ThemeService ) { }

  public toggle(e: any) {
    this.toggleClick.emit(e);
  }
}
