import { SP }    from '@spare/enum-chars'
import { FWREG } from './enums/constants'

/**
 * Full-angle string -> Half-angle string
 * 全角转换为半角
 * @param {string} body
 * @returns {string}
 * @constructor
 */
export const fullToHalf = body => {
  let ms, prev = 0, curr = 0, block, match, text = ''
  while ((ms = FWREG.exec(body)) && ([match] = ms)) {
    curr = ms.index
    if (prev !== curr && (block = body.slice(prev, curr))) text += block
    text += halfWidth(match)
    prev = FWREG.lastIndex
  }
  return text
}

const halfWidth = fw => {
  let tx = '', i = 0, l = fw.length, n
  while (i < l && (n = fw.charCodeAt(i++))) {
    tx += n === 0x3000 ? SP : String.fromCharCode(0xFF & (n + 0x20))
  }
  return tx
}
