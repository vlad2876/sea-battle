import {SpeedType} from "../gameplay-enums/speed-type.enum";
import {StatusType} from "../gameplay-enums/status-type.enum";
import {GameDuration} from "../gameplay-enums/game-duration.enum";
import {Subject} from "rxjs";
import {ShipType} from "../components/home/game-container/game-container-enums/ship-type.enum";

export class SeaBattleGame {

  nextShip = new Subject();
  private status: StatusType;
  private endDate = 0;
  private duration = 0;

  constructor(
    private username: string,
    private maxGameTime: GameDuration,
    private startDate: number,
    private areaWidth: number,
    private areaHeight: number,
    private gameSpeed: SpeedType
  ) {
  }

  startNewGame() {
    this.runNewShip();
  }

  pauseGame() {
    this.status = StatusType.Paused;
  }

  resumeGame() {
  }

  private runNewShip() {
    this.nextShip.next(ShipType.BigShip);
  }

  private onGameOver() {
    this.endDate = Date.now();
    this.status = StatusType.Finished;
  }
}
