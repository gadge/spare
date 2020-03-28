import { Pad } from '@spare/pad-string'
import { toFullAngle, toFullAngleWoAnsi } from '@spare/string'

export const LocalPad = ({ dock, ansi, fill, localFill }) => {
  const toFA = ansi ? toFullAngleWoAnsi : toFullAngle
  const padCn = Pad({ dock, ansi, fill: localFill }), padEn = Pad({ dock, ansi, fill })
  return (x, pd, cn, v) => cn ? padCn(toFA(x), pd, v) : padEn(x, pd, v)
}
