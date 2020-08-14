import './main.scss'
import gameImage from './assets/images/sprites/game-image.png'

console.log('Hello World')

const testESNext = (Math.random() > .5 ? 'ES2020Working' : null)
const testESNext2 = {
  child: {
    node: null,
  },
}

const method = () => {
  console.log('Hello Method')
}

method()

console.log(testESNext ?? 'ES2020 Is Working')
console.log(testESNext2?.child?.node?.other)
try {
  console.log(testESNext2?.child?.node.other)
}
catch (e) {
  console.log('Caught the error', e.toString())
}

// Using an imported image
const imgEl = document.getElementById('jsImage')
const image = document.createElement('img')

image.src = gameImage
imgEl.appendChild(image)
