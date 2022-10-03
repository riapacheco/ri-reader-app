
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PassagesComponent } from './views/passages/passages.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { SharedModule } from './shared.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { OcrService } from './services/ocr.service';

import { LoadingComponent } from './components/loading/loading.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { LoadingOverlayService } from './services/loading-overlay.service';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { FloatingMenuComponent } from './components/floating-menu/floating-menu.component';
import { FloatingMenuService } from './services/floating-menu.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponent } from './views/login/login.component';
import { AccountProfileComponent } from './views/account-profile/account-profile.component';
import { BookService } from './services/book.service';
import { BooksComponent } from './views/books/books.component';
import { CardsComponent } from './components/cards/cards.component';
import { CaptureComponent } from './views/capture/capture.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { CameraService } from './services/camera.service';
import { InsightsComponent } from './views/insights/insights.component';

@NgModule({
  declarations: [
    AppComponent,
    PassagesComponent,
    BottomNavComponent,
    LoadingComponent,
    OverlayComponent,
    LoadingOverlayComponent,
    FloatingMenuComponent,
    LoginComponent,
    AccountProfileComponent,
    BooksComponent,
    CardsComponent,
    CaptureComponent,
    AccordionComponent,
    InsightsComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    { 
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    OcrService,
    LoadingOverlayService,
    FloatingMenuService,
    BookService,
    CameraService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
