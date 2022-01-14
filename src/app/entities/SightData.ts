export class SightData {
  constructor(
    private _leftIndent?: number,
    private _isDisabled?: boolean
  ) { }

  get leftIndent(): number {
    return this._leftIndent;
  }

  set leftIndent(value: number) {
    this._leftIndent = value;
  }

  get isDisabled(): boolean {
    return this._isDisabled;
  }

  set isDisabled(value: boolean) {
    this._isDisabled = value;
  }
}
