import {Component, OnInit} from '@angular/core';
import {ShipType} from "../game-container-enums/ship-type.enum";
import {animate, state, style, transition, trigger} from "@angular/animations";

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

  shipMovementState = 'start';

  shipMovementAnimation = setInterval(() => {
    this.shipMovementState = 'end';
    setTimeout(() => {
      this.shipMovementState = 'start';
    }, 5100);
  }, 5200);

  constructor() {
  }

  ngOnInit() {
  }
}
