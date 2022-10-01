import { IPassage } from "../interfaces/passage.interface";


export class Passages {
  private _passages: IPassage[] = [];

  constructor(passagesData: IPassage[]) {
    this._passages = passagesData;
  }

  get passages() {
    return this._passages;
  }
}
