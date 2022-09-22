import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './views/books/books.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { PassagesComponent } from './views/passages/passages.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent
  },
  {
    path: 'passages',
    component: PassagesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
