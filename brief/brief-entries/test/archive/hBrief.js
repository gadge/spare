import { Greys, Palett } from 'palett'
import { AEU, totx } from '@spare/util'
import { Preci } from '@spare/preci'
import { Visual } from 'hatsu-matrix'

/***
 *
 * @param {[*,*][]} entries
 * @param {string} [delimiter=',']
 * @param {function(*):string} [keyAbstract]
 * @param {function(*):string} [abstract]
 * @param {number} [head]
 * @param {number} [tail]
 * @param {{
 *          [on]:boolean,
 *          [mark]:{
 *            [max]:string|number[],
 *            [min]:string|number[],
 *            [na]:string|number[],
 *          },
 *          [direct]:number
 *         }} [visual]
 * @returns {string}
 */
export const hBrief = (entries, {
  delimiter = ':',
  keyAbstract,
  abstract,
  head,
  tail,
  visual = {
    on: true,
    mark: {
      max: Palett.lightGreen.accent_3,
      min: Palett.orange.accent_2,
      na: Greys.blueGrey.lighten_3,
    }
  }
} = {}) => {
  const
    [keyFn, valFn] = [keyAbstract || totx, abstract || totx]
  let elements = Preci
    .fromArr(entries, head, tail)
    .map(([k, v]) => [keyFn(k), valFn(v)])
    .toList(['..', '..'])
  if (visual.on !== false) {
    Visual.column(elements, 1, { mark: visual.mark, deep: false },)
  }
  elements = elements.map(([k, v]) => '(' + k + delimiter + v + ')')
  return elements.length ? elements.join(',') : AEU
}
