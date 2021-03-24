import { DecoConfig } from '@spare/deco-config';
import { DUAL_PRESET_COLLECTION } from '@spare/preset-deco';
import { decoFlat } from '@spare/deco-flat';
import { BRK } from '@spare/enum-brackets';
import { COLF } from '@spare/enum-chars';
import { MUTATE_PIGMENT } from '@palett/enum-colorant-modes';
import { fluoVector } from '@palett/fluo-vector';
import { _decoEntries } from '@spare/deco-entries';
import { liner } from '@spare/liner';
import { vectorMargin } from '@spare/vector-margin';

const CONFIG = {
  dash: ') ',
  delim: COLF,
  bracket: BRK,
  indexed: false,
  read: decoFlat,
  ansi: true
};

const fluo = fluoVector.bind(MUTATE_PIGMENT);
function _decoVector(vec = []) {
  const config = this;
  if (config !== null && config !== void 0 && config.indexed) return _decoEntries.call(config, Object.entries(vec));
  vec = vectorMargin(vec, config); // use: head, tail, read, rule

  if (config.presets) vec = fluo(vec, config.presets); // use:  presets, effects

  return liner(vec, config);
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
 *
 * @param {boolean|number} [p.bracket=true] - BRK = 1
 *
 * @param {boolean} [p.indexed=true]
 * @param {Function} [p.read]
 *
 * @param {Object|Object[]} [p.presets=[FRESH,JUNGLE]]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi]
 * @param {number} [p.level=0]
 *
 * @returns {Function}
 */

const Deco = (p = {}) => _decoVector.bind(DecoConfig.parse(p, CONFIG, DUAL_PRESET_COLLECTION));
/***
 *
 * @param {*[]} vector
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=') ']
 * @param {string} [p.delim=',\n']
 *
 * @param {boolean|number} [p.bracket=true] - BRK = 1
 *
 * @param {boolean} [p.indexed=true]
 * @param {Function} [p.read]
 *
 * @param {Object|Object[]} [p.presets=[FRESH,JUNGLE]]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi]
 * @param {number} [p.level=0]
 *
 * @returns {string}
 */

const deco = (vector, p = {}) => _decoVector.call(DecoConfig.parse(p, CONFIG, DUAL_PRESET_COLLECTION), vector);
/***
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=') ']
 * @param {string} [p.delim=',\n']
 *
 * @param {boolean|number} [p.bracket=true] - BRK = 1
 *
 * @param {boolean} [p.indexed=true]
 * @param {Function} [p.read]
 *
 * @param {Object|Object[]} [p.presets=[FRESH, JUNGLE]]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi]
 * @param {number} [p.level=0]
 *
 * @returns {Function}
 */

const DecoPale = (p = {}) => _decoVector.bind(DecoConfig.parse(p, CONFIG, DUAL_PRESET_COLLECTION));

export { Deco, DecoPale, _decoVector, deco };
