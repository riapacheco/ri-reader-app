
/**
 * Defines the {@link Book} object's data types
 */
export interface IBook {
  /** Primary Key */
  id: number;
  /** Title of the work, of which the user will rely on for cataloging and searching */
  title: string;
  /** Date and time the book was created in the app */
  createdAt: Date;
  /** Optional book detail naming who wrote the book */
  author?: string;
  /** Extra potential single-line identifier */
  target?: string;
  /** Extra potential body text */
  description?: string;
}


/**
 * A {@link IBookGenre} is more or less just a category (or tag) that the user can attach to a {@link Book} for better cataloging
 */
export interface IBookGenre {
  /** The primary key */
  id: number;
  /** Foreign key related to the {@link Book}'s PK */
  bookId: number;
  /** Date and time the genre was created in the app */
  createdAt: Date;
  /** The text label that defines the genre */
  label: string;
  /** Extra single-line identifier string */
  target?: string;
  /** Extra body text string */
  description?: string;
}

/**
 * A {@link IBookScoreTotal} is the total of 5 different {@link IBookScoreCategory}ies combined. It also tracks a pool of (for now) 100 points that the user can distribute among those 5 categories
 */
export interface IBookScoreTotal {
  /** Primary Key */
  id: number;
  /** Forieng Key related to the {@link Book} it's related to */
  bookId: number;
  /** Date / Time the score total was originally created */
  createdAt: Date;
  /** Date / Time the book score was last updated or calculated */
  updatedAt: Date;
  /** Total points that can be provided to its related 5 categories - used for calculating and tracking the distribution of points to those categories (since those categories will vary in capacity) */
  pointPool?: number;
  /** Total points that can be provided to from its related 5 categories - used to enable calculations for % etc */
  totalPointCapacity?: number;
  /** Total of scores assigned from the user, sum of all `pointValues` from related categories */
  totalPointValue?: number;
  /** Calculated as a percentage */
  percentageScore?: number;
}


/**
 * A {@link IBookScoreCategory} one of 5 categories (labelled by the user) which is related to a single book. The user is able to apply scores to each categories, but also apply weighting since all scores must total a sum of 100 points
 */
export interface IBookScoreCategory {
  /** Primary key */
  id: number;
  /** Foreign Key that references the Primary Key of {@link IBookScoreTotal} */
  bookScoreTotalId: number;
  /** Date/Time this book score category was created */
  createdAt: Date;
  /** Date/Time this book score category was last updated */
  updatedAt: Date;
  /** The total potential points that the category can use - taken from the `pointPool` from the {@link IBookScoreTotal} */
  pointCapacity: number;
  /** Actual assigned value to the category from the user - combined with its other 4 categories, of which share the same `bookScoreTotalId`, makes up the `totalPointValue` of the {@link IBookScoreTotal} */
  pointValue: number;
}