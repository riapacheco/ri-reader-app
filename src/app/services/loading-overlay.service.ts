import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoadingOverlayService {

  private _isLoading$ = new BehaviorSubject<boolean>(false);
  public isLoading$: Observable<boolean> = this._isLoading$.asObservable();

  private _loadingSubtitle$ = new BehaviorSubject<string>('');
  public loadingSubtitle$: Observable<string> = this._loadingSubtitle$.asObservable();

  constructor() { }

  public triggerLoadingSpinner(loadingSubtitle: string) {
    this._loadingSubtitle$.next(loadingSubtitle);
    this._isLoading$.next(true);
  }

  public updateLoadingSubtitle(subtitle: string) {
    this._loadingSubtitle$.next(subtitle);
  }

  public dismissSpinner() {
    this._isLoading$.next(false);
  }
}
