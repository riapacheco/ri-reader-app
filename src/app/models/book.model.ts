import { IBook } from "../interfaces/book.interface";

/* ---------------------------------- BOOK ---------------------------------- */
export class Book {
  private _id!: number;
  private _title!: string;
  private _passages!: object[] | undefined;
  private _bookScores!: object[] | undefined;
  private _book!: IBook;

  constructor(book: IBook) {
    this._id = book.id;
    this._title = book.title;
    this._passages = book.passages;
    this._bookScores = book.bookScores; // likely have to do something SPESH here (but will wait until I dick around with Postgres)
    this._book = book;
  }

  get book() { return this._book; }
  get id() { return this._id; }
  get title() { return this._title; }
  get passages() { return this._passages; }
  get bookScores() { return this._bookScores; }
}

/* -------------------------------- BOOK LIST ------------------------------- */
export class BookList {
  private _books!: IBook[];
  

  constructor(books: IBook[]) {
    this._books = books;
  }

  get books() { return this._books; }
}
