import { tenseQuote } from '@spare/quote';
import { isNumeric } from '@typen/num-strict';
import { cite } from '@spare/cite';
import { bracket, brace } from '@spare/bracket';
import { _decoFunc } from '@spare/deco-func';
import { pairEnt } from '@spare/deco-util';
import { COSP } from '@spare/enum-chars';
import { NUM, BOO, STR, FUN, OBJ } from '@typen/enum-data-types';
import { ARRAY, OBJECT, DATE } from '@typen/enum-object-types';
import { typ } from '@typen/typ';
import { formatDate } from '@valjoux/format-date';
import { formatTime } from '@valjoux/format-time';
import { mutate } from '@vect/entries-mapper';

const decoKey = function (x) {
  return /\W/.test(x) || isNumeric(x) ? tenseQuote(x) : x;
};

const DEFN = {
  pr: false
};

function decoPale$1(node) {
  var _node, _decoFunc$call, _String;

  const {
    loose,
    cite
  } = this;
  if (node === void 0 || node === null) return node;
  const t = typeof node;
  if (t === NUM || t === BOO) return node;
  if (t === STR) return loose && isNumeric(node) ? node : (_node = node, cite(_node));
  if (t === FUN) return _decoFunc$call = _decoFunc.call(DEFN, node), cite(_decoFunc$call);

  if (t === OBJ) {
    var _node$map$join, _mutate$map$join, _ref;

    const pt = typ(node);
    if (pt === ARRAY) return _node$map$join = node.map(decoPale$1.bind(this)).join(COSP), bracket(_node$map$join);
    if (pt === OBJECT) return _mutate$map$join = mutate(Object.entries(node), decoKey, decoPale$1.bind(this)).map(pairEnt).join(COSP), brace(_mutate$map$join);
    if (pt === DATE) return _ref = `${formatDate(node)}'${formatTime(node)}`, cite(_ref);
  }

  return _String = String(node), cite(_String);
}

const presetConfig = p => {
  p.loose = p.loose ?? true;
  p.cite = p.cite ?? p.quote ?? cite;
  return p;
};
/**
 *
 * @param x
 * @param {Object} p
 * @param {boolean} [p.loose] numeral string to be treated as number, so quote is not applicable
 * @param {Function} [p.quote] function to deal with string
 * @return {string|*}
 */


const decoPale = (x, p = {}) => decoPale$1.call(presetConfig(p), x);
/**
 *
 * @param {Object} p
 * @param {boolean} [p.loose]
 * @param {Function|string|number} [p.quote]
 */

const DecoPale = (p = {}) => decoPale$1.bind(presetConfig(p));

export { DecoPale, decoKey, decoPale };
