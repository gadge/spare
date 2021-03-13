import { Pad }             from '@spare/padder'
import { mapper }          from '@vect/matrix-mapper'
import { widthsByColumns } from './widthsByColumns'

/**
 *
 * @param {string[][]} mx
 * @param {boolean} ansi
 * @param {string} fill
 * @returns {string[][]}
 */
export const matrixPadder = (mx, { ansi, fill }) => {
  const widths = widthsByColumns(mx, ansi)
  const pad = Pad({ ansi, fill })
  return mapper(mx, (tx, i, j) => pad(tx, widths[j]))
}

// let zipper
// return dye
//   ? (zipper = Trizipper((tx, va, dy, i, j) => pad(tx, widths[j], va) |> dy),
//     zipper(mx, mx, dye))
//   : (zipper = Duozipper((tx, va, i, j) => pad(tx, widths[j], va)),
//     zipper(mx, mx))



