/**
 * Return if a string contains Chinese character.
 * halfAng = str.match(/[\u0000-\u00ff]/g) || [] //半角
 * chinese = str.match(/[\u4e00-\u9fa5]/g) || [] //中文
 * fullAng = str.match(/[\uff00-\uffff]/g) || [] //全角
 * @param {string} str
 * @returns {boolean}
 */
import { FullAngleReg } from './enums/FullAngle'

const hasChn = str => str.search(FullAngleReg) !== -1

/**
 * Half-angle string -> Full-angle string
 * 半角转化为全角
 * a.全角空格为12288，半角空格为32
 * b.其他字符半角(33-126)与全角(65281-65374)的对应关系是：均相差65248
 * @param {string} tx
 * @returns {string}
 * @constructor
 */
const toFullAngle = (tx) => {
  let t = '', co
  for (let c of tx) {
    co = c.charCodeAt(0)
    t = co === 32
      ? t + String.fromCharCode(12288)
      : co < 127
        ? t + String.fromCharCode(co + 65248)
        : t + c
  }
  return t
}

/**
 * Full-angle string -> Half-angle string
 * 全角转换为半角
 * @param {string} tx
 * @returns {string}
 * @constructor
 */
const toHalfAngle = (tx) => {
  let t = '', co
  for (let c of tx) {
    co = c.charCodeAt(0)
    t += co === 12288
      ? String.fromCharCode(co - 12256)
      : 65280 < co && co < 65375
        ? String.fromCharCode(co - 65248)
        : String.fromCharCode(co)
  }
  return t
}

export {
  hasChn,
  toFullAngle,
  toHalfAngle
}