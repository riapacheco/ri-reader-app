import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { from, Observable } from 'rxjs';
import { SUPABASE } from '../constants/supabase.constants';
import { TSupabaseTable } from '../types/supabase.types';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * This service is more or less a one-size fits all for flexible querying.
 */
export class SupabaseService {
  private _supabase!: any;

  constructor() {
    this._supabase = createClient(SUPABASE.projectUrl, SUPABASE.anonKey);
  }

  /**
   * 
   * @param tableName Name of table to query from supabase
   * @param fieldName IF not undefined, defines the column to apply order() to
   * @param isAscending IF not undefined, defines direction of order
   * @returns Table as observable in order specified (if specified)
   */
  getAll(tableName: TSupabaseTable, fieldName?: string, isAscending?: boolean): Observable<any> {
    const query = this._supabase.from(tableName).select('*')
    if (fieldName !== undefined && isAscending !== undefined) {
      query.order(fieldName, { ascending: isAscending });
    }
    return from(query).pipe(map((res: any) => res['body']));
  }

  /**
   * Only should be 
   * @param tableName Name of table to insert data into
   * @param object Actual data to be passed through with { column_name: 'value' }
   * @returns whatever data was inserted if successful
   */
  async update(tableName: TSupabaseTable, object: object) {
    const { data, error } = await this._supabase.from(tableName)
                                                .insert([object]);
    return data;
  }

  
  
}
