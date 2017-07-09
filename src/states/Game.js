import Phaser from 'phaser'
import Character from '../sprites/Character'

export default class extends Phaser.State {

  init () {}
  preload () {}

  create () {
    this.character = new Character({
      game: this,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'character',
      frame: 2
    })
    this.camera.follow(this.character)
    this.game.add.existing(this.character)
    this.character.animations.play('left')
  }

  render () {

  }
}
