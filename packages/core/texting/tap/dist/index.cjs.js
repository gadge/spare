'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var decoVector = require('@spare/deco-vector');
var enumChars = require('@spare/enum-chars');

const tap = (...words) => {
  const ve = [];

  for (let word of words) if (word === null || word === void 0 ? void 0 : word.length) ve.push(word);

  return ve;
};

const presetAdjoin = p => {
  var _p, _p$delim;

  p = (_p = p) !== null && _p !== void 0 ? _p : {};
  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : enumChars.SP;
  return p;
};

const adjoin = function (...words) {
  const ve = tap.apply(null, words),
        config = presetAdjoin(this);
  return decoVector.cosmetics.call(config, ve);
};
/**
 *
 * @param {Object} p
 *
 * @param {string} [p.delim=',\n']
 * @param {boolean} [p.bracket=true] - BRK = 1
 * @param {Function} [p.read]
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=JUNGLE]
 *
 * @returns {Function}
 */

const Adjoin = (p = {}) => adjoin.bind(p);

exports.Adjoin = Adjoin;
exports.adjoin = adjoin;
exports.tap = tap;
