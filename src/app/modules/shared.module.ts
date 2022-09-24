import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ThemeService } from '../services/theme.service';
import { DeviceOsService } from '../services/device-os.service';
import { FireAuthService } from '../services/fire-auth.service';
import { SupabaseService } from '../services/supabase.service';
import { AuthService } from '../services/auth.service';
import { OutsideClickDirective } from '../directives/outside-click.directive';
import { FilterAllPipe } from '../pipes/filter-all.pipe';
import { FilterPipe } from '../pipes/filter.pipe';
import { VerticalResizeDirective } from '../directives/vertical-resize.directive';
import { CapsPipe } from '../pipes/caps.pipe';

@NgModule({
  declarations: [
    OutsideClickDirective,
    FilterAllPipe,
    FilterPipe,
    VerticalResizeDirective,
    CapsPipe
  ],
  imports: [
    CommonModule,
    LayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    DragDropModule,
  ],
  exports: [
    LayoutModule,
    AngularFireModule,
    FormsModule,
    DragDropModule,
    OutsideClickDirective,
    FilterAllPipe,
    FilterPipe
  ],
  providers: [
    ThemeService,
    DeviceOsService,
    FireAuthService,

    SupabaseService,
    AuthService
  ]
})
export class SharedModule { }
