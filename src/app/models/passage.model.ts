import { IPassage, IPassageNote, IPassageTag } from "../interfaces/passage.interface";

export class Passage {
  private _passage!: IPassage;
  private _id!: number;
  private _body!: string;
  private _dateCreated!: Date;
  private _passageTags!: IPassageTag[] | undefined;
  private _passageNotes!: IPassageNote[] | undefined;
  private _pageNumber!: number | undefined;
  

  constructor(passage: IPassage) {
    this._passage = passage;
    this._id = passage.id;
    this._body = passage.body;
    this._dateCreated = passage.dateCreated;
    this._passageTags = passage.tags;
    this._passageNotes = passage.notes;
    this._pageNumber = passage.pageNumber;
  }

  get passage() { return this._passage; }
  get id() { return this._id; }
  get body() { return this._body; }
  get dateCreated() { return this._dateCreated; }
  get passageTags() { return this._passageTags; }
  get passageNotes() { return this._passageNotes; }
  get pageNumber() { return this._pageNumber; }
}

