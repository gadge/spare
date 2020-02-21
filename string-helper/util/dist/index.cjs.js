'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const noop = () => {};
/**
 *
 * @param {*} x
 * @return {string}
 */


const totx = x => `${x}`;

const isTab = c => c === '\t' || c === ' ';

const tabify = tx => {
  var _tx;

  const i = (_tx = tx, deNaTab(_tx));
  return endsBracs(tx) ? tx : `${tx.substring(0, i)}[${tx.substring(i)}]`;
};

const deNaTab = tx => {
  let i = 0;

  for (let {
    length
  } = tx; i < length; i++) if (!isTab(tx.charAt(i))) return i;

  return i;
};

const beforeNaTab = tx => tx.substring(0, deNaTab(tx));

const afterNaTab = tx => tx.substring(deNaTab(tx));

const pr = tx => '(' + tx + ')';

const br = tx => '[' + tx + ']';

const bc = tx => '{' + tx + '}';

const endsBracs = tx => tx.endsWith(')') || tx.endsWith(']');

const rn = '\r\n';
const tb = '  ';
const aeu = '(Ø)';
const RN = rn;
const TB = tb;
const AEU = aeu;

const DASH = '－';
const SPACE = '　';
const FAChars = {
  dash: DASH,
  space: SPACE
};

exports.AEU = AEU;
exports.DASH = DASH;
exports.FAChars = FAChars;
exports.RN = RN;
exports.SPACE = SPACE;
exports.TB = TB;
exports.aeu = aeu;
exports.afterNaTab = afterNaTab;
exports.bc = bc;
exports.beforeNaTab = beforeNaTab;
exports.br = br;
exports.deNaTab = deNaTab;
exports.endsBracs = endsBracs;
exports.isTab = isTab;
exports.noop = noop;
exports.pr = pr;
exports.rn = rn;
exports.tabify = tabify;
exports.tb = tb;
exports.totx = totx;
