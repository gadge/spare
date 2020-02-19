import { hBrief as entsHBrief, vBrief as entsVBrief } from '@spare/brief-entries'
import { Greys, Palett } from 'palett'

/**
 *
 * @param {Map<*,*>} dict
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
export const hBrief = (dict,
  {
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
  } = {}
) => {
  return entsHBrief([...dict.entries()], {
    delimiter,
    keyAbstract,
    abstract,
    head,
    tail,
    visual
  })
}

/***
 *
 * @param {Map<*,*>} dict
 * @param {string} [delimiter=' -> ']
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
 * @param {boolean} [ansi=false]
 * @returns {string}
 */
export const vBrief = (dict, {
  delimiter = ' -> ',
  keyAbstract,
  abstract,
  head = 0,
  tail = 0,
  visual = {
    on: true,
    mark: {
      max: Palett.lightGreen.accent_3,
      min: Palett.orange.accent_2,
      na: Greys.blueGrey.lighten_3,
    }
  },
  ansi = false
} = {}) => entsVBrief([...dict.entries()], {
  delimiter,
  keyAbstract,
  abstract,
  head,
  tail,
  visual,
  ansi
})

