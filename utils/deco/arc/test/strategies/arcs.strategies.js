import { makeEmbedded }                                   from '@foba/util'
import { NumberVectorCollection, StringVectorCollection } from '@foba/vector'
import { strategies }                                     from '@valjoux/strategies'
import { alpha }                                          from './arcs/arc.alpha.js'
import { beta, stringify }                                from './arcs/arcs.beta.js'
import { ArcFab }                                         from '../../src/ArcFab.js'

const Strangers = {
  empty: [],
  arithmetic: NumberVectorCollection.fibonacci(12),
  stringed: StringVectorCollection.megaCities.slice(0, 7),
  textNum: NumberVectorCollection.primes(7).map(String),
  nums: [ 1, 2, 3, 0, -1, -2, -3 ],
  misc: [ null, undefined, NaN, 'Infinity', '+', 1.2E+1, 1.2E+2, 1.2E+3, 1.2E+4 ],
  combo: [ 'kfc', 'starbucks', 'pepsi', '', '1', -12, '-36', 0, 500 ]
}

// const SimpleVectors = simpleVectors({ h: 16 })
const arcFab = new ArcFab()

const candidates = {
  ...Strangers,
  // ...SimpleVectors
}

candidates |> console.log

const { lapse, result } = strategies({
  repeat: 1E+5,
  candidates: candidates|> makeEmbedded,
  methods: {
    ben: x => x,
    arc: vec => {
      const arc = arcFab.toArc(vec)
      return arc.pad() // .rates(arcFab.str.to)
    },
    alpha: alpha,
    beta: vec => beta(stringify(vec, true)),
  },
  showPretty: false,
})


for (let side of result.side)
  result.cell(side, 'arc') |> console.log

lapse |> console.log