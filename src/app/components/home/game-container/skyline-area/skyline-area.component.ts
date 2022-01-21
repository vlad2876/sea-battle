import {Component, OnInit} from '@angular/core';
import {ShipType} from "../game-container-enums/ship-type.enum";
import {Ship} from "./ship/ship.component";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ShipState} from "../game-container-enums/ship-state.enum";
import {SeaBattleGameService} from "../game-container-services/sea-battle-game.service";
import {ShipDirection} from "../../../../gameplay-enums/ship-direction.enum";

@Component({
  selector: 'home-skyline-area',
  templateUrl: './skyline-area.component.html',
  styleUrls: ['./skyline-area.component.sass'],
  animations: [
    trigger('shipMovementRight', [
      state('start', style({left: -210})),
      state('end', style({left: 1050})),
      transition('start => end', animate('5s')),
    ]),
    trigger('shipMovementLeft', [
      state('start', style({left: 1050})),
      state('end', style({left: -210})),
      transition('start => end', animate('5s'))
    ])
  ]
})
export class SkylineAreaComponent implements OnInit {
  ShipType = ShipType;
  ShipDirection = ShipDirection;

  ship: Ship;

  shipDirection: ShipDirection;
  shipMovementState = ShipState.Start;

  constructor(private seaBattleGameService: SeaBattleGameService) {
  }

  ngOnInit() {
    this.seaBattleGameService.shipAnimationState.subscribe(v => this.shipMovementState = v);
    this.seaBattleGameService.nextShip.subscribe(v => {
      this.ship = {id: 1, type: v, destroyed: false};
    });
    this.seaBattleGameService.shipDirection.subscribe(v => this.shipDirection = v);
  }
}
