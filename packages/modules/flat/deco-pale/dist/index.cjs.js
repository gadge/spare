'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var numStrict = require('@typen/num-strict');
var quote = require('@spare/quote');
var enumChars = require('@spare/enum-chars');
var enumDataTypes = require('@typen/enum-data-types');
var enumObjectTypes = require('@typen/enum-object-types');
require('@spare/enum-brackets');
require('@spare/deco-vector');
require('@spare/deco-object');
require('@spare/deco-date');

const decoKey = x => /\W/.test(x) || numStrict.isNumeric(x) ? quote.tenseQuote(x) : x;

/**
 *
 * @type {Function|function(*):string}
 */
const protoType = Function.prototype.call.bind(Object.prototype.toString);
/**
 * const rxObj = /^\[object (.*)]$/
 * Equivalent to: Object.prototype.stringify.call(o).match(rxObj)[1]
 * @param {*} o
 * @return {string}
 */

const typ = o => protoType(o).slice(8, -1);

const isNumeric = x => !!(x = +x) || x === 0;

/**
 *
 * @param {[*,*][]} ents
 * @param {function} keyFn
 * @param {function} [valFn]
 * @param {number} [l]
 * @returns {undefined}
 */
/**
 *
 * @param {[*,*][]} ents
 * @param {function} keyMap
 * @param {function} [valMap]
 * @param {number} [l]
 * @returns {[*,*][]}
 */


const mutate = (ents, keyMap, valMap, l) => {
  l = l || ents && ents.length, valMap = valMap || keyMap;

  for (let i = 0, r; i < l; i++) {
    r = ents[i], r[0] = keyMap(r[0], i), r[1] = valMap(r[1], i);
  }

  return ents;
};

const bracket = x => '[' + x + ']';

const brace = x => '{' + x + '}';

const DIGIT_2 = '2-digit';
const DATE_CONFIG = {
  year: DIGIT_2,
  month: DIGIT_2,
  day: DIGIT_2
};
/** @type {Intl.DateTimeFormat} */

const FormatDate = new Intl.DateTimeFormat(undefined, DATE_CONFIG);
const formatDate = FormatDate.format.bind(FormatDate);

const NUMERIC = 'numeric';
const TIME_CONFIG = {
  hour: NUMERIC,
  minute: NUMERIC,
  second: NUMERIC,
  hour12: false
};
/** @type {Intl.DateTimeFormat} */

const FormatTime = new Intl.DateTimeFormat(undefined, TIME_CONFIG);
const formatTime = FormatTime.format.bind(FormatTime);

const pairEnt = ([k, v]) => k + enumChars.RT + v;
/**
 *
 * @type {Function|function(*):string}
 */


const protoType$1 = Function.prototype.call.bind(Object.prototype.toString);

const DEFN = {
  pr: false
};

function decoval(node) {
  var _decofun$call, _node$toString;

  const {
    loose
  } = this;
  if (node === void 0 || node === null) return node;
  const t = typeof node;
  if (t === enumDataTypes.NUM || t === enumDataTypes.BOO) return node;
  if (t === enumDataTypes.STR) return loose && isNumeric(node) ? node : quote.tenseQuote(node);
  if (t === enumDataTypes.FUN) return _decofun$call = decofun.call(DEFN, node), quote.tenseQuote(_decofun$call);

  if (t === enumDataTypes.OBJ) {
    var _node$map$join, _mutate$map$join, _ref;

    const pt = typ(node);
    if (pt === enumObjectTypes.ARRAY) return _node$map$join = node.map(decoval.bind(this)).join(enumChars.COSP), bracket(_node$map$join);
    if (pt === enumObjectTypes.OBJECT) return _mutate$map$join = mutate(Object.entries(node), decoKey, decoval.bind(this)).map(pairEnt).join(enumChars.COSP), brace(_mutate$map$join);
    if (pt === enumObjectTypes.DATE) return _ref = `${formatDate(node)}'${formatTime(node)}`, quote.tenseQuote(_ref);
  }

  return _node$toString = node.toString(), quote.tenseQuote(_node$toString);
}

/**
 *
 * @param x
 * @param {boolean} loose
 * @return {string|*}
 */

const decoPale = (x, {
  loose = true
} = {}) => decoval.call({
  loose
}, x);
/**
 *
 * @param {boolean} loose
 * @return {Function}
 */

const DecoPale = ({
  loose = true
} = {}) => decoval.bind({
  loose
});

exports.DecoPale = DecoPale;
exports.decoKey = decoKey;
exports.decoPale = decoPale;
exports.decoval = decoval;
