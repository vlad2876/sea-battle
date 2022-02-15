import { ShipStatus } from "../gameplay-enums/ship-status.enum";
import { ShipDirection } from "../gameplay-enums/ship-direction.enum";
import { ShipType } from "../components/home/game-container/game-container-enums/ship-type.enum";

export class ShipData {
  constructor(
    private _id: number,
    private _direction: ShipDirection,
    private _type: ShipType,
    private _position?: number,
    private _status?: ShipStatus
  ) {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get position(): number {
    return this._position;
  }

  set position(value: number) {
    this._position = value;
  }

  get status(): ShipStatus {
    return this._status;
  }

  set status(value: ShipStatus) {
    this._status = value;
  }

  get direction(): ShipDirection {
    return this._direction;
  }

  set direction(value: ShipDirection) {
    this._direction = value;
  }

  get type(): ShipType {
    return this._type;
  }

  set type(value: ShipType) {
    this._type = value;
  }
}
