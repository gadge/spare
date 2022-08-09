import { makeEmbedded }                                   from '@foba/util'
import { NumberVectorCollection, StringVectorCollection } from '@foba/vector'
import { FRESH, METRO, Presets }                          from '@palett/presets'
import { strategies }                                     from '@valjoux/strategies'
import { gather }                                         from '@vect/vector-init'
import { ArcFab }                                         from '../../src/ArcFab.js'
import { Typo }                                           from '../../src/Typo.js'
import { alpha }                                          from './arcs/arc.alpha.js'
import { beta, stringify }                                from './arcs/arcs.beta.js'
import { TypoFab }                                        from './arcs/arcs.delta.js'
import { ArcFab as ArcFabGamma }                          from './arcs/arcs.gamma.js'
import { fluoVector }                                     from './fluoVector.js'

const Strangers = {
  empty: [],
  arithmetic: NumberVectorCollection.fibonacci(12),
  stringed: StringVectorCollection.megaCities.slice(0, 7),
  textNum: NumberVectorCollection.primes(7).map(String),
  nums: [ 1, 2, 3, 0, -1, -2, -3 ],
  alpha: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n' ],
  misc: [ null, undefined, NaN, 'Infinity', '+', 1.2E+1, 1.2E+2, 1.2E+3, 1.2E+4 ],
  combo: [ 'kfc', 'starbucks', 'pepsi', '', '1', -12, '-36', 0, 500 ]
}

// const SimpleVectors = simpleVectors({ h: 16 })
const arcFab = new ArcFab()
const arcFabGamma = new ArcFabGamma()
const typoFab = new TypoFab()
const PRES = { pos: Presets.fresh, neg: Presets.ocean, str: Presets.metro }
const typo = new Typo({ fill: ' ', ansi: true, pres: PRES })
const PAD_CONF = { fill: ' ', ansi: false }
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
      const arc = arcFab.vector(vec)
      return arc
      // return arc.pad()
      // .rates(arcFab.str.to)
    },
    fut: vec => {
      const strs = typoFab.stringify(vec)
      return typoFab.evaluate(strs, PAD_CONF)
    },
    dev: vec => {
      const arc = arcFabGamma.iter(vec, PAD_CONF)
      return gather(arc)
    },
    alpha: alpha,
    beta: vec => beta(stringify(vec, true)),
    oldFluo: vec => {
      const texts = stringify(vec, true)
      return fluoVector(texts, [
        Object.assign({}, FRESH),
        Object.assign({}, METRO),
      ])
    },
    typo: vec => typo.renderVector(vec)

  },
  showPretty: false,
})


for (let side of result.side)
  result.cell(side, 'arc') |> console.log

lapse |> console.log