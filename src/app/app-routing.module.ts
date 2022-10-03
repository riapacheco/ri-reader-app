import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountProfileComponent } from './views/account-profile/account-profile.component';
import { BooksComponent } from './views/books/books.component';
import { CaptureComponent } from './views/capture/capture.component';
import { InsightsComponent } from './views/insights/insights.component';
import { PassagesComponent } from './views/passages/passages.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full',
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'passages',
    component: PassagesComponent
  },
  {
    path: 'insights',
    component: InsightsComponent
  },
  {
    path: 'capture',
    component: CaptureComponent
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
