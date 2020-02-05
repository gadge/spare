import { Ar, Mx } from 'veho'
import { maxLen } from '@spare/util'
import { lpad, numPad, rpad, zhChars } from '@spare/util'
import { padMx } from './padMx'
import { StrX } from '../../../src/brief/StrX'

const { hasChn, toFullAngle } = StrX
/**
 *
 *
 * @param {*[][]} head
 * @param wordx
 * @param rawx
 * @param {Chalk[][]} [palx]
 * @param {boolean=false} [ansi]
 * @param {boolean=false} chinese
 * @return {{head: string[], blanc: string[], rows: string[][]}}
 */
export const padTable = (head, wordx, rawx, palx, ansi = false, chinese = false) => {
  if (chinese) return padTableCn(head, wordx, rawx, palx, ansi)
  const
    pads = Mx.columns([head].concat(wordx), col => maxLen(col, ansi)),
    [_head, blanc, rows] = [
      Ar.zip(head, pads, (x, p) => lpad(x, p, ansi)),
      pads.map(l => '-'.repeat(l)),
      padMx(wordx, rawx, palx, pads, ansi)
    ]
  return { head: _head, blanc, rows }
}

/**
 *
 *
 * @param {*[][]} head
 * @param wordx
 * @param rawx
 * @param {Chalk[][]} [palx]
 * @param {boolean=false} [ansi]
 * @return {{head: string[], blanc: string[], rows: string[][]}}
 */
const padTableCn = (head, wordx, rawx, palx, ansi = false) => {
  const { dash, space } = zhChars
  /**
   *
   * @type {{pd:number,cn:boolean}[]}
   */
  const pads = Mx.columns([head].concat(wordx),
    col => ({ pd: maxLen(col, ansi), cn: col.some(hasChn) })),
    [_head, blanc, rows] = [
      Ar.zip(head, pads, (x, { cn, pd }) => cn
        ? rpad(toFullAngle(x), pd, ansi, space)
        : rpad(x, pd, ansi)
      ),
      pads.map(p => (p.cn ? dash : '-').repeat(p.pd)),
      palx
        ? wordx.map((words, i) => Ar.zip(words, pads,
        (tx, { cn, pd }, j) => cn
          ? numPad(toFullAngle(tx), rawx[i][j], pd, ansi, space) |> palx[i][j]
          : numPad(tx, rawx[i][j], pd, ansi) |> palx[i][j]
        ))
        : wordx.map((words, i) => Ar.zip(words, pads,
        (tx, { cn, pd }, j) => cn
          ? numPad(toFullAngle(tx), rawx[i][j], pd, ansi, space)
          : numPad(tx, rawx[i][j], pd, ansi)
        ))
    ]
  return { head: _head, blanc, rows }
}
