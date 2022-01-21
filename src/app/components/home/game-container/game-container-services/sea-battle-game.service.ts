import {SeaBattleGame} from "../../../../entities/SeaBattleGame";
import {GameData} from "../../../../entities/GameData";
import {GameDuration} from "../../../../gameplay-enums/game-duration.enum";
import {SpeedType} from "../../../../gameplay-enums/speed-type.enum";

export class SeaBattleGameService {
  private game = new SeaBattleGame(new GameData('abc', GameDuration.Slow, 0, 0, 0, SpeedType.Slow));

  nextShip = this.game.nextShip;
  score = this.game.score;
  shotRemaining = this.game.shotRemaining;
  timer = this.game.timer;
  speed = this.game.selectedSpeed;
  status = this.game.gameStatus;
  shotAnimation = this.game.shotAnimation;
  shipAnimationState = this.game.shipAnimationState;
  shipDirection = this.game.shipDirection;

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
