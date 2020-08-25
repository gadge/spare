import { oneself }     from '@ject/oneself'
import { COLORANT }    from '@palett/enum-colorant-modes'
import { fluoEntries } from '@palett/fluo-entries'
import { Br }          from '@spare/bracket'
import { enttro }      from '@spare/enttro'
import { liner }       from '@spare/liner'
import { padEntries }  from '@spare/pad-entries'
import { zipper }      from '@vect/entries-zipper'
import { HR_ENTRY }    from '../utils/HR_ENTRY'

export const cosmetics = function (entries) {
  if (!entries) return String(entries)
  if (!entries?.length) return liner([], this)
  const { keyRead, read, head, tail, ansi, dash, delim, bracket, presets, effects } = this
  const { raw, text } = enttro(entries, { head, tail, keyRead, read, hr: HR_ENTRY })
  const dye = presets ? fluoEntries.call(COLORANT, raw, presets, effects) : null
  entries = /\n/.test(delim)
    ? padEntries(text, { raw, dye, ansi: presets || ansi })
    : presets ? zipper(text, dye, (tx, dy) => tx |> dy) : text
  const brk = Br(bracket) || oneself
  const lines = entries.map(([k, v]) => brk(k + dash + v.trimRight()))
  return liner(lines, this)
}
