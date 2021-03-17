import { SP as SP_FULL } from '@spare/enum-full-angle-chars'
import { FullWidth } from '@spare/fullwidth'
import { Pad }       from './Pad'

export const PadFull = ({ dock, ansi, fill, fillFull = SP_FULL }) => {
  const
    padHalf = Pad({ dock, ansi, fill }),
    padFull = Pad({ dock, ansi, fill: fillFull }),
    toFull = FullWidth({ ansi })
  return (word, width, full, raw) => full ? padFull(toFull(word), width, raw) : padHalf(word, width, raw)
}
