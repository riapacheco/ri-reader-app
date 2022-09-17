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

import { AngularFireModule } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { FireAuthService } from './services/fire-auth.service';
import { ThemeService } from './services/theme.service';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { DrawerMenuComponent } from './components/drawer-menu/drawer-menu.component';
import { ToggleComponent } from './components/controls/toggle/toggle.component';


@NgModule({
  declarations: [
    AppComponent,
    OutsideClickDirective,
    FilterPipe,
    FilterAllPipe,
    VerticalResizeDirective,
    LoginRegisterComponent,
    TopBarComponent,
    BottomBarComponent,
    DrawerMenuComponent,
    ToggleComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    LayoutModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    { 
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    AuthService,
    FireAuthService,
    ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
