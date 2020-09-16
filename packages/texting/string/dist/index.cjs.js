'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var util = require('@spare/util');
var enumChars = require('@spare/enum-chars');

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

const trim = Function.prototype.call.bind(String.prototype.trim);

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

exports.afterNonTab = afterNonTab;
exports.indexNonTab = indexNonTab;
exports.narrow = narrow;
exports.narrowExclude = narrowExclude;
exports.tag = tag;
exports.trim = trim;
exports.wL = wL;
