import { IBook } from "../interfaces/book.interface";
import { IPassage } from "../interfaces/passage.interface";

export interface IBookListItem extends IBook {
  book?: IBook;
  passages?: IPassage[];
  passage_count?: number;
}

export class BookList {
  private _bookListItems: IBookListItem[] = [];

  constructor(bookListItems: IBookListItem[]) {
    bookListItems.map((eachItem: IBookListItem) => {
      if (eachItem.passages) {
        eachItem.passage_count = eachItem.passages.length;
      }
    });
    this._bookListItems = bookListItems;
  }

  set bookList(bookItems: IBookListItem[]) {
    this._bookListItems = bookItems;
  }
  get bookList() {
    return this._bookListItems;
  }
}
