'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var presetDeco = require('@spare/preset-deco');
var oneself = require('@ject/oneself');
var fluoEntries = require('@palett/fluo-entries');
var bracket = require('@spare/bracket');
var entriesMargin = require('@spare/entries-margin');
var entriesPadder = require('@spare/entries-padder');
var liner = require('@spare/liner');

const LF = /\n/;
const fluo = fluoEntries.fluoEntries.bind({
  colorant: false,
  mutate: true
});
const cosmetics = function (entries = []) {
  var _entries, _Br, _config$presets;

  const config = this;
  if (!((_entries = entries) !== null && _entries !== void 0 && _entries.length)) return liner.liner([], config);
  let {
    ansi,
    dash,
    delim,
    bracket: bracket$1
  } = config;
  bracket$1 = (_Br = bracket.Br(bracket$1)) !== null && _Br !== void 0 ? _Br : oneself.oneself;
  entries = entriesMargin.entriesMargin(entries, config); // use: head, tail, keyRead, read

  if (LF.test(delim)) entries = entriesPadder.entriesPadder(entries, {
    ansi: (_config$presets = config.presets) !== null && _config$presets !== void 0 ? _config$presets : ansi
  });
  if (config.presets) entries = fluo(entries, config); // use: presets, effects

  return liner.liner(entries.map(([k, v]) => bracket$1(k + dash + v.trimRight())), config);
};

/**
 * @typedef {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} Preset
 */

/**
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=' > ']
 * @param {string} [p.delim='\n']
 *
 * @param {boolean|number} [p.bracket=true]
 *
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read]
 *
 * @param {Object|Object[]} [p.presets=[FRESH, OCEAN]]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi]
 * @param {number} [p.level=0]
 *
 * @returns {Function}
 */

const Deco = (p = {}) => cosmetics.bind(presetDeco.presetEntries(p));
/***
 *
 * @param {[*,*][]} entries
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=' > ']
 * @param {string} [p.delim='\n']
 *
 *
 * @param {boolean|number} [p.bracket=true]
 *
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read]
 *
 * @param {Object|Object[]} [p.presets=[FRESH, OCEAN]]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi]
 * @param {number} [p.level=0]
 *
 * @returns {string}
 */

const deco = (entries, p = {}) => cosmetics.call(presetDeco.presetEntries(p), entries);

exports.Deco = Deco;
exports.cosmetics = cosmetics;
exports.deco = deco;
