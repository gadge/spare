'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var presetDeco = require('@spare/preset-deco');
var fluoEntries = require('@palett/fluo-entries');
var fluoVector = require('@palett/fluo-vector');
var decoColors = require('@spare/deco-colors');
var decoDate = require('@spare/deco-date');
var decoFunc = require('@spare/deco-func');
var enumChars = require('@spare/enum-chars');
var enumDataTypes = require('@typen/enum-data-types');
var enumObjectTypes = require('@typen/enum-object-types');
var typ = require('@typen/typ');
var columnMapper = require('@vect/column-mapper');

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
  if (t === enumDataTypes.STR) return node; // isNumeric(node) ? node : PAL.STR(node)

  if (t === enumDataTypes.NUM) return node;
  if (t === enumDataTypes.FUN) return decoFunc.decofun.call(decoFunc.DECOFUN_CONFIG, node);

  if (t === enumDataTypes.OBJ) {
    var _deVec$call, _deOb$call;

    const pt = typ.typ(node);
    if (pt === enumObjectTypes.ARRAY) return _deVec$call = deVec.call(this, lv, node), decoColors.BRK[lv & 7](_deVec$call);
    if (pt === enumObjectTypes.OBJECT) return _deOb$call = deOb.call(this, lv, node), decoColors.BRC[lv & 7](_deOb$call);
    if (pt === enumObjectTypes.DATE) return decoDate.decoDateTime(node);
    return `${node}`;
  }

  if (t === enumDataTypes.BOO) return decoColors.PAL.BOO(node);
  if (t === enumDataTypes.UND) return decoColors.PAL.UDF(node);
  if (t === enumDataTypes.SYM) return decoColors.PAL.SYM(node.toString());
  return node;
}

function deVec(lv, ve) {
  const config = this; // const presets = this?.presets

  const list = ve.map(_decoFlat.bind(config, lv + 1));
  fluoVector.fluoVector.call(MUTATE_PIGMENT, list, config.presets);
  return list.join(enumChars.COSP);
}

function deOb(lv, ob) {
  const config = this; // const presets = this?.presets

  const ents = columnMapper.mutate(Object.entries(ob), 1, _decoFlat.bind(this, lv + 1));
  fluoEntries.fluoEntries.call(MUTATE_PIGMENT, ents, config.presets);
  return ents.map(([k, v]) => k + enumChars.RT + v).join(enumChars.COSP);
}

// const parseConfig = conf => DecoConfig
//   .build(conf)
//   .assignConfigs(CONF_DECO_FLAT)
//   .assignPresets(...conf.presets)

/**
 * @Function
 * @type {Function|function(*):string}
 *  */

const decoFlat = (o, config = {}) => _decoFlat.call(presetDeco.presetDecoFlat(config), 0, o);
/**
 *
 * @param {Object} config
 * @return {Function|function(*):string}
 * @constructor
 */

const DecoFlat = (config = {}) => _decoFlat.bind(presetDeco.presetDecoFlat(config), 0);

exports.DecoFlat = DecoFlat;
exports.decoFlat = decoFlat;
