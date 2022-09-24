import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface INavButton {
  icon?: string;
  label?: string;
  target?: string;
  routerLink?: string;
  isActive?: boolean;
}
@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent implements OnInit {
  @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>();
  @Input() buttons: INavButton[] = [];

  
  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(data: any) {
    this.buttonClick.emit(data);
  }
}
