import { FRESH, JUNGLE } from '@palett/presets'
import { ROWWISE } from '@vect/matrix'
import { cosmetics } from './cosmetics'

/**
 *
 * @param {number} [direct] - pointwise = 0, rowwise = 1, columnwise = 2
 * @param {function(*):string} [abstract]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [preset]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [stringPreset]
 * @param {number} [top=0]
 * @param {number} [left=0]
 * @param {number} [bottom=0]
 * @param {number} [right=0]
 * @param {string} [delimiter=',']
 * @param {boolean} [ansi=false]
 * @returns {string}
 */
export const Deco = ({
    direct = ROWWISE,
    abstract,
    preset = FRESH,
    stringPreset = JUNGLE,
    top = 0,
    left = 0,
    bottom = 0,
    right = 0,
    delimiter = ', ',
    ansi = false
  } = {}
) => cosmetics.bind({
  direct, abstract, preset, stringPreset,
  top, left, bottom, right, delimiter, ansi
})

