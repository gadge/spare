import { Lange }  from '@spare/lange'
import { Pad }    from '@texting/padder'
import { maxBy }  from '@vect/vector-indicator'
import { mapper } from '@vect/vector-mapper'

/**
 *
 * @param {string[]} vec
 * @param {boolean} ansi
 * @param {string} fill
 * @returns {string[]}
 */
export const vectorPadder = (vec, { ansi, fill }) => {
  const padder = Pad({ ansi, fill })
  const width = maxBy(vec, Lange(ansi))
  return mapper(vec, tx => padder(tx, width, tx))
  // let zipper
  // return raw
  //   ? dye
  //     ? (zipper = Trizipper((tx, va, dy) => padder(tx, width, va) |> dy),
  //       zipper(vec, raw, dye))
  //     : (zipper = Duozipper((tx, va) => padder(tx, width, va)),
  //       zipper(vec, raw))
  //   : dye
  //     ? (zipper = Duozipper((tx, dy) => padder(tx, width, tx) |> dy),
  //       zipper(vec, dye))
  //     : (mapper(vec, tx => padder(tx, width, tx)))
}

