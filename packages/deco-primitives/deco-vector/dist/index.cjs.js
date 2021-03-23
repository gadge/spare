'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var presetDeco = require('@spare/preset-deco');
var fluoVector = require('@palett/fluo-vector');
var decoEntries = require('@spare/deco-entries');
var liner = require('@spare/liner');
var vectorMargin = require('@spare/vector-margin');
var enumColorantModes = require('@palett/enum-colorant-modes');

const fluo = fluoVector.fluoVector.bind(enumColorantModes.MUTATE_PIGMENT);
function _decoVector(vec = []) {
  const config = this;
  if (config !== null && config !== void 0 && config.indexed) return decoEntries._decoEntries.call(config, Object.entries(vec));
  vec = vectorMargin.vectorMargin(vec, config); // use: head, tail, read, rule

  if (config.presets) vec = fluo(vec, config.presets); // use:  presets, effects

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

const Deco = (p = {}) => _decoVector.bind(presetDeco.presetVector(p));
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

const deco = (vector, p = {}) => _decoVector.call(presetDeco.presetVector(p), vector);
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

const DecoPale = (p = {}) => _decoVector.bind(presetDeco.presetVector(p));

exports.Deco = Deco;
exports.DecoPale = DecoPale;
exports._decoVector = _decoVector;
exports.deco = deco;
