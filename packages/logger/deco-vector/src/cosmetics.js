import { AEU, LF, TB } from '@spare/util'
import { vettro } from '@spare/vettro'
import { fluoVector } from '@palett/fluo-vector'
import { FRESH, JUNGLE } from '@palett/presets'
import { STR } from '@typen/enum-data-types'

const quoteString = function (x) {
  const { qt } = this
  return (typeof x === STR) ? (qt + x + qt) : x
}

export function cosmetics (vec) {
  if (!vec || !vec.length) return AEU
  const { head, tail, preset = FRESH, stringPreset = JUNGLE } = this
  let { abstract, de, qt, br } = this
  if (br && de.includes(LF)) de += TB
  if (qt) abstract = abstract ? x => x |> abstract |> quoteString.bind({ qt }) : quoteString.bind({ qt })
  let { raw, text } = vettro(vec, { head, tail, abstract, hr: '...' })
  if (preset) text = fluoVector(text, { values: raw, preset, stringPreset })
  let result = text.length ? text.join(de) : AEU
  if (br) result = '[ ' + result + ' ]'
  return result
}
