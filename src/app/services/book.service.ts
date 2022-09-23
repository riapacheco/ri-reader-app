import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { SUPABASE } from '../constants/supabase.constants';
import { SUPABASE_TABLE } from '../enums/supabase.enums';
import { IBook, IBookGenre, IBookScoreCategory } from '../interfaces/book.interface';
import { IPassage } from '../interfaces/passage.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private supabase!: any;
  
  private _book$: BehaviorSubject<any> = new BehaviorSubject<any>({});
  public book$: Observable<any> = this._book$.asObservable();

  private _books$: BehaviorSubject<IBook[]> = new BehaviorSubject<IBook[]>([]);
  public books$: Observable<IBook[]> = this._books$.asObservable();

  private _bookGenres$: BehaviorSubject<IBookGenre[]> = new BehaviorSubject<IBookGenre[]>([]);
  public bookGenres$: Observable<IBookGenre[]> = this._bookGenres$.asObservable();

  private _bookScoreCategories$: BehaviorSubject<IBookScoreCategory[]> = new BehaviorSubject<IBookScoreCategory[]>([]);
  public bookScoreCategories$: Observable<IBookScoreCategory[]> = this._bookScoreCategories$.asObservable();

  private _passages$: BehaviorSubject<IPassage[]> = new BehaviorSubject<IPassage[]>([]);
  public passages$: Observable<any> = this._passages$.asObservable();

  constructor() { this.supabase = createClient(SUPABASE.projectUrl, SUPABASE.anonKey); }

  /**
   * 
   * @param book The book object which holds muliple passages
   * @returns 
   */
  async addBook(book: IBook) {
    const { data, error } = await this.supabase
      .from(SUPABASE_TABLE.books)
      .select('*')
      .insert([book]);
    return data;
  }

  async getBook(bookId: number) {
    const { data, error } = await this.supabase
      .from(SUPABASE_TABLE.books)
      .select('*')
      .match({ id: bookId });

    if (data) {
      this._book$.next(data);
      const passagesData = await this.getPassages(bookId);
      const genresData = await this.getBookGenres(bookId);
      const bookScoreData = await this.getScoreCategories(bookId);
    }

    return this.book$;
  }

  private getPassages(bookId: number): IPassage[] {
    const { data, error } = this.supabase
      .from(SUPABASE_TABLE.passages)
      .select('*')
      .eq('bookId', bookId)
      this._passages$.next(data);
    return data;
  }

  private getBookGenres(bookId: number): IBookGenre[] {
    const { data, error } = this.supabase
      .from(SUPABASE_TABLE.bookGenres)
      .select('*')
      .eq('bookId', bookId);
      this._bookGenres$.next(data);
    return data;
  }

  private getScoreCategories(bookId: number): IBookScoreCategory[] {
    const { data, error } = this.supabase
      .from(SUPABASE_TABLE.bookScoreCategories)
      .select('*')
      .eq('bookId', bookId);
      this._bookScoreCategories$.next(data);
    return data;
  }
}
