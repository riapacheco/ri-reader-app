import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ThemeService } from 'src/app/services/theme.service';

export interface INavButton {
  icon?: string;
  label?: string;
  target?: string;
  routerLink?: string;
  isActive?: boolean;
}
export type TShadowStyle = 'dark' | 'medium' | 'faint' ;

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent implements OnInit {
  @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>();
  @Input() buttons: INavButton[] = [];
  @Input() shadowStyle: TShadowStyle = 'faint';
  @Input() componentClass!: string[];

  private sub = new Subscription();
  constructor(
    public router: Router,
    private theme: ThemeService
  ) { }

  ngOnInit(): void {
    this.componentClass = ['bottom-nav'];
    this.checkTheme();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private checkTheme() {
    const theme = this.theme.getInitTheme();
    if (theme == 'dark') { this.componentClass.push('dark'); }
    else if (theme == 'light') { this.componentClass = this.componentClass.filter((x: any) => x !== 'dark'); }
    
  }

  drawShadow(shadowStyle: TShadowStyle): string {
    if (shadowStyle == 'dark') { return '0px -20px 55px #01041b50'; }
    else if (shadowStyle == 'medium') { return '0px -20px 55px #01041b2b'; }
    else { return '0px -20px 55px #01041b12'; }
  }

  onButtonClick(data: any) {
    this.buttonClick.emit(data);
  }
}
