import { Lange }     from '@texting/lange'
import { LPad, Pad } from '@texting/padder'
import { maxBy }     from '@vect/entries-indicator'
import { mapper }    from '@vect/entries-mapper'

const DEFAULT_OPTIONS = {}
/**
 *
 * @param {string[][]} entries
 * @param {object} options
 * @param {boolean} [options.ansi]
 * @param {string} [options.fill]
 * @returns {string[][]}
 */
export const entriesPadder = (entries, options = DEFAULT_OPTIONS) => {
  const lange = Lange(options.ansi)
  const [ kw, vw ] = maxBy(entries, lange, lange)
  const lpad = LPad(options), pad = Pad(options)
  return mapper(entries, k => lpad(k, kw), v => pad(v, vw))
}

// raw = raw || entries
// let zipper
// return dye
//   ? (zipper = Trizipper((t, va, dy) => lpad(t, kwd) |> dy, (t, va, dy) => pad(t, vwd, va) |> dy),
//     zipper(entries, raw, dye))
//   : (zipper = Duozipper(t => lpad(t, kwd), (t, va) => pad(t, vwd, va)),
//     zipper(entries, raw))

