import { AEU } from '@spare/util'
import { enttro } from '@spare/enttro'
import { padEntries } from '@spare/pad-entries'
import { FRESH, OCEAN } from '@palett/presets'
import { fluoEntries } from '@palett/fluo-entries'
import { Duozipper } from '@vect/entries-zipper'
import { HR_ENTRY } from '../utils/HR_ENTRY'

export const cosmati = function (entries) {
  if (!entries || !entries.length || entries[0].length !== 2) return AEU
  const {
    keyAbstract, abstract, preset = FRESH, stringPreset = OCEAN,
    head, tail, dash = ' > ', delimiter = ',\n', ansi = false
  } = this
  const { raw, text } = enttro(entries, { head, tail, keyAbstract, abstract, hr: HR_ENTRY })
  const dye = preset && fluoEntries(raw, { preset, stringPreset, colorant: true })
  entries = delimiter.includes('\n')
    ? padEntries(text, { raw, dye, ansi: preset || ansi })
    : preset
      ? Duozipper((t, d) => t |> d)(text, dye)
      : text
  return entries.length ? entries.map(([k, v]) => k + dash + v).join(delimiter) : AEU
}
