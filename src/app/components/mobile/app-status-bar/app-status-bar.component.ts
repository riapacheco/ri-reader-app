import { Component } from '@angular/core';
import { DeviceOsService } from 'src/app/services/device-os.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-app-status-bar',
  template: `
    <ng-container *ngIf="(device.androidPlatform$ | async) || (device.iosPlatform$ | async)">
      <div [ngClass]="(theme.isDark$ | async) ? 'app-status-bar is-dark' : 'app-status-bar' "></div>
    </ng-container>
  `,
  styleUrls: ['./app-status-bar.component.scss']
})
export class AppStatusBarComponent {

  constructor(
    public device: DeviceOsService,
    public theme: ThemeService
  ) { }
}
