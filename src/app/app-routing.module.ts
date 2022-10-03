import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountProfileComponent } from './views/account-profile/account-profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full',
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
    path: 'insights',
    loadChildren: () => import('./modules/insights/insights.module')
      .then(m => m.InsightsModule)
  },
  {
    path: 'capture',
    loadChildren: () => import('./modules/capture/capture.module')
      .then(m => m.CaptureModule)
  },
  {
    path: 'account',
    component: AccountProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
