import { Pad }              from '@texting/padder'
import { mapper }           from '@vect/matrix-mapper'
import { matrixPadderFull } from './matrixPadderFull'
import { widthsByColumns }  from './widthsByColumns'

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
  const widths = widthsByColumns(mx, config.ansi)
  const pad = Pad(config)
  return mapper(mx, (tx, i, j) => pad(tx, widths[j]))
}


// let zipper
// return dye
//   ? (zipper = Trizipper((tx, va, dy, i, j) => pad(tx, widths[j], va) |> dy),
//     zipper(mx, mx, dye))
//   : (zipper = Duozipper((tx, va, i, j) => pad(tx, widths[j], va)),
//     zipper(mx, mx))



