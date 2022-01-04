import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'home-sea-area',
  templateUrl: './sea-area.component.html',
  styleUrls: ['./sea-area.component.sass']
})
export class SeaAreaComponent implements OnInit {
  rowsCount = 10;
  columnsCount = 15;

  readonly activeRowIndex: number = 9;
  readonly activeColumnIndex: number = 0;

  seaAreaCells: SeaAreaCell[][] = [];

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < this.rowsCount; i++) {
      this.seaAreaCells.push([]);
      for (let j = 0; j < this.columnsCount; j++) {
        this.seaAreaCells[i][j] = new SeaAreaCell(false);
      }
    }
    this.seaAreaCells[this.activeRowIndex][this.activeColumnIndex].active = true;
  }
}

class SeaAreaCell {
  active: boolean;

  constructor(active: boolean) {
    this.active = active;
  }
}
