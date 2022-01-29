import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { SightControlKey } from "../game-container-enums/sight-control-key.enum";
import { SeaBattleGameService } from "../game-container-services/sea-battle-game.service";
import { KeyCodeEnum } from "../game-container-enums/key-code.enum";

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

  @HostListener('window:keyup', ['$event'])
  makeShot(event: { code: KeyCodeEnum }) {
    if (event.code === KeyCodeEnum.Space) {
      this.seaBattleGameService.makeShot();
    }
  }

  constructor(private seaBattleGameService: SeaBattleGameService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.width = this.sightArea.nativeElement.offsetWidth - this.sight.nativeElement.offsetWidth;
    this.leftIndent = this.width / 2;
    this.sight.nativeElement.style.left = `${this.leftIndent}px`;
  }
}
