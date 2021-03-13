import { Lange }     from '@spare/lange'
import { LPad, Pad } from '@spare/padder'
import { maxBy }     from '@vect/entries-indicator'
import { mapper }    from '@vect/entries-mapper'

/**
 *
 * @param {string[][]} entries
 * @param {boolean} ansi
 * @param {string} fill
 * @returns {string[][]}
 */
export const entriesPadder = (entries, { ansi, fill }) => {
  const lange = Lange(ansi)
  const [kwd, vwd] = maxBy(entries, lange, lange)
  const pad = Pad({ ansi, fill }), lpad = LPad({ ansi, fill })
  return mapper(entries, tx => lpad(tx, kwd), (tx, va) => pad(tx, vwd, va))
}

// raw = raw || entries
// let zipper
// return dye
//   ? (zipper = Trizipper((tx, va, dy) => lpad(tx, kwd) |> dy, (tx, va, dy) => pad(tx, vwd, va) |> dy),
//     zipper(entries, raw, dye))
//   : (zipper = Duozipper(tx => lpad(tx, kwd), (tx, va) => pad(tx, vwd, va)),
//     zipper(entries, raw))

