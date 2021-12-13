import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'home-sea-area',
  templateUrl: './sea-area.component.html',
  styleUrls: ['./sea-area.component.sass']
})
export class SeaAreaComponent implements OnInit {
  rowsCount = 10;
  columnsCount = 15;

  seaAreaCells: SeaAreaCell[][] = [];

  readonly activeColumnIndex: number = 7;

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
  active: boolean

  constructor(active: boolean) {
    this.active = active;
  }
}
