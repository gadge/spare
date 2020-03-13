import { Pad } from '@spare/pad-string'
import { toFullAngle } from '@spare/string'

export const LocalPad = ({ dock, ansi, fill, localFill }) => {
  const padCn = Pad({ dock, ansi, fill: localFill }), padEn = Pad({ dock, ansi, fill })
  return (x, pd, cn, v) => cn ? padCn(toFullAngle(x), pd, v) : padEn(x, pd, v)
}
