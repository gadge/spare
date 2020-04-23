import { JUNGLE, SUBTLE, INSTA, METRO } from '@palett/presets';
import { DA, SP } from '@spare/enum-chars';
import { camelToVector, snakeToVector } from '@spare/phrasing';
import { fluoVector } from '@palett/fluo-vector';
import { zipper } from '@vect/vector-zipper';

const Splitter = delim => x => String.prototype.split.call(x, delim);

const Joiner = delim => v => Array.prototype.join.call(v, delim);

const cosmetics = function (text) {
  const {
    delim
  } = this;
  const {
    vectify,
    joiner
  } = this;
  const {
    preset,
    stringPreset,
    filter
  } = this;
  const words = (vectify || Splitter(delim))(text);
  const dyes = fluoVector(words, {
    preset,
    stringPreset,
    colorant: true,
    filter
  });
  const dyed = zipper(words, dyes, (word, dye) => {
    var _word;

    return _word = word, dye(_word);
  });
  return (joiner || Joiner(delim))(dyed);
}; // filter: x => typeof x === STR ? x.trim().length > 0 : true

const presetString = p => {
  var _p$delim, _p$preset, _p$stringPreset;

  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : SP;
  p.preset = (_p$preset = p.preset) !== null && _p$preset !== void 0 ? _p$preset : INSTA;
  p.stringPreset = (_p$stringPreset = p.stringPreset) !== null && _p$stringPreset !== void 0 ? _p$stringPreset : METRO;
  return p;
};

const WORDS = 'words',
      CAMEL = 'camel',
      SNAKE = 'snake';
/**
 * @param {string} text
 * @param {Object} p
 * @param {string} [p.delim]
 * @param {Object} [p.preset]
 * @param {Object} [p.stringPreset]
 * @param {Function} [p.filter]
 * @param {Function} [p.vectify]
 * @param {Function} [p.joiner]
 * @return {string}
 */

const deco = (text, p = {}) => cosmetics.call(presetString(p), text);
/**
 *
 * @param {Object} p
 * @param {string} [p.delim]
 * @param {Object} [p.preset]
 * @param {Object} [p.stringPreset]
 * @param {Function} [p.filter]
 * @param {Function} [p.vectify]
 * @param {Function} [p.joiner]
 * @return {string}
 */

const Deco = (p = {}) => cosmetics.bind(presetString(p));
const decoCamel = (text, {
  delim = '',
  preset = JUNGLE,
  stringPreset = SUBTLE
} = {}) => {
  return cosmetics.call({
    delim,
    preset,
    stringPreset,
    vectify: camelToVector
  }, text);
};
const decoSnake = (text, {
  delim = DA,
  preset = JUNGLE,
  stringPreset = SUBTLE
} = {}) => {
  return cosmetics.call({
    delim,
    preset,
    stringPreset,
    vectify: snakeToVector
  }, text);
};
const decoPhrase = (text, {
  delim = SP,
  preset = JUNGLE,
  stringPreset = SUBTLE
} = {}) => {
  return cosmetics.call({
    delim,
    preset,
    stringPreset
  }, text);
};

export { CAMEL, Deco, SNAKE, WORDS, deco, decoCamel, decoPhrase, decoSnake };
