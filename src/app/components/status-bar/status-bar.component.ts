import { Platform } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-bar',
  template: `
    <ng-container *ngIf="isMobile">
      <div class="status-bar"></div>
    </ng-container>
  `,
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {
  isMobile!: boolean;
  constructor(
    private platform: Platform
  ) { }

  ngOnInit(): void {
    this.checkPlatform();
  }

  private checkPlatform() {
    switch(true) {
      case this.platform.ANDROID || this.platform.IOS:
        this.isMobile = true;
        break;

      case this.platform.isBrowser:
        this.isMobile = false;
        break;
      
      default:
        this.isMobile = false;
    }
    console.log(this.isMobile);
  }
}
