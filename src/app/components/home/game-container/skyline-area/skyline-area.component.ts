import {Component, OnInit} from '@angular/core';
import {ShipType} from "../game-container-enums/ship-type.enum";
import {Ship} from "./ship/ship.component";

@Component({
  selector: 'home-skyline-area',
  templateUrl: './skyline-area.component.html',
  styleUrls: ['./skyline-area.component.sass']
})
export class SkylineAreaComponent implements OnInit {
  bigShip: Ship = {id: 1, type: ShipType.BigShip, destroyed: false};
  smallShip: Ship = {id: 2, type: ShipType.SmallShip, destroyed: false};

  constructor() {
  }

  ngOnInit() {
  }
}
