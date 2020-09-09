import { presetTable } from '@spare/preset-deco';
import { fluoMatrix } from '@palett/fluo-matrix';
import { fluoVector } from '@palett/fluo-vector';
import { AEU } from '@spare/enum-chars';
import { liner } from '@spare/liner';
import { mattro } from '@spare/mattro';
import { padTable } from '@spare/pad-table';
import { vettro } from '@spare/vettro';
import { size } from '@vect/matrix';

const cosmetics = function (table) {
  if (!table) return AEU;
  let matrix = table.rows || table.matrix,
      banner = table.head || table.banner;
  const [height, width] = size(matrix),
        labelWidth = banner && banner.length;
  if (!height || !width || !labelWidth) return AEU;
  const {
    direct,
    read,
    headRead,
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
  const [x, b] = [mattro(matrix, {
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
  })];
  let dyeX, dyeB;

  if (presets) {
    const COLORANT = {
      colorant: true
    };
    const [numeralPreset,, headingPreset] = presets;
    dyeX = fluoMatrix.call(COLORANT, x.raw, direct, presets);
    dyeB = fluoVector.call(COLORANT, b.raw, [numeralPreset, headingPreset]);
  }

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
  const lines = [head.join(' | '), hr.join('-+-')].concat(rows.map(row => row.join(' | ')));
  return liner(lines, {
    discrete,
    delim,
    level
  });
};

/**
 * @typedef {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} Preset
 */

/***
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=',\n']
 *  - currently not functional, keeps for future fix
 * @param {boolean|number} [p.bracket] - currently not functional, keeps for future fix
 *
 * @param {Function} [p.read]
 * @param {Function} [p.headRead]
 *
* @param {Object|Object[]} [p.presets=[FRESH, JUNGLE]]
 * @param {Object} [p.labelPreset=SUBTLE]
 * @param {number} [p.direct=COLUMNWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]

 * @param {boolean} [p.ansi=true]
 * @param {boolean} [p.fullAngle]
 * @param {number} [p.level=0]
 *
 * @returns {string}
 */

const Deco = (p = {}) => cosmetics.bind(presetTable(p));
/***
 *
 * @param {Object} table
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=',\n']
 *  - currently not functional, keeps for future fix
 * @param {boolean|number} [p.bracket] - currently not functional, keeps for future fix
 *
 * @param {Function} [p.read]
 * @param {Function} [p.headRead]
 *
* @param {Object|Object[]} [p.presets=[FRESH, JUNGLE]]
 * @param {Object} [p.labelPreset=SUBTLE]
 * @param {number} [p.direct=COLUMNWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]

 * @param {boolean} [p.ansi=true]
 * @param {boolean} [p.fullAngle]
 * @param {number} [p.level=0]
 *
 * @returns {string}
 */

const deco = (table, p = {}) => cosmetics.call(presetTable(p), table);

export { Deco, cosmetics, deco };
