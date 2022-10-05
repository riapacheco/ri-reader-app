import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ObservedValueOf } from 'rxjs';
import * as Tesseract from 'tesseract.js';

@Injectable({
  providedIn: 'root'
})
export class OcrService {
  private worker: Tesseract.Worker = Tesseract.createWorker();
  private ocrLoaded!: boolean;
  private ocrResult!: string;

  private _loadingStatus$ = new BehaviorSubject<string>('');
  public loadingStatus$: Observable<string> = this._loadingStatus$.asObservable();

  private _loadingTimestamp$ = new BehaviorSubject<string>('');
  public loadingTimestamp$: Observable<string> = this._loadingTimestamp$.asObservable();

  private _ocrResult$ = new BehaviorSubject<string>('');
  public ocrResult$: Observable<string> = this._ocrResult$.asObservable();

  private _confirmLength$ = new BehaviorSubject<boolean>(false);
  public confirmLength$: Observable<boolean> = this._confirmLength$.asObservable();

  constructor(
    
  ) { }

  public async scanImage(event: any) {
    
    await this.initTesseract();

    if (this.ocrLoaded && event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.result) {
          this.translateImage(reader.result);
        }
      }
    }

    return true;
  }

  private async initTesseract() {
    await this.worker.load();
    await this.worker.loadLanguage('eng');
    await this.worker.initialize('eng');
    this.ocrLoaded = true;
  }

  private async translateImage(base64Image: string | any) {
    const startTime = new Date().toLocaleTimeString();
    const startMessage = `Scan start: ${startTime}`;

    // this.loadingOverlayService.triggerLoadingSpinner(startMessage);

    this._loadingTimestamp$.next(startMessage);
    this._loadingStatus$.next(`OCR scan started [${startTime}]`)
    
    if (this.ocrLoaded) {
      const data = await this.worker.recognize(base64Image);
      this.ocrResult = data.data.text;
      this._ocrResult$.next(data.data.text);
    }

    const endTime = new Date().toLocaleTimeString();
    const endMessage = `Scan end: ${endTime}`;
    
    // this.loadingOverlayService.updateLoadingSubtitle(endMessage);

    this._loadingTimestamp$.next(endMessage);
    this._loadingStatus$.next(`OCR scan ended [${endTime}]`);

    setTimeout(() => {
      // this.loadingOverlayService.dismissSpinner();
      setTimeout(() => {
        this._confirmLength$.next(true);
      }, 100);
    }, 280);

    setTimeout(() => {
      this._confirmLength$.next(false);
    }, 2000);

    return this.ocrResult;
  }

  public resetTimestamp() {
    this._loadingTimestamp$.next('');
  }

  public clearText() {
    this._ocrResult$.next('');
  }
}
