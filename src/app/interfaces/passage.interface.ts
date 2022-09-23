import { Timestamp } from "rxjs";


/**
 * Interface that defines the {@link Passage}'s data types
 */
export interface IPassage {
  id: number;
  body: string;
  pageNumber?: number;
  createdAt: Timestamp<any>;
  bookId?: number;
  

  tags?: IPassageTag[];
  notes?: IPassageNote[];
}



/**
 * Interface that defines the {@link PassageTag}'s data types
 */
export interface IPassageTag {
  id: number;
  passageId?: number;
  createdAt?: Timestamp<any>;
  label: string;
  target?: string;
  description?: string;
}
/**
 * Interface that defines the {@link PassageNote}'s data
 */
export interface IPassageNote {
  id: number;
  passageId?: number;
  body: string;
  createdAt: Date;
  target?: string;
  description?: string;
}