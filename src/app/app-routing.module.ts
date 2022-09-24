import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module')
      .then(m => m.DashboardModule)
  },
  {
    path: 'books',
    loadChildren: () => import('./modules/book/book.module')
      .then(m => m.BookModule)
  },
  {
    path: 'passages',
    loadChildren: () => import('./modules/passages/passages.module')
      .then(m => m.PassagesModule)
  },
  {
    path: 'capture',
    loadChildren: () => import('./modules/capture/capture.module')
      .then(m => m.CaptureModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
