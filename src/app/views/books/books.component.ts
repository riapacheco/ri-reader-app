import { Component,  OnInit } from '@angular/core';
import { IBook } from 'src/app/interfaces/book.interface';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: IBook[] = [];

  constructor(
    private bookService: BookService
    ) { }

  ngOnInit(): void {
    // this.getBooksSummaries();
  }

  getBooksSummaries() {
    this.bookService.getBookSummaryData().then((res: any) => {
      console.log(res);
    })
  }
}
