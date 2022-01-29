import { SeaBattleGame } from "../../../../entities/SeaBattleGame";
import { GameData } from "../../../../entities/GameData";
import { GameDurationSeconds } from "../../../../gameplay-enums/game-duration-seconds.enum";
import { SpeedType } from "../../../../gameplay-enums/speed-type.enum";
import { Observable } from "rxjs";
import { ShipType } from "../game-container-enums/ship-type.enum";
import { GameStatusType } from "../../../../gameplay-enums/status-type.enum";
import { ShipState } from "../game-container-enums/ship-state.enum";
import { ShipDirection } from "../../../../gameplay-enums/ship-direction.enum";

export class SeaBattleGameService {
  private game = new SeaBattleGame(new GameData('abc', GameDurationSeconds.Long, 0, 0, 0, SpeedType.Slow));

  nextShip: Observable<ShipType>;
  score: Observable<number>;
  shotRemaining: Observable<number>;
  timer: Observable<GameDurationSeconds>;
  speed: Observable<SpeedType>;
  status: Observable<GameStatusType>;
  startShotAnimation: Observable<boolean>;
  shipAnimationState: Observable<ShipState>;
  shipDirection: Observable<ShipDirection>;

  constructor() {
    this.nextShip = this.game.nextShip;
    this.score = this.game.score;
    this.shotRemaining = this.game.shotRemaining;
    this.timer = this.game.timer;
    this.speed = this.game.selectedSpeed;
    this.status = this.game.gameStatus;
    this.startShotAnimation = this.game.startShotAnimation;
    this.shipAnimationState = this.game.shipAnimationState;
    this.shipDirection = this.game.shipDirection;
  }

  makeShot() {
    this.game.makeShot();
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

  setShipPosition(leftIndent: number, id: number) {
    this.game.setShipPosition(leftIndent, id);
  }

  setShotPosition(position: number, id: number) {
    this.game.setShotPosition(position, id);
  }

  completeShot(id: number) {
    this.game.completeShot(id);
  }
}
