import {Component, OnInit} from '@angular/core';
import {ShotAnimationService} from "./shot-animation.service";

@Component({
  selector: 'home-sea-area',
  templateUrl: './sea-area.component.html',
  styleUrls: ['./sea-area.component.sass'],
  providers: [ShotAnimationService],
})
export class SeaAreaComponent implements OnInit {

  constructor(public shotAnimationService: ShotAnimationService) {
  }

  ngOnInit() {
    for (let i = 0; i < this.shotAnimationService.rowsCount; i++) {
      this.shotAnimationService.seaAreaCells.push([]);
      for (let j = 0; j < this.shotAnimationService.columnsCount; j++) {
        this.shotAnimationService.seaAreaCells[i][j] = new SeaAreaCell(false);
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
