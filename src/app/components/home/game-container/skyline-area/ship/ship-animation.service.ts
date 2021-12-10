export class ShipAnimationService {
  state = 'void';

  move = setInterval(() => {
    this.state = 'start'
    setTimeout(() => {
      this.state = 'end'
      setTimeout(() => {
        this.state = 'void'
      }, 3000)
    }, 1000)
  }, 6000)
}
