'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var presetDeco = require('@spare/preset-deco');
var decoEntries = require('@spare/deco-entries');
var liner = require('@spare/liner');

const cosmetics = function (o) {
  if (!o) return String(o);
  const entriesOptions = Object.assign({}, this, {
    discrete: true,
    bracket: false
  });
  const lines = decoEntries.cosmetics.call(entriesOptions, Object.entries(o));
  return liner.liner(lines, this);
};

/**
 * @typedef {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} Preset
 */

/**
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=': ']
 * @param {string} [p.delim=',\n']
 * @param {number} [p.keyQuote=NONE]
 * @param {number} [p.quote=NONE]
 * @param {number} [p.bracket=BRC]
 *
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read]
 *
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=PLANET]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi]
 * @param {number} [p.level]
 *
 * @returns {Function}
 */

const Deco = (p = {}) => cosmetics.bind(presetDeco.presetObject(p));
/***
 *
 * @param {Object} o
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=': ']
 * @param {string} [p.delim=',\n']
 * @param {number} [p.keyQuote=NONE]
 * @param {number} [p.quote=NONE]
 * @param {number} [p.bracket=BRC]
 *
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read]
 *
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=PLANET]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi]
 * @param {number} [p.level]
 *
 * @returns {string}
 */

const deco = (o, p = {}) => cosmetics.call(presetDeco.presetObject(p), o);

exports.Deco = Deco;
exports.cosmetics = cosmetics;
exports.deco = deco;
