import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as Tesseract from 'tesseract.js';

@Injectable({
  providedIn: 'root'
})
export class OcrService {
  private worker: Tesseract.Worker = Tesseract.createWorker();
  private ocrLoaded!: boolean;
  private ocrResult!: string;

  private _counter$ = new BehaviorSubject<number>(1);
  public counter$: Observable<number> = this._counter$.asObservable();

  private _loadingStatus$ = new BehaviorSubject<string>('');
  public loadingStatus$: Observable<string> = this._loadingStatus$.asObservable();

  private _ocrResult$ = new BehaviorSubject<string>('');
  public ocrResult$: Observable<string> = this._ocrResult$.asObservable();


  constructor() { }

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
  }

  private async initTesseract() {
    await this.worker.load();
    await this.worker.loadLanguage('eng');
    await this.worker.initialize('eng');
    this.ocrLoaded = true;
  }

  private async translateImage(base64Image: string | any) {
    const startTime = new Date().toLocaleTimeString();
    this._loadingStatus$.next(`OCR scan started [${startTime}]`)
    
    if (this.ocrLoaded) {
      const data = await this.worker.recognize(base64Image);
      this.ocrResult = data.data.text;
      this._ocrResult$.next(data.data.text);
    }

    const endTime = new Date().toLocaleTimeString();
    this._loadingStatus$.next(`OCR scan ended [${endTime}]`);

    return this.ocrResult;
  }
}
