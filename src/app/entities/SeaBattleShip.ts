import {ShipType} from "../components/home/game-container/game-container-enums/ship-type.enum";

export class SeaBattleShip {

  constructor(
    private leftIndent: number,
    private isDestroyed: boolean,
    private type: ShipType
  ) { }
}
