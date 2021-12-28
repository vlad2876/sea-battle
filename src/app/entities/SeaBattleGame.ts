import {SpeedType} from "../gameplay-enums/speed-type.enum";
import {StatusType} from "../gameplay-enums/status-type.enum";
import {GameDuration} from "../gameplay-enums/game-duration.enum";

export class SeaBattleGame {

  // @ts-ignore
  private status: StatusType;
  private endDate: number = 0;
  private duration: number = 0;

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
    this.startDate = Date.now();
  }

  pauseGame() {
  }

  resumeGame() {
  }

  private runNewShip() {
  }

  private onGameOver() {
    this.endDate = Date.now();
  }
}
