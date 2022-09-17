import { Injectable } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

export type TTheme = 'lightTheme' | 'darkTheme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _isDark$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isDark$: Observable<boolean> = this._isDark$.asObservable();

  /* ------------------------ Local Storage Properties ------------------------ */
  stateKey = 'theme';
  valueLightTheme = 'lightTheme';
  valueDarkTheme = 'darkTheme';

  constructor() { }

  /* ----------------- GET LOCAL STORAGE THEME AND UPDATE APP ----------------- */
  // Check local theme and update service variable to match
  public getInitTheme(): any {
    const localState = localStorage.getItem(this.stateKey);
    if (localState == this.valueLightTheme) {
      this.updateServiceState('lightTheme');
      return 'lightTheme';
    } else if (localState == this.valueDarkTheme) {
      this.updateServiceState('darkTheme');
      return 'darkTheme';
    } else {
      // if no local state
      this.updateLocalState('lightTheme');
      this._isDark$.next(false);
      return 'initial set to light theme';
    }
  }

  /* --------------------- UPDATE THEME FROM USER CONTROL --------------------- */
  // Update theme to match arg passed in request (TTheme)
  public updateTheme(themeRequest: TTheme) {
    this.updateServiceState(themeRequest);
    this.updateLocalState(themeRequest);
  }

  /* ----------------------------- PRIVATE HELPERS ---------------------------- */
  // Update service's behaviorSubject
  private updateServiceState(themeRequest: TTheme) {
    if (themeRequest == 'darkTheme') { this._isDark$.next(true); }
    else if (themeRequest == 'lightTheme') { this._isDark$.next(false); }
  }

  // Update local storage
  private updateLocalState(themeRequest: TTheme) {
    if (themeRequest == 'darkTheme') { localStorage.setItem(this.stateKey, this.valueDarkTheme); }
    else if (themeRequest == 'lightTheme') { localStorage.setItem(this.stateKey, this.valueLightTheme); }
  }

}
