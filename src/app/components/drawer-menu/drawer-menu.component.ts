import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { menuSlideOut } from 'src/app/constants/animation.constants';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-drawer-menu',
  templateUrl: './drawer-menu.component.html',
  styleUrls: ['./drawer-menu.component.scss'],
  animations: [ menuSlideOut ]
})
export class DrawerMenuComponent {

  @Input() showsMenu = false; // mobile menu
  @Input() toggleOff!: boolean; // from toggle component, then passed to parent
  @Output() closeClick: EventEmitter<any> = new EventEmitter<any>(); // to close mobile menu
  @Output() themeUpdate: EventEmitter<any> = new EventEmitter<any>(); // to update theme
  
  constructor(
    public theme: ThemeService
  ) { }

  onThemeUpdate(toggleEvent: any) {
    this.themeUpdate.emit(toggleEvent);
  }

  onCloseClick(e: any) {
    this.closeClick.emit(e);
  }
}
