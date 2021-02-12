import { presetEntries } from '@spare/preset-deco';
import { oneself } from '@ject/oneself';
import { fluoEntries } from '@palett/fluo-entries';
import { Br } from '@spare/bracket';
import { entriesMargin } from '@spare/entries-margin';
import { entriesPadder } from '@spare/entries-padder';
import { liner } from '@spare/liner';

const LF = /\n/;
const fluo = fluoEntries.bind({
  colorant: false,
  mutate: true
});
const cosmetics = function (entries = []) {
  var _entries, _Br, _config$presets;

  const config = this;
  if (!((_entries = entries) !== null && _entries !== void 0 && _entries.length)) return liner([], config);
  let {
    ansi,
    dash,
    delim,
    bracket
  } = config;
  bracket = (_Br = Br(bracket)) !== null && _Br !== void 0 ? _Br : oneself;
  entries = entriesMargin(entries, config); // use: head, tail, keyRead, read

  if (LF.test(delim)) entries = entriesPadder(entries, {
    ansi: (_config$presets = config.presets) !== null && _config$presets !== void 0 ? _config$presets : ansi
  });
  if (config.presets) entries = fluo(entries, config); // use: presets, effects

  return liner(entries.map(([k, v]) => bracket(k + dash + v.trimRight())), config);
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
 *
 * @param {boolean|number} [p.bracket=true]
 *
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read]
 *
 * @param {Object|Object[]} [p.presets=[FRESH, OCEAN]]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi]
 * @param {number} [p.level=0]
 *
 * @returns {Function}
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
 *
 *
 * @param {boolean|number} [p.bracket=true]
 *
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read]
 *
 * @param {Object|Object[]} [p.presets=[FRESH, OCEAN]]
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
