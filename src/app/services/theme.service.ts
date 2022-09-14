import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _isDark$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isDark$: Observable<boolean> = this._isDark$.asObservable();

  constructor() { }

  setDarkThemeTo(newTheme: boolean) { this._isDark$.next(newTheme); }
}
