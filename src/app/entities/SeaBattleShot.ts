import {PointsCountPerHit} from "../gameplay-enums/points-count-per-hit.enum";
import {ShipType} from "../components/home/game-container/game-container-enums/ship-type.enum";

export class SeaBattleShot {

  private maxShotCount = 10;
  private shotRemainingCount = this.maxShotCount;
  private shotCount: number = 0;
  private points: number = 0;
  private bigShipsDestroyed: number = 0;
  private smallShipsDestroyed: number = 0;

  onUnsuccessfulShot() {
    if (this.points >= PointsCountPerHit.Miss) {
      this.points -= PointsCountPerHit.Miss;
    }
  }

  onHitShip(shipType: ShipType) {
    if (shipType === ShipType.BigShip) {
      this.onHitBigShip();
    }

    if (shipType === ShipType.SmallShip) {
      this.onHitSmallShip();
    }
  }

  afterShot() {
    this.shotCount++;
    this.shotRemainingCount = this.maxShotCount - this.shotCount;
  }

  private onHitBigShip() {
    this.points += PointsCountPerHit.HitBigShip;
    this.bigShipsDestroyed++;
  }

  private onHitSmallShip() {
    this.points += PointsCountPerHit.HitSmallShip;
    this.smallShipsDestroyed++;
  }

}
