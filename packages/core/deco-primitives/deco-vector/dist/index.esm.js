import { presetVector } from '@spare/preset-deco';
import { fluoVec } from '@palett/fluo-vector';
import { cosmetics as cosmetics$1 } from '@spare/deco-entries';
import { ELLIP } from '@spare/enum-chars';
import { liner } from '@spare/liner';
import { vettro } from '@spare/vettro';

const mutazip = (va, vb, fn, l) => {
  l = l || va && va.length;

  for (--l; l >= 0; l--) va[l] = fn(va[l], vb[l], l);

  return va;
};

function cosmetics(vec) {
  const config = this;
  if (config === null || config === void 0 ? void 0 : config.indexed) return cosmetics$1.call(config, Object.entries(vec));
  if (!(vec === null || vec === void 0 ? void 0 : vec.length)) return String(vec);
  let {
    head,
    tail,
    presets,
    effects,
    read
  } = config;
  let {
    raw,
    text
  } = vettro(vec, {
    head,
    tail,
    read,
    hr: ELLIP
  });

  if (presets) {
    const dyes = fluoVec.call({
      colorant: true,
      mutate: true
    }, raw, presets, effects);
    text = mutazip(text, dyes, (x, dye) => {
      var _x;

      return _x = x, dye(_x);
    });
  }

  return liner(text, config);
}

/**
 * @typedef {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} Preset
 */

/***
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=') ']
 * @param {string} [p.delim=',\n']
 *
 * @param {boolean} [p.bracket=true] - BRK = 1
 *
 * @param {boolean} [p.indexed=true]
 * @param {Function} [p.read]
 *
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=JUNGLE]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi]
 * @param {number} [p.level=0]
 *
 * @returns {Function}
 */

const Deco = (p = {}) => cosmetics.bind(presetVector(p));
/***
 *
 * @param {*[]} vector
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=') ']
 * @param {string} [p.delim=',\n']
 *
 * @param {boolean} [p.bracket=true] - BRK = 1
 *
 * @param {boolean} [p.indexed=true]
 * @param {Function} [p.read]
 *
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=JUNGLE]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi]
 * @param {number} [p.level=0]
 *
 * @returns {string}
 */

const deco = (vector, p = {}) => cosmetics.call(presetVector(p), vector);
/***
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=') ']
 * @param {string} [p.delim=',\n']
 *
 * @param {boolean} [p.bracket=true] - BRK = 1
 *
 * @param {boolean} [p.indexed=true]
 * @param {Function} [p.read]
 *
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=JUNGLE]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi]
 * @param {number} [p.level=0]
 *
 * @returns {Function}
 */

const DecoPale = (p = {}) => cosmetics.bind(presetVector(p));

export { Deco, DecoPale, cosmetics, deco };
