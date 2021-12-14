import {Component, HostListener, OnInit} from '@angular/core';

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


  @HostListener('window:keyup', ['$event'])
  shotAnimation(event: { code: string }) {
    if (event.code === 'Space') {
      let activeRowIndex: number = this.rowsCount;
      const shotInterval = setInterval(() => {
        activeRowIndex--;
        this.seaAreaCells[activeRowIndex][this.activeColumnIndex].active = true;
        if (activeRowIndex < 9) {
          this.seaAreaCells[activeRowIndex + 1][this.activeColumnIndex].active = false;
        }
        if (activeRowIndex === 0) {
          clearInterval(shotInterval);
          setTimeout(() => {
            this.seaAreaCells[activeRowIndex][this.activeColumnIndex].active = false;
          }, 120);
        }
      }, 120);
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
  active: boolean

  constructor(active: boolean) {
    this.active = active;
  }
}
