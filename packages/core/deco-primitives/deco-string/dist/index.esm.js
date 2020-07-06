import { fluoVector } from '@palett/fluo-vector';
import { hasAnsi } from '@spare/lange';
import { ATLAS, SUBTLE } from '@palett/presets';
import { splitLiteral, splitCamel, splitSnake } from '@spare/splitter';
import { DA, SP } from '@spare/enum-chars';

/** @type {{mutate: boolean}} */
const MUTABLE = {
  mutate: true
};

const Splitter = delim => x => String.prototype.split.call(x, delim);
const Joiner = delim => v => Array.prototype.join.call(v, delim);
const cosmetics = function (text) {
  if (!(text === null || text === void 0 ? void 0 : text.length)) return '';
  if (hasAnsi(text)) return text;
  const {
    delim,
    vectify,
    joiner,
    presets,
    effects
  } = this;
  const words = vectify(text);
  fluoVector.call(MUTABLE, words, presets, effects);
  return (joiner !== null && joiner !== void 0 ? joiner : Joiner(delim))(words);
};

const NUMERIC_PRESET = ATLAS;
const LITERAL_PRESET = SUBTLE;
const PRESETS = [NUMERIC_PRESET, LITERAL_PRESET];
const presetString = p => {
  var _p$delim, _p$presets, _p$vectify;

  p.delim = (_p$delim = p === null || p === void 0 ? void 0 : p.delim) !== null && _p$delim !== void 0 ? _p$delim : '';
  p.presets = (_p$presets = p === null || p === void 0 ? void 0 : p.presets) !== null && _p$presets !== void 0 ? _p$presets : PRESETS;
  p.vectify = (_p$vectify = p === null || p === void 0 ? void 0 : p.vectify) !== null && _p$vectify !== void 0 ? _p$vectify : splitLiteral;
  return p;
};

const decoCamel = (text, {
  delim = '',
  presets = PRESETS,
  effects
} = {}) => {
  return cosmetics.call({
    delim,
    presets,
    effects,
    vectify: splitCamel
  }, text);
};
const decoSnake = (text, {
  delim = DA,
  presets = PRESETS,
  effects
} = {}) => {
  return cosmetics.call({
    delim,
    presets,
    effects,
    vectify: splitSnake
  }, text);
};
const decoPhrase = (text, {
  delim = SP,
  presets = PRESETS,
  effects
} = {}) => {
  return cosmetics.call({
    delim,
    presets,
    effects,
    vectify: Splitter(delim)
  }, text);
};

/**
 * @param {string} text
 * @param {Object} [p]
 * @param {string} [p.delim]
 * @param {Object[]} [p.presets]
 * @param {string[]} [p.effects]
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
 * @param {string[]} [p.effects]
 * @param {Function} [p.vectify]
 * @param {Function} [p.joiner]
 * @return {Function}
 */

const Deco = (p = {}) => cosmetics.bind(presetString(p));

export { Deco, deco, decoCamel, decoPhrase, decoSnake };
