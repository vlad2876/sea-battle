import {Component, OnInit} from '@angular/core';
import {ShipType} from "../game-container-enums/ship-type.enum";

@Component({
  selector: 'home-skyline-area',
  templateUrl: './skyline-area.component.html',
  styleUrls: ['./skyline-area.component.sass']
})
export class SkylineAreaComponent implements OnInit {

  ShipType = ShipType;

  constructor() {
  }

  ngOnInit() {
  }
}
