import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FloatingMenuService } from 'src/app/services/floating-menu.service';

/**
 * Menu that should appear below the mouse but appears horizontally against any side of view (so it doesn't go off the page)
 * 
 * To get the right location, the component is `position: absolute` 
 * with coordinates of top: { bottom of bounding rect }
 *                      right: 0
 */
@Component({
  selector: 'app-floating-menu',
  templateUrl: './floating-menu.component.html',
  styleUrls: ['./floating-menu.component.scss']
})
export class FloatingMenuComponent implements OnInit {

  @Output() optionClick = new EventEmitter<any>();
  constructor( public menu: FloatingMenuService ) { }

  ngOnInit(): void {
  }

  onOptionClick(data: any) {
    if (data) { this.optionClick.emit(data); }
  }
}
