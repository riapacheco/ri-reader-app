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

  /**
   *  
   * @param bookId The ID of the book that holds errything
   * @returns Observable<IBook>
   *          Also populates observables with passages etc. from querying
   */
  async getBook(bookId: number) {
    let returnData = [];

    const { data, error } = await this.supabase
      .from(SUPABASE_TABLE.books)
      .select('*')
      .match({ id: bookId });

    this._book$.next(data);
    const passagesData = await this.getPassages(bookId);
    const genresData = await this.getBookGenres(bookId);
    const bookScoreData = await this.getScoreCategories(bookId);

    if (passagesData) { returnData.push(passagesData); }
    if (genresData) { returnData.push(genresData); }
    if (bookScoreData) { returnData.push(bookScoreData); }

    console.log(returnData);
    return data;
  }

  private async getPassages(bookIdData: number) {
    const { data, error } = await this.supabase
      .from(SUPABASE_TABLE.passages)
      .select('*')
      .eq('bookId', bookIdData);
      
    return data;
  }

  private async getBookGenres(bookId: number) {
    const { data, error } = this.supabase
      .from(SUPABASE_TABLE.bookGenres)
      .select('*')
      .eq('bookId', bookId);
      this._bookGenres$.next(data);
    return data;
  }

  private async getScoreCategories(bookId: number) {
    const { data, error } = await this.supabase
      .from(SUPABASE_TABLE.bookScoreCategories)
      .select('*')
      .eq('bookId', bookId);
      this._bookScoreCategories$.next(data);
    return data;
  }
}
