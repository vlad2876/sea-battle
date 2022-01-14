import {GameStatusType} from "../gameplay-enums/status-type.enum";
import {SpeedType} from "../gameplay-enums/speed-type.enum";

export interface GameStatisticsData {
  username: string,
  status: GameStatusType,
  points: number,
  gameDuration: number,
  shotCount: number,
  destroyedBigShipsCount: number,
  destroyedSmallShipsCount: number,
  startDate: number,
  endDate: number,
  areaWidth: number,
  areaHeight: number,
  gameSpeed: SpeedType
}
