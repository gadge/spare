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
const ELLIP = '...';
const CR = '\r';
const LF = '\n';
const RN = '\r\n';
const TB = '  ';
const AEU = '(Ø)';

const DASH = '－';
const SPACE = '　';
const FAChars = {
  dash: DASH,
  space: SPACE
};

export { AEU, CR, DASH, ELLIP, FAChars, LF, RN, SPACE, TB, aeu, afterNaTab, bc, beforeNaTab, br, deNaTab, endsBracs, isTab, noop, pr, rn, tabify, tb, totx };
