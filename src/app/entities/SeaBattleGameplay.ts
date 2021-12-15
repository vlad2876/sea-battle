import {SpeedTypeEnum} from "../gameplay-enums/speed-type.enum";
import {StatusTypeEnum} from "../gameplay-enums/status-type.enum";

export class SeaBattleGameplay {

  constructor(
    public _username: string,
    public _status: StatusTypeEnum,
    public _points: number = 0,
    public _duration: number,
    public _shotsCount: number,
    public _bigShipsDowned: number = 0,
    public _smallShipsDowned: number = 0,
    public _startDate: number,
    public _endDate: number,
    public _areaWidth: number,
    public _areaHeight: number,
    public _gameSpeed: SpeedTypeEnum
  ) {
  }

  set username(value: string) {
    this._username = value;
  }

  set status(value: StatusTypeEnum) {
    this._status = value;
  }

  set points(value: number) {
    this._points = value;
  }

  set duration(value: number) {
    this._duration = value;
  }

  set shotsCount(value: number) {
    this._shotsCount = value;
  }

  set bigShipsDowned(value: number) {
    this._bigShipsDowned = value;
  }

  set smallShipsDowned(value: number) {
    this._smallShipsDowned = value;
  }

  set startDate(value: number) {
    this._startDate = value;
  }

  set endDate(value: number) {
    this._endDate = value;
  }

  set areaWidth(value: number) {
    this._areaWidth = value;
  }

  set areaHeight(value: number) {
    this._areaHeight = value;
  }

  set gameSpeed(value: SpeedTypeEnum) {
    this._gameSpeed = value;
  }

  public getData() {
    return new SeaBattleGameplay(this._username, this._status, this._points, this._duration,
      this._shotsCount, this._bigShipsDowned, this._smallShipsDowned, this._startDate, this._endDate, this._areaWidth, this._areaHeight, this._gameSpeed)
  }

  private bigShipOnHit() {
    this._points += 150;
  }

  private smallShipOnHit() {
    this._points += 300;
  }

  private missShot() {
    if (this._points >= 50) {
      this._points -= 50;
    }
  }

  public startGame() {
  }

  private pauseGame() {
  }

  private resumeGame() {
  }

  private gameOver() {
  }
}
