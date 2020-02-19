'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var util = require('@spare/util');
var lange = require('@spare/lange');
var enttro = require('@spare/enttro');
var presets = require('@palett/presets');
var fluoEntries = require('@palett/fluo-entries');
var entriesZipper = require('@vect/entries-zipper');
var entriesIndicator = require('@vect/entries-indicator');

const HR_ENTRY = ['..', '..'];

const len = ansi => ansi ? x => x ? lange.lange(x) : 0 : x => {
  var _ref;

  return (_ref = x === null || x === void 0 ? void 0 : x.length) !== null && _ref !== void 0 ? _ref : 0;
};
/***
 *
 * @param {[*,*][]} entries
 * @param {string} [dash=' => ']
 * @param {string} [delimiter='\n']
 * @param {function(*):string} [keyAbstract]
 * @param {function(*):string} [abstract]
 * @param {number} [head]
 * @param {number} [tail]
 * @param {{ [max]:string|number[],
 *           [min]:string|number[],
 *           [na]: string|number[] }} [visual]
 * @param {boolean} [ansi=false]
 * @returns {string}
 */


const brief = (entries, {
  dash = ' > ',
  delimiter = ',\n',
  keyAbstract,
  abstract,
  head,
  tail,
  preset = presets.FRESH,
  stringPreset = presets.OCEAN,
  ansi = false
} = {}) => {
  var _delimiter;

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
  const [kpad, vpad] = entriesIndicator.Max(len(preset || ansi), len(preset || ansi))(text);
  const dye = preset && fluoEntries.fluoEntries(raw, {
    preset,
    stringPreset,
    colorant: true
  });
  let zipper;
  let formattedEntries = (delimiter = (_delimiter = delimiter) !== null && _delimiter !== void 0 ? _delimiter : '\n').includes('\n') ? preset ? (zipper = entriesZipper.Trizipper((t, r, d) => {
    var _lpad;

    return _lpad = util.lpad(t, kpad, ansi), d(_lpad);
  }, (t, r, d) => {
    var _npad;

    return _npad = util.npad(t, r, vpad, ansi), d(_npad);
  }), zipper(text, raw, dye)) : (zipper = entriesZipper.Duozipper(t => util.lpad(t, kpad, ansi), (t, r) => util.npad(t, r, vpad, ansi)), zipper(text, raw)) : preset ? (zipper = entriesZipper.Duozipper((t, d) => {
    var _t;

    return _t = t, d(_t);
  }, (t, d) => {
    var _t2;

    return _t2 = t, d(_t2);
  }), zipper(text, dye)) : text;
  return formattedEntries.length ? formattedEntries.map(([k, v]) => k + dash + v).join(delimiter) : util.AEU;
};

exports.brief = brief;
