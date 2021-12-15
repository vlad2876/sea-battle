import {Component, HostListener, OnInit} from '@angular/core';
import {KeyCodeEnum} from "../game-container-enums/key-code.enum";

@Component({
  selector: 'home-sea-area',
  templateUrl: './sea-area.component.html',
  styleUrls: ['./sea-area.component.sass']
})
export class SeaAreaComponent implements OnInit {
  rowsCount = 10;
  columnsCount = 15;
  shotSpeed = 120;

  seaAreaCells: SeaAreaCell[][] = [];

  readonly activeColumnIndex: number = 7;

  @HostListener('window:keyup', ['$event'])
  shotAnimation(event: { code: KeyCodeEnum }) {
    if (event.code === KeyCodeEnum.Space) {
      let activeRowIndex: number = this.rowsCount;
      const shotInterval = setInterval(() => {
        activeRowIndex--;
        this.seaAreaCells[activeRowIndex][this.activeColumnIndex].active = true;
        if (activeRowIndex < this.rowsCount - 1) {
          this.seaAreaCells[activeRowIndex + 1][this.activeColumnIndex].active = false;
        }
        if (activeRowIndex === 0) {
          clearInterval(shotInterval);
          const clearUpperCell = setInterval(() => {
            this.seaAreaCells[activeRowIndex][this.activeColumnIndex].active = false;
            clearInterval(clearUpperCell)
          }, this.shotSpeed);
        }
      }, this.shotSpeed);
    }
  }

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < this.rowsCount; i++) {
      this.seaAreaCells.push([]);
      for (let j = 0; j < this.columnsCount; j++) {
        this.seaAreaCells[i][j] = new SeaAreaCell(false);
      }
    }
  }
}

export class SeaAreaCell {
  active: boolean;

  constructor(active: boolean) {
    this.active = active;
  }
}
