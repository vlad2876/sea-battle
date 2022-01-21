import {GameStatusType} from "../gameplay-enums/status-type.enum";
import {GameDuration} from "../gameplay-enums/game-duration.enum";
import {SpeedType} from "../gameplay-enums/speed-type.enum";
import {BehaviorSubject, Subject} from "rxjs";
import {ShipType} from "../components/home/game-container/game-container-enums/ship-type.enum";
import {ShipState} from "../components/home/game-container/game-container-enums/ship-state.enum";
import {ShipDirection} from "../gameplay-enums/ship-direction.enum";

export class GameData {
  private readonly _maxShotCount = 10;

  private _nextShip = new Subject<ShipType>();
  private _score = new BehaviorSubject(0);
  private _shotRemaining = new BehaviorSubject(this.maxShotCount);
  private _timer = new BehaviorSubject(this.maxGameTime);
  private _selectedSpeed = new BehaviorSubject(this.gameSpeed);
  private _gameStatus = new BehaviorSubject(GameStatusType.InProgress);
  private _shotAnimation = new Subject<boolean>();
  private _shipAnimationState = new Subject<ShipState>();
  private _shipDirection = new Subject<ShipDirection>();

  constructor(
    private _username: string,
    private _maxGameTime: GameDuration,
    private _startDate: number,
    private _areaWidth: number,
    private _areaHeight: number,
    private _gameSpeed: SpeedType,
    private _status?: GameStatusType,
    private _endDate?: number,
    private _gameDuration?: number,
    private _shotCount?: number,
  ) {
    this.endDate = this.endDate ? this.endDate : 0;
    this.gameDuration = this.gameDuration ? this.gameDuration : 0;
    this.shotCount = this.shotCount ? this.shotCount : 0;
  }

  get maxShotCount(): number {
    return this._maxShotCount;
  }

  get nextShip(): Subject<ShipType> {
    return this._nextShip;
  }

  get score(): BehaviorSubject<number> {
    return this._score;
  }

  get shotRemaining(): BehaviorSubject<number> {
    return this._shotRemaining;
  }

  get timer(): BehaviorSubject<GameDuration> {
    return this._timer;
  }

  get selectedSpeed(): BehaviorSubject<SpeedType> {
    return this._selectedSpeed;
  }

  get gameStatus(): BehaviorSubject<GameStatusType> {
    return this._gameStatus;
  }

  get shotAnimation(): Subject<boolean> {
    return this._shotAnimation;
  }

  get shipAnimationState(): Subject<ShipState> {
    return this._shipAnimationState;
  }

  get shipDirection(): Subject<ShipDirection> {
    return this._shipDirection;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get maxGameTime(): GameDuration {
    return this._maxGameTime;
  }

  set maxGameTime(value: GameDuration) {
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
