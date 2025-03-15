import { Lange }  from '@texting/lange'
import { Pad }    from '@texting/padder'
import { maxBy }  from '@vect/vector-indicator'
import { mapper } from '@vect/vector-mapper'

/**
 *
 * @param {string[]} vec
 * @param {boolean} [ansi]
 * @param {string} [fill]
 * @returns {string[]}
 */
export const vectorPadder = (vec, { ansi, fill }) => {
  const padder = Pad({ ansi, fill })
  const width = maxBy(vec, Lange(ansi))
  return mapper(vec, tx => padder(tx, width, tx))
  // let zipper
  // return raw
  //   ? dye
  //     ? (zipper = Trizipper((t, va, dy) => padder(t, width, va) |> dy),
  //       zipper(vec, raw, dye))
  //     : (zipper = Duozipper((t, va) => padder(t, width, va)),
  //       zipper(vec, raw))
  //   : dye
  //     ? (zipper = Duozipper((t, dy) => padder(t, width, t) |> dy),
  //       zipper(vec, dye))
  //     : (mapper(vec, t => padder(t, width, t)))
}

