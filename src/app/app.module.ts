import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegisterComponent } from './views/login-register/login-register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BooksComponent } from './views/books/books.component';
import { PassagesComponent } from './views/passages/passages.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { StatusBarComponent } from './components/status-bar/status-bar.component';
import { SharedModule } from './modules/shared.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterComponent,
    BooksComponent,
    PassagesComponent,
    DashboardComponent,
    TopNavComponent,
    BottomNavComponent,
    StatusBarComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
