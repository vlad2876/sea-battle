import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'home-skyline-area',
  templateUrl: './skyline-area.component.html',
  styleUrls: ['./skyline-area.component.sass']
})
export class SkylineAreaComponent implements OnInit {

  shipTypes: Map<string, string> = new Map([
    [ShipType[0], 'big-ship.png'],
    [ShipType[1], 'small-ship.jpg']
  ]);

  constructor() {
  }

  ngOnInit() {
  }
}

enum ShipType {
  BigShip,
  SmallShip
}
