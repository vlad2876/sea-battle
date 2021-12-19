import {SpeedType} from "../gameplay-enums/speed-type.enum";
import {StatusType} from "../gameplay-enums/status-type.enum";
import {interval, map, take} from "rxjs";
import {GameDuration} from "../gameplay-enums/game-duration.enum";
import {PointsCountPerHit} from "../gameplay-enums/points-count-per-hit.enum";

export class SeaBattleGame {

  public countdownTime: number = this.maxGameTime;
  public maxShells = 10;
  public shellsRemaining = 10;

  constructor(
    public username: string,
    public status: StatusType,
    public points: number = 0,
    public maxGameTime: GameDuration,
    public duration: number,
    public shotsCount: number,
    public bigShipsDowned: number = 0,
    public smallShipsDowned: number = 0,
    public startDate: number,
    public endDate: number,
    public areaWidth: number,
    public areaHeight: number,
    public gameSpeed: SpeedType
  ) {
  }

  public getData() {
    return new SeaBattleGame(
      this.username,
      this.status,
      this.points,
      this.maxGameTime,
      this.duration,
      this.shotsCount,
      this.bigShipsDowned,
      this.smallShipsDowned,
      this.startDate,
      this.endDate,
      this.areaWidth,
      this.areaHeight,
      this.gameSpeed
    );
  }

  private bigShipOnHit() {
    this.points += PointsCountPerHit.HitBigShip;
  }

  private smallShipOnHit() {
    this.points += PointsCountPerHit.HitSmallShip;
  }

  private missShot() {
    if (this.points >= PointsCountPerHit.MissShot) {
      this.points -= PointsCountPerHit.MissShot;
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
      if (this.countdownTime === 0){
        this.gameOver();
      }
    });
  }

  public startGame() {
  }

  private pauseGame() {
    this.duration = this.maxGameTime - this.countdownTime;
  }

  private resumeGame() {
  }

  private gameOver() {
  }
}
