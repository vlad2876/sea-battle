import { ShipData } from "./ShipData";
import { ShipStatus } from "../gameplay-enums/ship-status.enum";

export class SeaBattleShip {
  constructor(private shipData: ShipData) {
    shipData.leftIndent = shipData.leftIndent ? shipData.leftIndent : 0;
    shipData.status = shipData.status ? shipData.status : ShipStatus.Swims;
  }
}
