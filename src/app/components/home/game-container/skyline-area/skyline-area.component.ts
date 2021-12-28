import {Component, OnInit} from '@angular/core';
import {ShipType} from "../game-container-enums/ship-type.enum";
import {Ship} from "./ship/ship.component";

@Component({
  selector: 'home-skyline-area',
  templateUrl: './skyline-area.component.html',
  styleUrls: ['./skyline-area.component.sass']
})
export class SkylineAreaComponent implements OnInit {

  bigShip = new Ship(1, ShipType.BigShip);
  smallShip = new Ship(2, ShipType.SmallShip);

  constructor() {
  }

  ngOnInit() {
  }
}
