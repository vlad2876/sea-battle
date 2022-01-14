import {ShotStatus} from "../gameplay-enums/shot-status.enum";

export class SeaBattleShot {
  private id: number;
  private position: number;
  private status: ShotStatus;

  constructor(id: number, position: number, status: ShotStatus) {
    this.id = id;
    this.position = position;
    this.status = status;
  }

  makeShot(){
  }

  completeShot() {
  }
}
