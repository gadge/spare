import { RT, COSP } from '@spare/enum-chars';
import { isNumeric, inferType } from '@typen/num-strict';
import { tenseQuote } from '@spare/quote';
import { NUM, BOO, STR, OBJ } from '@typen/enum-data-types';
import { ARRAY, OBJECT, DATE } from '@typen/enum-object-types';
import { BRACKET, BRACE } from '@spare/enum-brackets';
import { cosmetics } from '@spare/deco-vector';
import { cosmetics as cosmetics$1 } from '@spare/deco-object';
import { decoDateTime } from '@spare/deco-date';

const pairEnt = ([k, v]) => k + RT + v;

const decoKey = x => /\W/.test(x) || isNumeric(x) ? tenseQuote(x) : x;

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

const PRESET_VE = {
  delim: COSP,
  read: decoValue,
  bracket: BRACKET
};
const PRESET_OB = {
  dash: ':',
  delim: COSP,
  keyRead: decoKey,
  read: decoValue,
  bracket: BRACE
};
function decoValue(x) {
  if (x === void 0 || x === null) return x;
  let t = typeof x;
  if (t === NUM || t === BOO) return x;
  if (t === STR) return tenseQuote(x);

  if (t === OBJ && (t = typ(x))) {
    if (t === ARRAY) return cosmetics.call(PRESET_VE, x);
    if (t === OBJECT) return cosmetics$1.call(PRESET_OB, x);
    if (t === DATE) return decoDateTime(x);
  }

  return tenseQuote(x.toString());
}

const PRESET_VE$1 = {
  delim: COSP,
  read: decoLoose,
  bracket: BRACKET
};
const PRESET_OB$1 = {
  dash: ':',
  delim: COSP,
  keyRead: decoKey,
  read: decoLoose,
  bracket: BRACE
};
function decoLoose(x) {
  if (x === void 0 || x === null) return x;
  const t = inferType(x);
  if (t === NUM || t === BOO) return x;
  if (t === STR) return tenseQuote(x);
  if (t === ARRAY) return cosmetics.call(PRESET_VE$1, x);
  if (t === OBJECT) return cosmetics$1.call(PRESET_OB$1, x);
  if (t === DATE) return decoDateTime(x);
  return tenseQuote(x.toString());
}

export { decoKey, decoLoose, decoValue, pairEnt };
