import {SpeedType} from "../gameplay-enums/speed-type.enum";
import {GameStatusType} from "../gameplay-enums/status-type.enum";
import {GameDuration} from "../gameplay-enums/game-duration.enum";
import {BehaviorSubject, interval, map, Subject, take} from "rxjs";
import {ShipType} from "../components/home/game-container/game-container-enums/ship-type.enum";
import {SeaBattleShip} from "./SeaBattleShip";
import {SeaBattleSight} from "./SeaBattleSight";
import {SeaBattleShot} from "./SeaBattleShot";
import {GameData} from "./GameData";

export class SeaBattleGame {

  private ships: SeaBattleShip[] = [];
  private shots: SeaBattleShot[] = [];
  private sight: SeaBattleSight;

  private points = 0;
  private status: GameStatusType;
  private endDate = 0;
  private gameDuration = 0;
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
  private gameStatus = new Subject();
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

  getData(): GameData {
    return new GameData(
      this.username,
      this.status,
      this.points,
      this.gameDuration,
      this.shotCount,
      this.bigShipsDestroyed,
      this.smallShipsDestroyed,
      this.startDate,
      this.endDate,
      this.areaWidth,
      this.areaHeight,
      this.gameSpeed
    );
  }

  countdownTimer() {
  }

  makeShot() {
    this.shotCount++;
    this.shotRemainingCount = this.maxShotCount - this.shotCount;
  }

  startNewGame() {
    this.runNewShip();
  }

  pauseGame() {
    this.status = GameStatusType.Paused;
  }

  resumeGame(game: SeaBattleGame) {
  }

  setSightPosition(leftIndent: number) {
  }

  setShipPosition(leftIndent: number) {
  }

  setShotPosition(position: number) {
  }

  completeShot() {
  }

  private runNewShip() {
    this.nextShip.next(ShipType.BigShip);
  }

  private onGameOver() {
    this.endDate = Date.now();
    this.status = GameStatusType.Finished;
  }
}
