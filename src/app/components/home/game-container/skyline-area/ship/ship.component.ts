import {Component, Input, OnInit} from '@angular/core';
import {ShipType} from "../../game-container-enums/ship-type.enum";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ShipAnimationService} from "./ship-animation.service";

@Component({
  selector: 'home-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.sass'],
  providers: [ShipAnimationService],
  animations: [
    trigger('shipMovement', [
      state('start', style({position: 'relative', left: 0})),
      state('end', style({position: 'relative', left: 900})),
      state('void', style({opacity: 0})),
      transition('start => end', animate('3s')),
      transition('void => start', [
        style({ opacity: 0, position: 'relative', left: -150 }),
        animate('1s', style({ opacity: 1, position: 'relative', left: 0 })),
      ]),
      transition('end => void', [
        animate('1s', style({ opacity: 0, position: 'relative', left: 1050 })),
      ]),
    ])
  ]
})
export class ShipComponent implements OnInit {

  ShipType = ShipType;

  public readonly shipImagePath: Map<ShipType, string> = new Map([
    [ShipType.BigShip, 'big-ship.png'],
    [ShipType.SmallShip, 'small-ship.jpg']
  ]);

  @Input() shipType: ShipType = ShipType.BigShip;

  constructor(public shipAnimationService: ShipAnimationService) { }

  ngOnInit() {
  }
}
