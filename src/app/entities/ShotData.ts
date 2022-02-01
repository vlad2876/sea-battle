import { ShotStatus } from "../gameplay-enums/shot-status.enum";

export class ShotData {
  constructor(
    private _id: number,
    private _status?: ShotStatus,
    private _position?: number
  ) {
    this.status = this.status ? this.status : ShotStatus.InProgress;
    this.position = this.position ? this.position : 0;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get status(): ShotStatus {
    return this._status;
  }

  set status(value: ShotStatus) {
    this._status = value;
  }

  get position(): number {
    return this._position;
  }

  set position(value: number) {
    this._position = value;
  }
}
