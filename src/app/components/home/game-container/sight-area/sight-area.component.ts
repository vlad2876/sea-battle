import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {SightControlKey} from "../game-container-enums/sight-control-key.enum";

@Component({
  selector: 'home-sight-area',
  templateUrl: './sight-area.component.html',
  styleUrls: ['./sight-area.component.sass']
})

export class SightAreaComponent implements OnInit, AfterViewInit {
  sightStep = 7;
  width: number;
  leftIndent: number;
  @ViewChild('sight', { read: ElementRef }) sight: ElementRef;
  @ViewChild('sightArea', { read: ElementRef }) sightArea: ElementRef;

  @HostListener('window:keydown', ['$event'])
  onKeydown(event: { keyCode: SightControlKey }) {
    if (event.keyCode === SightControlKey.ArrowRight && this.leftIndent < this.width) {
      this.sight.nativeElement.style.left = `${this.leftIndent + this.sightStep}px`;
      this.leftIndent += this.sightStep;
    }

    if (event.keyCode === SightControlKey.ArrowLeft && this.leftIndent > 0) {
      this.sight.nativeElement.style.left = `${this.leftIndent - this.sightStep}px`;
      this.leftIndent -= this.sightStep;
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.width = this.sightArea.nativeElement.offsetWidth - this.sight.nativeElement.offsetWidth;
    this.leftIndent = this.width / 2;
    this.sight.nativeElement.style.left = `${this.leftIndent}px`;
  }
}
