'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumChars = require('@spare/enum-chars');
var enttro = require('@spare/enttro');
var padEntries = require('@spare/pad-entries');
var fluoEntries = require('@palett/fluo-entries');
var entriesZipper = require('@vect/entries-zipper');
var util = require('@spare/util');
var presets = require('@palett/presets');

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
    bracket
  } = this;
  const {
    raw,
    text
  } = enttro.enttro(entries, {
    head,
    tail,
    keyAbstract: util.makeQuoteAbstract(keyAbstract, keyQuote || quote),
    abstract: util.makeQuoteAbstract(abstract, quote),
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
  return entries.length ? bracket ? '[' + entries.map(([k, v]) => '[' + k + dash + v + ']').join(delimiter) + ']' : entries.map(([k, v]) => k + dash + v).join(delimiter) : enumChars.AEU;
};

const presetEntriesOptions = o => {
  o.preset = o.preset || presets.FRESH;
  o.preset = o.preset || presets.OCEAN;
  o.dash = o.dash || ' > ';
  o.delimiter = o.delimiter || '\n';
  return o;
};

/***
 *
 * @typedef {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} Preset
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
 * @param {string} [options.quote]
 * @param {boolean} [options.bracket]
 * @param {boolean} [options.ansi]
 * @returns {string}
 */

const deco = (entries, options = {}) => cosmetics.call(presetEntriesOptions(options), entries);

/***
 *
 * @typedef {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} Preset
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
 * @param {string} [options.quote]
 * @param {boolean} [options.bracket]
 * @param {boolean} [options.ansi]
 * @returns {string}
 */

const Deco = (options = {}) => cosmetics.bind(presetEntriesOptions(options));

exports.Deco = Deco;
exports.deco = deco;
