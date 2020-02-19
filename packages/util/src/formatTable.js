import { maxLen } from './vectorStringProperties'
import { lpad, npad, rpad } from './stringPads'
import { FAChars } from '../resources/constants.zh'
import { hasChn, toFullAngle } from '@spare/string'
import { formatMatrix } from './formatMatrix'
import { transpose as tr } from '@vect/matrix'
import { zipper as zip } from '@vect/vector'

/**
 *
 *

 * @param {string[][]} text
 * @param {*[][]} raw
 * @param {function[][]} [dye]
 * @param {*[][]} head
 * @param {boolean=false} [ansi]
 * @param {boolean=false} chinese
 * @return {{head: string[], rows: string[][], hr: string[]}}
 */
export const formatTable = ({
  text, raw, dye,
  head, ansi = false, chinese = false
} = {}) => {
  if (chinese) return formatTableFullAngle({ head, text, raw, dye, ansi })
  const pads = tr([head].concat(text)).map(col => maxLen(col, ansi)),
    [h, hr, rows] = [
      zip(head, pads, (x, p) => lpad(x, p, ansi)),
      pads.map(l => '-'.repeat(l)),
      formatMatrix({ text, raw, dye, pads, ansi })
    ]
  return { head: h, rows, hr }
}

/**
 *
 *

 * @param {string[][]} text
 * @param {*[][]} raw
 * @param {function[][]} [dye]
 * @param {*[][]} head
 * @param {boolean=false} [ansi]
 * @return {{head: string[], rows: string[][], hr: string[]}}
 */
const formatTableFullAngle = ({
  text, raw, dye,
  head, ansi = false
} = {}) => {
  const { dash, space } = FAChars
  /**
   *
   * @type {{pd:number,cn:boolean}[]}
   */
  const pads = tr([head].concat(text)).map(col => ({ pd: maxLen(col, ansi), cn: col.some(hasChn) })),
    [h, hr, rows] = [
      zip(head, pads, (x, { cn, pd }) => cn
        ? rpad(toFullAngle(x), pd, ansi, space)
        : rpad(x, pd, ansi)
      ),
      pads.map(p => (p.cn ? dash : '-').repeat(p.pd)),
      dye
        ? text.map((text, i) => zip(text, pads,
        (tx, { cn, pd }, j) => cn
          ? npad(toFullAngle(tx), raw[i][j], pd, ansi, space) |> dye[i][j]
          : npad(tx, raw[i][j], pd, ansi) |> dye[i][j]
        ))
        : text.map((text, i) => zip(text, pads,
        (tx, { cn, pd }, j) => cn
          ? npad(toFullAngle(tx), raw[i][j], pd, ansi, space)
          : npad(tx, raw[i][j], pd, ansi)
        ))
    ]
  return { head: h, rows, hr }
}
