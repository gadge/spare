'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var presets = require('@palett/presets');
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

const NUMERIC_PRESET = presets.FRESH;
const LITERAL_PRESET = presets.PLANET;

const MUTABLE = {
  mutate: true
};
function decoflat(lv, node) {
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
  const presets = this === null || this === void 0 ? void 0 : this.presets;
  const list = ve.map(decoflat.bind(this, lv + 1));
  fluoVector.fluoVec.call(MUTABLE, list, presets);
  return list.join(enumChars.COSP);
}

function deOb(lv, ob) {
  const presets = this === null || this === void 0 ? void 0 : this.presets;
  const ents = columnMapper.mutate(Object.entries(ob), 1, decoflat.bind(this, lv + 1));
  fluoEntries.fluoEnt.call(MUTABLE, ents, presets);
  return ents.map(([k, v]) => k + enumChars.RT + v).join(enumChars.COSP);
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

exports.DecoFlat = DecoFlat;
exports.decoFlat = decoFlat;
