import { typ } from '@typen/typ';
import { COSP, RT } from '@spare/enum-chars';
import { BRK, BRC, PAL } from '@spare/deco-colors';
import { decoDateTime } from '@spare/deco-date';
import { decofun, DECOFUN_CONFIG } from '@spare/deco-func';
import { STR, NUM, FUN, OBJ, BOO, UND, SYM } from '@typen/enum-data-types';
import { ARRAY, OBJECT, DATE } from '@typen/enum-object-types';
import { fluoEntries } from '@palett/fluo-entries';
import { fluoVector } from '@palett/fluo-vector';
import { mutate } from '@vect/column-mapper';
import { FRESH, JUNGLE } from '@palett/presets';

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
  const list = ve.map(decoflat.bind(this, lv + 1));
  fluoVector(list, this);
  return list.join(COSP);
}

function deOb(lv, ob) {
  const ents = mutate(Object.entries(ob), 1, decoflat.bind(this, lv + 1));
  fluoEntries(ents, this);
  return ents.map(([k, v]) => k + RT + v).join(COSP);
}

/**
 * @Function
 * @type {Function|function(*):string}
 *  */

const decoFlat = (o, {
  preset = FRESH,
  stringPreset = JUNGLE
} = {}) => decoflat.call({
  preset,
  stringPreset,
  mutate: true
}, 0, o);
/**
 *
 * @param preset
 * @param stringPreset
 * @return {Function|function(*):string}
 * @constructor
 */

const DecoFlat = ({
  preset = FRESH,
  stringPreset = JUNGLE
} = {}) => decoflat.bind({
  preset,
  stringPreset,
  mutate: true
}, 0);

export { DecoFlat, decoFlat };
