import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { OutsideClickDirective } from './directives/outside-click.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterAllPipe } from './pipes/filter-all.pipe';
import { VerticalResizeDirective } from './directives/vertical-resize.directive';
import { LoginRegisterComponent } from './views/login-register/login-register.component';
import { AuthService } from './services/auth.service';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AngularFireModule } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { FireAuthService } from './services/fire-auth.service';
import { ThemeService } from './services/theme.service';

import { DeviceOsService } from './services/device-os.service';
import { BooksComponent } from './views/books/books.component';
import { PassagesComponent } from './views/passages/passages.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { StatusBarComponent } from './components/status-bar/status-bar.component';
import { CapsPipe } from './pipes/caps.pipe';
import { SupabaseService } from './services/supabase.service';
import { PassageService } from './services/passage.service';
import { BookService } from './services/book.service';



@NgModule({
  declarations: [
    AppComponent,
    OutsideClickDirective,
    FilterPipe,
    FilterAllPipe,
    VerticalResizeDirective,
    LoginRegisterComponent,
    BooksComponent,
    PassagesComponent,
    DashboardComponent,
    TopNavComponent,
    BottomNavComponent,
    StatusBarComponent,
    CapsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    LayoutModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    DragDropModule
  ],
  providers: [
    { 
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    AuthService,
    FireAuthService,
    ThemeService,
    DeviceOsService,
    SupabaseService,
    PassageService,
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
