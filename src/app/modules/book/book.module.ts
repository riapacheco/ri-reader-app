import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './book-routing.module';
import { SharedModule } from '../shared.module';
import { BooksComponent } from 'src/app/views/books/books.component';
import { BookCardComponent } from 'src/app/components/book-card/book-card.component';
import { BookService } from 'src/app/services/book.service';


@NgModule({
  declarations: [
    BooksComponent,
    BookCardComponent
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
