import {Component, OnInit} from '@angular/core';
import {ShipType} from "../game-container-enums/ship-type.enum";
import {Ship} from "./ship/ship.component";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ShipState} from "../game-container-enums/ship-state.enum";

@Component({
  selector: 'home-skyline-area',
  templateUrl: './skyline-area.component.html',
  styleUrls: ['./skyline-area.component.sass'],
  animations: [
    trigger('shipMovement', [
      state('start', style({left: -210})),
      state('end', style({left: 1050})),
      transition('start => end', animate('5s'))
    ])
  ]
})
export class SkylineAreaComponent implements OnInit {
  bigShip: Ship = {id: 1, type: ShipType.BigShip, destroyed: false};
  smallShip: Ship = {id: 2, type: ShipType.SmallShip, destroyed: false};

  shipMovementInterval = 5200;
  stateChangeTimeout = 5100;
  shipMovementState = ShipState.Start;

  shipMovementAnimation = setInterval(() => {
    this.shipMovementState = ShipState.End;
    setTimeout(() => {
      this.shipMovementState = ShipState.Start;
    }, this.stateChangeTimeout);
  }, this.shipMovementInterval);

  constructor() {
  }

  ngOnInit() {
  }
}
