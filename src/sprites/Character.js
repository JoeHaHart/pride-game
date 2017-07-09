
import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset, frame, speed }) {
    super(game, x, y, asset, frame)
    this.anchor.setTo(0.5)
    this.controls = game.input.keyboard.createCursorKeys()
    this.animations.add('left', [4, 5, 3], 20, true)
    this.animations.add('right', [7, 8, 6], 20, true)
    this.animations.add('up', [10, 11, 9], 20, true)
    this.animations.add('down', [1, 2, 0], 20, true)
    this.speed = speed
  }

  move (direction) {
    if(direction == 'stop'){
      this.animations.stop()
    } else {
      this.animations.play(direction)
      const vector = {
        x: 0,
        y: 0
      }
      switch (direction) {
        case 'left':
          vector.x = -1
          break
        case 'right':
          vector.x = 1
          break
        case 'up':
          vector.y = -1
          break
        case 'down':
          vector.y = 1
          break
      }
      console.log(vector)
      console.log(this.x)
      this.x += vector.x * this.speed
      this.y += vector.y * this.speed
    }
    
    // this.x -= this.speed
  }


}
