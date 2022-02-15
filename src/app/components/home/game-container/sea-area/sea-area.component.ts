import { Component, OnInit } from '@angular/core';
import { SeaBattleGameService } from "../game-container-services/sea-battle-game.service";

@Component({
  selector: 'home-sea-area',
  templateUrl: './sea-area.component.html',
  styleUrls: ['./sea-area.component.sass'],
})
export class SeaAreaComponent implements OnInit {
  seaAreaCells: SeaAreaCell[][] = [];

  private rowsCount = 10;
  private columnsCount = 15;
  private shotTime = 120;

  shotAnimation(id: number) {
    let activeRowIndex = this.seaBattleGameService.shots.find(shot => shot.shotData.id === id).shotData.rowIndex;
    const activeColumnIndex = this.seaBattleGameService.shots.find(shot => shot.shotData.id === id).shotData.columnIndex;

    const shotInterval = setInterval(() => {

      if (activeRowIndex > -1) {
        this.seaAreaCells[activeRowIndex][activeColumnIndex].active = true;
      }
      if (activeRowIndex < this.rowsCount - 1) {
        this.seaAreaCells[activeRowIndex + 1][activeColumnIndex].active = false;
      }
      if (activeRowIndex === -1) {
        clearInterval(shotInterval);
      }
      this.seaBattleGameService.setShotPosition(activeRowIndex--, id);
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
    this.seaBattleGameService.shotAnimation.subscribe(v => this.shotAnimation(v));
  }
}

export class SeaAreaCell {
  active: boolean;

  constructor(active: boolean) {
    this.active = active;
  }
}
