'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var presetDeco = require('@spare/preset-deco');
var liner = require('@spare/liner');
var enttro = require('@spare/enttro');
var padEntries = require('@spare/pad-entries');
var fluoEntries = require('@palett/fluo-entries');
var entriesZipper = require('@vect/entries-zipper');
var quote = require('@spare/quote');
var bracket = require('@spare/bracket');

const HR_ENTRY = ['..', '..'];

const cosmetics = function (entries) {
  var _entries;

  if (!entries) return String(entries);
  if (!((_entries = entries) === null || _entries === void 0 ? void 0 : _entries.length)) return liner.liner([], this);
  const {
    keyRead,
    read,
    preset,
    stringPreset,
    head,
    tail,
    ansi,
    dash,
    delim,
    keyQuote,
    quote: quote$1,
    bracket: bracket$1
  } = this;
  const {
    raw,
    text
  } = enttro.enttro(entries, {
    head,
    tail,
    keyRead: quote.Qt(keyRead, keyQuote),
    read: quote.Qt(read, quote$1),
    hr: HR_ENTRY
  });
  const dye = preset && fluoEntries.fluoEntries(raw, {
    preset,
    stringPreset,
    colorant: true
  });
  entries = /\n/.test(delim) ? padEntries.padEntries(text, {
    raw,
    dye,
    ansi: preset || ansi
  }) : preset ? entriesZipper.Duozipper((t, d) => {
    var _t;

    return _t = t, d(_t);
  })(text, dye) : text;

  const brk = bracket.SelectBr(bracket$1) || (x => x);

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
 * @param {number} [p.keyQuote=NONE]
 * @param {number} [p.quote=NONE]
 * @param {boolean} [p.bracket=true]
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
 * @param {number} [p.keyQuote=NONE]
 * @param {number} [p.quote=NONE]
 * @param {boolean} [p.bracket=true]
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
