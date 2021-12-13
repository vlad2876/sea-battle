import {SeaAreaCell} from "./sea-area.component";

export class ShotAnimationService {
  rowsCount = 10;
  columnsCount = 15;

  seaAreaCells: SeaAreaCell[][] = [];

  readonly activeColumnIndex: number = 0;

  shotTimeout = 1;

  shot = setInterval(() => {
    for (let i = 9; i >= 0; i--){
      this.shotTimeout++;
      setTimeout(() => {
        this.seaAreaCells[i][this.activeColumnIndex].active = true;
        setTimeout(() => {
          this.seaAreaCells[i][this.activeColumnIndex].active = false;
        }, 100);
      }, 100 * this.shotTimeout);
    }
    this.shotTimeout = 1;
  }, 2000)
}
