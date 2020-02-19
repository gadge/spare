import { lpad, npad, AEU } from '@spare/util';
import { lange } from '@spare/lange';
import { enttro } from '@spare/enttro';
import { FRESH, OCEAN } from '@palett/presets';
import { fluoEntries } from '@palett/fluo-entries';
import { Trizipper, Duozipper } from '@vect/entries-zipper';
import { Max } from '@vect/entries-indicator';

const HR_ENTRY = ['..', '..'];

const len = ansi => ansi ? x => x ? lange(x) : 0 : x => {
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
  preset = FRESH,
  stringPreset = OCEAN,
  ansi = false
} = {}) => {
  var _delimiter;

  const {
    raw,
    text
  } = enttro(entries, {
    head,
    tail,
    keyAbstract,
    abstract,
    hr: HR_ENTRY
  });
  const [kpad, vpad] = Max(len(preset || ansi), len(preset || ansi))(text);
  const dye = preset && fluoEntries(raw, {
    preset,
    stringPreset,
    colorant: true
  });
  let zipper;
  let formattedEntries = (delimiter = (_delimiter = delimiter) !== null && _delimiter !== void 0 ? _delimiter : '\n').includes('\n') ? preset ? (zipper = Trizipper((t, r, d) => {
    var _lpad;

    return _lpad = lpad(t, kpad, ansi), d(_lpad);
  }, (t, r, d) => {
    var _npad;

    return _npad = npad(t, r, vpad, ansi), d(_npad);
  }), zipper(text, raw, dye)) : (zipper = Duozipper(t => lpad(t, kpad, ansi), (t, r) => npad(t, r, vpad, ansi)), zipper(text, raw)) : preset ? (zipper = Duozipper((t, d) => {
    var _t;

    return _t = t, d(_t);
  }, (t, d) => {
    var _t2;

    return _t2 = t, d(_t2);
  }), zipper(text, dye)) : text;
  return formattedEntries.length ? formattedEntries.map(([k, v]) => k + dash + v).join(delimiter) : AEU;
};

export { brief };
