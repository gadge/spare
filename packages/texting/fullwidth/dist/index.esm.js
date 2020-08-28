import { SP } from '@spare/enum-chars';
import { SP as SP$1 } from '@spare/enum-full-angle-chars';
import { hasAnsi } from '@spare/lange';
import stripAnsi from 'strip-ansi';

const FWREG = /[\uff01-\uff5e|\u3000]+/g;
const FWCHREG = /[\u4e00-\u9fa5|\uff01-\uff5e|\u3000]+/g;
const FWLEAP = 0xfee0;

/**
 * Full-angle string -> Half-angle string
 * 全角转换为半角
 * @param {string} body
 * @returns {string}
 * @constructor
 */

const fullToHalf = body => {
  let ms,
      prev = 0,
      curr = 0,
      block,
      match,
      text = '';

  while ((ms = FWREG.exec(body)) && ([match] = ms)) {
    curr = ms.index;
    if (prev !== curr && (block = body.slice(prev, curr))) text += block;
    text += halfWidth(match);
    prev = FWREG.lastIndex;
  }

  return text;
};

const halfWidth = fw => {
  let tx = '',
      i = 0,
      l = fw.length,
      n;

  while (i < l && (n = fw.charCodeAt(i++))) {
    tx += n === 0x3000 ? SP : String.fromCharCode(0xFF & n + 0x20);
  }

  return tx;
};

/**
 * Half-angle string -> Full-angle string
 * 半角转化为全角
 * a.全角空格为12288，半角空格为32
 * b.其他字符半角(33-126)与全角(65281-65374)的对应关系是：均相差65248
 * @param {string} text
 * @returns {string}
 * @constructor
 */

const halfToFull = text => {
  let l = text === null || text === void 0 ? void 0 : text.length,
      i = 0,
      t = '',
      n;

  while (i < l && (n = text.charCodeAt(i))) {
    if (n === 0x20) {
      t += SP$1;
    } else if (0x20 < n && n < 0x7f) {
      t += String.fromCharCode(n + FWLEAP);
    } else {
      t += text[i];
    }

    i++;
  }

  return t;
};

/**
 * Return if a string contains Chinese character.
 * halfAng = str.match(/[\u0000-\u00ff]/g) || [] //半角
 * chinese = str.match(/[\u4e00-\u9fa5]/g) || [] //中文
 * fullAng = str.match(/[\uff00-\uffff]/g) || [] //全角
 * @param {string} str
 * @returns {boolean}
 */

const hasFullWidth = str => FWCHREG.test(str);

const fullWidth = (text, {
  ansi = true,
  lean = true
} = {}) => fw.call({
  ansi,
  lean
}, text);
const FullWidth = ({
  ansi = true,
  lean = true
} = {}) => fw.bind({
  ansi,
  lean
});
const fw = function (tx) {
  const {
    ansi,
    lean
  } = this;
  if (ansi && hasAnsi(tx)) tx = stripAnsi(tx);
  if (lean) tx = tx.replace(/(\W)\s+/g, (_, x) => x);
  return halfToFull(tx);
};

export { FullWidth, fullToHalf, fullWidth, halfToFull, hasFullWidth };
