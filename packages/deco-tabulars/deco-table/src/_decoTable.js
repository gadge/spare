import { fluoMatrix }  from '@palett/fluo-matrix'
import { fluoVector }  from '@palett/fluo-vector'
import { AEU }         from '@spare/enum-chars'
import { liner }       from '@spare/liner'
import { tableMargin } from '@spare/table-margin'
import { tablePadder } from '@spare/table-padder'
import { size }        from '@vect/matrix'
import { acquire }     from '@vect/vector-merge'

const MUTATE = { mutate: true }
export const _decoTable = function (table) {
  const config = this
  if (!table) return AEU
  let head = table.head || table.banner, rows = table.rows || table.matrix, rule = null
  const [height, width] = size(rows), labelWidth = head?.length
  if (!height || !width || !labelWidth) return AEU
  const { presets } = config
  table = tableMargin(table, config); // use: top, left, bottom ,right, read, headRead
  ({ head, rule, rows } = tablePadder(table, config)) // use: ansi, fullAngle
  if (presets) {
    [head, rows] = [
      fluoVector.call(MUTATE, head, { presets: [presets[0], presets[2]] }),
      fluoMatrix.call(MUTATE, rows, config)
    ]
  }
  const lines = acquire([
      head.join(' | '),
      rule.join('-+-')
    ],
    rows.map(row => row.join(' | ')))
  return liner(lines, config) // use: discrete, delim, level
}
