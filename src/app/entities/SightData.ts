export class SightData {
  constructor(
    private _leftIndent?: number,
    private _isDisabled?: boolean
  ) {
    this.leftIndent = this.leftIndent ? this.leftIndent : 0;
    this.isDisabled = Boolean(this.isDisabled);
  }

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
