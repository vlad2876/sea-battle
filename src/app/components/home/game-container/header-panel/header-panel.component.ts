import {Component, OnInit} from '@angular/core';
import {SeaBattleGameService} from "../game-container-services/sea-battle-game.service";
import {SpeedType} from "../../../../gameplay-enums/speed-type.enum";
import {GameStatusType} from "../../../../gameplay-enums/status-type.enum";

@Component({
  selector: 'game-panel',
  templateUrl: './header-panel.component.html',
  styleUrls: ['./header-panel.component.sass']
})
export class HeaderPanelComponent implements OnInit {
  score: number;
  shotRemaining: number;
  timer: number;
  speed: string;
  status: string;

  constructor(public seaBattleGameService: SeaBattleGameService) {
  }

  ngOnInit() {
    this.seaBattleGameService.score.subscribe(v => this.score = v);
    this.seaBattleGameService.shotRemaining.subscribe(v => this.shotRemaining = v);
    this.seaBattleGameService.timer.subscribe(v => this.timer = v);
    this.seaBattleGameService.speed.subscribe(v => this.speed = SpeedType[v]);
    this.seaBattleGameService.status.subscribe(v => this.status = GameStatusType[v]);
  }
}
