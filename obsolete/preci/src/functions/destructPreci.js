import { isVisual } from '@spare/util'
import { Visual } from 'hatsu-matrix'
import { Preci } from '../Preci'

/**
 *
 * @param {*[]} arr
 * @param {function(*):string} [read]
 * @param {number} [h]
 * @param {number} [t]
 * @param {{
 *   [on]:boolean,
 *   [mark]:{[max]:string|number[],[min]:string|number[],[na]:string|number[]}
 * }} [visual]
 * @return {*}
 */
export const destructPreci = (arr, [h, t], { read, visual = {} } = {}) => {
  let
    preci = Preci.fromArr(arr, h, t),
    raws = preci.toList('...'),
    pals = (visual |> isVisual)
      ? Visual.vector(raws, { ...visual, retFn: true, mutate: false })
      : null,
    words = preci.stringify(read)
  return { raws, pals, words }
}

