
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ThemeService } from '../services/theme.service';
import { OutsideClickDirective } from '../directives/outside-click.directive';
import { FilterAllPipe } from '../pipes/filter-all.pipe';
import { FilterPipe } from '../pipes/filter.pipe';
import { VerticalResizeDirective } from '../directives/vertical-resize.directive';
import { CapsPipe } from '../pipes/caps.pipe';
import { LoadingOverlayService } from '../services/loading-overlay.service';
import { TopNavComponent } from '../components/top-nav/top-nav.component';
import { EditorComponent } from '../components/editor/editor.component';
import { QuillModule } from 'ngx-quill';
import { PassageService } from '../services/passage.service';



@NgModule({
  declarations: [
    OutsideClickDirective,
    FilterAllPipe,
    FilterPipe,
    VerticalResizeDirective,
    CapsPipe,
    TopNavComponent,
    EditorComponent,
  ],
  imports: [
    CommonModule,
    QuillModule.forRoot(),
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
    FilterPipe,
    TopNavComponent,
    QuillModule,
    EditorComponent
  ],
  providers: [
    ThemeService,
    LoadingOverlayService,
    PassageService
  ]
})
export class SharedModule { }
