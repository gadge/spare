import { DA, SP }                                         from '@spare/enum-chars'
import { DASH as FADA, SP as FASP }                       from '@spare/enum-full-angle-chars'
import { hasFullWidth }                                   from '@spare/fullwidth'
import { Lange }                                          from '@spare/lange'
import { CENTRE, PadFW, RIGHT }                           from '@spare/pad-string'
import { transpose }                                      from '@vect/matrix-transpose'
import { Duozipper as MatDuoZip, Trizipper as MatTriZip } from '@vect/matrix-zipper'
import { Duozipper as VecDuoZip, Trizipper as VecTriZip } from '@vect/vector'
import { Max }                                            from '@vect/vector-indicator'
import { mapper }                                         from '@vect/vector-mapper'

/**
 *
 * @param {string[][]} text
 * @param {*[][]} head
 * @param {*[][]} [raw]
 * @param {function[][]} [dye]
 * @param {boolean=false} [ansi]
 * @param {string} [dash]
 * @param {string} [fwdash]
 * @param {string} [fill]
 * @param {string} [fwfill]
 * @return {{head: string[], rows: string[][], hr: string[]}}
 */
export const padTableFullAngle = (text, head, {
  raw, dye, ansi = false,
  dash = DA, fwdash = FADA,
  fill = SP, fwfill = FASP
} = {}) => {
  const columns = transpose([head].concat(text))
  const [pads, chns] = [mapper(columns, Max(Lange(ansi))), mapper(columns, col => col.some(hasFullWidth))]
  const [padR, padN] = [
    PadFW({ dock: RIGHT, ansi, fill, fwfill }),
    PadFW({ dock: CENTRE, ansi, fill, fwfill })
  ]
  return {
    head: VecTriZip(padR)(head, pads, chns),
    hr: VecDuoZip((pad, cn) => (cn ? fwdash : dash).repeat(pad))(pads, chns),
    rows: dye
      ? MatTriZip((x, v, d, i, j) => padN(x, pads[j], chns[j], v) |> d)(text, raw, dye)
      : MatDuoZip((x, v, i, j) => padN(x, pads[j], chns[j], v))(text, raw)
  }
}