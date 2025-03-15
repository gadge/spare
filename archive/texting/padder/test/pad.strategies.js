import { makeEmbedded }              from '@foba/util'
import { bracket }                   from '@texting/bracket'
import { decoCrostab, logger, says } from '@spare/logger'
import { strategies }                from '@valjoux/strategies'
import { dateTime }                  from '@valjoux/timestamp-pretty'
import { Pad, pad }                  from '../src/Pad'

const padder = Pad()
const test = () => {
  const { lapse, result } = strategies({
    repeat: 1E+6,
    candidates: {
      alpha: '299,729,458.0',
      beta: '299792458.0',
      gamma: 'Albert Einstein',
      delta: 'E = M * C ^ 2'
    } |> makeEmbedded,
    methods: {
      arch: x => x,
      dev: x => padder(x, 16) |> bracket,
      edge: x => pad(x, 16) |> bracket
    }
  })
  lapse |> decoCrostab |> says['lapse'].p(dateTime())
  '' |> logger
  result |> decoCrostab |> says['result'].p(dateTime())
}
test()