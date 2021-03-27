import { DecoConfig } from '@spare/deco-config';
import { LF, TB, DA, SP } from '@spare/enum-chars';
import { DUAL_PRESET_COLLECTION } from '@spare/preset-deco';
import { splitLiteral } from '@texting/splitter';
import { fluoVector } from '@palett/fluo-vector';
import { hasAnsi } from '@spare/charset';
import { fold } from '@spare/fold';

const INILOW = /^[a-z]+/;
const LITERAL = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const CAPWORD = /[A-Z][a-z]+|[A-Z]+(?=[A-Z][a-z]|\d|\W|_|$)|[\d]+[a-z]*/g;

const ripper = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};

/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper.bind(LITERAL);
/**
 * Camel/pascal case phrase -> split vector
 * Snake: fox_jumps_over_dog
 * Kebab: fox-jumps-over-dog
 * @param {string} phrase camel/pascal-case phrase
 * @returns {string[]}
 */

function splitCamel(phrase) {
  let ms,
      wd,
      ve = [];
  if ((ms = INILOW.exec(phrase)) && ([wd] = ms)) ve.push(wd);

  while ((ms = CAPWORD.exec(phrase)) && ([wd] = ms)) ve.push(wd);

  return ve;
}
/**
 * snake or kebab phrase -> split vector
 * @param {string} phrase - dashed phrase
 * @returns {string[]}
 */


const splitSnake = phrase => phrase.split(/\W/g);

const CONFIG = {
  vectify: splitLiteral,
  width: 0
};

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
