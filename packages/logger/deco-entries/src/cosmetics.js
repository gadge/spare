import { AEU, LF } from '@spare/util'
import { enttro } from '@spare/enttro'
import { padEntries } from '@spare/pad-entries'
import { fluoEntries } from '@palett/fluo-entries'
import { Duozipper } from '@vect/entries-zipper'
import { HR_ENTRY } from '../utils/HR_ENTRY'

export const cosmetics = function (entries) {
  if (!entries || !entries.length || entries[0].length !== 2) return AEU
  const {
    keyAbstract, abstract, preset, stringPreset,
    head, tail, ansi, da, de, qt, br
  } = this
  const { raw, text } = enttro(entries, { head, tail, keyAbstract, abstract, hr: HR_ENTRY })
  const dye = preset && fluoEntries(raw, { preset, stringPreset, colorant: true })
  entries = de.includes(LF)
    ? padEntries(text, { raw, dye, ansi: preset || ansi })
    : preset
      ? Duozipper((t, d) => t |> d)(text, dye)
      : text
  return entries.length ? entries.map(([k, v]) => k + da + v).join(de) : AEU
}
