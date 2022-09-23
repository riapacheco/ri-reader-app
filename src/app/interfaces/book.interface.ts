import { Timestamp } from "rxjs";
import { IPassage } from "./passage.interface";

/**
 * Interface that defines the {@link Book} object's data types
 */
export interface IBook {
  id: number;
  title: string;
  author?: string;
  description?: string;
  createdAt?: Timestamp<any>;


  // Not "stored" in database
  passages?: IPassage[];
  genres?: IBookGenre[];
  bookScores?: IBookScoreCategory[];
}

/**
 * Interface for Ref Table that holds the ID of a {@link Book} 
 * and the ID of an associated {@link Passage}
 * Relationship is 1-to-many
 */
export interface IBookPassagesRelation {
  id: number;
  book: number;
  passage: number;
}

/**
 * Interface for Ref Table that holds the ID of a {@link Book} 
 * and the ID of a related {@link BookGenre}
 * Relationship is 1-to-many
 */
export interface IBookGenresRelation {
  id: number;
  book: number;
  genre: number;
}
/**
 * Interface for Ref Table that holds the ID of a {@link Book} 
 * and the ID of a related {@link BookScoreCategory}
 * Relationship is 1-to-5
 */
export interface IBookScoreCategoriesRelation {
  id: number;
  book: number;
  scoreCategory: number;
}

/**
 * Interface that defines the {@link BookGenre} 's data types
 */
export interface IBookGenre {
  id: number;
  createdAt?: Timestamp<any>;
  label: string;
  target?: string;
  description?: string;
}

/**
 * Interface that defines the {@link BookScoreCategory} 's data types
 */
export interface IBookScoreCategory {
  id: number;
  createdAt?: Timestamp<any>;
  label: string;
  potentialPoints: number;
  value?: number;
  target?: string;
  description?: string;
}