import { isVisual } from '@spare/util'
import { Visual } from 'hatsu-matrix'
import { Vectogin } from './vectogin'

/**
 *
 * @param {*[]} arr
 * @param {function(*):string} [abstract]
 * @param {number} [head]
 * @param {number} [tail]
 * @param {{[max]:string,[min]:string,[na]:string}} [visual]
 * @return {{text:*[], raw:*[], dye:*[]}}
 */
export const vettro = (arr, {
  head,
  tail,
  abstract,
  visual
} = {}) => {
  visual = visual |> isVisual
  let vn = Vectogin.build(arr, head, tail),
    raw = vn.toList('...'),
    dye = (visual |> isVisual)
      ? Visual.vector(raw, { ...visual, retFn: true, mutate: false })
      : null,
    text = vn.stringify(abstract).toList('...')
  return { text, raw, dye }
}

