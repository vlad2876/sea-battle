import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'home-skyline-area',
  templateUrl: './skyline-area.component.html',
  styleUrls: ['./skyline-area.component.sass']
})
export class SkylineAreaComponent implements OnInit {

  ShipsList = ShipsList;

  constructor() {
  }

  ngOnInit(): void {
  }

}

enum ShipsList {
  BigShip = 'big-ship.png',
  SmallShip = 'small-ship.jpg'
}
