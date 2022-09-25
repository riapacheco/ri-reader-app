import { Component,  OnInit } from '@angular/core';
import { last, Subscription } from 'rxjs';
import { IBook } from 'src/app/interfaces/book.interface';

import { BookService } from 'src/app/services/book.service';
import { OcrService } from 'src/app/services/ocr.service';

export interface IBookSummary {
  title?: string;
  passage_count?: number;
  cover_image?: string;
  passages?: any;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  bookSummaries!: IBookSummary[] | any[];
  cardCount!: number;
  passageCount!: number;

  private sub = new Subscription();
  constructor(
    private bookService: BookService,
    public ocr: OcrService
    ) { }

  ngOnInit(): void {
    this.getBooksSummaries()
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getBooksSummaries() {
    this.bookService.getBookSummaryData().then((res: IBookSummary[]) => {
      this.bookSummaries = res;
      this.cardCount = this.bookSummaries.length;
      
    })
  }
}
