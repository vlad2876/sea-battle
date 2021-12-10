import {SightControlKey} from "../../game-container-enums/sight-control-key.enum";

export class SightControlService {
  left = 0;
  maxLeft = 980;

  onKeydown(event: { keyCode: SightControlKey }) {
    if (event.keyCode === SightControlKey.ArrowRight && this.left < this.maxLeft) {
      this.left += 10;
    }
    if (event.keyCode === SightControlKey.ArrowLeft && this.left > 0) {
      this.left -= 10;
    }
  }
}
