import { hasFull }                 from '@spare/fullwidth'
import { PadFull }                 from '@texting/padder'
import { mapper as mapperColumns } from '@vect/columns-mapper'
import { mapper }                  from '@vect/matrix-mapper'
import { widthsByColumns }         from './widthsByColumns'

export const matrixPadderFull = (mx, config) => {
  const pad = PadFull(config, config)
  const widths = widthsByColumns(mx, config.ansi)
  const marks = mapperColumns(mx, col => col.some(hasFull))
  return mapper(mx, (x, i, j) => pad(x, widths[j], marks[j]))
}