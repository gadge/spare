import { liner } from '@spare/liner'
import { enttro } from '@spare/enttro'
import { padEntries } from '@spare/pad-entries'
import { fluoEntries } from '@palett/fluo-entries'
import { Duozipper } from '@vect/entries-zipper'
import { Qt } from '@spare/quote'
import { HR_ENTRY } from '../utils/HR_ENTRY'
import { SelectBr } from '@spare/bracket/src/Br'

export const cosmetics = function (entries) {
  if (!entries) return String(entries)
  if (!entries?.length) return liner([], this)
  const {
    keyRead, read, preset, stringPreset, head, tail, ansi,
    dash, delim, keyQuote, quote, bracket
  } = this
  const { raw, text } = enttro(entries, {
    head, tail,
    keyRead: Qt(keyRead, keyQuote),
    read: Qt(read, quote),
    hr: HR_ENTRY
  })
  const dye = preset && fluoEntries(raw, { preset, stringPreset, colorant: true })
  entries = /\n/.test(delim)
    ? padEntries(text, { raw, dye, ansi: preset || ansi })
    : preset
      ? Duozipper((t, d) => t |> d)(text, dye)
      : text
  const brk = SelectBr(bracket) || (x => x)
  const lines = entries.map(([k, v]) => brk(k + dash + v.trimRight()))
  return liner(lines, this)
}
