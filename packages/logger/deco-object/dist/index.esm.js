import { liner, presetObjectOptions } from '@spare/deco-util';
import { cosmetics as cosmetics$1 } from '@spare/deco-entries';

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
 * @param {function(*):string} [options.keyRead]
 * @param {function(*):string} [options.read]
 * @param {Preset} [options.preset]
 * @param {Preset} [options.stringPreset]
 * @param {number} [options.head]
 * @param {number} [options.tail]
 * @param {string} [options.dash=': ']
 * @param {string} [options.delim='\n']
 * @param {string} [options.keyQuote]
 * @param {string} [options.quote]
 * @param {number} [options.bracket=BRC] - BRC = 2
 * @param {boolean} [options.ansi]
 * @param {boolean} [options.discrete]
 * @param {number} [options.level=0]
 * @returns {string}
 */

const Deco = (options = {}) => cosmetics.bind(presetObjectOptions(options));
/***
 *
 * @param {Object} o
 * @param {Object} options
 * @param {function(*):string} [options.keyRead]
 * @param {function(*):string} [options.read]
 * @param {Preset} [options.preset]
 * @param {Preset} [options.stringPreset]
 * @param {number} [options.head]
 * @param {number} [options.tail]
 * @param {string} [options.dash=': ']
 * @param {string} [options.delim='\n']
 * @param {string} [options.keyQuote]
 * @param {string} [options.quote]
 * @param {number} [options.bracket=BRC] - BRC = 2
 * @param {boolean} [options.ansi]
 * @param {boolean} [options.discrete]
 * @param {number} [options.level=0]
 * @returns {string}
 */

const deco = (o, options = {}) => cosmetics.call(presetObjectOptions(options), o);

export { Deco, cosmetics, deco };
