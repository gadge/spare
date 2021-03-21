import { LF, TB, DA, SP } from '@spare/enum-chars';
import { presetString } from '@spare/preset-deco';
import { splitCamel, splitSnake } from '@spare/splitter';
import { fluoVector } from '@palett/fluo-vector';
import { hasAnsi } from '@spare/charset';
import { fold } from '@spare/fold';

// export const
//   FUNC = '',
//   PIGM = '',
//   HEX = ''
const RENDER = 'render';
const MUTATE_PIGMENT = {
  colorant: RENDER,
  mutate: true
};

/**
 * @prop width - foldToVector
 * @prop firstLineIndent - foldToVector
 * @prop indent - applicable only when valid width
 * @prop vectify - fluoString
 * @prop joiner - fluoString
 * @prop presets - fluoString
 * @prop effects - fluoString
 * @param text
 * @return {string}
 */

const _decoString = function (text) {
  var _text, _config$indent;

  const config = this,
        width = config.width,
        length = (_text = text) === null || _text === void 0 ? void 0 : _text.length;
  if (!length) return '';
  if (hasAnsi(text)) return text;
  if (width && length > width) text = fold.call({
    width: width,
    firstLineIndent: config.firstLineIndent,
    delim: LF + TB.repeat((_config$indent = config.indent) !== null && _config$indent !== void 0 ? _config$indent : 0)
  }, text);
  if (config.fluos) text = stringColour.call(config, text);
  return text;
};
const stringColour = function (text) {
  const config = this;
  const {
    vectify,
    joiner
  } = this;
  const words = vectify(text);
  fluoVector.call(MUTATE_PIGMENT, words, config.fluos); // use: presets, effects

  return joiner ? joiner(words) : words.join('');
};

const Splitter = delim => v => String.prototype.split.call(v, delim);

const decoCamel = (text, {
  delim = '',
  presets,
  effects
} = {}) => {
  return _decoString.call({
    delim,
    presets,
    effects,
    vectify: splitCamel
  }, text);
};
const decoSnake = (text, {
  delim = DA,
  presets,
  effects
} = {}) => {
  return _decoString.call({
    delim,
    presets,
    effects,
    vectify: splitSnake
  }, text);
};
const decoPhrase = (text, {
  delim = SP,
  presets,
  effects
} = {}) => {
  return _decoString.call({
    delim,
    presets,
    effects,
    vectify: Splitter(delim)
  }, text);
};
/**
 * @param {string} text
 * @param {Object} [p]
 * @param {number} [p.width=80]
 * @param {number} [p.indent]
 * @param {number} [p.firstLineIndent]
 * @param {Object[]} [p.presets]
 * @param {string[]} [p.effects]
 * @param {Function} [p.vectify]
 * @param {Function} [p.joiner]
 * @return {string}
 */

const deco = (text, p = {}) => _decoString.call(presetString(p), text);
/**
 *
 * @param {Object} p
 * @param {string} [p.delim]
 * @param {number} [p.width=80]
 * @param {number} [p.indent]
 * @param {number} [p.firstLineIndent]
 * @param {Object[]} [p.presets]
 * @param {string[]} [p.effects]
 * @param {Function} [p.vectify]
 * @param {Function} [p.joiner]
 * @return {Function}
 */

const Deco = (p = {}) => _decoString.bind(presetString(p));

export { Deco, _decoString, deco, decoCamel, decoPhrase, decoSnake };
