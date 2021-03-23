import { DecoConfig, NUMERIC_PRESET, LITERAL_PRESET } from '@spare/preset-deco';
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

// export const
//   FUNC = '',
//   PIGM = '',
//   HEX = ''
const RENDER = 'render';
const MUTATE_PIGMENT = {
  colorant: RENDER,
  mutate: true
};

function _decoFlat(lv, node) {
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
  const config = this; // const presets = this?.presets

  const list = ve.map(_decoFlat.bind(config, lv + 1));
  fluoVector.call(MUTATE_PIGMENT, list, config.presets);
  return list.join(COSP);
}

function deOb(lv, ob) {
  const config = this; // const presets = this?.presets

  const ents = mutate(Object.entries(ob), 1, _decoFlat.bind(this, lv + 1));
  fluoEntries.call(MUTATE_PIGMENT, ents, config.presets);
  return ents.map(([k, v]) => k + RT + v).join(COSP);
}

const CONF_DECO_FLAT = {
  mutate: true
};
const presetDecoFlat = p => DecoConfig.build(p).replenishConfigs(CONF_DECO_FLAT).defaultPresets(NUMERIC_PRESET, LITERAL_PRESET); // const CONF_DECO_FLAT = { mutate: true }
// const parseConfig = conf => DecoConfig
//   .build(conf)
//   .assignConfigs(CONF_DECO_FLAT)
//   .assignPresets(...conf.presets)

/**
 * @Function
 * @type {Function|function(*):string}
 *  */

const decoFlat = (o, config = {}) => _decoFlat.call(presetDecoFlat(config), 0, o);
/**
 *
 * @param {Object} config
 * @return {Function|function(*):string}
 * @constructor
 */

const DecoFlat = (config = {}) => _decoFlat.bind(presetDecoFlat(config), 0);

export { CONF_DECO_FLAT, DecoFlat, decoFlat, presetDecoFlat };
