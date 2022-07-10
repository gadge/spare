import { Pad }              from '@texting/padder'
import { mapper }           from '@vect/matrix-mapper'
import { matrixPadderFull } from './matrixPadderFull'
import { columnWidth }      from './columnWidth'

/**
 *
 * @param {string[][]} mx
 * @param {object} [config]
 * @param {boolean} [config.ansi]
 * @param {boolean} [config.full]
 * @param {string} [config.fill]
 * @returns {string[][]}
 */
export const matrixPadder = (mx, config = {}) => {
  if (config.full) return matrixPadderFull(mx, config)
  const widths = columnWidth(mx, config.ansi)
  const pad = Pad(config)
  return mapper(mx, (tx, i, j) => pad(tx, widths[j]))
}



