import {Component, OnInit} from '@angular/core';
import {SightControlKey} from "../game-container-enums/sight-control-key.enum";

@Component({
  selector: 'home-sight-area',
  templateUrl: './sight-area.component.html',
  styleUrls: ['./sight-area.component.sass']
})
export class SightAreaComponent implements OnInit {
  sightStep = 7;
  width: number;
  leftIndent: number;
  sightElement: HTMLElement;

  onKeydown(event: { keyCode: SightControlKey }) {
    if (event.keyCode === SightControlKey.ArrowRight && this.leftIndent < this.width) {
      this.sightElement.style.left = this.leftIndent + this.sightStep + 'px';
      this.leftIndent += this.sightStep;
    }

    if (event.keyCode === SightControlKey.ArrowLeft && this.leftIndent > 0) {
      this.sightElement.style.left = this.leftIndent - this.sightStep + 'px';
      this.leftIndent -= this.sightStep;
    }
  }

  constructor() {
  }

  ngOnInit() {
    const sightAreaElement: HTMLElement = document.querySelector('#sight-area');
    this.sightElement = document.querySelector('.sight-area__sight');
    this.width = sightAreaElement.offsetWidth - this.sightElement.offsetWidth;
    this.leftIndent = this.width / 2;
    this.sightElement.style.left = this.leftIndent + 'px';
  }
}
