'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var numStrict = require('@typen/num-strict');
var quote = require('@spare/quote');
var enumDataTypes = require('@typen/enum-data-types');
var enumObjectTypes = require('@typen/enum-object-types');
var typ = require('@typen/typ');
var enumChars = require('@spare/enum-chars');
var numLoose = require('@typen/num-loose');
var entriesMapper = require('@vect/entries-mapper');
var bracket = require('@spare/bracket');
var formatDate = require('@valjoux/format-date');
var formatTime = require('@valjoux/format-time');

const decoKey = x => /\W/.test(x) || numStrict.isNumeric(x) ? quote.tenseQuote(x) : x;

const pairEnt = ([k, v]) => k + enumChars.RT + v;

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
  if (t === enumDataTypes.NUM || t === enumDataTypes.BOO) return node;
  if (t === enumDataTypes.STR) return loose && numLoose.isNumeric(node) ? node : quote.tenseQuote(node);
  if (t === enumDataTypes.FUN) return _decofun$call = decofun.call(DEFN, node), quote.tenseQuote(_decofun$call);

  if (t === enumDataTypes.OBJ) {
    var _node$map$join, _mutate$map$join, _ref;

    const pt = typ.typ(node);
    if (pt === enumObjectTypes.ARRAY) return _node$map$join = node.map(decoval.bind(this)).join(enumChars.COSP), bracket.bracket(_node$map$join);
    if (pt === enumObjectTypes.OBJECT) return _mutate$map$join = entriesMapper.mutate(Object.entries(node), decoKey, decoval.bind(this)).map(pairEnt).join(enumChars.COSP), bracket.brace(_mutate$map$join);
    if (pt === enumObjectTypes.DATE) return _ref = `${formatDate.formatDate(node)}'${formatTime.formatTime(node)}`, quote.tenseQuote(_ref);
  }

  return _node$toString = node.toString(), quote.tenseQuote(_node$toString);
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

exports.DecoPale = DecoPale;
exports.decoKey = decoKey;
exports.decoPale = decoPale;
exports.decoval = decoval;
