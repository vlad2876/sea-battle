import {GameStatusType} from "../gameplay-enums/status-type.enum";
import {BehaviorSubject, Subject} from "rxjs";
import {ShipType} from "../components/home/game-container/game-container-enums/ship-type.enum";
import {SeaBattleShip} from "./SeaBattleShip";
import {SeaBattleSight} from "./SeaBattleSight";
import {SeaBattleShot} from "./SeaBattleShot";
import {GameStatisticsData} from "./GameStatisticsData";
import {GameData} from "./GameData";

export class SeaBattleGame {
  private ships: SeaBattleShip[] = [];
  private shots: SeaBattleShot[] = [];
  private sight: SeaBattleSight;

  private readonly maxShotCount = 10;
  private shotRemainingCount = this.maxShotCount - this.gameData.shotCount;

  private nextShip = new Subject();
  private score = new BehaviorSubject(this.gameData.points);
  private shotRemaining = new BehaviorSubject(this.shotRemainingCount);
  private timer = new BehaviorSubject(this.gameData.maxGameTime);
  private selectedSpeed = new BehaviorSubject(this.gameData.gameSpeed);
  private gameStatus = new Subject();
  private shotAnimation = new Subject();
  private shipAnimationState = new Subject();

  constructor(private gameData: GameData) {
    gameData.points = gameData.points ? gameData.points : 0;
    gameData.endDate = gameData.endDate ? gameData.endDate : 0;
    gameData.gameDuration = gameData.gameDuration ? gameData.gameDuration : 0;
    gameData.shotCount = gameData.shotCount ? gameData.shotCount : 0;
  }

  getData(): GameStatisticsData {
    return {
      username: this.gameData.username,
      status: this.gameData.status,
      points: this.gameData.points,
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
    this.shotRemainingCount = this.maxShotCount - this.gameData.shotCount;
  }

  startGame() {
    this.runNewShip();
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

  private runNewShip() {
    this.nextShip.next(ShipType.BigShip);
  }

  private onGameOver() {
    this.gameData.endDate = Date.now();
    this.gameData.status = GameStatusType.Finished;
  }

  private startTimer() {
  }
}
