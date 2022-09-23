

/**
 * Interface that defines the {@link Passage}'s data types
 */
export interface IPassage {
  id: number;
  body: string;
  dateCreated: Date;
  tags?: IPassageTag[];
  notes?: IPassageNote[];
  pageNumber?: number;
}

/**
 * Interface for Ref Table that holds the ID of a {@link Passage} 
 * and the ID of a corresponding {@link PassageTag}
 * Relationship is one-to-many
 */
export interface IPassageTagsRelation {
  id: number;
  passage: number;
  passageTag: number;
}

/**
 * Interface for Ref Table that holds the ID of a {@link Passage} 
 * and the ID of a corresponding {@link PassageNote}
 * Relationship is one-to-many
 */
export interface IPassageNotesRelation {
  id: number;
  passage: number;
  passageNote: number;
}

/**
 * Interface that defines the {@link PassageTag}'s data types
 */
export interface IPassageTag {
  id: number;
  label: string;
  target?: string;
  description?: string;
}
/**
 * Interface that defines the {@link PassageNote}'s data
 */
export interface IPassageNote {
  id: number;
  body: string;
  dateCreated: Date;
  target?: string;
  description?: string;
}