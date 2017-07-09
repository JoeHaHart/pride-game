import Phaser from 'phaser'
import Character from '../sprites/Character'

export default class extends Phaser.State {

  init () { }
  preload () { }

  create () {
    this.character = new Character({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'character',
      frame: 2,
      speed: 5
    })
    this.game.add.tileSprite(
      0,
      0,
      512,
      512,
      'tileBrick'
    )
    this.camera.follow(this.character)
    this.game.add.existing(this.character)
    this.cursors = game.input.keyboard.createCursorKeys();
  }

  update () {
    let direction = ''
    if (this.cursors.up.isDown) {
      direction = 'up'
    } else if (this.cursors.down.isDown) {
      direction = 'down'
    } else if (this.cursors.left.isDown) {
      direction = 'left'
    } else if (this.cursors.right.isDown) {
      direction = 'right'
    } else {
      direction = 'stop'
    }

    this.character.move(direction)
  }

  render() {

  }
}
