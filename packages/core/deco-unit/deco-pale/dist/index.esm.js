import { tenseQuote } from '@spare/quote';
import { isNumeric } from '@typen/num-strict';
import { bracket, brace } from '@spare/bracket';
import { RT, COSP } from '@spare/enum-chars';
import { NUM, BOO, STR, FUN, OBJ } from '@typen/enum-data-types';
import { ARRAY, OBJECT, DATE } from '@typen/enum-object-types';
import { isNumeric as isNumeric$1 } from '@typen/num-loose';
import { typ } from '@typen/typ';
import { formatDate } from '@valjoux/format-date';
import { formatTime } from '@valjoux/format-time';
import { mutate } from '@vect/entries-mapper';

const decoKey = x => /\W/.test(x) || isNumeric(x) ? tenseQuote(x) : x;

const pairEnt = ([k, v]) => k + RT + v;

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
  if (t === STR) return loose && isNumeric$1(node) ? node : tenseQuote(node);
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
