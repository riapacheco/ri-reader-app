import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Meta } from '@angular/platform-browser';

export type TTheme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _isDark$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isDark$: Observable<boolean> = this._isDark$.asObservable();

  /* ------------------------ Local Storage Properties ------------------------ */
  stateKey = 'theme';
  valuelight = 'light';
  valuedark = 'dark';

  constructor(
    private meta: Meta
  ) { }

  /* ----------------- GET LOCAL STORAGE THEME AND UPDATE APP ----------------- */
  // Check local theme and update service variable to match
  public getInitTheme(): any {
    const localState = localStorage.getItem(this.stateKey);
    if (localState == this.valuelight) {
      this.updateServiceState('light');
      return 'light';
    } else if (localState == this.valuedark) {
      this.updateServiceState('dark');
      return 'dark';
    } else {
      // if no local state
      this.updateLocalState('light');
      this._isDark$.next(false);
      return 'light';
    }
  }

  /* --------------------- UPDATE THEME FROM USER CONTROL --------------------- */
  // Update theme to match arg passed in request (TTheme)
  public updateTheme(themeRequest: TTheme) {
    this.updateServiceState(themeRequest);
    this.updateLocalState(themeRequest);
    this.updateStatusBar(themeRequest);
  }

  /* ----------------------------- PRIVATE HELPERS ---------------------------- */
  // Update service's behaviorSubject
  private updateServiceState(themeRequest: TTheme) {
    if (themeRequest == 'dark') { this._isDark$.next(true); }
    else if (themeRequest == 'light') { this._isDark$.next(false); }
  }

  // Update local storage
  private updateLocalState(themeRequest: TTheme) {
    if (themeRequest == 'dark') { localStorage.setItem(this.stateKey, this.valuedark); }
    else if (themeRequest == 'light') { localStorage.setItem(this.stateKey, this.valuelight); }
  }

  // Add meta tag to index.html file to change mobile statusbar
  private updateStatusBar(themeRequest: TTheme) {
    if (themeRequest == 'dark') { this.meta.addTag({ name: 'apple-mobile-web-app-status-bar-style', content: 'white' }) }
    else if (themeRequest == 'light') { this.meta.addTag({ name: 'apple-mobile-web-app-status-bar-style', content: 'black' }) }
    else { this.meta.addTag({ name: 'apple-mobile-web-app-status-bar-style', content: 'black' }) };
  }

}
