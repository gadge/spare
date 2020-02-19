import { brief } from './brief'
import { GLACIAL } from 'palett-presets'

/**
 *
 * @param {*[]} arr
 * @param {function(*):string} [abstract]
 * @param {number} [head]
 * @param {number} [tail]
 * @param {{[max]:string|number[],[min]:string|number[],[na]:string|number[]}} [visual]
 * @param {boolean} indexed
 * @return {*}
 */
export const vBrief = (arr, {
    abstract,
    head,
    tail,
    visual = GLACIAL,
    indexed = true,
  } = {}
) => brief(arr, { abstract, head, tail, visual, delimiter: '\n', indexed })
