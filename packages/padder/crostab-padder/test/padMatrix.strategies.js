import { max }                                            from '@aryth/comparer'
import { NumberMatrixCollection, StringMatrixCollection } from '@foba/matrix'
import { makeEmbedded }                                   from '@foba/util'
import { fluoMatrix }                                     from '@palett/fluo-matrix'
import { FRESH, METRO }                                   from '@palett/presets'
import { BRACKET }                                        from '@spare/enum-brackets'
import { COSP }                                           from '@spare/enum-chars'
import { lange }                                          from '@texting/lange'
import { Liner }                                          from '@texting/liner'
import { decoCrostab, logger, says }                      from '@spare/logger'
import { Pad }                                            from '@texting/padder'
import { STR }                                            from '@typen/enum-data-types'
import { strategies }                                     from '@valjoux/strategies'
import { dateTime }                                       from '@valjoux/timestamp-pretty'
import { maxBy as maxByColumns }                          from '@vect/columns-indicator'
import { Stat }                                           from '@vect/columns-stat'
import { COLUMNWISE }                                     from '@vect/enum-matrix-directions'
import { mapper, Trizipper }                              from '@vect/matrix'
import { Duozipper }                                      from '@vect/matrix-zipper'

const maxWidths = Stat({ init: () => 0, acc: (a, b) => max(a, String(b).length) })

const test = () => {
  const { lapse, result } = strategies({
    repeat: 2E+4,
    candidates: {
      marketingMovement: StringMatrixCollection['marketingMovement'],
      integratedCultureFramework: StringMatrixCollection['integratedCultureFramework'],
      zigZagMatrix: NumberMatrixCollection['zigZagMatrix'](6)
    } |> makeEmbedded,
    methods: {
      arch: x => x,
      cla: (mx, raw) => {
        const pad = Pad()
        const widths = maxWidths(mx)
        return mapper(mx, (tx, i, j) => pad(tx, widths[j]))
        // const zipper = Duozipper((tx, va, i, j) => pad(tx, widths[j], va))
        // return zipper(mx, raw ?? mx)
      },
      dev: (mx, raw) => {
        const pad = Pad()
        const widths = maxByColumns(mx, x => String(x).length)
        const zipper = Duozipper((tx, va, i, j) => pad(tx, widths[j], va))
        return zipper(mx, raw ?? mx)
      },
      edge: (mx, raw) => {
        const pad = Pad()
        const widths = maxByColumns(mx, x => lange(String(x)))
        const zipper = Duozipper((tx, va, i, j) => pad(tx, widths[j], va))
        return zipper(mx, raw ?? mx)
      },
      fut: (mx, raw) => {
        const pad = Pad()
        const stat = Stat({ init: () => 0, acc: (a, b) => max(a, String(b).length) })
        const dye = fluoMatrix.call({ colorant: true, mutate: false }, mx, COLUMNWISE, [METRO, FRESH])
        const widths = stat(mx)
        const zipper = Trizipper((tx, dy, va, i, j) => pad(tx, widths[j], va) |> dy)
        return zipper(mx, dye, raw ?? mx)
      },
      epi: (mx, raw) => {
        const pad = Pad()
        const stat = Stat({ init: () => 0, acc: (a, b) => max(a, String(b).length) })
        const widths = stat(mx)
        const zipper = Duozipper((tx, va, i, j) => pad(tx, widths[j], va))
        const padded = zipper(mx, raw ?? mx)
        return fluoMatrix.call({ colorant: false, mutate: true }, padded, COLUMNWISE, [METRO, FRESH])
      },
      bench: (mx) => {
        return mapper(mx, x => typeof x === STR ? x.trim() : x)
      }
    }
  })
  lapse |> decoCrostab |> says['lapse'].p(dateTime())
  '' |> logger
  result |> decoCrostab |> says['result'].p(dateTime())
  '' |> logger
  const FUNCTION_TAG = 'epi'
  const deco = mx => mx.map(vec => '[ ' + vec.join(COSP) + ' ]') |> Liner({ level: 0, bracket: BRACKET })
  for (let member of result.side)
    result.cell(member, FUNCTION_TAG) |> deco |> says[member].br(FUNCTION_TAG)
}
test()