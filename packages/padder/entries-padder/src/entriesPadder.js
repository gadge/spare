import { lange }                from '@spare/lange'
import { LPad, Pad }            from '@spare/padder'
import { maxBy }                from '@vect/entries-indicator'
import { Duozipper, Trizipper } from '@vect/entries-zipper'

export const entriesPadder = (entries, { raw, dye, ansi, fill }) => {
  raw = raw || entries
  const len = ansi ? lange : x => x.length
  const [kwd, vwd] = maxBy(entries, len, len)
  const pad = Pad({ ansi, fill }), lpad = LPad({ ansi, fill })
  let zipper
  return dye
    ? (zipper = Trizipper(
      (tx, va, dy) => lpad(tx, kwd) |> dy,
      (tx, va, dy) => pad(tx, vwd, va) |> dy
    ),
      zipper(entries, raw, dye))
    : (zipper = Duozipper(
      tx => lpad(tx, kwd),
      (tx, va) => pad(tx, vwd, va)
    ),
      zipper(entries, raw))
}

