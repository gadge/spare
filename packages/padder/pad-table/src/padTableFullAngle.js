import { DASH, SPACE } from '@spare/util'
import { Lange } from '@spare/lange'
import { hasChn } from '@spare/string'
import { CENTRE, RIGHT } from '@spare/pad-string'
import { mapper } from '@vect/vector-mapper'
import { Max } from '@vect/vector-indicator'
import { transpose } from '@vect/matrix-transpose'
import { Duozipper as VecDuoZip, Trizipper as VecTriZip } from '@vect/vector'
import { Duozipper as MatDuoZip, Trizipper as MatTriZip } from '@vect/matrix-zipper'
import { LocalPad } from './utils/localPad'

/**
 *
 * @param {string[][]} text
 * @param {*[][]} head
 * @param {*[][]} [raw]
 * @param {function[][]} [dye]
 * @param {boolean=false} [ansi]
 * @param dash
 * @param localDash
 * @param {string} [fill]
 * @param {string} [localFill]
 * @return {{head: string[], rows: string[][], hr: string[]}}
 */
export const padTableFullAngle = (text, head, {
  raw, dye, ansi = false,
  dash = '-', localDash = DASH,
  fill = ' ', localFill = SPACE
} = {}) => {
  const columns = transpose([head].concat(text))
  const [pads, chns] = [mapper(columns, Max(Lange(ansi))), mapper(columns, col => col.some(hasChn))]
  const [padR, padN] = [
    LocalPad({ dock: RIGHT, ansi, fill, localFill }),
    LocalPad({ dock: CENTRE, ansi, fill, localFill })
  ]
  return {
    head: VecTriZip(padR)(head, pads, chns),
    hr: VecDuoZip((pad, cn) => (cn ? localDash : dash).repeat(pad))(pads, chns),
    rows: dye
      ? MatTriZip((x, v, d, i, j) => padN(x, pads[j], chns[j], v) |> d)(text, raw, dye)
      : MatDuoZip((x, v, i, j) => padN(x, pads[j], chns[j], v))(text, raw)
  }
}
