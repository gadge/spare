import { tableMargin } from '@spare/table-margin'
import { tablePadder } from '@spare/table-padder'
import { AEU, LF }     from '@texting/enum-chars'
import { size }        from '@vect/matrix-index'
import { mutate }      from '@vect/matrix-mapper'

export class Csv {
  /***
   *
   * @param {Object} table
   * @param {Object} option
   *
   *
   * @param {Function} [option.read]
   * @param {Function} [option.headRead]
   *
   * @param {number} [option.top]
   * @param {number} [option.bottom]
   * @param {number} [option.left]
   * @param {number} [option.right]
   *
   * @param {boolean} [option.ansi=true]
   * @param {boolean} [option.fullAngle]
   * @param {number} [option.level=0]
   *
   * @returns {string}
   */
  static table(table, option = {}) {
    if (!table) return AEU
    let matrix = table.rows || table.matrix, banner = table.head || table.banner
    const [ height, width ] = size(matrix), labelWidth = banner?.length
    if (!height || !width || !labelWidth) return AEU
    table = tableMargin(table, option) // use: top, left, bottom ,right, read, headRead
    let { head, rows } = tablePadder(table, option)// use: ansi, full
    mutate(rows, text => text.includes(',') ? `"${text}"` : text)
    return [ head.join(','), ...rows.map(row => row.join(',')) ].join(LF)
  }
}


