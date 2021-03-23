import { presetCrostab } from '@spare/preset-deco';
import { fluoMatrix } from '@palett/fluo-matrix';
import { fluoVector } from '@palett/fluo-vector';
import { crostabMargin } from '@spare/crostab-margin';
import { crostabPadder } from '@spare/crostab-padder';
import { AEU } from '@spare/enum-chars';
import { liner } from '@spare/liner';
import { size } from '@vect/matrix';
import { acquire } from '@vect/vector-merge';
import { zipper } from '@vect/vector-zipper';

const VLINE = ' | ',
      HCONN = '-+-';

const MUTATE = {
  mutate: true
};
/**
 *
 * @param {{side:string[],head:string[],rows:string[]}} crostab
 * @param {object} config
 * @param {number} [config.direct]
 * @param {object|object[]} [config.presets]
 * @param {string[]} [config.effects]
 * @returns {*}
 */

const crostabVerbal = (crostab, config = {}) => {
  const {
    presets
  } = config;
  if (!presets) return crostab;
  const [alpha, beta, gamma] = presets;
  const presetLabels = [alpha, gamma !== null && gamma !== void 0 ? gamma : beta],
        presetPoints = [alpha, beta];
  crostab.side = fluoVector.call(MUTATE, crostab.side, presetLabels);
  crostab.head = fluoVector.call(MUTATE, crostab.head, presetLabels);
  crostab.rows = fluoMatrix.call(MUTATE, crostab.rows, config.direct, presetPoints); // use: direct, presets

  return crostab;
};
const _decoCrostab = function (crostab) {
  var _crostab$head, _crostab$side;

  if (!crostab) return AEU;
  const config = this;
  const [height, width] = size(crostab.rows),
        labelWidth = (_crostab$head = crostab.head) === null || _crostab$head === void 0 ? void 0 : _crostab$head.length,
        labelHeight = (_crostab$side = crostab.side) === null || _crostab$side === void 0 ? void 0 : _crostab$side.length;
  if (!height || !width || !labelWidth || !labelHeight) return AEU;
  crostab = crostabMargin(crostab, config); // use: top, bottom, left, right, height, width, read, sideRead, headRead

  crostab = crostabPadder(crostab, config); // use: ansi, fullAngle

  crostab = crostabVerbal(crostab, config); // use: d

  const lines = acquire([crostab.title + VLINE + crostab.head.join(VLINE), crostab.rule.join(HCONN)], zipper(crostab.side, crostab.rows, (s, r) => s + VLINE + r.join(VLINE)));
  return liner(lines, config); // use: discrete, delim, level
};

/**
 * @typedef {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} Preset
 */

/**
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim='\n']
 * @param {number} [p.bracket=NONE] - currently not functional, keeps for future fix
 *
 * @param {Function} [p.read]
 * @param {Function} [p.headRead]
 * @param {Function} [p.sideRead]
 *
 * @param {Object|Object[]} [p.presets=[FRESH,JUNGLE,SUBTLE]]
 * @param {number} [p.direct=POINTWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]
 *
 * @param {boolean} [p.ansi=true]
 * @param {boolean} [p.fullAngle]
 * @param {number} [p.level=0]
 *
 * @returns {string}
 */

const Deco = (p = {}) => _decoCrostab.bind(presetCrostab(p));
/**
 *
 * @param {Object} crostab
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim='\n']
 *  - currently not functional, keeps for future fix
 * @param {number} [p.bracket=NONE] - currently not functional, keeps for future fix
 *
 * @param {Function} [p.read]
 * @param {Function} [p.headRead]
 * @param {Function} [p.sideRead]
 *
* @param {Object|Object[]} [p.presets=[FRESH, JUNGLE]]
 * @param {Object} [p.labelPreset=SUBTLE]
 * @param {number} [p.direct=POINTWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]
 *
 * @param {boolean} [p.ansi=true]
 * @param {boolean} [p.fullAngle]
 * @param {number} [p.level=0]
 *
 * @returns {string}
 */

const deco = (crostab, p = {}) => _decoCrostab.call(presetCrostab(p), crostab);

export { Deco, _decoCrostab, deco };
