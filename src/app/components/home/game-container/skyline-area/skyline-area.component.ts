import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'home-skyline-area',
  templateUrl: './skyline-area.component.html',
  styleUrls: ['./skyline-area.component.sass']
})
export class SkylineAreaComponent implements OnInit {

  shipType = new Map();

  constructor() {
  }

  ngOnInit() {
    this.shipType.set(ShipType[0], 'big-ship.png')
      .set(ShipType[1], 'small-ship.jpg');
  }
}

enum ShipType {
  BigShip,
  SmallShip
}
