'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumDataTypes = require('@typen/enum-data-types');
var enumChars = require('@spare/enum-chars');
var enumFullAngleChars = require('@spare/enum-full-angle-chars');

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
  return typeof x === enumDataTypes.STR ? qt + x + qt : x;
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

Object.defineProperty(exports, 'AEU', {
  enumerable: true,
  get: function () {
    return enumChars.AEU;
  }
});
Object.defineProperty(exports, 'CR', {
  enumerable: true,
  get: function () {
    return enumChars.CR;
  }
});
Object.defineProperty(exports, 'ELLIP', {
  enumerable: true,
  get: function () {
    return enumChars.ELLIP;
  }
});
Object.defineProperty(exports, 'LF', {
  enumerable: true,
  get: function () {
    return enumChars.LF;
  }
});
Object.defineProperty(exports, 'RN', {
  enumerable: true,
  get: function () {
    return enumChars.RN;
  }
});
Object.defineProperty(exports, 'SP', {
  enumerable: true,
  get: function () {
    return enumChars.SP;
  }
});
Object.defineProperty(exports, 'TB', {
  enumerable: true,
  get: function () {
    return enumChars.TB;
  }
});
Object.defineProperty(exports, 'DASH', {
  enumerable: true,
  get: function () {
    return enumFullAngleChars.DASH;
  }
});
Object.defineProperty(exports, 'SPACE', {
  enumerable: true,
  get: function () {
    return enumFullAngleChars.SP;
  }
});
exports.afterNaTab = afterNaTab;
exports.bc = bc;
exports.beforeNaTab = beforeNaTab;
exports.br = br;
exports.deNaTab = deNaTab;
exports.endsBracs = endsBracs;
exports.isTab = isTab;
exports.noop = noop;
exports.pipeQuote = pipeQuote;
exports.pr = pr;
exports.quoteString = quoteString;
exports.tabify = tabify;
exports.totx = totx;
