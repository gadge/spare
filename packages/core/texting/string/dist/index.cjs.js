'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var stripAnsi = _interopDefault(require('strip-ansi'));
var lange = require('@spare/lange');
var util = require('@spare/util');
var enumChars = require('@spare/enum-chars');

const FullAngleReg = /[\u4e00-\u9fa5]|[\uff00-\uffff]/;

/**
 * Return if a string contains Chinese character.
 * halfAng = str.match(/[\u0000-\u00ff]/g) || [] //半角
 * chinese = str.match(/[\u4e00-\u9fa5]/g) || [] //中文
 * fullAng = str.match(/[\uff00-\uffff]/g) || [] //全角
 * @param {string} str
 * @returns {boolean}
 */
/**
 *
 * @param str
 * @return {boolean}
 * @deprecated
 */

const hasChn = str => str.search(FullAngleReg) !== -1;

const SP_CODE = 12288;
const CH_GAP = 65248;
/**
 * Half-angle string -> Full-angle string
 * 半角转化为全角
 * a.全角空格为12288，半角空格为32
 * b.其他字符半角(33-126)与全角(65281-65374)的对应关系是：均相差65248
 * @param {string} text
 * @returns {string}
 * @deprecated
 */

const toFullAngle = text => {
  let i = 0,
      t = '',
      n;
  const l = text.length;

  while (i < l && (n = text.charCodeAt(i++))) {
    if (n === 32) {
      t += String.fromCharCode(SP_CODE);
    } else if (n < 127) {
      t += String.fromCharCode(n + CH_GAP);
    } else {
      t += String.fromCharCode(n);
    }
  }

  return t;
};
/**
 * Full-angle string -> Half-angle string
 * 全角转换为半角
 * @param {string} tx
 * @returns {string}
 * @deprecated
 */


const toHalfAngle = tx => {
  let t = '',
      co;

  for (let c of tx) {
    co = c.charCodeAt(0);
    t += co === 12288 ? String.fromCharCode(co - 12256) : 65280 < co && co < 65375 ? String.fromCharCode(co - 65248) : String.fromCharCode(co);
  }

  return t;
};

/**
 *
 * @param tx
 * @return {string}
 * @deprecated
 */

const toFullAngleWoAnsi = function (tx) {
  if (lange.hasAnsi(tx)) tx = stripAnsi(tx);
  return toFullAngle(tx);
};

const indexNonTab = tx => {
  let i = 0;

  for (let {
    length
  } = tx; i < length; i++) if (!util.isTab(tx.charAt(i))) return i;

  return i;
};

const afterNonTab = tx => tx.substring(util.deNaTab(tx));

function narrow(tx, lb, rb) {
  const [li, ri] = [tx.indexOf(lb), tx.lastIndexOf(rb)];
  return li > 0 && ri > 0 ? tx.slice(li, ri + rb.length) : tx;
}

function narrowExclude(tx, lb, rb) {
  const [li, ri] = [tx.indexOf(lb), tx.lastIndexOf(rb)];
  return li && ri ? tx.slice(li + lb.length, ri) : tx;
}

const wL = (tx = '') => {
  console.log(tx);
};

const tag = (label, item) => {
  const i = util.deNaTab(label);
  let [key, text] = [util.endsBracs(label) ? label : `${label.substring(0, i)}[${label.substring(i)}]`, `${item}`];

  if (text.includes('\n')) {
    const t = ' '.repeat(i);
    text = (text.endsWith('}') || text.endsWith(']')) && !text.endsWith(']]') ? util.afterNaTab(text.split(enumChars.RN).map(x => t + x).join(enumChars.RN)) : ['', ...text.split(enumChars.RN).map(x => t + enumChars.TB + x), t].join(enumChars.RN);
  }

  return `${key} (${text})`;
};

const stringValue = word => {
  let l = word === null || word === void 0 ? void 0 : word.length;
  if (!l) return NaN;
  if (l >= 4) return ((word.charCodeAt(0) & 0x7f) << 21) + ((word.charCodeAt(1) & 0x7f) << 14) + ((word.charCodeAt(2) & 0x7f) << 7) + (word.charCodeAt(3) & 0x7f);
  if (l === 3) return ((word.charCodeAt(0) & 0x7f) << 21) + (word.charCodeAt(1) & 0x7f) << 14 + ((word.charCodeAt(2) & 0x7f) << 7);
  if (l === 2) return ((word.charCodeAt(0) & 0x7f) << 21) + (word.charCodeAt(1) & 0x7f) << 14;
  if (l === 1) return (word.charCodeAt(0) & 0x7f) << 21;
};

exports.afterNonTab = afterNonTab;
exports.hasChn = hasChn;
exports.indexNonTab = indexNonTab;
exports.narrow = narrow;
exports.narrowExclude = narrowExclude;
exports.stringValue = stringValue;
exports.tag = tag;
exports.toFullAngle = toFullAngle;
exports.toFullAngleWoAnsi = toFullAngleWoAnsi;
exports.toHalfAngle = toHalfAngle;
exports.wL = wL;
