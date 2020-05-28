import { fluoEnt }    from '@palett/fluo-entries'
import { SelectBr }   from '@spare/bracket'
import { enttro }     from '@spare/enttro'
import { liner }      from '@spare/liner'
import { padEntries } from '@spare/pad-entries'
import { Duozipper }  from '@vect/entries-zipper'
import { HR_ENTRY }   from '../utils/HR_ENTRY'

export const cosmetics = function (entries) {
  if (!entries) return String(entries)
  if (!entries?.length) return liner([], this)
  const {
    keyRead, read, preset, stringPreset, head, tail, ansi,
    dash, delim, bracket, colors
  } = this
  const { raw, text } = enttro(entries, { head, tail, keyRead, read, hr: HR_ENTRY })
  let dye = undefined
  if (colors) { dye = fluoEnt.call({ colorant: true }, raw, colors) }
  entries = /\n/.test(delim)
    ? padEntries(text, { raw, dye, ansi: colors || ansi })
    : colors
      ? Duozipper((t, d) => t |> d)(text, dye)
      : text
  const brk = SelectBr(bracket) || (x => x)
  const lines = entries.map(([k, v]) => brk(k + dash + v.trimRight()))
  return liner(lines, this)
}
