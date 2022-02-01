import { GameStatusType } from "../gameplay-enums/status-type.enum";
import { BehaviorSubject, interval, map, Observable, Subject, take } from "rxjs";
import { SeaBattleShip } from "./SeaBattleShip";
import { SeaBattleSight } from "./SeaBattleSight";
import { SeaBattleShot } from "./SeaBattleShot";
import { GameStatisticsData } from "./GameStatisticsData";
import { GameData } from "./GameData";
import { ShipState } from "../components/home/game-container/game-container-enums/ship-state.enum";
import { ShipType } from "../components/home/game-container/game-container-enums/ship-type.enum";
import { ShipDirection } from "../gameplay-enums/ship-direction.enum";
import { GameDurationSeconds } from "../gameplay-enums/game-duration-seconds.enum";
import { SpeedType } from "../gameplay-enums/speed-type.enum";

export class SeaBattleGame {

  private nextShip = new Subject<ShipType>();
  private score = new BehaviorSubject<number>(0);
  private shotRemaining = new BehaviorSubject<number>(this.gameData.maxShotCount);
  private timer = new BehaviorSubject<GameDurationSeconds>(this.gameData.maxGameTime);
  private selectedSpeed = new BehaviorSubject<SpeedType>(this.gameData.gameSpeed);
  private gameStatus = new BehaviorSubject<GameStatusType>(GameStatusType.InProgress);
  private shotAnimation = new Subject<boolean>();
  private shipAnimationState = new Subject<ShipState>();
  private shipDirection = new Subject<ShipDirection>();

  private ships: SeaBattleShip[] = [];
  private shots: SeaBattleShot[] = [];
  private sight: SeaBattleSight;

  private shotRemainingCount: number;
  private readonly shipAnimationInterval = 5200;
  private readonly shipStateChangeTimeout = 5100;

  constructor(private gameData: GameData) {
  }

  getNextShip(): Observable<ShipType> {
    return this.nextShip.asObservable();
  }

  getScore(): Observable<number> {
    return this.score.asObservable();
  }

  getShotRemaining(): Observable<number> {
    return this.shotRemaining.asObservable();
  }

  getTimer(): Observable<GameDurationSeconds> {
    return this.timer.asObservable();
  }

  getSelectedSpeed(): Observable<SpeedType> {
    return this.selectedSpeed.asObservable();
  }

  getGameStatus(): Observable<GameStatusType> {
    return this.gameStatus.asObservable();
  }

  getShotAnimation(): Observable<boolean> {
    return this.shotAnimation.asObservable();
  }

  getShipAnimationState(): Observable<ShipState> {
    return this.shipAnimationState.asObservable();
  }

  getShipDirection(): Observable<ShipDirection> {
    return this.shipDirection.asObservable();
  }

  getData(): GameStatisticsData {
    return {
      username: this.gameData.username,
      status: this.gameData.status,
      points: this.score.getValue(),
      gameDuration: this.gameData.gameDuration,
      shotCount: this.gameData.shotCount,
      destroyedBigShipsCount: 0,
      destroyedSmallShipsCount: 0,
      startDate: this.gameData.startDate,
      endDate: this.gameData.endDate,
      areaWidth: this.gameData.areaWidth,
      areaHeight: this.gameData.areaHeight,
      gameSpeed: this.gameData.gameSpeed
    };
  }

  makeShot() {
    this.gameData.shotCount++;
    this.shotRemainingCount = this.gameData.maxShotCount - this.gameData.shotCount;
    this.shotRemaining.next(this.shotRemainingCount);
    this.score.next(this.score.getValue() + 100);
    this.shotAnimation.next(true);
  }

  startGame() {
    this.runNewShip();
    this.startTimer();
  }

  pauseGame() {
    this.gameData.status = GameStatusType.Paused;
  }

  resumeGame() {
  }

  setSightPosition(leftIndent: number) {
  }

  setShipPosition(leftIndent: number, id: number) {
  }

  setShotPosition(position: number, id: number) {
  }

  completeShot(id: number) {
  }

  generateRandomNumber(): number {
    return Math.floor(Math.random() * 2);
  }

  private runNewShip() {
    setInterval(() => {
      this.shipDirection.next(this.generateRandomNumber() === 0 ? ShipDirection.Right : ShipDirection.Left);
    }, this.shipAnimationInterval);

    setInterval(() => {
      this.nextShip.next(this.generateRandomNumber() === 0 ? ShipType.BigShip : ShipType.SmallShip);
    }, this.shipAnimationInterval);

    setInterval(() => {
      this.shipAnimationState.next(ShipState.End);
      setTimeout(() => {
        this.shipAnimationState.next(ShipState.Start);
      }, this.shipStateChangeTimeout);
    }, this.shipAnimationInterval);
  }

  private onGameOver() {
    this.gameData.endDate = Date.now();
    this.gameData.status = GameStatusType.Finished;
  }

  private startTimer() {
    const timerInterval = 1000;

    interval(timerInterval).pipe(
      take(this.gameData.maxGameTime + 1),
      map(sec => this.gameData.maxGameTime - sec)
    ).subscribe(value => {
      this.timer.next(value);
      if (value === 0) {
        this.onGameOver();
      }
    });
  }
}
