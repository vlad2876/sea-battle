import { Component, OnInit } from '@angular/core';
import { SeaBattleGameService } from "../game-container-services/sea-battle-game.service";

@Component({
  selector: 'home-sea-area',
  templateUrl: './sea-area.component.html',
  styleUrls: ['./sea-area.component.sass'],
})
export class SeaAreaComponent implements OnInit {
  rowsCount = 10;
  columnsCount = 15;
  shotTime = 120;

  seaAreaCells: SeaAreaCell[][] = [];

  readonly activeColumnIndex: number = 7;

  startShotAnimation() {
      let activeRowIndex: number = this.rowsCount - 1;
      const shotInterval = setInterval(() => {
        if (activeRowIndex > -1) {
          this.seaAreaCells[activeRowIndex][this.activeColumnIndex].active = true;
        }
        if (activeRowIndex < this.rowsCount - 1) {
          this.seaAreaCells[activeRowIndex + 1][this.activeColumnIndex].active = false;
        }
        if (activeRowIndex === -1) {
          clearInterval(shotInterval);
        }
        activeRowIndex--;
      }, this.shotTime);
  }

  constructor(private seaBattleGameService: SeaBattleGameService) {
  }

  ngOnInit() {
    for (let i = 0; i < this.rowsCount; i++) {
      this.seaAreaCells.push([]);
      for (let j = 0; j < this.columnsCount; j++) {
        this.seaAreaCells[i][j] = new SeaAreaCell(false);
      }
    }
    this.seaBattleGameService.startShotAnimation.subscribe(v => {
      if (v) {
        this.startShotAnimation();
      }
    });
  }
}

export class SeaAreaCell {
  active: boolean;

  constructor(active: boolean) {
    this.active = active;
  }
}
