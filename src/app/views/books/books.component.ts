import { Component,  OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { BookService } from 'src/app/services/book.service';
import { OcrService } from 'src/app/services/ocr.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  bookCards!: any[];


  private sub = new Subscription();
  constructor(
    private bookService: BookService,
    public ocr: OcrService
    ) { }

  ngOnInit(): void {
    this.getBooksList();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private getBooksList() {
    this.bookService.getBookCardData().then((res: any) => {
      this.bookCards = res;
      this.bookCards.map((bookCard: any) => {
        if (bookCard.passages) {
          bookCard.passage_count = bookCard.passages.length;
        }
      })
    })
  }
}
