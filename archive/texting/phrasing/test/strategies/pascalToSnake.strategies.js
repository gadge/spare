import { makeEmbedded }      from '@foba/util'
import { decoCrostab, says } from '@spare/logger'
import { strategies }        from '@valjoux/strategies'
import { CAMEL }             from '../../output/regexes'
import { camelToSnake }      from '../../src/phrasing'

export const CAMEL_INI = /^[A-Z]+|[\d]+/g
export const GAP_CAMEL = /\G[A-Z]+|[\d]+/g
export const GAPCAP = /(.)([A-Z][a-z]+|[A-Z]+|[\d]+[a-z]*)/g
const { lapse, result } = strategies({
  repeat: 2E+5,
  candidates: {
    wsjAlp: 'theWallStreetJournal2.0USA',
    cp2077Alp: 'theCyberPunk2077ndCdpr',
    numStart: '1987GeorgeOrwell',
    wsj: 'TheWallStreetJournal2.0USA',
    cp2077: 'TheCyberPunk2077ndCdpr',
  } |> makeEmbedded,
  methods: {
    bench: x => '',
    byReplace: (camel, de = '-') => camel.replace(CAMEL, it => de + it.toLowerCase()).trim(),
    byExecIter: camelToSnake,
    // _: x => '',
  },
  showParams: false
})
lapse |> decoCrostab |> says['lapse']
result |> decoCrostab |> says['result']
