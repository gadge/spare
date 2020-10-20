import { max }                  from '@aryth/comparer'
import { Lange }                from '@spare/lange'
import { Pad }                  from '@spare/padder'
import { stat }                 from '@vect/columns-stat'
import { Duozipper, Trizipper } from '@vect/matrix-zipper'


export const matrixPadder = (mx, { raw, dye, ansi, fill }) => {
  const len = Lange(ansi)
  const widths = stat.call({ init: () => 0, acc: (a, b) => max(a, len(b)) }, mx)
  const pad = Pad({ ansi, fill })
  let zipper
  return dye
    ? (zipper = Trizipper((tx, va, dy, i, j) => pad(tx, widths[j], va) |> dy),
      zipper(mx, raw ?? mx, dye))
    : (zipper = Duozipper((tx, va, i, j) => pad(tx, widths[j], va)),
      zipper(mx, raw ?? mx))
}



