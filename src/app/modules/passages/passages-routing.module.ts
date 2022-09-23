import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PassagesComponent } from "src/app/views/passages/passages.component";

const routes: Routes = [
  {
    path: '',
    component: PassagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassagesRoutingModule {}