import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { map } from 'rxjs';
import { from, Observable } from 'rxjs';
import { SUPABASE } from '../constants/supabase.constants';
import { SUPABASE_TABLE } from '../enums/supabase.enums';
import { IPassage } from '../interfaces/passage.interface';

@Injectable({
  providedIn: 'root'
})
export class PassageService {
  private supabase!: any;
  constructor() { this.supabase = createClient(SUPABASE.projectUrl, SUPABASE.anonKey); }

  /**
   * 
   * @param passage An object to the type of {@link IPassage}
   * @returns that object if successful.
   */
  async addPassage(passage: IPassage) {
    const { data, error } = await this.supabase
      .from(SUPABASE_TABLE.passages)
      .insert([passage]);
    return data;
  }

  /**
   * 
   * @param fieldName IF not undefined, name of field to apply order() to 
   * @param isAscending IF not undefined, direction of order()
   * @returns query object - destructure to { data, error }
   */
  async getPassages(fieldName?: string, isAscending?: boolean) {
    const query = this.supabase.from(SUPABASE_TABLE.passages).select('*')

    if (fieldName !== undefined && isAscending !== undefined) {
      query.order(fieldName, { ascending: isAscending});
    }

    return from(query).pipe(map((res: any) => res['body']));
  }


}
