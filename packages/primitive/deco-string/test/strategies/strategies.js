import { makeEmbedded }                           from '@foba/util'
import { says }                                   from '@spare/logger'
import { DecoCrostab, decoCrostab }               from '@spare/logger'
import { candidates }                             from '@spare/splitter/test/alpha/candidates'
import { strategies }                             from '@valjoux/strategies'
import { deco, decoCamel, decoPhrase, decoSnake } from '../../index.js'
import { decoStringArc }                          from './src/decoStringArc.js'
import { decoStringDev }                          from './src/decoStringDev.js'
import { decoStringFut }                          from './src/decoStringFut.js'

const { lapse, result } = strategies({
  repeat: 2E+4,
  candidates: candidates |> makeEmbedded,
  methods: {
    bench: x => x,
    arc: decoStringArc,
    dev: decoStringDev,
    fut: decoStringFut,
    product: deco,
    camel: decoCamel,
    snake: decoSnake,
    phrase: decoPhrase,
  }
})
lapse |> decoCrostab |> says['lapse']
result |> DecoCrostab() |> says['result']

