import { DA }                      from '@spare/enum-chars'
import { DA as DA_FULL }           from '@spare/enum-full-angle-chars'
import { hasFull }            from '@spare/fullwidth'
import { widthsByColumns }         from '@spare/matrix-padder'
import { CENTRE, PadFull, RIGHT }  from '@spare/padder'
import { mapper as mapperColumns } from '@vect/columns-mapper'
import { mapper as mapperMatrix }  from '@vect/matrix-mapper'
import { acquire }                 from '@vect/vector'
import { zipper }                  from '@vect/vector-zipper'

/**
 *
 * @param {object} table
 * @param {*[]}  table.head
 * @param {string[][]} table.rows
 * @param {object} config
 * @param {boolean=false} [config.ansi]
 * @return {{head: string[], rows: string[][], rule: string[]}}
 */
export const tablePadderFull = (
  table,
  config = {}
) => {
  const { head, rows } = table
  const { ansi = false, } = config
  const columns = acquire([head], rows)
  const widths = widthsByColumns(columns, ansi)
  const marks = mapperColumns(columns, col => col.some(hasFull))
  const
    padRight = PadFull({ dock: RIGHT, ansi }),
    padCentre = PadFull({ dock: CENTRE, ansi })
  return {
    head: zipper(head, widths, (value, width, j) => padRight(value, width, marks[j])),
    rule: zipper(widths, marks, (width, check) => (check ? DA_FULL : DA).repeat(width)),
    rows: mapperMatrix(rows, (x, i, j) => padCentre(x, widths[j], marks[j], x))
  }
}
