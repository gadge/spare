import { Lange }                from '@spare/lange'
import { Pad }                  from '@spare/pad-string'
import { maxBy }                from '@vect/vector-indicator'
import { Duozipper, Trizipper } from '@vect/vector-zipper'

export const padVector = (text, { raw, dye, ansi, fill }) => {
  raw = raw || text
  const padder = Pad({ ansi, fill })
  const pad = maxBy(text, Lange(ansi))
  let zipper
  return dye
    ? (zipper = Trizipper((tx, v, d) => padder(tx, pad, v) |> d),
      zipper(text, raw, dye))
    : (zipper = Duozipper((tx, v) => padder(tx, pad, v)),
      zipper(text, raw))
}

