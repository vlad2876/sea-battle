import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.sass']
})
export class FieldComponent implements OnInit {
  rows: number = 8
  columns: number = 15

  tr = new Array(this.rows)
  td = new Array(this.columns)


  constructor() { }

  ngOnInit(): void {
  }

  setFieldSize() {
    if (this.rows <= 8 && this.rows >= 5)
      this.tr.length = this.rows
    else if (this.rows > 8) {
      this.rows = 8
      this.tr.length = this.rows
      alert('Max. value of rows: 8')
    }
    else {
      this.rows = 5
      this.tr.length = this.rows
      alert('Min. value of rows: 5')
    }

    if (this.columns <= 15 && this.columns >= 10)
      this.td.length = this.columns
    else if (this.columns > 15) {
      this.columns = 15
      this.td.length = this.columns
      alert('Max. value of columns: 15')
    }
    else {
      this.columns = 10
      this.td.length = this.columns
      alert('Min. value of columns: 10')
    }

  }

}
