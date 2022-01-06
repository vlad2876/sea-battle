import {ShipType} from "../components/home/game-container/game-container-enums/ship-type.enum";

export class SeaBattleShip {

  private leftIndent: number;
  private isDestroyed: boolean;
  private type: ShipType;

  constructor(leftIndent: number, isDestroyed: boolean, type: ShipType) {
    this.leftIndent = leftIndent;
    this.isDestroyed = isDestroyed;
    this.type = type;
  }

  runNewShip() {
  }
}
