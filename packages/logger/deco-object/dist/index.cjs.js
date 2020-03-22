'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var presetDeco = require('@spare/preset-deco');
var decoEntries = require('@spare/deco-entries');
var decoUtil = require('@spare/deco-util');

const cosmetics = function (o) {
  if (!o) return String(o);
  const entriesOptions = Object.assign({}, this, {
    discrete: true,
    bracket: false
  });
  const lines = decoEntries.cosmetics.call(entriesOptions, Object.entries(o));
  return decoUtil.liner(lines, this);
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

const Deco = (options = {}) => cosmetics.bind(presetDeco.presetObject(options));
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

const deco = (o, options = {}) => cosmetics.call(presetDeco.presetObject(options), o);

exports.Deco = Deco;
exports.cosmetics = cosmetics;
exports.deco = deco;
