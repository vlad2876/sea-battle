import {ShotStatus} from "../gameplay-enums/shot-status.enum";

export class SeaBattleShot {

  private bigShipsDestroyed = 0;
  private smallShipsDestroyed = 0;

  constructor(
    private id: number,
    private position: number,
    private status: ShotStatus
  ) {
    this.id = id;
    this.position = position;
    this.status = status;
  }

  completeShot() {
  }

  onHitBigShip() {
    this.bigShipsDestroyed++;
  }

  onHitSmallShip() {
    this.smallShipsDestroyed++;
  }

}
