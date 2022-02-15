import { ShotData } from "./ShotData";

export class SeaBattleShot {
  constructor(private _shotData: ShotData) { }

  makeShot() {
  }

  completeShot() {
  }

  get shotData(): ShotData {
    return this._shotData;
  }
}
