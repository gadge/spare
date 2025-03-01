import { CrostabMatrixCollection, ModestMatrixCollection } from '@foba/foo'
import { FRESH, METRO }                                    from '@palett/presets'
import { BRACKET }                                         from '@spare/enum-brackets'
import { isMatrix }                                        from '@vect/matrix-index'
import { indexed }                                         from '@vect/object-mapper'
import { DecoMatrix }                                      from '../index.js'
import { test } from 'node:test'

const matrixCollection = Object.assign({},
  ModestMatrixCollection,
  CrostabMatrixCollection
)

matrixCollection |> console.log

const decoMatrix = DecoMatrix({
  left: 4,
  right: 2,
  presets: [ FRESH, METRO ],
  discrete: false,
  bracket: BRACKET,
})

for (let [ key, mat ] of indexed(matrixCollection)) {
  if (!isMatrix(mat)) continue
  key |> console.log
  mat |> decoMatrix |> console.log // says[key]
}

