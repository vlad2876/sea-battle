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
      transition('start => end', animate('3s'))
    ])
  ]
})
export class SkylineAreaComponent implements OnInit {

  ShipType = ShipType;

  state = 'start';

  move = setInterval(() => {
    this.state = 'end';
    setTimeout(() => {
      this.state = 'start';
    }, 3100);
  }, 3200)

  constructor() {
  }

  ngOnInit() {
  }
}
