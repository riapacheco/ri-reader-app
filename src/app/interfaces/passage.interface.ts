
/**
 * Defines the data types for the {@link Passage} class
 */
export interface IPassage {
  id?: number;
  book_id?: number; // FK
  body?: string;
  created_at?: Date;
  note?: string;
  page_number?: string;
  parent_book_title?: string;
}

export interface IPassageNote {
  id?: number;
  passage_id?: number; // FK
  body?: string;
  created_at?: Date;
}
