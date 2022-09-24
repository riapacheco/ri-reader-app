import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CaptureComponent } from "src/app/views/capture/capture.component";

const routes: Routes = [
  {
    path: '',
    component: CaptureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaptureRoutingModule {}
