import { AEU } from '@spare/util'
import { vettro } from '@spare/vettro'
import { brief as briefEntries } from '@spare/brief-entries'
import { fluoVector } from '@palett/fluo-vector'
import { FRESH, JUNGLE } from '@palett/presets'

/**
 *
 * @param {*[]} arr
 * @param {function(*):string} [abstract]
 * @param {number} [head]
 * @param {number} [tail]
 * @param {{[max]:string|number[],[min]:string|number[],[na]:string|number[]}} [visual]
 * @param {string} delimiter
 * @param {boolean} indexed
 * @return {*}
 */
export const brief = (arr, {
    abstract,
    head,
    tail,
    preset = FRESH,
    stringPreset = JUNGLE,
    delimiter = ',\n',
    indexed = true,
    dash = ') '
  } = {}
) => {
  if (!arr || !arr.length) return AEU
  if (indexed) return briefEntries(Object.entries(arr), { abstract, head, tail, preset, stringPreset, delimiter, dash })
  let { raw, text } = vettro(arr, { head, tail, abstract, hr: '...' })
  if (preset) text = fluoVector(text, { values: raw, preset, stringPreset })
  return text.length ? text.join(delimiter) : AEU
}
