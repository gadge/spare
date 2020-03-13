import { COLUMNWISE } from '@vect/matrix'
import { FRESH, JUNGLE, SUBTLE } from '@palett/presets'
import { cosmati } from './cosmati'

/**
 *
 * @param {number} [direct] - pointwise = 0, rowwise = 1, columnwise = 2
 * @param {function(*):string} [abstract]
 * @param {function(*):string} [headAbstract]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [preset]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [stringPreset]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [labelPreset]
 * @param {number} [top]
 * @param {number} [left]
 * @param {number} [bottom]
 * @param {number} [right]
 * @param {boolean} [ansi=false]
 * @param {boolean} [fullAngle=false]
 * @returns {string}
 */
export const Deco = ({
    direct = COLUMNWISE,
    abstract,
    headAbstract,
    preset = FRESH,
    stringPreset = JUNGLE,
    labelPreset = SUBTLE,
    top = 0,
    left = 0,
    bottom = 0,
    right = 0,
    ansi = true,
    fullAngle = false,
  } = {}
) => cosmati.bind({
  direct, abstract, headAbstract, preset, stringPreset, labelPreset, top, left, bottom, right, ansi, fullAngle
})
