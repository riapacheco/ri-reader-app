import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(
    public book: BookService
  ) { }

  ngOnInit(): void {
    this.getBook();
  }

  getBook() {
    this.book.getBook(3).then((res: any) => {
      console.log(res);
    })
  }
}
