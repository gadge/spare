import { SP }     from '@spare/enum-full-angle-chars'
import { FWLEAP } from './enums/constants'

/**
 * Half-angle string -> Full-angle string
 * 半角转化为全角
 * a.全角空格为12288，半角空格为32
 * b.其他字符半角(33-126)与全角(65281-65374)的对应关系是：均相差65248
 * @param {string} text
 * @returns {string}
 * @constructor
 */
export const halfToFull = (text) => {
  let l = text?.length, i = 0, t = '', n
  while (i < l && (n = text.charCodeAt(i))) {
    if (n === 0x20) { t += SP } else if (0x20 < n && n < 0x7f) { t += String.fromCharCode(n + FWLEAP) } else { t += text[i] }
    i++
  }
  return t
}
