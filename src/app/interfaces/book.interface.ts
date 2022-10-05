import { IPassage } from "./passage.interface";

/**
 * Defines the {@link Book} object's data types
 */
export interface IBook {
  id?: number;
  title?: string;
  author?: string;
  cover_image?: string;
  passages_count?: number;
  created_at?: Date;
  user_id?: number; // FK
  book_score_id?: number;
  book_tag_junction_id?: number; // FK

  passages?: IPassage[];
  book_tags?: IBookTag[];
}

export interface IBookTagsJunction {
  id?: number;
  book_id?: any;
  book_tag_id?: any;
}

export interface IBookTag {
  id?: number;
  created_at?: Date;
  label?: string;
  book_tag_junction_id?: number; // FK
}
