import { tenseQuote, Qt, quote } from '@spare/quote';
import { isNumeric } from '@typen/num-strict';
import { NUM, BOO, STR, FUN, OBJ } from '@typen/enum-data-types';
import { bracket, brace } from '@spare/bracket';
import { decofun } from '@spare/deco-func';
import { pairEnt } from '@spare/deco-util';
import { COSP } from '@spare/enum-chars';
import { ARRAY, OBJECT, DATE } from '@typen/enum-object-types';
import { isNumeric as isNumeric$1 } from '@typen/num-loose';
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

function deco(node) {
  var _decofun$call, _node$toString;

  const {
    loose,
    quote
  } = this;
  if (node === void 0 || node === null) return node;
  const t = typeof node;
  if (t === NUM || t === BOO) return node;
  if (t === STR) return loose && isNumeric$1(node) ? node : quote(node);
  if (t === FUN) return _decofun$call = decofun.call(DEFN, node), quote(_decofun$call);

  if (t === OBJ) {
    var _node$map$join, _mutate$map$join, _ref;

    const pt = typ(node);
    if (pt === ARRAY) return _node$map$join = node.map(deco.bind(this)).join(COSP), bracket(_node$map$join);
    if (pt === OBJECT) return _mutate$map$join = mutate(Object.entries(node), decoKey, deco.bind(this)).map(pairEnt).join(COSP), brace(_mutate$map$join);
    if (pt === DATE) return _ref = `${formatDate(node)}'${formatTime(node)}`, quote(_ref);
  }

  return _node$toString = node.toString(), quote(_node$toString);
}

const parseQuote = q => {
  var _Qt;

  return typeof q === FUN ? q : (_Qt = Qt(q)) !== null && _Qt !== void 0 ? _Qt : quote;
};

const presetConfig = p => {
  var _p$loose;

  p.loose = (_p$loose = p.loose) !== null && _p$loose !== void 0 ? _p$loose : true;
  p.quote = parseQuote(p.quote);
  return p;
};
/**
 *
 * @param x
 * @param {Object} p
 * @param {boolean} [p.loose]
 * @param {Function|string|number} [p.quote]
 * @return {string|*}
 */


const decoPale = (x, p = {}) => deco.call(presetConfig(p), x);
/**
 *
 * @param {Object} p
 * @param {boolean} [p.loose]
 * @param {Function|string|number} [p.quote]
 */

const DecoPale = (p = {}) => deco.bind(presetConfig(p));

export { DecoPale, decoKey, decoPale, deco as decoval };
