import { ShipStatus } from "../gameplay-enums/ship-status.enum";
import { ShipDirection } from "../gameplay-enums/ship-direction.enum";
import { ShipType } from "../components/home/game-container/game-container-enums/ship-type.enum";

export class ShipData {
  constructor(
    private _direction: ShipDirection,
    private _type: ShipType,
    private _leftIndent?: number,
    private _status?: ShipStatus
  ) {
    this.leftIndent = this.leftIndent ? this.leftIndent : 0;
    this.status = this.status ? this.status : ShipStatus.Swims;
  }

  get leftIndent(): number {
    return this._leftIndent;
  }

  set leftIndent(value: number) {
    this._leftIndent = value;
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
