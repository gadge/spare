'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var presetDeco = require('@spare/preset-deco');
var fluoVector = require('@palett/fluo-vector');
var decoEntries = require('@spare/deco-entries');
var liner = require('@spare/liner');
var vectorMargin = require('@spare/vector-margin');

const fluo = fluoVector.fluoVector.bind({
  colorant: false,
  mutate: true
});
function cosmetics(vec = []) {
  const config = this;
  if (config === null || config === void 0 ? void 0 : config.indexed) return decoEntries.cosmetics.call(config, Object.entries(vec));
  vec = vectorMargin.vectorMargin(vec, config); // use: head, tail, read, rule

  if (config.presets) vec = fluo(vec, config); // use:  presets, effects

  return liner.liner(vec, config);
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

const Deco = (p = {}) => cosmetics.bind(presetDeco.presetVector(p));
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

const deco = (vector, p = {}) => cosmetics.call(presetDeco.presetVector(p), vector);
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

const DecoPale = (p = {}) => cosmetics.bind(presetDeco.presetVector(p));

exports.Deco = Deco;
exports.DecoPale = DecoPale;
exports.cosmetics = cosmetics;
exports.deco = deco;
