import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toggleRightSlide } from 'src/app/constants/animation.constants';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-toggle',
  template: `
  <div [ngClass]="(theme.isDark$ | async) ? 'toggle-wrapper is-dark' : 'toggle-wrapper'">
    <a
      (click)="onToggle()"
      [ngClass]="toggleOff ? 'toggle-container on-bg' : 'toggle-container'">
      <div
        [@toggleTrigger]="toggleOff ? 'off' : 'on'"
        class="toggle-handle"></div>
    </a>
  </div>`,
  styleUrls: ['./toggle.component.scss'],
  animations: [ toggleRightSlide ]
})
export class ToggleComponent implements OnInit {

  @Input() toggleOff!: boolean;
  @Output() toggleClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() toggledOn: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    public theme: ThemeService
  ) { }

  ngOnInit(): void {
  }

  onToggle() {
    if (this.toggleOff) {
      this.toggleOff = false;
      this.toggledOn.emit(true);
    }
    else {
      this.toggleOff = true;
      this.toggledOn.emit(false);
    }
  }
}
