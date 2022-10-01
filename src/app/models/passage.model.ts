import { IPassage } from "../interfaces/passage.interface";


export class Passages {
  private _passages: IPassage[];

  constructor(passagesData: IPassage[]) {
    passagesData.map((passage: any) => {
      if (passage.books) { passage.book = passage.books; }
    })

    this._passages = passagesData;
  }

  get passages() {
    return this._passages;
  }
}
