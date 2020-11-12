import { max }                        from '@aryth/comparer'
import { DA, SP }                     from '@spare/enum-chars'
import { DASH as FADASH, SP as FASP } from '@spare/enum-full-angle-chars'
import { hasFullWidth }               from '@spare/fullwidth'
import { Lange }                      from '@spare/lange'
import { CENTRE, PadFW, RIGHT }       from '@spare/padder'
import { Stat }                       from '@vect/columns-stat'
import { mapper as mapperMatrix }     from '@vect/matrix-mapper'
import { transpose }                  from '@vect/matrix-transpose'
import { acquire }                    from '@vect/vector'
import { mapper }                     from '@vect/vector-mapper'
import { zipper }                     from '@vect/vector-zipper'

/**
 *
 * @param {string[][]} rows
 * @param {*[]} head
 * @param {*[][]} [raw]
 * @param {function[][]} [dye]
 * @param {boolean=false} [ansi]
 * @param {string} [dash]
 * @param {string} [fwdash]
 * @param {string} [fill]
 * @param {string} [fwfill]
 * @return {{head: string[], rows: string[][], rule: string[]}}
 */
export const tablePadderFullAngle = ({ head, rows }, {
  ansi = false,
  dash = DA, fwdash = FADASH,
  fill = SP, fwfill = FASP
} = {}) => {
  const len = Lange(ansi)
  const columns = acquire([head], rows) |> transpose
  const widths = mapper(columns, Stat({ init: () => 0, acc: (a, b) => max(a, b ? len(b) : 0) }))
  const checks = mapper(columns, col => col.some(hasFullWidth))
  const padR = PadFW({ dock: RIGHT, ansi, fill, fwfill })
  const padN = PadFW({ dock: CENTRE, ansi, fill, fwfill })
  return {
    head: zipper(head, widths, (value, width, j) => padR(value, width, checks[j])),
    rule: zipper(widths, checks, (width, check) => (check ? fwdash : dash).repeat(width)),
    rows: mapperMatrix(rows, (x, i, j) => padN(x, widths[j], checks[j], x))
  }
  // const [widths, fwChecks] = [mapper(columns, Max(Lange(ansi))), mapper(columns, col => col.some(hasFullWidth))]
  // return {
  //   head: VecTriZip(padR)(head, widths, checks),
  //   rule: VecDuoZip((pad, cn) => (cn ? fwdash : dash).repeat(pad))(widths, checks),
  //   rows: MatDuoZip((x, v, i, j) => padN(x, widths[j], checks[j], v))(rows, raw)
  // }
}
