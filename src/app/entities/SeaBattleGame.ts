import {SpeedType} from "../gameplay-enums/speed-type.enum";
import {StatusType} from "../gameplay-enums/status-type.enum";
import {GameDuration} from "../gameplay-enums/game-duration.enum";
import {BehaviorSubject, Subject} from "rxjs";
import {ShipType} from "../components/home/game-container/game-container-enums/ship-type.enum";
import {SeaBattleShip} from "./SeaBattleShip";
import {SeaBattleSight} from "./SeaBattleSight";
import {SeaBattleShot} from "./SeaBattleShot";

export class SeaBattleGame {

  private ship: SeaBattleShip[];
  private shot: SeaBattleShot[];
  private sight: SeaBattleSight;

  private points = 0;
  private status: StatusType = StatusType.InProgress;
  private endDate = 0;
  private duration = 0;
  private maxShotCount = 10;
  private shotCount = 0;
  private shotRemainingCount = this.maxShotCount - this.shotCount;
  private bigShipsDestroyed = 0;
  private smallShipsDestroyed = 0;


  private nextShip = new Subject();
  private score = new BehaviorSubject(this.points);
  private shotRemaining = new BehaviorSubject(this.shotRemainingCount);
  private timer = new BehaviorSubject(this.maxGameTime);
  private selectedSpeed = new BehaviorSubject(this.gameSpeed);
  private gameStatus = new BehaviorSubject(this.status);
  private shotAnimation = new Subject();
  private shipAnimationState = new Subject();

  constructor(
    private username: string,
    private maxGameTime: GameDuration,
    private startDate: number,
    private areaWidth: number,
    private areaHeight: number,
    private gameSpeed: SpeedType
  ) {
  }

  getData() {
    return new SeaBattleGame(
      this.username,
      this.maxGameTime,
      this.startDate,
      this.areaWidth,
      this.areaHeight,
      this.gameSpeed
    );
  }

  makeShot() {
    this.shotCount++;
    this.shotRemainingCount = this.maxShotCount - this.shotCount;
  }

  startNewGame() {
    this.runNewShip();
  }

  pauseGame() {
    this.status = StatusType.Paused;
  }

  resumeGame() {
  }

  overwriteSightPosition(leftIndent: number) {
  }

  overwriteShipPosition(leftIndent: number) {
  }

  overwriteShotPosition(position: number) {
  }

  completeShot() {
  }

  private runNewShip() {
    this.nextShip.next(ShipType.BigShip);
  }

  private onGameOver() {
    this.endDate = Date.now();
    this.status = StatusType.Finished;
  }
}
