import { CrosTab }                   from '@analys/crostab'
import { makeEmbedded }                           from '@foba/util'
import { delogger }                               from '@spare/deco'
import { decoCrostab, decoSamples, logger, says } from '@spare/logger'
import { strategies }                             from '@valjoux/strategies'
import { dateTime }                               from '@valjoux/timestamp-pretty'
import { candidates }                             from '../candidates'
import { foldArc }                                from './src/foldArc'
import { foldDev }                                from './src/foldDev'
import { foldEdg }                                from './src/foldEdg'
import { foldZen }                                from './src/foldZen'

const test = () => {
  const { lapse, result } = strategies({
    repeat: 1E+5,
    candidates: candidates|> makeEmbedded,
    methods: {
      foldArc: foldArc,
      foldDev: foldDev,
      foldEdg: foldEdg,
      foldZen: foldZen
    }
  })
  lapse |> decoCrostab |> says['lapse'].p(dateTime())
  '' |> logger
  result |> decoCrostab |> says['result'].p(dateTime())
  CrosTab.from(result).columnwiseSamples(['Modigliani'], true, 'method') |> decoSamples |> delogger
}
test()