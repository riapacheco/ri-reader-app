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
  searchText = '';
  
  private sub = new Subscription();
  constructor(
    public ocr: OcrService,
    private book: BookService
  ) { }

  ngOnInit(): void {
    this.getBooks();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getBooks() {
    this.book.getBookCardData().then((data: any[]) => {
      data.map((book: any) => {
        if (book.passages) {
          book.passage_count = book.passages.length;
        }
      })
      this.bookCards = data;
      console.log(this.bookCards);
    })
  }

  onSearch(data: any) {
    this.searchText = data;
  }
}
