import { isNumeric as isNumeric$1 } from '@typen/num-strict';
import { tenseQuote } from '@spare/quote';
import { RT, COSP } from '@spare/enum-chars';
import { NUM, BOO, STR, FUN, OBJ } from '@typen/enum-data-types';
import { ARRAY, OBJECT, DATE } from '@typen/enum-object-types';
import '@spare/enum-brackets';
import '@spare/deco-vector';
import '@spare/deco-object';
import '@spare/deco-date';

const decoKey = x => /\W/.test(x) || isNumeric$1(x) ? tenseQuote(x) : x;

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

const pairEnt = ([k, v]) => k + RT + v;
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
  if (t === NUM || t === BOO) return node;
  if (t === STR) return loose && isNumeric(node) ? node : tenseQuote(node);
  if (t === FUN) return _decofun$call = decofun.call(DEFN, node), tenseQuote(_decofun$call);

  if (t === OBJ) {
    var _node$map$join, _mutate$map$join, _ref;

    const pt = typ(node);
    if (pt === ARRAY) return _node$map$join = node.map(decoval.bind(this)).join(COSP), bracket(_node$map$join);
    if (pt === OBJECT) return _mutate$map$join = mutate(Object.entries(node), decoKey, decoval.bind(this)).map(pairEnt).join(COSP), brace(_mutate$map$join);
    if (pt === DATE) return _ref = `${formatDate(node)}'${formatTime(node)}`, tenseQuote(_ref);
  }

  return _node$toString = node.toString(), tenseQuote(_node$toString);
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

export { DecoPale, decoKey, decoPale, decoval };
