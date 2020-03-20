'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var decoUtil = require('@spare/deco-util');
var enttro = require('@spare/enttro');
var padEntries = require('@spare/pad-entries');
var fluoEntries = require('@palett/fluo-entries');
var entriesZipper = require('@vect/entries-zipper');

const bracket = x => '[' + x + ']';

const HR_ENTRY = ['..', '..'];

const cosmetics = function (entries) {
  var _entries;

  if (!entries) return String(entries);
  if (!((_entries = entries) === null || _entries === void 0 ? void 0 : _entries.length)) return decoUtil.liner([], this);
  const {
    keyAbstract,
    abstract,
    preset,
    stringPreset,
    head,
    tail,
    ansi,
    dash,
    delim,
    keyQuote,
    quote,
    bracket: bracket$1
  } = this;
  const {
    raw,
    text
  } = enttro.enttro(entries, {
    head,
    tail,
    keyAbstract: decoUtil.pipeQuote(keyAbstract, keyQuote),
    abstract: decoUtil.pipeQuote(abstract, quote),
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
  const lines = bracket$1 ? entries.map(([k, v]) => bracket(k + dash + v)) : entries.map(([k, v]) => k + dash + v.trimRight());
  return decoUtil.liner(lines, this);
};

/**
 * @typedef {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} Preset
 */

/**
 *
 * @param {Object} options
 * @param {function(*):string} [options.keyAbstract]
 * @param {function(*):string} [options.abstract]
 * @param {Preset} [options.preset]
 * @param {Preset} [options.stringPreset]
 * @param {number} [options.head]
 * @param {number} [options.tail]
 * @param {string} [options.dash=' > ']
 * @param {string} [options.delim='\n']
 * @param {string} [options.keyQuote]
 * @param {string} [options.quote]
 * @param {number} [options.bracket=BRK] - BRK = 1
 * @param {boolean} [options.ansi]
 * @param {boolean} [options.discrete]
 * @param {number} [options.level=0]
 * @param {number} [options.level]
 * @returns {string}
 */

const Deco = (options = {}) => cosmetics.bind(decoUtil.presetEntriesOptions(options));
/***
 *
 * @param {[*,*][]} entries
 * @param {Object} options
 * @param {function(*):string} [options.keyAbstract]
 * @param {function(*):string} [options.abstract]
 * @param {Preset} [options.preset]
 * @param {Preset} [options.stringPreset]
 * @param {number} [options.head]
 * @param {number} [options.tail]
 * @param {string} [options.dash=' > ']
 * @param {string} [options.delim='\n']
 * @param {string} [options.keyQuote]
 * @param {string} [options.quote]
 * @param {number} [options.bracket=BRK] - BRK = 1
 * @param {boolean} [options.ansi]
 * @param {boolean} [options.discrete]
 * @param {number} [options.level=0]
 * @returns {string}
 */

const deco = (entries, options = {}) => cosmetics.call(decoUtil.presetEntriesOptions(options), entries);

exports.Deco = Deco;
exports.cosmetics = cosmetics;
exports.deco = deco;
