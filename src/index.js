import { init, Sprite, GameLoop } from 'kontra'
import rawSpritePNG from './assets/images/sprites/game-image.png'

let { canvas, context } = init()

let mySprite

/**
 * non-image, drawn sprite
 */
let sprite = Sprite({
  x: 100,        // starting x,y position of the sprite
  y: 80,
  color: 'red',  // fill color of the sprite rectangle
  width: 20,     // width and height of the sprite rectangle
  height: 40,
  dx: 2          // move the sprite 2px to the right every frame
})

/**
 * Create HTMLImageElement to hold the imported rawSpritePNG
 */
const spriteImage = new Image()

// assign PNG to image src
spriteImage.src = rawSpritePNG

// Create kontra sprite when image successfully loads
spriteImage.onload = function() {
  mySprite = Sprite({
    x: 100,
    y: 100,
    anchor: { x: 0.5, y: 0.5 },
    dx: 1,

    // required for an image sprite
    image: spriteImage
  })

  mySprite.render()
}

// Use `mySprite` as needed in Kontra
let loop = GameLoop({  // create the main game loop
  update: function() { // update the game state
    sprite.update()
    mySprite.update()

    // wrap the sprites position when it reaches
    // the edge of the screen
    if (sprite.x > canvas.width) {
      sprite.x = -sprite.width
    }
    if (mySprite.x > canvas.width) {
      mySprite.x = -mySprite.width
    }
  },
  render: function() { // render the game state
    sprite.render()
    mySprite.render()
  }
})

loop.start()    // start the game