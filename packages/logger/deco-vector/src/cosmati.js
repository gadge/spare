import { AEU } from '@spare/util'
import { vettro } from '@spare/vettro'
import { deco as briefEntries } from '@spare/deco-entries'
import { fluoVector } from '@palett/fluo-vector'
import { FRESH, JUNGLE } from '@palett/presets'

export function cosmati (vec) {
  if (!vec || !vec.length) return AEU
  const { indexed } = this
  if (indexed) return briefEntries(Object.entries(vec), this)
  const {
    abstract, head, tail, preset = FRESH, stringPreset = JUNGLE, delimiter = ',\n'
  } = this
  let { raw, text } = vettro(vec, { head, tail, abstract, hr: '...' })
  if (preset) text = fluoVector(text, { values: raw, preset, stringPreset })
  return text.length ? text.join(delimiter) : AEU
}

// * @this {{
// *    abstract: function(*):string,
// *    head: number,
// *    tail: number,
// *    preset: {max:string,min:string,na:string},
// *    stringPreset: {max:string,min:string,na:string},
// *    delimiter: string,
// *    indexed: boolean,
// *    dash: string,
// * }}
