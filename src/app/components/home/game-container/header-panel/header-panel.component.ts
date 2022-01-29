import { Component, OnInit } from '@angular/core';
import { SeaBattleGameService } from "../game-container-services/sea-battle-game.service";
import { SpeedType } from "../../../../gameplay-enums/speed-type.enum";
import { GameStatusType } from "../../../../gameplay-enums/status-type.enum";

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

  startGame() {
    this.seaBattleGameService.startGame();
  }

  constructor(private seaBattleGameService: SeaBattleGameService) {
  }

  ngOnInit() {
    this.seaBattleGameService.score.subscribe(score => this.score = score);
    this.seaBattleGameService.shotRemaining.subscribe(shotRemaining => this.shotRemaining = shotRemaining);
    this.seaBattleGameService.timer.subscribe(timer => this.timer = timer);
    this.seaBattleGameService.speed.subscribe(speed => this.speed = SpeedType[speed]);
    this.seaBattleGameService.status.subscribe(status => this.status = GameStatusType[status]);
  }
}
