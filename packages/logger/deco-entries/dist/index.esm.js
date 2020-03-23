import { presetEntries } from '@spare/preset-deco';
import { liner } from '@spare/liner';
import { enttro } from '@spare/enttro';
import { padEntries } from '@spare/pad-entries';
import { fluoEntries } from '@palett/fluo-entries';
import { Duozipper } from '@vect/entries-zipper';
import { Qt } from '@spare/quote';

const HR_ENTRY = ['..', '..'];

const PAR = 1,
      BRK = 2,
      BRC = 3,
      ANBR = 4;

const parenth = x => '(' + x + ')';
const bracket = x => '[' + x + ']';
const brace = x => '{' + x + '}';
const anglebr = x => '<' + x + '>';

const SelectBr = mode => {
  if (mode === PAR) return parenth;
  if (mode === BRK) return bracket;
  if (mode === BRC) return brace;
  if (mode === ANBR) return anglebr;
  return null;
};

const cosmetics = function (entries) {
  var _entries;

  if (!entries) return String(entries);
  if (!((_entries = entries) === null || _entries === void 0 ? void 0 : _entries.length)) return liner([], this);
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
    quote,
    bracket
  } = this;
  const {
    raw,
    text
  } = enttro(entries, {
    head,
    tail,
    keyRead: Qt(keyRead, keyQuote),
    read: Qt(read, quote),
    hr: HR_ENTRY
  });
  const dye = preset && fluoEntries(raw, {
    preset,
    stringPreset,
    colorant: true
  });
  entries = /\n/.test(delim) ? padEntries(text, {
    raw,
    dye,
    ansi: preset || ansi
  }) : preset ? Duozipper((t, d) => {
    var _t;

    return _t = t, d(_t);
  })(text, dye) : text;

  const brk = SelectBr(bracket) || (x => x);

  const lines = entries.map(([k, v]) => brk(k + dash + v.trimRight()));
  return liner(lines, this);
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
 * @param {number} [p.bracket=BRK]
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

const Deco = (p = {}) => cosmetics.bind(presetEntries(p));
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
 * @param {number} [p.bracket=BRK]
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

const deco = (entries, p = {}) => cosmetics.call(presetEntries(p), entries);

export { Deco, cosmetics, deco };
