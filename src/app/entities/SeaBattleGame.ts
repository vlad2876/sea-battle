import {SpeedType} from "../gameplay-enums/speed-type.enum";
import {StatusType} from "../gameplay-enums/status-type.enum";
import {interval, map, take} from "rxjs";
import {GameDuration} from "../gameplay-enums/game-duration.enum";
import {PointsCountPerHit} from "../gameplay-enums/points-count-per-hit.enum";
import {ShipType} from "../components/home/game-container/game-container-enums/ship-type.enum";

export class SeaBattleGame {

  public countdownTime: number = this.maxGameTime;
  public maxShells = 10;
  public shellsRemaining = this.maxShells;

  constructor(
    private username: string,
    private status: StatusType,
    private points: number = 0,
    private maxGameTime: GameDuration,
    private duration: number,
    private shotsCount: number,
    private bigShipsDowned: number = 0,
    private smallShipsDowned: number = 0,
    private startDate: number,
    private endDate: number,
    private areaWidth: number,
    private areaHeight: number,
    private gameSpeed: SpeedType
  ) {
  }

  private bigShipOnHit() {
    this.points += PointsCountPerHit.HitBigShip;
    this.bigShipsDowned++;
  }

  private smallShipOnHit() {
    this.points += PointsCountPerHit.HitSmallShip;
    this.smallShipsDowned++;
  }

  public missShot() {
    if (this.points >= PointsCountPerHit.MissShot) {
      this.points -= PointsCountPerHit.MissShot;
    }
  }

  public onHit(shipType: ShipType) {
    if (shipType === ShipType.BigShip) {
      this.bigShipOnHit();
    }

    if (shipType === ShipType.SmallShip) {
      this.smallShipOnHit();
    }
  }

  public afterShot() {
    this.shotsCount++;
    this.shellsRemaining = this.maxShells - this.shotsCount;
  }

  public countdownTimer() {
    const timerInterval = 1000;

    interval(timerInterval).pipe(
      take(this.maxGameTime + 1),
      map(sec => this.maxGameTime - sec)
    ).subscribe(value => {
      this.countdownTime = value;
      if (this.countdownTime === 0) {
        this.gameOver();
      }
    });
  }

  private releaseNewShip() {
  }

  public startGame() {
    this.startDate = Date.now();
  }

  public newGame() {
  }

  public pauseGame() {
    this.duration = this.maxGameTime - this.countdownTime;
  }

  public resumeGame() {
  }

  private gameOver() {
    this.endDate = Date.now();
  }
}
