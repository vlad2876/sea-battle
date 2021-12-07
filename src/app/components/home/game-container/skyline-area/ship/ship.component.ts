import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'home-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.sass']
})
export class ShipComponent implements OnInit {
  bigShip: string = 'big-ship.png';
  smallShip: string = 'small-ship.jpg';

  @Input() shipType: string | undefined = '';

  constructor() { }

  ngOnInit() {
  }

}
