'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var presets = require('@palett/presets');
var util = require('@spare/util');
var enttro = require('@spare/enttro');
var padEntries = require('@spare/pad-entries');
var fluoEntries = require('@palett/fluo-entries');
var entriesZipper = require('@vect/entries-zipper');

const HR_ENTRY = ['..', '..'];

const cosmati = function (entries) {
  if (!entries || !entries.length || entries[0].length !== 2) return util.AEU;
  const {
    keyAbstract,
    abstract,
    preset = presets.FRESH,
    stringPreset = presets.OCEAN,
    head,
    tail,
    dash = ' > ',
    delimiter = ',\n',
    ansi = false
  } = this;
  const {
    raw,
    text
  } = enttro.enttro(entries, {
    head,
    tail,
    keyAbstract,
    abstract,
    hr: HR_ENTRY
  });
  const dye = preset && fluoEntries.fluoEntries(raw, {
    preset,
    stringPreset,
    colorant: true
  });
  entries = delimiter.includes('\n') ? padEntries.padEntries(text, {
    raw,
    dye,
    ansi: preset || ansi
  }) : preset ? entriesZipper.Duozipper((t, d) => {
    var _t;

    return _t = t, d(_t);
  })(text, dye) : text;
  return entries.length ? entries.map(([k, v]) => k + dash + v).join(delimiter) : util.AEU;
};

/***
 *
 * @param {[*,*][]} entries
 * @param {function(*):string} [keyAbstract]
 * @param {function(*):string} [abstract]
 * @param {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} [preset]
 * @param {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} [stringPreset]
 * @param {number} [head]
 * @param {number} [tail]
 * @param {string} [dash=' => ']
 * @param {string} [delimiter='\n']
 * @param {boolean} [ansi=false]
 * @returns {string}
 */

const deco = (entries, {
  keyAbstract,
  abstract,
  preset = presets.FRESH,
  stringPreset = presets.OCEAN,
  head,
  tail,
  dash = ' > ',
  delimiter = ',\n',
  ansi = false
} = {}) => cosmati.call({
  keyAbstract,
  abstract,
  preset,
  stringPreset,
  head,
  tail,
  dash,
  delimiter,
  ansi
}, entries);

/***
 *
 * @param {function(*):string} [keyAbstract]
 * @param {function(*):string} [abstract]
 * @param {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} [preset]
 * @param {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} [stringPreset]
 * @param {number} [head]
 * @param {number} [tail]
 * @param {string} [dash=' => ']
 * @param {string} [delimiter='\n']
 * @param {boolean} [ansi=false]
 * @returns {string}
 */

const Deco = ({
  keyAbstract,
  abstract,
  preset = presets.FRESH,
  stringPreset = presets.OCEAN,
  head,
  tail,
  dash = ' > ',
  delimiter = ',\n',
  ansi = false
} = {}) => cosmati.bind({
  keyAbstract,
  abstract,
  preset,
  stringPreset,
  head,
  tail,
  dash,
  delimiter,
  ansi
});

exports.Deco = Deco;
exports.deco = deco;
