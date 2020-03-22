import { ELLIP } from '@spare/enum-chars';
import { vettro } from '@spare/vettro';
import { cosmetics as cosmetics$1 } from '@spare/deco-entries';
import { fluoVector } from '@palett/fluo-vector';
import { pipeQuote, liner } from '@spare/deco-util';
import { presetVector } from '@spare/preset-deco';

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
 * @param {Function} [options.read]
 * @param {Object} [options.preset=FRESH]
 * @param {Object} [options.stringPreset=JUNGLE]
 * @param {number} [options.head]
 * @param {number} [options.tail]
 * @param {boolean} [options.discrete]
 * @param {string} [options.dash=') ']
 * @param {string} [options.delim=',\n']
 * @param {string} [options.quote]
 * @param {number} [options.bracket=BRK] - BRK = 1
 * @param {boolean} [options.ansi]
 * @param {number} [options.level=0]
 * @returns {string}
 */

const Deco = (options = {}) => cosmetics.bind(presetVector(options));
/***
 *
 * @param {*[]} vector
 * @param {Object} options
 * @param {boolean} [options.indexed=true]
 * @param {Function} [options.read]
 * @param {Object} [options.preset=FRESH]
 * @param {Object} [options.stringPreset=JUNGLE]
 * @param {number} [options.head]
 * @param {number} [options.tail]
 * @param {boolean} [options.discrete]
 * @param {string} [options.dash=') ']
 * @param {string} [options.delim=',\n']
 * @param {string} [options.quote]
 * @param {number} [options.bracket=BRK] - BRK = 1
 * @param {boolean} [options.ansi]
 * @param {number} [options.level=0]
 * @returns {string}
 */

const deco = (vector, options = {}) => cosmetics.call(presetVector(options), vector);

export { Deco, cosmetics, deco };
