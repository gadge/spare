import { decoFunc } from '@spare/deco-func';
import { bracket, brace } from '@texting/bracket';
import { cite } from '@texting/cite';
import { RT, COSP } from '@texting/enum-chars';
import { NUM, BOO, STR, FUN, OBJ } from '@typen/enum-data-types';
import { ARRAY, OBJECT, DATE } from '@typen/enum-object-types';
import { isNumeric } from '@typen/num-strict';
import { typ } from '@typen/typ';
import { formatDate } from '@valjoux/format-date';
import { formatTime } from '@valjoux/format-time';
import { mutate } from '@vect/entries-mapper';
import { tenseQuote } from '@texting/quote';

const DEFN = { pretty: false };

const decoKey = function (x) {
  return (/\W/.test(x) || isNumeric(x)) ? tenseQuote(x) : x
};

// const presetConfig = p => {
//   p.loose = p.loose ?? true
//   p.cite = p.cite ?? p.quote ?? cite
//   return p
// }
// export const decoPale = (x, conf = {}) => deco.call(presetConfig(conf), x)

const pairEnt = ([ k, v ]) => k + RT + v;

/**
 *
 * @param {*} node
 * @param {Object} conf
 * @param {boolean} [conf.loose] numeral string to be treated as number, so quote is not applicable
 * @param {Function} [conf.cite] function to deal with string
 * @return {string|*}
 */
function decoPale(node, conf) {
  conf = conf ?? this ?? {};
  // const { loose = true, cite = citeFn } = conf ?? this ?? {}
  const loose = conf?.loose ?? this?.loose ?? true;
  const cite$1 = conf?.cite ?? this?.cite ?? cite;
  if (node === void 0 || node === null) return node
  const t = typeof node;
  if (t === NUM || t === BOO) return node
  if (t === STR) return loose && isNumeric(node) ? node : cite$1(node)
  if (t === FUN) return cite$1(decoFunc.call(DEFN, node))
  if (t === OBJ) {
    const pt = typ(node);
    if (pt === ARRAY) return bracket(node.map(decoPale.bind(this)).join(COSP))
    if (pt === OBJECT) return brace(mutate(Object.entries(node), decoKey, decoPale.bind(this)).map(pairEnt).join(COSP))
    if (pt === DATE) return cite$1(`${formatDate(node)}'${formatTime(node)}`)
  }
  return cite$1(String(node))
}


/**
 *
 * @param {Object} conf
 * @param {boolean} [conf.loose]
 * @param {Function|string|number} [conf.quote]
 */
function DecoPale(conf = {}) { return decoPale.bind(conf) }

export { DecoPale, decoKey, decoPale, pairEnt };
