import { GameStatusType } from "../gameplay-enums/status-type.enum";
import { GameDurationSeconds } from "../gameplay-enums/game-duration-seconds.enum";
import { SpeedType } from "../gameplay-enums/speed-type.enum";

export class GameData {
  private readonly _maxShotCount = 10;

  constructor(
    private _username: string,
    private _maxGameTime: GameDurationSeconds,
    private _startDate: number,
    private _areaWidth: number,
    private _areaHeight: number,
    private _gameSpeed: SpeedType,
    private _status?: GameStatusType,
    private _endDate?: number,
    private _gameDuration?: number,
    private _shotCount?: number
  ) {
    this.endDate = this.endDate ? this.endDate : 0;
    this.gameDuration = this.gameDuration ? this.gameDuration : 0;
    this.shotCount = this.shotCount ? this.shotCount : 0;
  }

  get maxShotCount(): number {
    return this._maxShotCount;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get maxGameTime(): GameDurationSeconds {
    return this._maxGameTime;
  }

  set maxGameTime(value: GameDurationSeconds) {
    this._maxGameTime = value;
  }

  get startDate(): number {
    return this._startDate;
  }

  set startDate(value: number) {
    this._startDate = value;
  }

  get areaWidth(): number {
    return this._areaWidth;
  }

  set areaWidth(value: number) {
    this._areaWidth = value;
  }

  get areaHeight(): number {
    return this._areaHeight;
  }

  set areaHeight(value: number) {
    this._areaHeight = value;
  }

  get gameSpeed(): SpeedType {
    return this._gameSpeed;
  }

  set gameSpeed(value: SpeedType) {
    this._gameSpeed = value;
  }

  get status(): GameStatusType {
    return this._status;
  }

  set status(value: GameStatusType) {
    this._status = value;
  }

  get endDate(): number {
    return this._endDate;
  }

  set endDate(value: number) {
    this._endDate = value;
  }

  get gameDuration(): number {
    return this._gameDuration;
  }

  set gameDuration(value: number) {
    this._gameDuration = value;
  }

  get shotCount(): number {
    return this._shotCount;
  }

  set shotCount(value: number) {
    this._shotCount = value;
  }
}
