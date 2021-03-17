import { hasFull }                from '@spare/fullwidth'
import { CENTRE, Pad, PadFull, RIGHT } from '@spare/padder'
import { mapper as mapperColumns }     from '@vect/columns-mapper'
import { mapper }                      from '@vect/matrix-mapper'
import { widthsByColumns }             from './widthsByColumns'

/**
 *
 * @param {string[][]} mx
 * @param {object} config
 * @param {boolean} config.ansi
 * @param {boolean} config.full
 * @param {string} config.fill
 * @returns {string[][]}
 */
export const matrixPadder = (mx, config) => {
  const { ansi, full, fill } = config
  const widths = widthsByColumns(mx, ansi)
  const pad = Pad({ ansi, fill, thousand: true })
  return mapper(mx, (tx, i, j) => pad(tx, widths[j]))
}

export const matrixPadderFull = (matrix, config) => {
  const pad = Pad({ ansi, fill })
  return mapper(mx, (tx, i, j) => pad(tx, widths[j]))
  const { ansi, fill } = config

  const widths = widthsByColumns(matrix, ansi)
  const marks = mapperColumns(matrix, col => col.some(hasFull))
  const
    padRight = PadFull({ dock: RIGHT, ansi }),
    padCentre = PadFull({ dock: CENTRE, ansi })
  return mapper(rows, (x, i, j) => padCentre(x, widths[j], marks[j], x))

}

// let zipper
// return dye
//   ? (zipper = Trizipper((tx, va, dy, i, j) => pad(tx, widths[j], va) |> dy),
//     zipper(mx, mx, dye))
//   : (zipper = Duozipper((tx, va, i, j) => pad(tx, widths[j], va)),
//     zipper(mx, mx))



