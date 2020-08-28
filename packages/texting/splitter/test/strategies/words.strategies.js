import { makeEmbedded }              from '@foba/util'
import { decoCrostab, logger, says } from '@spare/logger'
import { strategies }                from '@valjoux/strategies'
import { dateTime }     from '@valjoux/timestamp-pretty'
import { wordsByIter }  from './src/wordsByIter'
import { wordsByMatch } from './src/wordsByMatch'
import { wordsBySplit } from './src/wordsBySplit'

const test = () => {
  const { lapse, result } = strategies({
    repeat: 1E+6,
    candidates: {
      device: `[arch] ${ process.arch } [platform] ${ process.platform }`,
      path: `${ process.argv[1] } ${ process.cwd() }`,
      gamma: 'foo.bar-zen_3'
    } |> makeEmbedded,
    methods: {
      wordsByIter,
      wordsByMatch,
      wordsBySplit
    }
  })
  lapse |> decoCrostab |> says['lapse'].p(dateTime())
  '' |> logger
  result |> decoCrostab |> says['result'].p(dateTime())
}
test()