import { FRESH, OCEAN } from '@palett/presets';
import { AEU } from '@spare/util';
import { enttro } from '@spare/enttro';
import { padEntries } from '@spare/pad-entries';
import { fluoEntries } from '@palett/fluo-entries';
import { Duozipper } from '@vect/entries-zipper';

const HR_ENTRY = ['..', '..'];

const cosmati = function (entries) {
  if (!entries || !entries.length || entries[0].length !== 2) return AEU;
  const {
    keyAbstract,
    abstract,
    preset = FRESH,
    stringPreset = OCEAN,
    head,
    tail,
    dash = ' > ',
    delimiter = ',\n',
    ansi = false
  } = this;
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
  entries = delimiter.includes('\n') ? padEntries(text, {
    raw,
    dye,
    ansi: preset || ansi
  }) : preset ? Duozipper((t, d) => {
    var _t;

    return _t = t, d(_t);
  })(text, dye) : text;
  return entries.length ? entries.map(([k, v]) => k + dash + v).join(delimiter) : AEU;
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
  preset = FRESH,
  stringPreset = OCEAN,
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
  preset = FRESH,
  stringPreset = OCEAN,
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

export { Deco, deco };
