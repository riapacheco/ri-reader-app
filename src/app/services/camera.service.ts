import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * for native camera on mobile devices (iOS and Android)
 */

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  private _image$ = new BehaviorSubject<string>('');
  public image$: Observable<string> = this._image$.asObservable();

  private _base64Image$ = new BehaviorSubject<any>({});
  public base64Image$: Observable<any> = this._base64Image$.asObservable();

  constructor() { }

  async captureImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      source: CameraSource.Prompt,
      resultType: CameraResultType.Base64
    });
    this._image$.next(`data:image/jpeg;base64,${image.base64String}`);
    this._base64Image$.next(image.base64String);

    return image.base64String;
  }
}
