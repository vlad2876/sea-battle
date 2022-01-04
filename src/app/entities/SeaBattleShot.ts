import {ShotStatus} from "../gameplay-enums/shot-status.enum";

export class SeaBattleShot {

  constructor(
    private id: number,
    private position: number,
    private status: ShotStatus
  ) { }

  completeShot() {
  }

  onHitBigShip() {
  }

  onHitSmallShip() {
  }

}
