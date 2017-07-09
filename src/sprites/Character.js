
import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset, frame }) {
    super(game, x, y, asset, frame)
    this.anchor.setTo(0.5)
    this.controls = game.input.keyboard.createCursorKeys()
  }

  create () {
    this.animations.add('left')
  }

}

