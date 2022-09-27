import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './book-routing.module';
import { SharedModule } from '../shared.module';
import { BooksComponent } from 'src/app/views/books/books.component';
import { BookService } from 'src/app/services/book.service';
import { BookCardsComponent } from 'src/app/components/book-cards/book-cards.component';


@NgModule({
  declarations: [
    BooksComponent,
    BookCardsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BookRoutingModule
  ],
  exports: [
    
  ],
  providers: [
    BookService
  ]
})
export class BookModule { }
