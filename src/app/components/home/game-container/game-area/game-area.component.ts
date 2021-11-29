import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-game-area',
  templateUrl: './game-area.component.html',
  styleUrls: ['./game-area.component.sass']
})
export class GameAreaComponent implements OnInit {
  rows = 10;
  columns = 15;

  tr: any = [];
  td: any = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.rows; i++) {
      this.tr.push({
        id: i,
        selected: false
      })
    }

    for (let i = 0; i < this.columns; i++) {
      this.td.push({
        id: i,
        selected: false
      })
    }

    this.tr[9].selected = true;
    this.td[0].selected = true;
  }
}
