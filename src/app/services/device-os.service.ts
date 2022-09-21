import { Platform } from '@angular/cdk/platform';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type TPlatformType = 'ios' | 'android' | 'web' | 'none' ;

@Injectable({
  providedIn: 'root'
})
export class DeviceOsService {

  // iOS Platform
  private _iosPlatform$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public iosPlatform$: Observable<boolean> = this._iosPlatform$.asObservable();

  // Android Platform
  private _androidPlatform$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public androidPlatform$: Observable<boolean> = this._androidPlatform$.asObservable();

  // Web Platform
  private _webPlatform$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public webPlatform$: Observable<boolean> = this._webPlatform$.asObservable();

  constructor(
    private platform: Platform
  ) { }

  runPlatformMonitor() {
    switch (true) {
      case this.platform.IOS:
        this.updatePlatformState('ios');
        break;
        case this.platform.ANDROID:
          this.updatePlatformState('android');
          break;
          case this.platform.isBrowser:
            this.updatePlatformState('web');
            break;
            default:
              
    }
  }

  private updatePlatformState(platform: TPlatformType) {
    switch(platform) {
      case 'ios':
        this._iosPlatform$.next(true);
        this._androidPlatform$.next(false);
        this._webPlatform$.next(false);
        break;

        case 'android':
          this._iosPlatform$.next(false);
          this._androidPlatform$.next(true);
          this._webPlatform$.next(false);
          break;

          case 'web':
            this._iosPlatform$.next(false);
            this._androidPlatform$.next(false);
            this._webPlatform$.next(false);
            break;

            case 'none':
              this.resetPlatforms();
              break;

              default:
                this.resetPlatforms();
    }
  }


  private resetPlatforms() {
    this._iosPlatform$.next(false);
    this._androidPlatform$.next(false);
    this._webPlatform$.next(false);
  }
}
