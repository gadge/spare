'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fluoVector = require('@palett/fluo-vector');
var presets = require('@palett/presets');
var splitter = require('@spare/splitter');
var enumChars = require('@spare/enum-chars');

/** @type {{mutate: boolean}} */
const MUTABLE = {
  mutate: true
};

const Splitter = delim => x => String.prototype.split.call(x, delim);
const Joiner = delim => v => Array.prototype.join.call(v, delim);
const cosmetics = function (text) {
  const {
    delim,
    vectify,
    joiner,
    presets
  } = this;
  const words = vectify(text);
  fluoVector.fluoVec.call(MUTABLE, words, presets);
  return (joiner !== null && joiner !== void 0 ? joiner : Joiner(delim))(words);
}; // filter: x => typeof x === STR ? x.trim().length > 0 : true

const NUMERIC_PRESET = {
  preset: presets.FRESH
};
const LITERAL_PRESET = {
  preset: presets.SUBTLE
};
const PRESETS = [NUMERIC_PRESET, LITERAL_PRESET];
const presetString = p => {
  var _p$delim, _p$presets, _p$vectify;

  p.delim = (_p$delim = p === null || p === void 0 ? void 0 : p.delim) !== null && _p$delim !== void 0 ? _p$delim : '';
  p.presets = (_p$presets = p === null || p === void 0 ? void 0 : p.presets) !== null && _p$presets !== void 0 ? _p$presets : PRESETS;
  p.vectify = (_p$vectify = p === null || p === void 0 ? void 0 : p.vectify) !== null && _p$vectify !== void 0 ? _p$vectify : splitter.splitLiteral;
  return p;
};

const decoCamel = (text, {
  delim = '',
  presets = PRESETS
} = {}) => {
  return cosmetics.call({
    delim,
    presets,
    vectify: splitter.splitCamel
  }, text);
};
const decoSnake = (text, {
  delim = enumChars.DA,
  presets = PRESETS
} = {}) => {
  return cosmetics.call({
    delim,
    presets,
    vectify: splitter.splitSnake
  }, text);
};
const decoPhrase = (text, {
  delim = enumChars.SP,
  presets = PRESETS
} = {}) => {
  return cosmetics.call({
    delim,
    presets,
    vectify: Splitter(delim)
  }, text);
};

/**
 * @param {string} text
 * @param {Object} [p]
 * @param {string} [p.delim]
 * @param {Object[]} [p.presets]
 * @param {Function} [p.vectify]
 * @param {Function} [p.joiner]
 * @return {string}
 */

const deco = (text, p = {}) => cosmetics.call(presetString(p), text);
/**
 *
 * @param {Object} p
 * @param {string} [p.delim]
 * @param {Object[]} [p.presets]
 * @param {Function} [p.vectify]
 * @param {Function} [p.joiner]
 * @return {string}
 */

const Deco = (p = {}) => cosmetics.bind(presetString(p));

exports.Deco = Deco;
exports.deco = deco;
exports.decoCamel = decoCamel;
exports.decoPhrase = decoPhrase;
exports.decoSnake = decoSnake;
