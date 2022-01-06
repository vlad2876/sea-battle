import {GameStatusType} from "../gameplay-enums/status-type.enum";
import {SpeedType} from "../gameplay-enums/speed-type.enum";

export class GameData {

  constructor(
    private username: string,
    private status: GameStatusType,
    private points: number,
    private gameDuration: number,
    private shotCount: number,
    private bigShipsDestroyed: number,
    private smallShipsDestroyed: number,
    private startDate: number,
    private endDate: number,
    private areaWidth: number,
    private areaHeight: number,
    private gameSpeed: SpeedType
  ) { }
}
