import { DecoConfig } from '@spare/deco-config';
import { TRI_PRESET_COLLECTION } from '@spare/preset-deco';
import { decoFlat } from '@spare/deco-flat';
import { LF, AEU } from '@spare/enum-chars';
import { POINTWISE } from '@vect/enum-matrix-directions';
import { fluoMatrix } from '@palett/fluo-matrix';
import { fluoVector } from '@palett/fluo-vector';
import { crostabMargin } from '@spare/crostab-margin';
import { crostabPadder } from '@spare/crostab-padder';
import { liner } from '@spare/liner';
import { size } from '@vect/matrix';
import { acquire } from '@vect/vector-merge';
import { zipper } from '@vect/vector-zipper';

const CONFIG = {
  delim: LF,
  read: decoFlat,
  ansi: true,
  direct: POINTWISE
};

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
  const presetLabels = [alpha, gamma ?? beta],
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
        labelWidth = (_crostab$head = crostab.head) == null ? void 0 : _crostab$head.length,
        labelHeight = (_crostab$side = crostab.side) == null ? void 0 : _crostab$side.length;
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

const Deco = (p = {}) => _decoCrostab.bind(DecoConfig.parse(p, CONFIG, TRI_PRESET_COLLECTION));
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

const deco = (crostab, p = {}) => _decoCrostab.call(DecoConfig.parse(p, CONFIG, TRI_PRESET_COLLECTION), crostab);

export { Deco, _decoCrostab, deco };
