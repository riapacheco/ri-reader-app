
/**
 * Defines the data types for the {@link Passage} class
 */
export interface IPassage {
  /** Primary Key */
  id: number;
  /** Foreign Key - References the {@link Book} class' Primary Key */
  bookId: number;
  /** The actual text body that holds information [brought in from the camera] */
  body: string;
  /** Date/Time the passage was created */
  createdAt: Date;
  /** Optional associated page number */
  pageNumber?: number;
}

/**
 * Defines the data types for the `PassageTag`. 
 * 
 * Enables user filtering / sorting later
 */
export interface IPassageTag {
  /** Primary Key */
  id: number;
  /** Foreign Key - References the {@link Passage} class' Primary Key */
  passageId: number;
  /** Date/Time the tag was created */
  createdAt: Date;
  /** The actual user-facing label that defines the 'tag' visually */
  label: string;
  /** Optional extra string */
  target?: string;
  /** Optional body string */
  description?: string;
}

/**
 * Defines the data types for the `PassageNote`
 * 
 * Enables the leaving of a longer text string for added context when reviewing a passage in the future
 */
export interface IPassageNote {
  /** Primary Key */
  id: number;
  /** Foreign Key - references the {@link Passage} class' Primary Key */
  passageId: number;
  /** Date/Time the note was created */
  createdAt: Date;
  /** Body text that actually makes up the note itself conceptually */
  body: string;
  /** Optional additional string */
  target?: string;
  /** Optional additional body string */
  description?: string;
}