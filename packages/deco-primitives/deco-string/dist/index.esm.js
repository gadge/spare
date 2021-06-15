import { DecoConfig } from '@spare/deco-config';
import { LF, TB, DA, SP } from '@texting/enum-chars';
import { DUAL_PRESET_COLLECTION } from '@spare/preset-deco';
import { splitLiteral, splitCamel, splitSnake } from '@texting/splitter';
import { MUTATE_PIGMENT } from '@palett/enum-colorant-modes';
import { fluoVector } from '@palett/fluo-vector';
import { hasAnsi } from '@texting/charset-ansi';
import { fold } from '@texting/fold';

const CONFIG = {
  vectify: splitLiteral,
  width: 0
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
  var _text;

  const config = this,
        width = config.width,
        length = (_text = text) == null ? void 0 : _text.length;
  if (!length) return '';
  if (hasAnsi(text)) return text;
  if (width && length > width) text = fold.call({
    width: width,
    firstLineIndent: config.firstLineIndent,
    delim: LF + TB.repeat(config.indent ?? 0)
  }, text);
  if (config.presets) text = stringColour.call(config, text);
  return text;
};
const stringColour = function (text) {
  const config = this;
  const {
    vectify,
    joiner
  } = this;
  const words = vectify(text);
  fluoVector.call(MUTATE_PIGMENT, words, config.presets); // use: presets, effects

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

const deco = (text, p = {}) => _decoString.call(DecoConfig.parse(p, CONFIG, DUAL_PRESET_COLLECTION), text);
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

const Deco = (p = {}) => _decoString.bind(DecoConfig.parse(p, CONFIG, DUAL_PRESET_COLLECTION));

export { Deco, _decoString, deco, decoCamel, decoPhrase, decoSnake };
