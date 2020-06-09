import { presetCrostab } from '@spare/preset-deco';
import { COLORANT } from '@palett/enum-colorant-modes';
import { fluo } from '@palett/fluo-matrix';
import { fluoVec } from '@palett/fluo-vector';
import { AEU } from '@spare/enum-chars';
import { liner } from '@spare/liner';
import { mattro } from '@spare/mattro';
import { padKeyedColumn } from '@spare/pad-keyed-column';
import { padTable } from '@spare/pad-table';
import { vettro } from '@spare/vettro';
import { size } from '@vect/matrix';
import { zipper } from '@vect/vector-zipper';

const VLINE = ' | ',
      HCONN = '-+-';

const cosmetics = function (crostab) {
  let matrix = crostab.rows || crostab.matrix,
      banner = crostab.head || crostab.banner,
      stand = crostab.side,
      name = crostab.title || '';
  const [height, width] = size(matrix),
        labelWidth = banner && banner.length,
        labelHeight = stand && stand.length;
  if (!height || !width || !labelWidth || !labelHeight) return AEU;
  const {
    direct,
    read,
    headRead,
    sideRead,
    presets,
    top,
    left,
    bottom,
    right,
    ansi,
    fullAngle,
    discrete,
    delim,
    level
  } = this;
  const [x, b, s] = [mattro(matrix, {
    top,
    bottom,
    left,
    right,
    height,
    width,
    read
  }), vettro(banner, {
    head: left,
    tail: right,
    read: headRead
  }), vettro(stand, {
    head: top,
    tail: bottom,
    read: sideRead
  })];
  let dyeX, dyeB, dyeS;

  if (presets) {
    const [numericPreset,, headingPreset] = presets,
          labelPresets = [numericPreset, headingPreset];
    dyeX = fluo.call(COLORANT, x.raw, direct, presets);
    dyeB = fluoVec.call(COLORANT, b.raw, labelPresets);
    dyeS = fluoVec.call(COLORANT, s.raw, labelPresets);
  }

  let {
    title,
    hr: br,
    side
  } = padKeyedColumn(s.text, name, {
    dye: dyeS,
    fullAngle
  });
  let {
    head,
    hr,
    rows
  } = padTable(x.text, b.text, {
    raw: x.raw,
    dye: dyeX,
    headDye: dyeB,
    ansi,
    fullAngle
  });
  const lines = [title + VLINE + head.join(VLINE), br + HCONN + hr.join(HCONN)].concat(zipper(side, rows, (sd, row) => sd + VLINE + row.join(VLINE)));
  return liner(lines, {
    discrete,
    delim,
    level
  });
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
 *  - currently not functional, keeps for future fix
 * @param {number} [p.bracket=NONE] - currently not functional, keeps for future fix
 *
 * @param {Function} [p.read]
 * @param {Function} [p.headRead]
 * @param {Function} [p.sideRead]
 *
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=JUNGLE]
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

const Deco = (p = {}) => cosmetics.bind(presetCrostab(p));
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
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=JUNGLE]
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

const deco = (crostab, p = {}) => cosmetics.call(presetCrostab(p), crostab);

export { Deco, cosmetics, deco };
