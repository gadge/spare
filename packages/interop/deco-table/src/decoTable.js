import { MUTATE_PIGMENT } from '@palett/enum-colorant-modes'
import { fluoMatrix }     from '@palett/fluo-matrix'
import { fluoVector }  from '@palett/fluo-vector'
import { AEU }         from '@spare/enum-chars'
import { liner }       from '@texting/liner'
import { tableMargin } from '@spare/table-margin'
import { tablePadder } from '@spare/table-padder'
import { size }        from '@vect/matrix'
import { acquire }        from '@vect/vector-merge'

export const _decoTable = function (table) {
  const config = this
  if (!table) return AEU
  let head = table.head || table.banner, rows = table.rows || table.matrix, rule = null
  const [height, width] = size(rows), labelWidth = head?.length
  if (!height || !width || !labelWidth) return AEU
  table = tableMargin(table, config); // use: top, left, bottom ,right, read, headRead

  ({ head, rule, rows } = tablePadder(table, config)) // use: ansi, fullAngle
  const { presets } = config
  // presets |> deco |> logger
  if (presets) {
    const [alpha, beta, gamma] = presets
    head = fluoVector.call(MUTATE_PIGMENT, head, [alpha, gamma ?? beta])
    rows = fluoMatrix.call(MUTATE_PIGMENT, rows, config.direct, [alpha, beta])
  }
  const lines = acquire([
      head.join(' | '),
      rule.join('-+-')
    ],
    rows.map(row => row.join(' | ')))
  return liner(lines, config) // use: discrete, delim, level
}
