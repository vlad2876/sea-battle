import {Component, Input, OnInit} from '@angular/core';
import {ShipType} from "../../game-container-enums/ship-type.enum";

@Component({
  selector: 'home-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.sass']
})
export class ShipComponent implements OnInit {

  ShipType = ShipType;

  public readonly shipImagePath: Map<string, string> = new Map([
    [ShipType[0], 'big-ship.png'],
    [ShipType[1], 'small-ship.jpg']
  ]);

  @Input() shipType = '';

  constructor() { }

  ngOnInit() {
  }
}
