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
  readonly activeCellIndex: number = 0;

  seaAreaCells: SeaAreaCell[][] = [];

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < this.rowsCount; i++) {
      this.seaAreaCells.push([])
    }

    this.seaAreaCells.forEach(f => {
      for (let i = 0; i < this.columnsCount; i++) {
        f[i] = new SeaAreaCell(false)
      }
    })

    this.seaAreaCells[this.activeRowIndex][this.activeCellIndex] = new SeaAreaCell(true);
  }
}

class SeaAreaCell {
  active: boolean = false;

  constructor(active: boolean) {
    this.active = active;
  }
}
