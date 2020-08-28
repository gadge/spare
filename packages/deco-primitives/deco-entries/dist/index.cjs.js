'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var presetDeco = require('@spare/preset-deco');
var oneself = require('@ject/oneself');
var enumColorantModes = require('@palett/enum-colorant-modes');
var fluoEntries = require('@palett/fluo-entries');
var bracket = require('@spare/bracket');
var enttro = require('@spare/enttro');
var liner = require('@spare/liner');
var padEntries = require('@spare/pad-entries');
var entriesZipper = require('@vect/entries-zipper');

const HR_ENTRY = ['..', '..'];

const cosmetics = function (entries = []) {
  var _entries;

  if (!((_entries = entries) === null || _entries === void 0 ? void 0 : _entries.length)) return liner.liner([], this);
  const {
    keyRead,
    read,
    head,
    tail,
    ansi,
    dash,
    delim,
    bracket: bracket$1,
    presets,
    effects
  } = this;
  const {
    raw,
    text
  } = enttro.enttro(entries, {
    head,
    tail,
    keyRead,
    read,
    hr: HR_ENTRY
  });
  const dye = presets ? fluoEntries.fluoEntries.call(enumColorantModes.COLORANT, raw, presets, effects) : null;
  entries = /\n/.test(delim) ? padEntries.padEntries(text, {
    raw,
    dye,
    ansi: presets || ansi
  }) : presets ? entriesZipper.zipper(text, dye, (tx, dy) => {
    var _tx;

    return _tx = tx, dy(_tx);
  }) : text;
  const brk = bracket.Br(bracket$1) || oneself.oneself;
  const lines = entries.map(([k, v]) => brk(k + dash + v.trimRight()));
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
