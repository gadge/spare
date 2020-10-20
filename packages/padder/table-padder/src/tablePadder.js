import { max }                    from '@aryth/comparer'
import { DA }                     from '@spare/enum-chars'
import { Lange }                  from '@spare/lange'
import { Pad }                    from '@spare/padder'
import { stat }                   from '@vect/columns-stat'
import { mapper as mapperMatrix } from '@vect/matrix-mapper'
import { acquire }                from '@vect/vector'
import { mapper }                 from '@vect/vector-mapper'
import { zipper }                 from '@vect/vector-zipper'
import { tablePadderFullAngle }   from './tablePadderFullAngle'

/**
 *
 *
 * @param {*[]} head
 * @param {string[][]} rows
 * @param {*[][]} raw
 * @param {boolean=false} [ansi]
 * @param {boolean=false} [fullAngle]
 * @return {{head: string[], rule: string[], rows: string[][]}}
 */
export const tablePadder = (
  { head, rows },
  {
    raw, ansi = false, fullAngle = false
  } = {},
) => {
  if (fullAngle) return tablePadderFullAngle({ head, rows }, { raw, ansi })
  const padder = Pad({ ansi })
  let len = Lange(ansi)
  const widths = stat.call({ init: () => 0, acc: (a, b) => max(a, len(b)) }, acquire([head], rows))
  return {
    head: zipper(head, widths, (x, p) => padder(x, p, x)),
    rule: mapper(widths, p => DA.repeat(p)),
    rows: mapperMatrix(rows, (x, i, j) => padder(x, widths[j], x))
  }
  // return {
  //   head: headDye
  //     ? VecTriZip((x, d, p) => padder(x, p) |> d)(head, headDye, pads)
  //     : VecDuoZip((x, p) => padder(x, p))(head, pads),
  //   rule: mapper(pads, p => DA.repeat(p)),
  //   rows: dye
  //     ? MatTriZip((x, v, d, i, j) => padder(x, pads[j], v) |> d)(rows, raw ?? rows, dye)
  //     : MatDuoZip((x, v, i, j) => padder(x, pads[j], v))(rows, raw ?? rows)
  // }
}
