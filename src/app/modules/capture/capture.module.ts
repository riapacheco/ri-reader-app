import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptureComponent } from 'src/app/views/capture/capture.component';
import { CaptureRoutingModule } from './capture-routing.module';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    CaptureComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CaptureRoutingModule
  ],
  exports: [
  ],
  providers: [

  ]
})
export class CaptureModule { }
