import { AEU, LF, SP } from '@spare/enum-chars'
import { makeQuoteAbstract } from '@spare/deco-util'
import { enttro } from '@spare/enttro'
import { padEntries } from '@spare/pad-entries'
import { fluoEntries } from '@palett/fluo-entries'
import { Duozipper } from '@vect/entries-zipper'
import { HR_ENTRY } from '../utils/HR_ENTRY'

export const cosmetics = function (entries) {
  if (!entries || !entries.length || entries[0].length !== 2) return AEU
  const { keyAbstract, abstract, preset, stringPreset, head, tail, ansi } = this
  let { dash, delimiter, keyQuote, quote, bracket, discrete } = this
  const { raw, text } = enttro(entries, {
    head,
    tail,
    keyAbstract: makeQuoteAbstract(keyAbstract, keyQuote),
    abstract: makeQuoteAbstract(abstract, quote),
    hr: HR_ENTRY
  })
  const dye = preset && fluoEntries(raw, { preset, stringPreset, colorant: true })
  entries = delimiter.includes(LF)
    ? (bracket ? (delimiter += SP) : null,
      padEntries(text, { raw, dye, ansi: preset || ansi }))
    : preset
      ? Duozipper((t, d) => t |> d)(text, dye)
      : text
  const lines = bracket
    ? entries.map(([k, v]) => '[' + k + dash + v + ']')
    : entries.map(([k, v]) => k + dash + v)
  return discrete
    ? lines
    : bracket
      ? '[' + lines.join(delimiter) + ']'
      : lines.join(delimiter)

}
