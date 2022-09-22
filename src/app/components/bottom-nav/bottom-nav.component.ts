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
  @Input() buttons: INavButton[] = [
    {
      icon: 'auto_stories',
      label: 'books',
      target: '',
      routerLink: '/books',
      isActive: false
    },
    {
      icon: 'bookmarks',
      label: 'passages',
      target: '',
      routerLink: '/passages',
      isActive: false
    },
    {
      icon: 'auto_graph',
      label: 'insights',
      target: '',
      routerLink: '/dashboard',
      isActive: true
    },
    {
      icon: 'settings',
      label: 'settings',
      target: '',
      routerLink: '/settings',
      isActive: false
    }
  ];

  
  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(event: any, targetString: any) {
    if (event) { this.buttonClick.emit(targetString); }
  }
}
