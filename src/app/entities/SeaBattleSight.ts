import { SightData } from "./SightData";

export class SeaBattleSight {
  constructor(private _sightData: SightData) {
    _sightData.leftIndent = _sightData.leftIndent ? _sightData.leftIndent : 0;
    _sightData.isDisabled = Boolean(_sightData.isDisabled);
  }

  get sightData(): SightData {
    return this._sightData;
  }
}
