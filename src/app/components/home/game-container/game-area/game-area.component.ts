import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-game-area',
  templateUrl: './game-area.component.html',
  styleUrls: ['./game-area.component.sass']
})
export class GameAreaComponent implements OnInit {
  tr = new Array(10);
  td = new Array(15);

  constructor() { }

  ngOnInit(): void {
  }
}
