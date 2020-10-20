import { CrostabMatrixCollection, ModestMatrixCollection } from '@foba/foo'
import { FRESH, METRO }                                    from '@palett/presets'
import { BRACKET }                                         from '@spare/enum-brackets'
import { says }                                            from '@spare/logger'
import { Deco }                                            from '../index'

const matrixCollection = Object.assign({},
  ModestMatrixCollection,
  CrostabMatrixCollection
)

const deco = Deco({
  left: 4,
  right: 2,
  presets: [FRESH, METRO],
  discrete: false,
  bracket: BRACKET,
})

for (let [key, matrix] of Object.entries(matrixCollection)) {
  matrix |> deco |> says[key]
}


