import { DA }                     from '@spare/enum-chars'
import { widthsByColumns }        from '@spare/matrix-padder'
import { Pad }                    from '@spare/padder'
import { mapper as mapperMatrix } from '@vect/matrix-mapper'
import { acquire }                from '@vect/vector'
import { mapper }                 from '@vect/vector-mapper'
import { zipper }                 from '@vect/vector-zipper'
import { tablePadderFull }        from './tablePadderFull'

/**
 *
 *
 * @param {object} table
 * @param {*[]} table.head
 * @param {string[][]} table.rows
 * @param config
 * @param {boolean=false} [config.ansi]
 * @param {boolean=false} [config.full]
 * @return {{head: string[], rule: string[], rows: string[][]}}
 */
export const tablePadder = (
  table,
  config = {}
) => {
  if (config.full) return tablePadderFull(table, config)
  const padder = Pad(config) // use ansi
  const widths = widthsByColumns(acquire([table.head], table.rows), config.ansi)
  return {
    head: zipper(table.head, widths, (x, p) => padder(x, p)),
    rule: mapper(widths, p => DA.repeat(p)),
    rows: mapperMatrix(table.rows, (x, i, j) => padder(x, widths[j]))
  }
}
