import { DA }                      from '@texting/enum-chars'
import { DA as DA_FULL }           from '@texting/enum-chars-fullwidth'
import { hasFull }                 from '@spare/fullwidth'
import { columnWidth }             from '@spare/matrix-padder'
import { PadFull }                 from '@texting/padder'
import { mapper as mapperColumns } from '@vect/columns-mapper'
import { mapper as mapperMatrix }  from '@vect/matrix-mapper'
import { acquire }                 from '@vect/vector'
import { zipper }                  from '@vect/vector-zipper'

/**
 *
 * @param {object} table
 * @param {*[]}  table.head
 * @param {string[][]} table.rows
 * @param {object} [config]
 * @param {boolean=false} [config.ansi]
 * @return {{head: string[], rows: string[][], rule: string[]}}
 */
export const tablePadderFull = (
  table,
  config = {}
) => {
  const columns = acquire([ table.head ], table.rows)
  const widths = columnWidth(columns, config.ansi)
  const marks = mapperColumns(columns, col => col.some(hasFull))
  const pad = PadFull(config, config)
  return {
    head: zipper(table.head, widths, (value, width, j) => pad(value, width, marks[j])),
    rule: zipper(widths, marks, (width, check) => (check ? DA_FULL : DA).repeat(width)),
    rows: mapperMatrix(table.rows, (x, i, j) => pad(x, widths[j], marks[j]))
  }
}
