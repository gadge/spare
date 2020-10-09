import { Lange }                from '@spare/lange'
import { Pad }                  from '@spare/padder'
import { maxBy }                from '@vect/vector-indicator'
import { Duozipper, Trizipper } from '@vect/vector-zipper'

export const vectorPadder = (vec, { raw, dye, ansi, fill }) => {
  const pad = Pad({ ansi, fill })
  const wd = maxBy(vec, Lange(ansi))
  let zipper
  return raw
    ? dye
      ? (zipper = Trizipper((tx, va, dy) => pad(tx, wd, va) |> dy),
        zipper(vec, raw, dye))
      : (zipper = Duozipper((tx, va) => pad(tx, wd, va)),
        zipper(vec, raw))
    : dye
      ? (zipper = Trizipper((tx, va, dy) => pad(tx, wd, va) |> dy),
        zipper(vec, raw, dye))
      : (zipper = Duozipper((tx, va) => pad(tx, wd, va)),
        zipper(vec, raw))
}

