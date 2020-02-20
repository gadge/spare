import { AEU } from '@spare/util';
import { enttro } from '@spare/enttro';
import { padEntries } from '@spare/pad-entries';
import { FRESH, OCEAN } from '@palett/presets';
import { fluoEntries } from '@palett/fluo-entries';
import { Duozipper } from '@vect/entries-zipper';

const HR_ENTRY = ['..', '..'];

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

const deco = (entries, {
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
  const dye = preset && fluoEntries(raw, {
    preset,
    stringPreset,
    colorant: true
  });
  entries = (delimiter = (_delimiter = delimiter) !== null && _delimiter !== void 0 ? _delimiter : '\n').includes('\n') ? padEntries(text, {
    raw,
    dye,
    ansi: preset || ansi
  }) : preset ? Duozipper((t, d) => {
    var _t;

    return _t = t, d(_t);
  }, (t, d) => {
    var _t2;

    return _t2 = t, d(_t2);
  })(text, dye) : text;
  return entries.length ? entries.map(([k, v]) => k + dash + v).join(delimiter) : AEU;
};

export { deco };
