import { RN, AEU } from '@spare/util'
import { mattro } from '@spare/mattro'
import { padMatrix } from '@spare/pad-matrix'
import { FRESH } from '@palett/presets'
import { fluo } from '@palett/fluo-matrix'
import { ROWWISE, size } from '@vect/matrix'

/**
 *
 * @param {*[][]} matrix
 * @param {function(*):string} [abstract]
 * @param {string} [delimiter=',']
 * @param {number} [top]
 * @param {number} [left]
 * @param {number} [bottom]
 * @param {number} [right]
 * @param {{max:string|number[],min:string|number[],na:string|number[]}} [preset]
 * @param {number} [direct] pointwise = 0, rowwise = 1, columnwise = 2
 * @param ansi
 * @returns {string}
 */
export const deco = (matrix, {
    abstract,
    delimiter = ', ',
    top = 0,
    left = 0,
    bottom = 0,
    right = 0,
    preset = FRESH,
    direct = ROWWISE,
    ansi = false
  } = {}
) => {
  const [height, width] = size(matrix)
  if (!height || !width) return AEU
  const { raw, text } = mattro(matrix, { top, bottom, left, right, height, width, abstract })
  const dye = preset && fluo(raw, { direct, preset, colorant: true })
  matrix = padMatrix(text, { raw, dye, ansi })
    .map(line => `[${line.join(delimiter)}]`)
  return '[' + matrix.join(`,${RN} `) + ']'
}

