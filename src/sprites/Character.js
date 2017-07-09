
import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset, frame }) {
    super(game, x, y, asset, frame)
    this.anchor.setTo(0.5)
    this.controls = game.input.keyboard.createCursorKeys()
    this.animations.add('left', [4, 5, 3], 10, true)
    this.animations.add('right', [7, 8, 6], 10, true)
    this.animations.add('up', [10, 11, 9], 10, true)
    this.animations.add('down', [1, 2, 0], 10, true)
  }
}
