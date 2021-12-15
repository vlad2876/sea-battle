import {Component, OnInit} from '@angular/core';
import {ShipType} from "../game-container-enums/ship-type.enum";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ShipStateEnum} from "../game-container-enums/ship-state.enum";

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

  ShipType = ShipType;

  shipMovementInterval = 5200;
  stateChangeTimeout = 5100;
  shipMovementState = ShipStateEnum.Start;

  shipMovementAnimation = setInterval(() => {
    this.shipMovementState = ShipStateEnum.End;
    setTimeout(() => {
      this.shipMovementState = ShipStateEnum.Start;
    }, this.stateChangeTimeout);
  }, this.shipMovementInterval);

  constructor() {
  }

  ngOnInit() {
  }
}
