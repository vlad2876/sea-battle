import {Component, Input, OnInit} from '@angular/core';
import {ShipType} from "../../game-container-enums/ship-type.enum";

@Component({
  selector: 'home-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.sass']
})
export class ShipComponent implements OnInit {

  ShipType = ShipType;

  public readonly shipImagePath: Map<ShipType, string> = new Map([
    [ShipType.BigShip, 'big-ship.png'],
    [ShipType.SmallShip, 'small-ship.jpg']
  ]);

  @Input() shipType: ShipType | undefined;

  constructor() { }

  ngOnInit() {
  }
}
