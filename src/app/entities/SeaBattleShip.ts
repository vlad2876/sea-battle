import { ShipData } from "./ShipData";
import { ShipStatus } from "../gameplay-enums/ship-status.enum";

export class SeaBattleShip {
  constructor(private _shipData: ShipData) {
    _shipData.position = _shipData.position ? _shipData.position : 0;
    _shipData.status = _shipData.status ? _shipData.status : ShipStatus.Swims;
  }

  get shipData(): ShipData {
    return this._shipData;
  }
}
