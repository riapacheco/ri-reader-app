import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


export interface IFloatingMenuStyle {
  floatsRight?: boolean;
  marginWidth?: number; // translates to %
}

export interface IFloatingMenuOption {
  label?: string;
  target?: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class FloatingMenuService {
  /* ------------------------------ MENU OPTIONS ------------------------------ */
  private _menuOptions$ = new BehaviorSubject<IFloatingMenuOption[]>([
    {
      label: 'default label',
      icon: 'search',
      target: ''
    }
  ]);
  public menuOptions$: Observable<IFloatingMenuOption[]> = this._menuOptions$.asObservable();

  /* ------------------------------ STYLE CONFIG ------------------------------ */
  private _styleConfig$ = new BehaviorSubject<IFloatingMenuStyle>({ floatsRight: false, marginWidth: 5 });
  public styleConfig$: Observable<IFloatingMenuStyle> = this._styleConfig$.asObservable();

  /* ----------- DISTANCE FROM TOP (USING BOTTOM OF ORIGIN ELEMENT) ----------- */
  // use getBoundingClientRect().bottom (on the origin)
  private _topDistance$ = new BehaviorSubject<number>(0);
  public topDistance$: Observable<number> = this._topDistance$.asObservable();

  /* ------------------------------- IF SHOWING ------------------------------- */
  private _showsMenu$ = new BehaviorSubject<boolean>(false);
  public showsMenu$: Observable<boolean> = this._showsMenu$.asObservable();


  constructor(
  ) { }

  callFloatingMenu(menuOptions: IFloatingMenuOption[], styleConfig: IFloatingMenuStyle, topDistance: number) {
    this._menuOptions$.next(menuOptions);
    this._styleConfig$.next(styleConfig);
    this._topDistance$.next(topDistance);
    this._showsMenu$.next(true);
  }

  dismissFloatingMenu() {
    this._showsMenu$.next(false);
  }
}
