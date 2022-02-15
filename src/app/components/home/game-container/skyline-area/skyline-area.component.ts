import { Component, OnInit } from '@angular/core';
import { ShipType } from "../game-container-enums/ship-type.enum";
import { animate, AnimationBuilder, style } from "@angular/animations";
import { ShipDirection } from "../../../../gameplay-enums/ship-direction.enum";
import { SeaBattleGameService } from "../game-container-services/sea-battle-game.service";
import { Ship } from "./ship/ship.component";
import { ShipStatus } from "../../../../gameplay-enums/ship-status.enum";

@Component({
  selector: 'home-skyline-area',
  templateUrl: './skyline-area.component.html',
  styleUrls: ['./skyline-area.component.sass']
})
export class SkylineAreaComponent implements OnInit {
  ShipType = ShipType;

  ship: Ship;

  shipDirection: ShipDirection = ShipDirection.Right;
  shipId = 1;
  shipAnimationTime = 5000;
  skylineAreaWidth: number;

  constructor(
    private seaBattleGameService: SeaBattleGameService,
    private builder: AnimationBuilder
  ) { }

  shipMovementAnimation(shipElement: HTMLElement, id: number) {
    const shipMovementRight = this.builder.build([
      style({ left: `${shipElement.style.left}` }),
      animate(this.shipAnimationTime, style({ left: `${this.skylineAreaWidth + shipElement.offsetWidth}px` }))
    ]);
    const shipMovementLeft = this.builder.build([
      style({ left: `${shipElement.style.left}` }),
      animate(this.shipAnimationTime, style({ left: `${0 - shipElement.offsetWidth}px` }))
    ]);

    const shipAnimationPlayer = this.shipDirection === ShipDirection.Right ? shipMovementRight.create(shipElement) :
      shipMovementLeft.create(shipElement);

      shipAnimationPlayer.play();

      shipAnimationPlayer.onDone(() => {
        this.seaBattleGameService.setShipPosition(shipElement.offsetLeft, id);
        this.seaBattleGameService.setShipStatus(ShipStatus.SwimAway, id);
      });

    this.shipId++;
  }

  ngOnInit() {
    this.seaBattleGameService.shipDirection.subscribe(shipDirection => this.shipDirection = shipDirection);
    this.seaBattleGameService.nextShip.subscribe(shipType => {
      this.ship = { id: this.shipId, type: shipType, destroyed: false };
    });
    this.seaBattleGameService.shipAnimation.subscribe(shipId => {
      setTimeout(() => {
       const shipElement: HTMLElement = document.querySelector('#ship');
        this.skylineAreaWidth = document.getElementById('skyline-area').offsetWidth;
        this.shipDirection === ShipDirection.Right ? shipElement.style.left = `${0 - shipElement.offsetWidth}px` :
          shipElement.style.left = `${this.skylineAreaWidth + shipElement.offsetWidth}px`;
        this.shipMovementAnimation(shipElement, shipId);
      }, 0);
    });
  }
}
