import { IBook } from "./book.interface";

/**
 * Defines the data types for the {@link Passage} class
 */
export interface IPassage {
  id?: number;
  book_id?: number;
  body?: string;
  created_at?: Date;
  page_number?: number;
  target?: string;

  books?: IBook[]; // FK returns
  book?: IBook; // assigns to this object
}

/**
 * Defines the data types for the `PassageTag`. 
 * 
 * Enables user filtering / sorting later
 */
export interface IPassageTag {
  id?: number;
  passage_id?: number;
  created_at?: Date;
  label?: string;
  target?: string;
  description?: string;
}

/**
 * Defines the data types for the `PassageNote`
 * 
 * Enables the leaving of a longer text string for added context when reviewing a passage in the future
 */
export interface IPassageNote {
  id?: number;
  passage_id?: number;
  created_at?: Date;
  body?: string;
  target?: string;
  description?: string;
}