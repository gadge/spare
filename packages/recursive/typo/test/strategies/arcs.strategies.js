import { makeEmbedded }                                   from '@foba/util'
import { NumberVectorCollection, StringVectorCollection } from '@foba/vector'
import { Presets }                                        from '@palett/presets'
import { strategies }                                     from '@valjoux/strategies'
import { Typo }                                           from '../../src/Typo.js'

const VECTORS = {
  empty: [],
  arithmetic: NumberVectorCollection.fibonacci(12),
  stringed: StringVectorCollection.megaCities.slice(0, 7),
  textNum: NumberVectorCollection.primes(7).map(String),
  nums: [ 1, 2, 3, 0, -1, -2, -3 ],
  alpha: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n' ],
  misc: [ null, undefined, NaN, 'Infinity', '+', 1.2E+1, 1.2E+2, 1.2E+3, 1.2E+4 ],
  combo: [ 'kfc', 'starbucks', 'pepsi', '', '1', -12, '-36', 0, 500 ]
}

const PRES = { pos: Presets.fresh, neg: Presets.ocean, str: Presets.metro }
const typo = new Typo({ fill: ' ', ansi: true, pres: PRES })


candidates |> console.log

const { lapse, result } = strategies({
  repeat: 1E+5,
  candidates: VECTORS|> makeEmbedded,
  methods: {
    ben: x => x,
    typo: vec => typo.renderVector(vec)
  },
  showPretty: false,
})


for (let side of result.side)
  result.cell(side, 'typo') |> console.log

lapse |> console.log