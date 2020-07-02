'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var presetDeco = require('@spare/preset-deco');
var fluoVector = require('@palett/fluo-vector');
var decoEntries = require('@spare/deco-entries');
var enumChars = require('@spare/enum-chars');
var liner = require('@spare/liner');
var vettro = require('@spare/vettro');

const mutazip = (va, vb, fn, l) => {
  l = l || va && va.length;

  for (--l; l >= 0; l--) va[l] = fn(va[l], vb[l], l);

  return va;
};

function cosmetics(vec) {
  const config = this;
  if (config === null || config === void 0 ? void 0 : config.indexed) return decoEntries.cosmetics.call(config, Object.entries(vec));
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
  } = vettro.vettro(vec, {
    head,
    tail,
    read,
    hr: enumChars.ELLIP
  });

  if (presets) {
    const dyes = fluoVector.fluoVec.call({
      colorant: true,
      mutate: true
    }, raw, presets, effects);
    text = mutazip(text, dyes, (x, dye) => {
      var _x;

      return _x = x, dye(_x);
    });
  }

  return liner.liner(text, config);
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
 * @param {boolean|number} [p.bracket=true] - BRK = 1
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

const Deco = (p = {}) => cosmetics.bind(presetDeco.presetVector(p));
/***
 *
 * @param {*[]} vector
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=') ']
 * @param {string} [p.delim=',\n']
 *
 * @param {boolean|number} [p.bracket=true] - BRK = 1
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

const deco = (vector, p = {}) => cosmetics.call(presetDeco.presetVector(p), vector);
/***
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=') ']
 * @param {string} [p.delim=',\n']
 *
 * @param {boolean|number} [p.bracket=true] - BRK = 1
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

const DecoPale = (p = {}) => cosmetics.bind(presetDeco.presetVector(p));

exports.Deco = Deco;
exports.DecoPale = DecoPale;
exports.cosmetics = cosmetics;
exports.deco = deco;
