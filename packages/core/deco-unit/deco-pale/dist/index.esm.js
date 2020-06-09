import { tenseQuote } from '@spare/quote';
import { isNumeric } from '@typen/num-strict';
import { bracket, brace } from '@spare/bracket';
import { decofun } from '@spare/deco-func';
import { pairEnt } from '@spare/deco-util';
import { COSP } from '@spare/enum-chars';
import { NUM, BOO, STR, FUN, OBJ } from '@typen/enum-data-types';
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

/**
 *
 * @param x
 * @param {boolean} loose
 * @param {Function} quote
 * @return {string|*}
 */

const decoPale = (x, {
  loose = true,
  quote = quote
} = {}) => deco.call({
  loose,
  quote
}, x);
/**
 *
 * @param {boolean} loose
 * @param {Function} quote
 */

const DecoPale = ({
  loose = true,
  quote = quote
} = {}) => deco.bind({
  loose,
  quote
});

export { DecoPale, decoKey, decoPale, deco as decoval };
