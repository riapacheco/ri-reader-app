import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { SUPABASE } from '../constants/supabase.constants';
import { IBook } from '../interfaces/book.interface';
import { IPassage } from '../interfaces/passage.interface';
import { BookList, IBookListItem } from '../models/book.model';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  private supabase!: SupabaseClient;
  private bookList!: IBookListItem[];

  constructor() { this.supabase = createClient(SUPABASE.projectUrl, SUPABASE.anonKey); }

  /* ----------------------------------- GET ---------------------------------- */
  public async getBookListData(): Promise<IBookListItem[] | null | undefined> {
    // IF local obj has nothing in it, THEN call Database
    if (!this.bookList) {
      try {
        const { data, error } = await this.supabase.from('books').select('*, passages(body)');
        // BookList model: insantiates + assigns passages.length (FK) to each's `passage_count`
        if (data) { this.bookList = new BookList(data).bookList; }
        return this.bookList;
      }
      catch(error) {
        console.warn(error);
        return;
      }
    } else { // ELSE: return what was stored the first time
      console.log(`Didn't call 'books' database`); 
      return this.bookList; 
    }
  }


  /* --------------------------------- CREATE --------------------------------- */
  public async addBookAndPassage({ book, passage }:{ book: Partial<IBook>, passage: Partial<IPassage>}) {
    const { data, error } = await this.supabase
      .from<IBook>('books')
      .insert(book)
    if (data) {
      const { data: passageData, error: passageError } = await this.supabase
        .from('passages')
        .insert({book_id: data[0].id, ...passage}); // adds I from new book
    }
  }

  public async addBook(book: IBook) {
    try {
      const { data, error } = await this.supabase
        .from<IBook>('books')
        .insert(book);
      return data;
    }
    catch (error) {
      console.warn(error);
      return;
    }
  }
}
