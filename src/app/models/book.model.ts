import { IBook } from "../interfaces/book.interface";

/**
 * The bleh bleh
 */
export class Book {
  private _title!: string;
  constructor(book: IBook) {
    this._title = book.title;
  }

  get title() {
    return this._title;
  }
}

export class IBookCardState {
  
}
export class BookCardState {
  constructor(

  ) {

  }
}
