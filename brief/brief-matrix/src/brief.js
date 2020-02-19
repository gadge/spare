import { RN, AEU } from '@spare/util'
import { padMx } from '@spare/preci'
import { mattro } from '@spare/mattro'
import { lange } from '@spare/lange'
import { FRESH } from '@palett/presets'
import { ROWWISE, size } from '@vect/matrix'
import { Max as ColumnsMax } from '@vect/columns-indicator'
import { zipperBand } from '@vect/columns-zipper'
import { zipper } from '@vect/vector'
import { fluo } from '@palett/fluo-matrix'

const len = ansi => ansi ? x => x ? lange(x) : 0 : x => x?.length ?? 0

/**
 * direct: point-wise=0, row-wise=1, column-wise=2
 * @param {*[][]} matrix
 * @param {function(*):string} [abstract]
 * @param {string} [delimiter=',']
 * @param {number} [top]
 * @param {number} [left]
 * @param {number} [bottom]
 * @param {number} [right]
 * @param {{max:string|number[],min:string|number[],na:string|number[]}} [preset]
 * @param {number} [direct]
 * @param ansi
 * @returns {string}
 */
export const brief = (matrix, {
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
  const [h, w] = matrix |> size
  if (!h || !w) return AEU
  const { raw, text } = mattro(matrix, { top, bottom, left, right, height: h, width: w, abstract })
  const pads = ColumnsMax(len(preset || ansi))(text)
  const dyes = preset && fluo(raw, { direct, preset, colorant: true })
  // const columns = zipperBand(text, pads, (col, pad) =>mapper(col,x=>npad(x,)))
  const lines = padMx(text, raw, dyes, pads, ansi).map(line => `[${line}]`)
  return '[' + lines.join(`,${RN} `) + ']'
}

