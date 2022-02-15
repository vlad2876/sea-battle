import { GameStatusType } from "../gameplay-enums/status-type.enum";
import { interval, map, take } from "rxjs";
import { SeaBattleShip } from "./SeaBattleShip";
import { SeaBattleSight } from "./SeaBattleSight";
import { SeaBattleShot } from "./SeaBattleShot";
import { GameStatisticsData } from "./GameStatisticsData";
import { GameData } from "./GameData";
import { ShipType } from "../components/home/game-container/game-container-enums/ship-type.enum";
import { ShipDirection } from "../gameplay-enums/ship-direction.enum";
import { SightData } from "./SightData";
import { ShipData } from "./ShipData";
import { ShipStatus } from "../gameplay-enums/ship-status.enum";

export class SeaBattleGame {
  nextShip = this.gameData.nextShip.asObservable();
  score = this.gameData.score.asObservable();
  shotRemaining = this.gameData.shotRemaining.asObservable();
  timer = this.gameData.timer.asObservable();
  selectedSpeed = this.gameData.selectedSpeed.asObservable();
  gameStatus = this.gameData.gameStatus.asObservable();
  shotAnimation = this.gameData.shotAnimation.asObservable();
  shipAnimation = this.gameData.shipAnimation.asObservable();
  shipDirection = this.gameData.shipDirection.asObservable();

  private ships: SeaBattleShip[] = [];
  private _shots: SeaBattleShot[] = [];
  private sight = new SeaBattleSight(new SightData());

  private shotRemainingCount: number;
  private readonly shipAnimationInterval = 5100;

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

  makeShot(id: number) {
    this.gameData.shotCount++;
    this.shotRemainingCount = this.gameData.maxShotCount - this.gameData.shotCount;
    this.gameData.shotRemaining.next(this.shotRemainingCount);
    this.gameData.score.next(this.gameData.score.getValue() + 100);
    this.gameData.shotAnimation.next(id);
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
    this.sight.sightData.leftIndent = leftIndent;
  }

  setShipPosition(position: number, id: number) {
    this.ships.find(ship => ship.shipData.id === id).shipData.position = position;
  }

  setShipStatus(status: ShipStatus, id: number) {
    this.ships.find(ship => ship.shipData.id === id).shipData.status = status;
  }

  setShotPosition(position: number, id: number) {
    this._shots.find(shot => shot.shotData.id === id).shotData.rowIndex = position;
  }

  completeShot(id: number) {
  }

  get shots(): SeaBattleShot[] {
    return this._shots;
  }

  set shots(value: SeaBattleShot[]) {
    this._shots = value;
  }

  private runNewShip() {
    let shipId = 1;

    setInterval(() => {
      this.shipDirection.pipe(take(1)).subscribe(direction => {
        this.nextShip.pipe(take(1)).subscribe(type => {
          this.ships.push(new SeaBattleShip(new ShipData(shipId, direction, type)));
        });
      });
      this.gameData.shipDirection.next(Math.floor(Math.random() * 2) === 0 ? ShipDirection.Right : ShipDirection.Left);
      this.gameData.nextShip.next(Math.floor(Math.random() * 2) === 0 ? ShipType.BigShip : ShipType.SmallShip);
      this.gameData.shipAnimation.next(shipId);
      shipId++;
      console.log(this.ships);
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
