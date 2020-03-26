import { Pad } from '@spare/pad-string'
import { lange } from '@spare/lange'
import { Duozipper, Trizipper } from '@vect/matrix-zipper'
import { maxBy as maxByColumns } from '@vect/columns-indicator'

export const padMatrix = (text, { raw, dye, ansi, fill }) => {
  raw = raw || text
  const len = ansi ? lange : x => x.length
  const padder = Pad({ ansi, fill })
  const pads = maxByColumns(text, len)
  let zipper
  return dye
    ? (zipper = Trizipper((tx, v, d, i, j) => padder(tx, pads[j], v) |> d),
      zipper(text, raw, dye))
    : (zipper = Duozipper((tx, v, i, j) => padder(tx, pads[j], v)),
      zipper(text, raw))
}



