import { COLORANT }   from '@palett/enum-colorant-modes'
import { fluoEnt }    from '@palett/fluo-entries'
import { Br }   from '@spare/bracket'
import { enttro }     from '@spare/enttro'
import { liner }      from '@spare/liner'
import { padEntries } from '@spare/pad-entries'
import { Duozipper }  from '@vect/entries-zipper'
import { HR_ENTRY }   from '../utils/HR_ENTRY'

export const cosmetics = function (entries) {
  if (!entries) return String(entries)
  if (!entries?.length) return liner([], this)
  const { keyRead, read, head, tail, ansi, dash, delim, bracket, presets } = this
  const { raw, text } = enttro(entries, { head, tail, keyRead, read, hr: HR_ENTRY })
  let dye = undefined
  if (presets) { dye = fluoEnt.call(COLORANT, raw, presets) }
  entries = /\n/.test(delim)
    ? padEntries(text, { raw, dye, ansi: presets || ansi })
    : presets
      ? Duozipper((t, d) => t |> d)(text, dye)
      : text
  const brk = Br(bracket) || (x => x)
  const lines = entries.map(([k, v]) => brk(k + dash + v.trimRight()))
  return liner(lines, this)
}
