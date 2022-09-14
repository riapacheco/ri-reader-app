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
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    OutsideClickDirective,
    FilterPipe,
    FilterAllPipe,
    VerticalResizeDirective,
    LoginRegisterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    LayoutModule,
    BrowserAnimationsModule
  ],
  providers: [
    { 
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
