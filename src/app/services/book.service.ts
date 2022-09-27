import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { BehaviorSubject } from 'rxjs';
import { SUPABASE } from '../constants/supabase.constants';
import { IBook } from '../interfaces/book.interface';
import { Passage } from '../models/passage.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private supabase!: SupabaseClient;
  
  private _bookCardPreview$ = new BehaviorSubject<IBook[]>([]);
  public bookCardPreview$ = this._bookCardPreview$.asObservable();

  coverImages = [
    '../assets/backgrounds/paint/background_BOB.png',
  ];

  constructor() { this.supabase = createClient(SUPABASE.projectUrl, SUPABASE.anonKey); }

  public async addBookAndPassage({
    book,
    passage
  }:{
    book: Partial<IBook>,
    passage: Partial<Passage>
  }) {
    const { data, error } = await this.supabase
      .from<IBook>('books')
      .insert(book)

    if (data) {
      const { data: passageData, error: passageError } = await this.supabase
        .from('passages')
        .insert({book_id: data[0].id, ...passage}); // adds I from new book
    }
  }


  /* ----------------------------------- GET ---------------------------------- */
  public async getBookCardData(): Promise<any | null | undefined> {
    try {
      const { data, error } = await this.supabase
        .from('books')
        .select(`
          *,
          passages (
            body
          )
        `);
      return data;
    }
    catch (err) {
      console.log(err);
    }
  }
}
