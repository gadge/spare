'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var quote = require('@spare/quote');
var numStrict = require('@typen/num-strict');
var cite = require('@spare/cite');
var bracket = require('@spare/bracket');
var decoFunc = require('@spare/deco-func');
var decoUtil = require('@spare/deco-util');
var enumChars = require('@spare/enum-chars');
var enumDataTypes = require('@typen/enum-data-types');
var enumObjectTypes = require('@typen/enum-object-types');
var typ = require('@typen/typ');
var formatDate = require('@valjoux/format-date');
var formatTime = require('@valjoux/format-time');
var entriesMapper = require('@vect/entries-mapper');

const decoKey = function (x) {
  return /\W/.test(x) || numStrict.isNumeric(x) ? quote.tenseQuote(x) : x;
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
  if (t === enumDataTypes.NUM || t === enumDataTypes.BOO) return node;
  if (t === enumDataTypes.STR) return loose && numStrict.isNumeric(node) ? node : (_node = node, cite(_node));
  if (t === enumDataTypes.FUN) return _decoFunc$call = decoFunc._decoFunc.call(DEFN, node), cite(_decoFunc$call);

  if (t === enumDataTypes.OBJ) {
    var _node$map$join, _mutate$map$join, _ref;

    const pt = typ.typ(node);
    if (pt === enumObjectTypes.ARRAY) return _node$map$join = node.map(decoPale$1.bind(this)).join(enumChars.COSP), bracket.bracket(_node$map$join);
    if (pt === enumObjectTypes.OBJECT) return _mutate$map$join = entriesMapper.mutate(Object.entries(node), decoKey, decoPale$1.bind(this)).map(decoUtil.pairEnt).join(enumChars.COSP), bracket.brace(_mutate$map$join);
    if (pt === enumObjectTypes.DATE) return _ref = `${formatDate.formatDate(node)}'${formatTime.formatTime(node)}`, cite(_ref);
  }

  return _String = String(node), cite(_String);
}

const presetConfig = p => {
  var _p$loose, _ref, _p$cite;

  p.loose = (_p$loose = p.loose) !== null && _p$loose !== void 0 ? _p$loose : true;
  p.cite = (_ref = (_p$cite = p.cite) !== null && _p$cite !== void 0 ? _p$cite : p.quote) !== null && _ref !== void 0 ? _ref : cite.cite;
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

exports.DecoPale = DecoPale;
exports.decoKey = decoKey;
exports.decoPale = decoPale;
