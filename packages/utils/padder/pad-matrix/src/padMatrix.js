import { lange }                 from '@spare/lange'
import { Pad }                   from '@spare/pad-string'
import { maxBy as maxByColumns } from '@vect/columns-indicator'
import { Duozipper, Trizipper }  from '@vect/matrix-zipper'

export const padMatrix = (text, { raw, dye, ansi, fill }) => {
  raw = raw || text
  const len = ansi ? lange : x => x.length
  const pad = Pad({ ansi, fill })
  const wds = maxByColumns(text, len)
  let zipper
  return dye
    ? (zipper = Trizipper((tx, va, dy, i, j) => pad(tx, wds[j], va) |> dy),
      zipper(text, raw, dye))
    : (zipper = Duozipper((tx, va, i, j) => pad(tx, wds[j], va)),
      zipper(text, raw))
}



