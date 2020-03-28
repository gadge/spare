'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lange = require('@spare/lange');
var util = require('@spare/util');

var ansiRegex = ({onlyFirst = false} = {}) => {
	const pattern = [
		'[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
		'(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'
	].join('|');

	return new RegExp(pattern, onlyFirst ? undefined : 'g');
};

var stripAnsi = string => typeof string === 'string' ? string.replace(ansiRegex(), '') : string;

const FullAngleReg = /[\u4e00-\u9fa5]|[\uff00-\uffff]/;

/**
 * Return if a string contains Chinese character.
 * halfAng = str.match(/[\u0000-\u00ff]/g) || [] //半角
 * chinese = str.match(/[\u4e00-\u9fa5]/g) || [] //中文
 * fullAng = str.match(/[\uff00-\uffff]/g) || [] //全角
 * @param {string} str
 * @returns {boolean}
 */

const hasChn = str => str.search(FullAngleReg) !== -1;
/**
 * Half-angle string -> Full-angle string
 * 半角转化为全角
 * a.全角空格为12288，半角空格为32
 * b.其他字符半角(33-126)与全角(65281-65374)的对应关系是：均相差65248
 * @param {string} tx
 * @returns {string}
 * @constructor
 */


const toFullAngle = tx => {
  let t = '',
      co;

  for (let c of tx) {
    co = c.charCodeAt(0);
    t = co === 32 ? t + String.fromCharCode(12288) : co < 127 ? t + String.fromCharCode(co + 65248) : t + c;
  }

  return t;
};
/**
 * Full-angle string -> Half-angle string
 * 全角转换为半角
 * @param {string} tx
 * @returns {string}
 * @constructor
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

const toFullAngleWoAnsi = tx => {
  if (lange.hasAnsi(tx)) tx = stripAnsi(tx);
  return toFullAngle(tx);
};

const padStartAnsi = (tx, len, fill) => lange.hasAnsi(tx) ? tx.padStart(tx.length + len - lange.lange(tx), fill) : tx.padStart(len, fill);

const padEndAnsi = (tx, len, fill) => lange.hasAnsi(tx) ? tx.padEnd(tx.length + len - lange.lange(tx), fill) : tx.padEnd(len, fill);

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
    text = (text.endsWith('}') || text.endsWith(']')) && !text.endsWith(']]') ? util.afterNaTab(text.split(util.RN).map(x => t + x).join(util.RN)) : ['', ...text.split(util.RN).map(x => t + util.TB + x), t].join(util.RN);
  }

  return `${key} (${text})`;
};

exports.afterNonTab = afterNonTab;
exports.hasChn = hasChn;
exports.indexNonTab = indexNonTab;
exports.narrow = narrow;
exports.narrowExclude = narrowExclude;
exports.padEndAnsi = padEndAnsi;
exports.padStartAnsi = padStartAnsi;
exports.tag = tag;
exports.toFullAngle = toFullAngle;
exports.toFullAngleWoAnsi = toFullAngleWoAnsi;
exports.toHalfAngle = toHalfAngle;
exports.wL = wL;
