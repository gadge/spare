import { hasFull }     from '@texting/charset-fullwidth'
import { PadFull }     from '@texting/padder'
import { mapper as mapperColumns } from '@vect/columns-mapper'
import { mapper }      from '@vect/matrix-mapper'
import { columnWidth } from './columnWidth'

export const matrixPadderFull = (mx, config) => {
  const pad = PadFull(config, config)
  const widths = columnWidth(mx, config.ansi)
  const marks = mapperColumns(mx, col => col.some(hasFull))
  return mapper(mx, (x, i, j) => pad(x, widths[j], marks[j]))
}