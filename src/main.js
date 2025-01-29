// Code Practice: RNGolf
// Name: Ananya Setty
// Date: 1/29/25

'use strict'

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 960,
    //tell phaser we are going to use physics
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [ Play ]
}

let game = new Phaser.Game(config)

let { width, height } = game.config