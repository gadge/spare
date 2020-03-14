import { AEU, ELLIP, LF, TB } from '@spare/enum-chars'
import { vettro } from '@spare/vettro'
import { fluoVector } from '@palett/fluo-vector'
import { makeQuoteAbstract } from '@spare/deco-util'

export function cosmetics (vec) {
  if (!vec || !vec.length) return AEU
  const { head, tail, preset, stringPreset } = this
  let { abstract, delimiter, quote, bracket } = this
  if (bracket && delimiter.includes(LF)) delimiter += TB
  let { raw, text } = vettro(vec, {
    head,
    tail,
    abstract: makeQuoteAbstract(abstract, quote),
    hr: ELLIP
  })
  if (preset) fluoVector(text, { values: raw, preset, stringPreset, mutate: true })
  const result = text.length ? text.join(delimiter) : AEU
  return bracket ? '[ ' + result + ' ]' : result
}
