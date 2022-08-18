import { makeEmbedded }                                   from '@foba/util'
import { NumberVectorCollection, StringVectorCollection } from '@foba/vector'
import { BESQUE, METRO, PLANET }                          from '@palett/presets'
import { COSP }                                           from '@texting/enum-chars'
import { strategies }                                     from '@valjoux/strategies'
import { Typo }                                           from '../../../target/Typo.js'
import { fluoVector }                                     from '../resources/fluoVector.js'
import { Typo as TypoB }                                  from '../resources/Typo.js'

const VECTORS = {
  empty: [],
  arith: NumberVectorCollection.fibonacci(16),
  mirror: NumberVectorCollection.absoluteMirror(12, 3),
  cities: StringVectorCollection.megaCities.slice(0, 12),
  supers: StringVectorCollection.powerCars.slice(0, 18),
  textNum: NumberVectorCollection.primes(7).map(String),
  nums: [ 1, 2, 3, 0, -1, -2, -3 ],
  alpha: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n' ],
  misc: [ null, undefined, NaN, 'Infinity', '+', 1.2E+1, 1.2E+2, 1.2E+3, 1.2E+4 ],
  combo: [ 'kfc', 'starbucks', 'pepsi', '', '1', -12, '-36', 0, 500 ]
}


const typo = new Typo({ fill: ' ', ansi: true, pres: { pos: BESQUE, neg: PLANET, str: METRO } })
const typoB = new TypoB({ fill: ' ', ansi: true, pres: { pos: BESQUE, neg: PLANET, str: METRO } })
const DECO_CONF = {
  ansi: true, presets: [ BESQUE, METRO ]
}


VECTORS |> console.log

const { lapse, result } = strategies({
  repeat: 2E+4,
  candidates: VECTORS|> makeEmbedded,
  methods: {
    ben: x => x,
    fluo: vec => fluoVector.call(DECO_CONF, vec),
    beta: vec => {
      if (!vec?.length) return '[]'
      return '[ ' + typoB.vector(vec, true).join(COSP) + ' ]'
      // return Lines.join(iter, LF)
    },
    typo: vec => {
      if (!vec?.length) return '[]'
      return typo.vector(vec)
    },
    // typo: mat => typo.matrix(mat).map(row => '[ ' + row.join(COSP) + ' ]').join(LF),

  },
  showPretty: false,
})

for (let side of result.side) {
  side |> console.log

  const a = result.cell(side, 'fluo')
  const b = result.cell(side, 'iter')
  const c = result.cell(side, 'gen')
  a |> console.log
  b |> console.log
  c |> console.log
  // Passage.triMatrix(a, b, c) |> console.log
  // result.cell(side, 'typo') |> console.log
}

lapse |> console.log