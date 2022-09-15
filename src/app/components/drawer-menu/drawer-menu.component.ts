import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { menuSlideOut } from 'src/app/constants/animation.constants';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-drawer-menu',
  templateUrl: './drawer-menu.component.html',
  styleUrls: ['./drawer-menu.component.scss'],
  animations: [ menuSlideOut ]
})
export class DrawerMenuComponent implements OnInit {

  @Input() showsMenu = false;
  @Output() closeClick: EventEmitter<any> = new EventEmitter<any>();

  // toggle component
  toggleOff!: boolean;

  constructor(
    public theme: ThemeService
  ) { }

  ngOnInit(): void {
    if (this.theme.isDark$) { this.toggleOff = false; }
    else { this.toggleOff = true; }
  }

  onToggleSwitch(toggledOn: boolean) {
    if (toggledOn) {
      this.theme.setDarkThemeTo(false);
    } else { this.theme.setDarkThemeTo(true); }
  }

  onCloseClick(e: any) {
    this.closeClick.emit(e);
  }
}
