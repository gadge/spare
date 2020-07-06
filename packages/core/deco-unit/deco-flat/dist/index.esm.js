import { FRESH, PLANET } from '@palett/presets';
import { fluoEntries } from '@palett/fluo-entries';
import { fluoVector } from '@palett/fluo-vector';
import { BRK, BRC, PAL } from '@spare/deco-colors';
import { decoDateTime } from '@spare/deco-date';
import { decofun, DECOFUN_CONFIG } from '@spare/deco-func';
import { COSP, RT } from '@spare/enum-chars';
import { STR, NUM, FUN, OBJ, BOO, UND, SYM } from '@typen/enum-data-types';
import { ARRAY, OBJECT, DATE } from '@typen/enum-object-types';
import { typ } from '@typen/typ';
import { mutate } from '@vect/column-mapper';

const NUMERIC_PRESET = FRESH;
const LITERAL_PRESET = PLANET;

const MUTABLE = {
  mutate: true
};
function decoflat(lv, node) {
  const t = typeof node;
  if (t === STR) return node; // isNumeric(node) ? node : PAL.STR(node)

  if (t === NUM) return node;
  if (t === FUN) return decofun.call(DECOFUN_CONFIG, node);

  if (t === OBJ) {
    var _deVec$call, _deOb$call;

    const pt = typ(node);
    if (pt === ARRAY) return _deVec$call = deVec.call(this, lv, node), BRK[lv & 7](_deVec$call);
    if (pt === OBJECT) return _deOb$call = deOb.call(this, lv, node), BRC[lv & 7](_deOb$call);
    if (pt === DATE) return decoDateTime(node);
    return `${node}`;
  }

  if (t === BOO) return PAL.BOO(node);
  if (t === UND) return PAL.UDF(node);
  if (t === SYM) return PAL.SYM(node.toString());
  return node;
}

function deVec(lv, ve) {
  const presets = this === null || this === void 0 ? void 0 : this.presets;
  const list = ve.map(decoflat.bind(this, lv + 1));
  fluoVector.call(MUTABLE, list, presets);
  return list.join(COSP);
}

function deOb(lv, ob) {
  const presets = this === null || this === void 0 ? void 0 : this.presets;
  const ents = mutate(Object.entries(ob), 1, decoflat.bind(this, lv + 1));
  fluoEntries.call(MUTABLE, ents, presets);
  return ents.map(([k, v]) => k + RT + v).join(COSP);
}

/**
 * @Function
 * @type {Function|function(*):string}
 *  */

const decoFlat = (o, {
  presets = [NUMERIC_PRESET, LITERAL_PRESET]
} = {}) => decoflat.call({
  presets,
  mutate: true
}, 0, o);
/**
 *
 * @param {Object[]} presets
 * @return {Function|function(*):string}
 * @constructor
 */

const DecoFlat = ({
  presets = [NUMERIC_PRESET, LITERAL_PRESET]
} = {}) => decoflat.bind({
  presets,
  mutate: true
}, 0);

export { DecoFlat, decoFlat };
