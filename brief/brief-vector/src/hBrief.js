import { brief } from './brief'

/**
 *
 * @param {*[]} arr
 * @param {function(*):string} [abstract]
 * @param {number} [head]
 * @param {number} [tail]
 * @param {{[max]:string|number[],[min]:string|number[],[na]:string|number[]}} [visual]
 * @param {string} [delimiter]
 * @return {string}
 */
export const hBrief = (arr, {
    abstract,
    head,
    tail,
    visual,
    delimiter = ', '
  } = {}
) => brief(arr, { delimiter, abstract, head, tail, visual, indexed: false })
