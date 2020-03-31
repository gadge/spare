import { Pad } from '../src/Pad'
import { FullWidth } from '@spare/fullwidth'

export const PadFW = ({ dock, ansi, fill, fwfill }) => {
  const padHW = Pad({ dock, ansi, fill }), padFW = Pad({ dock, ansi, fill: fwfill }), toFW = FullWidth({ ansi })
  return (x, pd, fw, v) => fw ? padFW(toFW(x), pd, v) : padHW(x, pd, v)
}
