import { Lange }                from '@spare/lange'
import { Pad }                  from '@spare/pad-string'
import { maxBy }                from '@vect/vector-indicator'
import { Duozipper, Trizipper } from '@vect/vector-zipper'

export const padVector = (text, { raw, dye, ansi, fill }) => {
  raw = raw ?? text
  const pad = Pad({ ansi, fill })
  const wd = maxBy(text, Lange(ansi))
  let zipper
  return dye
    ? (zipper = Trizipper((tx, va, dy) => pad(tx, wd, va) |> dy),
      zipper(text, raw, dye))
    : (zipper = Duozipper((tx, va) => pad(tx, wd, va)),
      zipper(text, raw))
}

