import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsightsComponent } from 'src/app/views/insights/insights.component';
import { SharedModule } from '../shared.module';
import { InsightsRoutingModule } from './insights-routing.module';




@NgModule({
  declarations: [
    InsightsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InsightsRoutingModule,
    
  ],
  exports: [
    
  ]
})
export class InsightsModule { }
