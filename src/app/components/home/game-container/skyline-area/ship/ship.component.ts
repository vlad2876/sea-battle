import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'home-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.sass']
})
export class ShipComponent implements OnInit {
  @Input() SelectedShip: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
