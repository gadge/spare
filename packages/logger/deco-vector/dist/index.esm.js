import { ELLIP } from '@spare/enum-chars';
import { vettro } from '@spare/vettro';
import { cosmetics as cosmetics$1 } from '@spare/deco-entries';
import { fluoVector } from '@palett/fluo-vector';
import { pipeQuote, liner, presetVectorOptions } from '@spare/deco-util';

function cosmetics(vec) {
  if (this === null || this === void 0 ? void 0 : this.indexed) return cosmetics$1.call(this, Object.entries(vec));
  if (!vec) return String(vec);
  const {
    head,
    tail,
    preset,
    stringPreset,
    read,
    quote
  } = this;
  let {
    raw,
    text
  } = vettro(vec, {
    head,
    tail,
    read: pipeQuote(read, quote),
    hr: ELLIP
  });
  if (preset) fluoVector(text, {
    values: raw,
    preset,
    stringPreset,
    mutate: true
  });
  return liner(text, this);
}

/**
 * @typedef {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} Preset
 */

/***
 *
 * @param {Object} options
 * @param {boolean} [options.indexed=true]
 * @param {function(*):string} [options.read]
 * @param {Preset} [options.preset]
 * @param {Preset} [options.stringPreset]
 * @param {number} [options.head]
 * @param {number} [options.tail]
 * @param {string} [options.dash=') ']
 * @param {string} [options.delim=',\n']
 * @param {string} [options.quote]
 * @param {number} [options.bracket=BRK] - BRK = 1
 * @param {boolean} [options.ansi]
 * @param {boolean} [options.discrete]
 * @param {number} [options.level=0]
 * @returns {string}
 */

const Deco = (options = {}) => cosmetics.bind(presetVectorOptions(options));
/***
 *
 * @param {*[]} vector
 * @param {Object} options
 * @param {boolean} [options.indexed=true]
 * @param {function(*):string} [options.read]
 * @param {Preset} [options.preset]
 * @param {Preset} [options.stringPreset]
 * @param {number} [options.head]
 * @param {number} [options.tail]
 * @param {string} [options.dash=') ']
 * @param {string} [options.delim=',\n']
 * @param {string} [options.quote]
 * @param {number} [options.bracket=BRK] - BRK = 1
 * @param {boolean} [options.ansi]
 * @param {boolean} [options.discrete]
 * @param {number} [options.level=0]
 * @returns {string}
 */

const deco = (vector, options = {}) => cosmetics.call(presetVectorOptions(options), vector);

export { Deco, cosmetics, deco };
