import { DASH, SP } from '@spare/enum-full-angle-chars'
import { DASH as DA } from '@spare/enum-chars'
import { hasChn, toFullAngle } from '@spare/string'
import { Lange } from '@spare/lange'
import { LPad, RPad } from '@spare/pad-string'
import { max } from '@aryth/comparer'
import { maxBy } from '@vect/vector-indicator'
import { mapper } from '@vect/vector-mapper'
import { zipper } from '@vect/vector-zipper'
import { toFullAngleWoAnsi } from '@spare/string/src/toFullAngleWoAnsi'

export const padSide = (side, title, { dye, ansi, fullAngle } = {}) => {
  if (fullAngle) return padSideFullAngle(side, title, ansi)
  const lpad = LPad({ ansi }), rpad = RPad({ ansi }), lange = Lange(ansi)
  const pad = max(lange(title), maxBy(side, lange))
  return {
    title: rpad(title, pad),
    hr: DA.repeat(pad),
    side: dye
      ? zipper(side, dye, (x, d) => lpad(x, pad) |> d)
      : mapper(side, x => lpad(x, pad))
  }
}

export const padSideFullAngle = (side, title, { dye, ansi, dash = DASH, fill = SP } = {}) => {
  const toFA = ansi ? toFullAngleWoAnsi : toFullAngle
  const cn = hasChn(title) || side.some(hasChn)
  if (!cn) return padSide(side, title, { ansi })
  const lpad = LPad({ ansi, fill }), rpad = RPad({ ansi, fill }), lange = Lange(ansi)
  const pad = max(lange(title), maxBy(side, lange))
  return {
    title: rpad(toFA(title), pad),
    hr: dash.repeat(pad),
    side: dye
      ? zipper(side, dye, (x, d) => lpad(toFA(x), pad) |> d)
      : mapper(side, x => lpad(toFA(x), pad))
  }
}
