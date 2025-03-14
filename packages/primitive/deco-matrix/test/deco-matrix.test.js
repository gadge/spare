import { CrostabMatrixCollection, ModestMatrixCollection } from '@foba/foo'
import { isMatrix }                                        from '@vect/matrix-index'
import { indexed }                                         from '@vect/object-mapper'
import { test }                                            from 'node:test'
import { decoMatrix }                                      from '../index.js'

const matrixCollection = Object.assign({},
  ModestMatrixCollection,
  CrostabMatrixCollection,
)

// console.log(matrixCollection)

// const decoMatrix = DecoMatrix({
//   left: 4,
//   right: 2,
//   presets: [ FRESH, METRO ],
//   discrete: false,
//   bracket: BRACKET,
// })

test('decoMatrix', () => {
  for (let [ key, mat ] of indexed(matrixCollection)) {
    if (!isMatrix(mat)) {
      console.log(key, 'is not matrix')
      continue
    }
    try {
      console.log(key)
      console.log(decoMatrix(mat,0)) // says[key]
    } catch (e) {
      console.log('error', e)
    }
  }
})

