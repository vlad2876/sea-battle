export class SightControlService {
  left = 0;

  onKeydown(event: { keyCode: number }) {
    if (event.keyCode === 39 && this.left < 980) {
      this.left += 70;
    }
    if (event.keyCode === 37 && this.left > 0) {
      this.left -= 70;
    }
  }
}
