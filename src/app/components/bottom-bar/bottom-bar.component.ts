import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service';

export interface IBottomBarOption {
  icon: string;
  target?: string;
  routerLink?: string;
}

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent {
  @Output() optionClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() actionClick: EventEmitter<any> = new EventEmitter<any>();

  @Input() mainOption: IBottomBarOption = {
    icon: 'bookmark_add',
    target: 'addPassage',
    routerLink: '',
  }
  @Input() leftOptions: IBottomBarOption[] = [
    {
      icon: 'library_books',
      target: 'libraryBooksTarget',
      routerLink: '',
    },
    {
      icon: 'bookmarks',
      target: 'passagesTarget',
      routerLink: '',
    }
  ];
  @Input() rightOptions: IBottomBarOption[] = [
    {
      icon: 'category',
      target: 'manageScoringTarget',
      routerLink: '',
    },
    {
      icon: 'auto_graph',
      target: 'insightsTarget',
      routerLink: '',
    }
  ];

  constructor(
    private router: Router,
    public theme: ThemeService
  ) { }


  onOptionClick(value: any) { this.optionClick.emit(value); }
  onRouteActivate(route: string) { this.router.navigateByUrl(route); }
  onActionClick(value: any) { this.actionClick.emit(value); }
}
