import { SeaBattleGame } from "../../../../entities/SeaBattleGame";
import { GameData } from "../../../../entities/GameData";
import { GameDuration } from "../../../../gameplay-enums/game-duration.enum";
import { SpeedType } from "../../../../gameplay-enums/speed-type.enum";
import { SeaBattleShot } from "../../../../entities/SeaBattleShot";
import { ShotData } from "../../../../entities/ShotData";
import { Subject } from "rxjs";
import { ShipStatus } from "../../../../gameplay-enums/ship-status.enum";
import { SeaBattleShip } from "../../../../entities/SeaBattleShip";

export class SeaBattleGameService {
  private game: SeaBattleGame = new SeaBattleGame(new GameData('abc', GameDuration.Slow, 0, 0, 0, SpeedType.Slow));

  nextShip = this.game.nextShip;
  score = this.game.score;
  shotRemaining = this.game.shotRemaining;
  timer = this.game.timer;
  speed = this.game.selectedSpeed;
  status = this.game.gameStatus;
  shotAnimation = this.game.shotAnimation;
  shipAnimation = this.game.shipAnimation;
  shipDirection = this.game.shipDirection;

  private _sightLeftIndent: number;
  private _shots = this.game.shots;
  private _ships = this.game.ships;
  private _shotId = 1;
  private _skylineAreaOffsetLeft: number;
  private _shipOffsetLeft: number;
  private _seaAreaCellWidth: number;

  makeShot() {
    if (this._shots.length < 10) {
      this.game.shots.push(new SeaBattleShot(new ShotData(this._shotId, Math.round(this.sightLeftIndent / 70))));
      this.game.makeShot(this._shotId);
      this._shotId++;
    }
  }

  startGame() {
    this.game.startGame();
  }

  pauseGame() {
    this.game.pauseGame();
  }

  resumeGame() {
    this.game.resumeGame();
  }

  setSightPosition(leftIndent: number) {
    this.game.setSightPosition(leftIndent);
  }

  setShipPosition(position: number, id: number) {
    this.game.setShipPosition(position, id);
  }

  setShipStatus(status: ShipStatus, id: number) {
    this.game.setShipStatus(status, id);
  }

  setShotPosition(position: number, id: number) {
    this.game.setShotPosition(position, id);
  }

  completeShot(id: number) {
    const shipLeftIndent = this._shipOffsetLeft - this._skylineAreaOffsetLeft;
    const currentShotColumn = this.shots.find(shot => shot.shotData.id === id).shotData.columnIndex;

    if (currentShotColumn === Math.floor(shipLeftIndent / this._seaAreaCellWidth)) {
      console.log('Hit');
      this.game.completeShot(id);
    }
  }

  get shots(): SeaBattleShot[] {
    return this._shots;
  }

  get ships(): SeaBattleShip[] {
    return this._ships;
  }

  get sightLeftIndent(): number {
    return this._sightLeftIndent;
  }

  set sightLeftIndent(value: number) {
    this._sightLeftIndent = value;
  }

  set shipOffsetLeft(value: number) {
    this._shipOffsetLeft = value;
  }

  set skylineAreaOffsetLeft(value: number) {
    this._skylineAreaOffsetLeft = value;
  }

  set seaAreaCellWidth(value: number) {
    this._seaAreaCellWidth = value;
  }
}
