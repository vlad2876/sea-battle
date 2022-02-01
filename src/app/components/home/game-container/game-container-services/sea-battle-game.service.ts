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
  nextShip: Observable<ShipType>;
  score: Observable<number>;
  shotRemaining: Observable<number>;
  timer: Observable<GameDurationSeconds>;
  speed: Observable<SpeedType>;
  status: Observable<GameStatusType>;
  startShotAnimation: Observable<boolean>;
  shipAnimationState: Observable<ShipState>;
  shipDirection: Observable<ShipDirection>;

  private game = new SeaBattleGame(new GameData('abc', GameDurationSeconds.Long, 0, 0, 0, SpeedType.Slow));

  constructor() {
    this.nextShip = this.game.getNextShip();
    this.score = this.game.getScore();
    this.shotRemaining = this.game.getShotRemaining();
    this.timer = this.game.getTimer();
    this.speed = this.game.getSelectedSpeed();
    this.status = this.game.getGameStatus();
    this.startShotAnimation = this.game.getShotAnimation();
    this.shipAnimationState = this.game.getShipAnimationState();
    this.shipDirection = this.game.getShipDirection();
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
