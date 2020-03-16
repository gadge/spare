import { Deco as Deco$1, deco as deco$1 } from '@spare/deco-entries';
import { AEU, LF, TB, ELLIP } from '@spare/enum-chars';
import { vettro } from '@spare/vettro';
import { fluoVector } from '@palett/fluo-vector';
import { makeQuoteAbstract, presetVectorOptions } from '@spare/deco-util';

function cosmetics(vec) {
  if (!vec || !vec.length) return AEU;
  const {
    head,
    tail,
    preset,
    stringPreset
  } = this;
  let {
    abstract,
    delimiter,
    quote,
    bracket,
    discrete
  } = this;
  if (bracket && delimiter.includes(LF)) delimiter += TB;
  let {
    raw,
    text
  } = vettro(vec, {
    head,
    tail,
    abstract: makeQuoteAbstract(abstract, quote),
    hr: ELLIP
  });
  if (preset) fluoVector(text, {
    values: raw,
    preset,
    stringPreset,
    mutate: true
  });
  return discrete ? text : bracket ? '[ ' + text.join(delimiter) + ' ]' : text.join(delimiter);
}

/**
 * @typedef {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} Preset
 */

/***
 *
 * @param {Object} options
 * @param {boolean} [options.indexed=true]
 * @param {function(*):string} [options.abstract]
 * @param {Preset} [options.preset]
 * @param {Preset} [options.stringPreset]
 * @param {number} [options.head]
 * @param {number} [options.tail]
 * @param {string} [options.dash=') ']
 * @param {string} [options.delimiter=',\n']
 * @param {string} [options.quote]
 * @param {boolean} [options.bracket]
 * @param {boolean} [options.ansi]
 * @param {boolean} [options.discrete]
 * @returns {string}
 */

const Deco = (options = {}) => options.indexed ? vec => {
  var _Object$entries;

  return _Object$entries = Object.entries(vec), Deco$1(presetVectorOptions(options))(_Object$entries);
} : cosmetics.bind(presetVectorOptions(options));
/***
 *
 * @param {*[]} vector
 * @param {Object} options
 * @param {boolean} [options.indexed=true]
 * @param {function(*):string} [options.abstract]
 * @param {Preset} [options.preset]
 * @param {Preset} [options.stringPreset]
 * @param {number} [options.head]
 * @param {number} [options.tail]
 * @param {string} [options.dash=') ']
 * @param {string} [options.delimiter=',\n']
 * @param {string} [options.quote]
 * @param {boolean} [options.bracket]
 * @param {boolean} [options.discrete]
 * @returns {string}
 */

const deco = (vector, options = {}) => options.indexed ? deco$1(Object.entries(vector), presetVectorOptions(options)) : cosmetics.call(presetVectorOptions(options), vector);

export { Deco, cosmetics, deco };
