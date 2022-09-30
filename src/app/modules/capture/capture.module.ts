import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptureComponent } from 'src/app/views/capture/capture.component';
import { CaptureRoutingModule } from './capture-routing.module';
import { SharedModule } from '../shared.module';
import { CameraService } from 'src/app/services/camera.service';

import { AccordionComponent } from 'src/app/components/accordion/accordion.component';


@NgModule({
  declarations: [
    CaptureComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CaptureRoutingModule,
  ],
  exports: [
    AccordionComponent
  ],
  providers: [
    CameraService
  ]
})
export class CaptureModule { }
