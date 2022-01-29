import { GameStatusType } from "../gameplay-enums/status-type.enum";
import { interval, map, take } from "rxjs";
import { SeaBattleShip } from "./SeaBattleShip";
import { SeaBattleSight } from "./SeaBattleSight";
import { SeaBattleShot } from "./SeaBattleShot";
import { GameStatisticsData } from "./GameStatisticsData";
import { GameData } from "./GameData";
import { ShipState } from "../components/home/game-container/game-container-enums/ship-state.enum";
import { ShipType } from "../components/home/game-container/game-container-enums/ship-type.enum";
import { ShipDirection } from "../gameplay-enums/ship-direction.enum";

export class SeaBattleGame {
  nextShip = this.gameData.nextShip.asObservable();
  score = this.gameData.score.asObservable();
  shotRemaining = this.gameData.shotRemaining.asObservable();
  timer = this.gameData.timer.asObservable();
  selectedSpeed = this.gameData.selectedSpeed.asObservable();
  gameStatus = this.gameData.gameStatus.asObservable();
  startShotAnimation = this.gameData.shotAnimation.asObservable();
  shipAnimationState = this.gameData.shipAnimationState.asObservable();
  shipDirection = this.gameData.shipDirection.asObservable();

  private ships: SeaBattleShip[] = [];
  private shots: SeaBattleShot[] = [];
  private sight: SeaBattleSight;

  private shotRemainingCount: number;
  private readonly shipAnimationInterval = 5200;
  private readonly shipStateChangeTimeout = 5100;

  constructor(private gameData: GameData) {
  }

  getData(): GameStatisticsData {
    return {
      username: this.gameData.username,
      status: this.gameData.status,
      points: this.gameData.score.getValue(),
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
    this.gameData.shotRemaining.next(this.shotRemainingCount);
    this.gameData.score.next(this.gameData.score.getValue() + 100);
    this.gameData.shotAnimation.next(true);
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

  generateRandomNumber() {
    return Math.floor(Math.random() * 2);
  }

  private runNewShip() {
    setInterval(() => {
      this.gameData.shipDirection.next(this.generateRandomNumber() === 0 ? ShipDirection.Right : ShipDirection.Left);
    }, this.shipAnimationInterval);

    setInterval(() => {
      this.gameData.nextShip.next(this.generateRandomNumber() === 0 ? ShipType.BigShip : ShipType.SmallShip);
    }, this.shipAnimationInterval);

    setInterval(() => {
      this.gameData.shipAnimationState.next(ShipState.End);
      setTimeout(() => {
        this.gameData.shipAnimationState.next(ShipState.Start);
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
      this.gameData.timer.next(value);
      if (value === 0) {
        this.onGameOver();
      }
    });
  }
}
