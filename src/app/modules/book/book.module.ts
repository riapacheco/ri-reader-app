import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './book-routing.module';
import { SharedModule } from '../shared.module';
import { BooksComponent } from 'src/app/views/books/books.component';
import { BookService } from 'src/app/services/book.service';
import { CardsComponent } from 'src/app/components/cards/cards.component';


@NgModule({
  declarations: [
    BooksComponent,
    CardsComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    BookRoutingModule,
  ],
  exports: [
  ],
  providers: [
    BookService
  ]
})
export class BookModule { }
