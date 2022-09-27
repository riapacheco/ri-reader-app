import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegisterComponent } from './views/login-register/login-register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PassagesComponent } from './views/passages/passages.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { StatusBarComponent } from './components/status-bar/status-bar.component';
import { SharedModule } from './modules/shared.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { OcrService } from './services/ocr.service';

import { LoadingComponent } from './components/loading/loading.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { LoadingOverlayService } from './services/loading-overlay.service';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { FloatingMenuComponent } from './components/floating-menu/floating-menu.component';
import { FloatingMenuService } from './services/floating-menu.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterComponent,
    PassagesComponent,
    DashboardComponent,
    TopNavComponent,
    BottomNavComponent,
    StatusBarComponent,
    LoadingComponent,
    OverlayComponent,
    LoadingOverlayComponent,
    FloatingMenuComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { 
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    OcrService,
    LoadingOverlayService,
    FloatingMenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
