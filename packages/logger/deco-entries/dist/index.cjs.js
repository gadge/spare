'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var presets = require('@palett/presets');
var util = require('@spare/util');
var enttro = require('@spare/enttro');
var padEntries = require('@spare/pad-entries');
var fluoEntries = require('@palett/fluo-entries');
var entriesZipper = require('@vect/entries-zipper');

const HR_ENTRY = ['..', '..'];

const cosmetics = function (entries) {
  if (!entries || !entries.length || entries[0].length !== 2) return util.AEU;
  const {
    keyAbstract,
    abstract,
    preset,
    stringPreset,
    head,
    tail,
    ansi,
    da,
    de,
    qt,
    br
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
  entries = de.includes(util.LF) ? padEntries.padEntries(text, {
    raw,
    dye,
    ansi: preset || ansi
  }) : preset ? entriesZipper.Duozipper((t, d) => {
    var _t;

    return _t = t, d(_t);
  })(text, dye) : text;
  return entries.length ? entries.map(([k, v]) => k + da + v).join(de) : util.AEU;
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
 * @param {string} [da=' => ']
 * @param {string} [de='\n']
 * @param {?string} [qt=null]
 * @param {boolean} [br=false]
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
  ansi = false,
  dash: da = ' > ',
  delimiter: de = ',\n',
  quote: qt = null,
  bracket: br = false
} = {}) => cosmetics.call({
  keyAbstract,
  abstract,
  preset,
  stringPreset,
  head,
  tail,
  ansi,
  da,
  de,
  qt,
  br
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
 * @param {string} [de='\n']
 * @param qt
 * @param {boolean} [br=false]
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
  ansi = false,
  dash: da = ' > ',
  delimiter: de = ',\n',
  quote: qt = null,
  bracket: br = false
} = {}) => cosmetics.bind({
  keyAbstract,
  abstract,
  preset,
  stringPreset,
  head,
  tail,
  ansi,
  da,
  de,
  qt,
  br
});

exports.Deco = Deco;
exports.deco = deco;
