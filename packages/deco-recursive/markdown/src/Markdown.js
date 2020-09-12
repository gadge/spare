import { AEU, LF }  from '@spare/enum-chars'
import { liner }    from '@spare/liner'
import { mattro }   from '@spare/mattro'
import { padTable } from '@spare/pad-table'
import { vettro }   from '@spare/vettro'
import { size }     from '@vect/matrix'
import { acquire }  from '@vect/vector-merge'

export class Markdown {
  /***
   *
   * @param {Object} table
   * @param {Object} p
   *
   *
   * @param {Function} [p.read]
   * @param {Function} [p.headRead]
   *
   * @param {number} [p.top]
   * @param {number} [p.bottom]
   * @param {number} [p.left]
   * @param {number} [p.right]
   *
   * @param {boolean} [p.ansi=true]
   * @param {boolean} [p.fullAngle]
   * @param {number} [p.level=0]
   *
   * @returns {string}
   */
  static table(table, p = {}) {
    if (!table) return AEU
    let matrix = table.rows || table.matrix, banner = table.head || table.banner
    const [height, width] = size(matrix), labelWidth = banner?.length
    if (!height || !width || !labelWidth) return AEU
    const delim = LF
    const {
      read, headRead,
      top, left, bottom, right,
      ansi, fullAngle, level
    } = p
    const [x, b] = [
      mattro(matrix, { top, bottom, left, right, height, width, read }),
      vettro(banner, { head: left, tail: right, read: headRead }),
    ]
    let { head, hr, rows } = padTable(x.text, b.text, { raw: x.raw, ansi, fullAngle })
    const lines = acquire(
      [
        '| ' + head.join(' | ') + ' |',
        '| ' + hr.join(' | ') + ' |'
      ],
      rows.map(row => '| ' + row.join(' | ') + ' |')
    )
    return liner(lines, { delim, level })
  }
}


