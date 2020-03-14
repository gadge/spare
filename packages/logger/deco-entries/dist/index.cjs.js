'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var decoUtil = require('@spare/deco-util');
var enumChars = require('@spare/enum-chars');
var enttro = require('@spare/enttro');
var padEntries = require('@spare/pad-entries');
var fluoEntries = require('@palett/fluo-entries');
var entriesZipper = require('@vect/entries-zipper');

const HR_ENTRY = ['..', '..'];

const cosmetics = function (entries) {
  if (!entries || !entries.length || entries[0].length !== 2) return enumChars.AEU;
  const {
    keyAbstract,
    abstract,
    preset,
    stringPreset,
    head,
    tail,
    ansi
  } = this;
  let {
    dash,
    delimiter,
    keyQuote,
    quote,
    bracket,
    discrete
  } = this;
  const {
    raw,
    text
  } = enttro.enttro(entries, {
    head,
    tail,
    keyAbstract: decoUtil.makeQuoteAbstract(keyAbstract, keyQuote),
    abstract: decoUtil.makeQuoteAbstract(abstract, quote),
    hr: HR_ENTRY
  });
  const dye = preset && fluoEntries.fluoEntries(raw, {
    preset,
    stringPreset,
    colorant: true
  });
  entries = delimiter.includes(enumChars.LF) ? (bracket ? delimiter += enumChars.SP : null, padEntries.padEntries(text, {
    raw,
    dye,
    ansi: preset || ansi
  })) : preset ? entriesZipper.Duozipper((t, d) => {
    var _t;

    return _t = t, d(_t);
  })(text, dye) : text;
  const lines = bracket ? entries.map(([k, v]) => '[' + k + dash + v + ']') : entries.map(([k, v]) => k + dash + v);
  return discrete ? lines : bracket ? '[' + lines.join(delimiter) + ']' : lines.join(delimiter);
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
 * @param {string} [options.delimiter='\n']
 * @param {string} [options.keyQuote]
 * @param {string} [options.quote]
 * @param {boolean} [options.bracket]
 * @param {boolean} [options.ansi]
 * @param {boolean} [options.discrete]
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
 * @param {string} [options.delimiter='\n']
 * @param {string} [options.keyQuote]
 * @param {string} [options.quote]
 * @param {boolean} [options.bracket]
 * @param {boolean} [options.ansi]
 * @param {boolean} [options.discrete]
 * @returns {string}
 */

const deco = (entries, options = {}) => cosmetics.call(decoUtil.presetEntriesOptions(options), entries);

exports.Deco = Deco;
exports.cosmetics = cosmetics;
exports.deco = deco;
