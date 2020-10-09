import { lange }                 from '@spare/lange'
import { Pad }                   from '@spare/padder'
import { maxBy as maxByColumns } from '@vect/columns-indicator'
import { Duozipper, Trizipper }  from '@vect/matrix-zipper'

export const matrixPadder = (mx, { raw, dye, ansi, fill }) => {
  raw = raw || mx
  const len = ansi ? lange : x => x.length
  const pad = Pad({ ansi, fill })
  const wds = maxByColumns(mx, len)
  let zipper
  return dye
    ? (zipper = Trizipper((tx, va, dy, i, j) => pad(tx, wds[j], va) |> dy),
      zipper(mx, raw, dye))
    : (zipper = Duozipper((tx, va, i, j) => pad(tx, wds[j], va)),
      zipper(mx, raw))
}



