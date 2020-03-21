import { isNumeric } from '@typen/num-loose'
import { rand } from '@aryth/rand'

const coordinate = function () {
  const { x, y } = this
  return { x, y }
}

export const FunctionCollection = {
  additiveLambdaDev: x => ++x,
  additiveLambdaFut: x => { return ++x },
  additiveFunction: function additive (x) { return ++x },
  additiveAnonymous: function (x) { return ++x },
  additiveWithThis: function (x) { return ++this.x},
  coordinate,
  conditional: function (x) {
    if (x % 2) {
      return 'odd'
    } else {
      return 'even'
    }
  },
  coordinateBind: coordinate.bind({ x: 1, y: 2 }),
  parseNumeric: x => isNumeric(x) ? +x : NaN,
  nested () {
    const alpha = () => () => this
    const beta = function () { Object.assign({ foo: true }, this) }
    function gamma ({ a = rand() } = {}) { return ++a }
    return true
  }
}
