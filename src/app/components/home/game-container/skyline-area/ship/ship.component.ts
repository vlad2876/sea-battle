import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'home-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.sass']
})
export class ShipComponent implements OnInit {
  @Input() bigShipSelected: boolean = false;
  @Input() smallShipSelected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
