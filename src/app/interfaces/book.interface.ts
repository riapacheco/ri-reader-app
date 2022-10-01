
/**
 * Defines the {@link Book} object's data types
 */
export interface IBook {
  id?: number;
  title?: string;
  cover_image?: string;
  created_at?: Date;
  author?: string;
  target?: string;
  description?: string;
  passages?: any;
}


export interface IBookGenreRef {
  id?: number;
  created_at?: Date;
  book_genre_id: number;
  book_id: number;
}


/**
 * A {@link IBookGenre} is more or less just a category (or tag) that the user can attach to a {@link Book} for better cataloging
 */
export interface IBookGenre {
  id?: number;
  created_at: Date;
  label: string;
  target?: string;
  description?: string;
  book_genre_ref_id?: number;
}

/**
 * A {@link IBookScoreTotal} is the total of 5 different {@link IBookScoreCategory}ies combined. It also tracks a pool of (for now) 100 points that the user can distribute among those 5 categories
 */
export interface IBookScoreTotal {
  id?: number;
  book_id?: number;
  created_at?: any;
  updated_at?: any;
  point_pool?: number;
  total_point_capacity?: number;
  total_point_value?: number;
  percentage_score?: number;
}


/**
 * A {@link IBookScoreCategory} one of 5 categories (labelled by the user) which is related to a single book. The user is able to apply scores to each categories, but also apply weighting since all scores must total a sum of 100 points
 */
export interface IBookScoreCategory {
  id?: number;
  book_score_total_id?: number;
  created_at?: Date;
  updated_at?: Date;
  point_capacity?: number;
  point_value?: number;
}
