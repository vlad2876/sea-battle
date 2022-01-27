import {ShotStatus} from "../gameplay-enums/shot-status.enum";

export class ShotData {
  constructor(
    private _id: number,
    private _columnIndex: number,
    private _rowIndex?: number,
    private _status?: ShotStatus
  ) {
    this.status = this.status ? this.status : ShotStatus.InProgress;
    this.rowIndex = this.rowIndex ? this.rowIndex : 9;
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

  get columnIndex(): number {
    return this._columnIndex;
  }

  set columnIndex(value: number) {
    this._columnIndex = value;
  }

  get rowIndex(): number {
    return this._rowIndex;
  }

  set rowIndex(value: number) {
    this._rowIndex = value;
  }
}
