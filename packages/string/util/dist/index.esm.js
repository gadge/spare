import { STR } from '@typen/enum-data-types';
export { AEU, CR, ELLIP, LF, RN, SP, TB } from '@spare/enum-chars';
export { DASH, SP as SPACE } from '@spare/enum-full-angle-chars';

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

const quoteString = function (x) {
  const {
    qt
  } = this;
  return typeof x === STR ? qt + x + qt : x;
};
const pipeQuote = (abstract, quote) => {
  if (!(quote === null || quote === void 0 ? void 0 : quote.length)) return abstract;
  if (!abstract) return quoteString.bind({
    qt: quote
  });
  return x => {
    var _ref, _x;

    return _ref = (_x = x, abstract(_x)), quoteString.bind({
      qt: quote
    })(_ref);
  };
};

export { afterNaTab, bc, beforeNaTab, br, deNaTab, endsBracs, isTab, noop, pipeQuote, pr, quoteString, tabify, totx };
