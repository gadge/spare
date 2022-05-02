import { makeEmbedded }      from '@foba/util'
import { decoCrostab, says } from '@spare/logger'
import { LITERAL }           from '@spare/regex-phrasing'
import { strategies }        from '@valjoux/strategies'
import { splitter }          from '../../../index'
import { candidates }        from '../candidates'
import { decoStringIter }    from './iterate'
import { WORDREG }           from './regexps'

const SPLIT_REG = /(?<=\W+|_+)|(?=\W+|_+)/g

const { lapse, result } = strategies({
  repeat: 1E+5,
  candidates: candidates|> makeEmbedded,
  methods: {
    bench: x => x.split(/\W+|_+/g),
    literal: x => splitter(x, LITERAL),
    wordReg: x => splitter(x, WORDREG),
    native: x => x.split(SPLIT_REG),
    iterate: x => decoStringIter(x),
  }
})

lapse|> decoCrostab |> says['lapse']
result|> decoCrostab |> says['result']