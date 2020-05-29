import { makeEmbedded }                 from '@foba/util'
import { decoCrostab, says }            from '@spare/logger'
import { strategies }                   from '@valjoux/strategies'
import { DASH_CAPREST, INIWORD, WORD }  from '../../resources/regexes'
import { wordToCap }                    from '../../src/wordToCap'
import { candidates }                   from '../candidates'
import { byReplace, classic, mutative } from './functions/dashedToCamel'

const { lapse, result } = strategies({
  repeat: 2E+5,
  candidates: candidates |> makeEmbedded,
  methods: {
    bench: x => '',
    classic,
    mutative,
    iter: dashed => {
      let ms, wd, ph = ''
      if ((ms = WORD.exec(dashed)) && ([wd] = ms)) ph = wd.toLowerCase()
      while ((ms = WORD.exec(dashed)) && ([wd] = ms)) ph += wordToCap(wd)
      return ph
    },
    iterCapRest: dashed => {
      let ms, cap, wd, ph = ''
      if ((ms = INIWORD.exec(dashed)) && ([wd] = ms)) ph = wd.toLowerCase()
      while ((ms = DASH_CAPREST.exec(dashed)) && ([, cap, wd] = ms)) ph += (cap.toUpperCase() + wd.toLowerCase())
      return ph
    },
    byReplace,
    // _: x => '',
  },
  showParams: false
})
lapse |> decoCrostab |> says['lapse']
result |> decoCrostab |> says['result']
