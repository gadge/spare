'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var quote = require('@spare/quote');
var numStrict = require('@typen/num-strict');
var enumDataTypes = require('@typen/enum-data-types');
var bracket = require('@spare/bracket');
var decoFunc = require('@spare/deco-func');
var decoUtil = require('@spare/deco-util');
var enumChars = require('@spare/enum-chars');
var enumObjectTypes = require('@typen/enum-object-types');
var numLoose = require('@typen/num-loose');
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

function deco(node) {
  var _decofun$call, _node$toString;

  const {
    loose,
    quote
  } = this;
  if (node === void 0 || node === null) return node;
  const t = typeof node;
  if (t === enumDataTypes.NUM || t === enumDataTypes.BOO) return node;
  if (t === enumDataTypes.STR) return loose && numLoose.isNumeric(node) ? node : quote(node);
  if (t === enumDataTypes.FUN) return _decofun$call = decoFunc.decofun.call(DEFN, node), quote(_decofun$call);

  if (t === enumDataTypes.OBJ) {
    var _node$map$join, _mutate$map$join, _ref;

    const pt = typ.typ(node);
    if (pt === enumObjectTypes.ARRAY) return _node$map$join = node.map(deco.bind(this)).join(enumChars.COSP), bracket.bracket(_node$map$join);
    if (pt === enumObjectTypes.OBJECT) return _mutate$map$join = entriesMapper.mutate(Object.entries(node), decoKey, deco.bind(this)).map(decoUtil.pairEnt).join(enumChars.COSP), bracket.brace(_mutate$map$join);
    if (pt === enumObjectTypes.DATE) return _ref = `${formatDate.formatDate(node)}'${formatTime.formatTime(node)}`, quote(_ref);
  }

  return _node$toString = node.toString(), quote(_node$toString);
}

const parseQuote = q => {
  var _Qt;

  return typeof q === enumDataTypes.FUN ? q : (_Qt = quote.Qt(q)) !== null && _Qt !== void 0 ? _Qt : quote.quote;
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

exports.DecoPale = DecoPale;
exports.decoKey = decoKey;
exports.decoPale = decoPale;
exports.decoval = deco;
