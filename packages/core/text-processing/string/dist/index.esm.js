import stripAnsi from 'strip-ansi';
import { hasAnsi, lange } from '@spare/lange';
import { isTab, deNaTab, endsBracs, afterNaTab, RN, TB } from '@spare/util';

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
  if (hasAnsi(tx)) tx = stripAnsi(tx);
  return toFullAngle(tx);
};

const padStartAnsi = (tx, len, fill) => hasAnsi(tx) ? tx.padStart(tx.length + len - lange(tx), fill) : tx.padStart(len, fill);

const padEndAnsi = (tx, len, fill) => hasAnsi(tx) ? tx.padEnd(tx.length + len - lange(tx), fill) : tx.padEnd(len, fill);

const indexNonTab = tx => {
  let i = 0;

  for (let {
    length
  } = tx; i < length; i++) if (!isTab(tx.charAt(i))) return i;

  return i;
};

const afterNonTab = tx => tx.substring(deNaTab(tx));

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
  const i = deNaTab(label);
  let [key, text] = [endsBracs(label) ? label : `${label.substring(0, i)}[${label.substring(i)}]`, `${item}`];

  if (text.includes('\n')) {
    const t = ' '.repeat(i);
    text = (text.endsWith('}') || text.endsWith(']')) && !text.endsWith(']]') ? afterNaTab(text.split(RN).map(x => t + x).join(RN)) : ['', ...text.split(RN).map(x => t + TB + x), t].join(RN);
  }

  return `${key} (${text})`;
};

export { afterNonTab, hasChn, indexNonTab, narrow, narrowExclude, padEndAnsi, padStartAnsi, tag, toFullAngle, toFullAngleWoAnsi, toHalfAngle, wL };
