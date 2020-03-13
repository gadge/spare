import { LPad, Pad } from '@spare/pad-string'
import { Trizipper, Duozipper } from '@vect/entries-zipper'
import { lange } from '@spare/lange'
import { maxBy } from '@vect/entries-indicator'

export const padEntries = (text, { raw, dye, ansi, fill }) => {
  raw = raw || text
  const len = ansi ? lange : x => x.length
  const [kpad, vpad] = maxBy(text, len, len)
  const padder = Pad({ ansi, fill }), lp = LPad({ ansi, fill })
  let zipper
  return dye
    ? (zipper = Trizipper((t, v, d) => lp(t, kpad) |> d, (t, v, d) => padder(t, vpad, v) |> d),
      zipper(text, raw, dye))
    : (zipper = Duozipper(t => lp(t, kpad), (t, v) => padder(t, vpad, v)),
      zipper(text, raw))
}

