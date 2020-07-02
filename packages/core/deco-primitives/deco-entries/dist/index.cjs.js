'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var presetDeco = require('@spare/preset-deco');
var enumColorantModes = require('@palett/enum-colorant-modes');
var fluoEntries = require('@palett/fluo-entries');
var bracket = require('@spare/bracket');
var enttro = require('@spare/enttro');
var liner = require('@spare/liner');
var padEntries = require('@spare/pad-entries');
var entriesZipper = require('@vect/entries-zipper');

const HR_ENTRY = ['..', '..'];

const cosmetics = function (entries) {
  var _entries;

  if (!entries) return String(entries);
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
    presets
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
  let dye = undefined;

  if (presets) {
    dye = fluoEntries.fluoEnt.call(enumColorantModes.COLORANT, raw, presets);
  }

  entries = /\n/.test(delim) ? padEntries.padEntries(text, {
    raw,
    dye,
    ansi: presets || ansi
  }) : presets ? entriesZipper.Duozipper((t, d) => {
    var _t;

    return _t = t, d(_t);
  })(text, dye) : text;

  const brk = bracket.Br(bracket$1) || (x => x);

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
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=OCEAN]
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
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=OCEAN]
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
