import { lange }                from '@spare/lange'
import { LPad, Pad }            from '@spare/pad-string'
import { maxBy }                from '@vect/entries-indicator'
import { Duozipper, Trizipper } from '@vect/entries-zipper'

export const padEntries = (text, { raw, dye, ansi, fill }) => {
  raw = raw || text
  const len = ansi ? lange : x => x.length
  const [kwd, vwd] = maxBy(text, len, len)
  const pad = Pad({ ansi, fill }), lpad = LPad({ ansi, fill })
  let zipper
  return dye
    ? (zipper = Trizipper(
      (tx, va, dy) => lpad(tx, kwd) |> dy,
      (tx, va, dy) => pad(tx, vwd, va) |> dy
    ),
      zipper(text, raw, dye))
    : (zipper = Duozipper(
      tx => lpad(tx, kwd),
      (tx, va) => pad(tx, vwd, va)
    ),
      zipper(text, raw))
}

