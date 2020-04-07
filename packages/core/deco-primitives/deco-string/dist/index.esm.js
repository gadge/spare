import { ELLIP } from '@spare/enum-chars';
import { vettro } from '@spare/vettro';
import { cosmetics as cosmetics$1 } from '@spare/deco-entries';
import { fluoVector } from '@palett/fluo-vector';
import { liner } from '@spare/liner';
import { Qt } from '@spare/quote';
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
    read: Qt(read, quote),
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
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=') ']
 * @param {string} [p.delim=',\n']
 * @param {number} [p.quote=NONE]
 * @param {number} [p.bracket=BRK] - BRK = 1
 *
 * @param {boolean} [p.indexed=true]
 * @param {Function} [p.read]
 *
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=JUNGLE]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi]
 * @param {number} [p.level=0]
 *
 * @returns {Function}
 */

const Deco = (p = {}) => cosmetics.bind(presetVector(p));
/***
 *
 * @param {*[]} vector
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=') ']
 * @param {string} [p.delim=',\n']
 * @param {number} [p.quote=NONE]
 * @param {number} [p.bracket=BRK] - BRK = 1
 *
 * @param {boolean} [p.indexed=true]
 * @param {Function} [p.read]
 *
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=JUNGLE]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi]
 * @param {number} [p.level=0]
 *
 * @returns {string}
 */

const deco = (vector, p = {}) => cosmetics.call(presetVector(p), vector);

export { Deco, cosmetics, deco };
