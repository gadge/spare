import { makeQuoteAbstract, presetEntriesOptions } from '@spare/deco-util';
import { AEU, LF, SP } from '@spare/enum-chars';
import { enttro } from '@spare/enttro';
import { padEntries } from '@spare/pad-entries';
import { fluoEntries } from '@palett/fluo-entries';
import { Duozipper } from '@vect/entries-zipper';

const HR_ENTRY = ['..', '..'];

const cosmetics = function (entries) {
  if (!entries || !entries.length || entries[0].length !== 2) return AEU;
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
  } = enttro(entries, {
    head,
    tail,
    keyAbstract: makeQuoteAbstract(keyAbstract, keyQuote),
    abstract: makeQuoteAbstract(abstract, quote),
    hr: HR_ENTRY
  });
  const dye = preset && fluoEntries(raw, {
    preset,
    stringPreset,
    colorant: true
  });
  entries = delimiter.includes(LF) ? (bracket ? delimiter += SP : null, padEntries(text, {
    raw,
    dye,
    ansi: preset || ansi
  })) : preset ? Duozipper((t, d) => {
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

const Deco = (options = {}) => cosmetics.bind(presetEntriesOptions(options));
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

const deco = (entries, options = {}) => cosmetics.call(presetEntriesOptions(options), entries);

export { Deco, cosmetics, deco };
