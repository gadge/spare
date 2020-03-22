import { presetObject } from '@spare/preset-deco';
import { cosmetics as cosmetics$1 } from '@spare/deco-entries';
import { liner } from '@spare/deco-util';

const cosmetics = function (o) {
  if (!o) return String(o);
  const entriesOptions = Object.assign({}, this, {
    discrete: true,
    bracket: false
  });
  const lines = cosmetics$1.call(entriesOptions, Object.entries(o));
  return liner(lines, this);
};

/**
 * @typedef {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} Preset
 */

/**
 *
 * @param {Object} options
 * @param {Function} [options.utils]
 * @param {Function} [options.read]
 * @param {string} [options.keyQuote]
 * @param {string} [options.quote]
 * @param {Object} [options.preset=FRESH]
 * @param {Object} [options.stringPreset=PLANET]
 * @param {number} [options.head]
 * @param {number} [options.tail]
 * @param {string} [options.dash=': ']
 * @param {string} [options.delim=',\n']
 * @param {number} [options.bracket=BRC]
 * @param {boolean} [options.ansi]
 * @param {boolean} [options.discrete]
 * @param {number} [options.level]
 * @returns {string}
 */

const Deco = (options = {}) => cosmetics.bind(presetObject(options));
/***
 *
 * @param {Object} o
 * @param {Object} options
 * @param {Function} [options.utils]
 * @param {Function} [options.read]
 * @param {string} [options.keyQuote]
 * @param {string} [options.quote]
 * @param {Object} [options.preset=FRESH]
 * @param {Object} [options.stringPreset=PLANET]
 * @param {number} [options.head]
 * @param {number} [options.tail]
 * @param {string} [options.dash=': ']
 * @param {string} [options.delim=',\n']
 * @param {number} [options.bracket=BRC]
 * @param {boolean} [options.ansi]
 * @param {boolean} [options.discrete]
 * @param {number} [options.level]
 * @returns {string}
 */

const deco = (o, options = {}) => cosmetics.call(presetObject(options), o);

export { Deco, cosmetics, deco };
