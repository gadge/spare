import { makeEmbedded }      from '@foba/util'
import { decoCrostab, says } from '@spare/logger'
import { strategies }        from '@valjoux/strategies'
import { CAPREST, WORD }     from '../../output/regexes'
import { wordToCap }         from '../../src/wordToCap'
import { candidates }        from '../candidates'
import { mutativePascal }    from './functions/dashedToCamel'

const { lapse, result } = strategies({
  repeat: 2E+5,
  candidates: candidates |> makeEmbedded,
  methods: {
    bench: x => '',
    mutativePascal,
    iterPascal: dashed => {
      let ms, wd, ph = ''
      while ((ms = WORD.exec(dashed)) && ([wd] = ms)) ph += wordToCap(wd)
      return ph
    },
    iterCapRestPascal: dashed => {
      let ms, cap, wd, ph = ''
      while ((ms = CAPREST.exec(dashed)) && ([, cap, wd] = ms)) ph += (cap.toUpperCase() + wd.toLowerCase())
      return ph
    },
  },
  showParams: false
})
lapse |> decoCrostab |> says['lapse']
result |> decoCrostab |> says['result']
