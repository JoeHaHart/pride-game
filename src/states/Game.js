import Phaser from 'phaser'
import Character from '../sprites/Character'

export default class extends Phaser.State {

  init() { }
  preload() { }

  create() {
    this.character = new Character({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'character',
      frame: 2
    })
    this.camera.follow(this.character)
    this.game.add.existing(this.character)
    this.cursors = game.input.keyboard.createCursorKeys();
  }

  update () {
    if (this.cursors.up.isDown) {
      this.character.animations.play('up')
      this.lastDirection = 'up'
    } else if (this.cursors.down.isDown) {
      this.character.animations.play('down')
      this.lastDirection = 'down'
    } else if (this.cursors.left.isDown) {
      this.character.animations.play('left')
      this.lastDirection = 'left'
    } else if (this.cursors.right.isDown) {
      this.character.animations.play('right')
      this.lastDirection = 'right'
    } else {
      this.character.animations.stop()
    }
  }

  render() {

  }
}
