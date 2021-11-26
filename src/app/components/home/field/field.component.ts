import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.sass']
})
export class FieldComponent implements OnInit {
  tr = new Array(10)
  td = new Array(15)


  constructor() { }

  ngOnInit(): void {
  }


}
