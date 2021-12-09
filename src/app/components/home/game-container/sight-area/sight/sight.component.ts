import {Component, OnInit} from '@angular/core';
import {SightControlService} from "./sight-control.service";

@Component({
  selector: 'home-sight',
  templateUrl: './sight.component.html',
  styleUrls: ['./sight.component.sass'],
  providers: [SightControlService]
})
export class SightComponent implements OnInit {

  constructor(public sightControlService: SightControlService) {
  }

  ngOnInit() {
  }
}
