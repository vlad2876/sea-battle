import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'home-sea-area',
  templateUrl: './sea-area.component.html',
  styleUrls: ['./sea-area.component.sass']
})
export class SeaAreaComponent implements OnInit {
  rowsCount: number = 10;
  columnsCount: number = 15;

  readonly activeRowIndex: number = 9;
  readonly activeColumnIndex: number = 0;

  // @ts-ignore
  cellsCount: SeaAreaProperties[[]] = [[], []];

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < this.rowsCount; i++) {
      this.cellsCount[0][i] = {
        active: false
      }
    }

    for (let i = 0; i < this.columnsCount; i++) {
      this.cellsCount[1][i] = {
        active: false
      }
    }

    this.cellsCount[0][this.activeRowIndex].active = true;
    this.cellsCount[1][this.activeColumnIndex].active = true;
  }
}

class SeaAreaProperties {
  active: boolean = false;
}
