import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { SUPABASE } from '../constants/supabase.constants';
import { IBook } from '../interfaces/book.interface';
import { IPassage } from '../interfaces/passage.interface';
import { Passages } from '../models/passage.model';
import { BookService } from './book.service';

@Injectable({
  providedIn: 'root'
})
export class PassageService {
  private supabase!: SupabaseClient;
  private passages!: IPassage[];

  constructor(
    private bookService: BookService
  ) { this.supabase = createClient(SUPABASE.projectUrl, SUPABASE.anonKey); }

  // Trying with more succinct call
  public async getPassages(): Promise<IPassage[] | null | undefined> {
    if (!this.passages) {
      try {
        const { data, error } = await this.supabase.from('passages').select('*, books(*)');
        if (data) { this.passages = new Passages(data).passages }
        return this.passages;
      } catch (error) { console.warn(error); return; }
    }
    else {
      console.log('Did not call DB');
      return this.passages;
    }
  }

  // every passage requires a book.
  public async addPassage({ book, passage }:{ book: Partial<IBook>, passage: Partial<IPassage>}) {
    const { data, error } = await this.supabase.from<IBook>('books').insert(book);
    if (data) {
      const { data: passageData, error: passageError } = await this.supabase
      .from<IPassage>('passages')
      .insert({ book_id: data[0].id, ...passage});
    }
  }
}
