import {ShipType} from "../components/home/game-container/game-container-enums/ship-type.enum";
import {ShipStatus} from "../gameplay-enums/ship-status.enum";
import {ShipDirection} from "../gameplay-enums/ship-direction.enum";

export class SeaBattleShip {
  private leftIndent: number;
  private status: ShipStatus;
  private direction: ShipDirection;
  private type: ShipType;

  constructor(leftIndent: number, status: ShipStatus, direction: ShipDirection, type: ShipType) {
    this.leftIndent = leftIndent;
    this.status = status;
    this.direction = direction;
    this.type = type;
  }
}
