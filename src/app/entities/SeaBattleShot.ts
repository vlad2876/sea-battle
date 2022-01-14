import {ShotStatus} from "../gameplay-enums/shot-status.enum";
import {ShotData} from "./ShotData";

export class SeaBattleShot {
  constructor(private shotData: ShotData) {
    shotData.status = shotData.status ? shotData.status : ShotStatus.InProgress;
    shotData.position = shotData.position ? shotData.position : 0;
  }

  makeShot() {
  }

  completeShot() {
  }
}
