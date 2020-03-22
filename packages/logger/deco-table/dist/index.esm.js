import { size } from '@vect/matrix';
import { AEU } from '@spare/enum-chars';
import { vettro } from '@spare/vettro';
import { mattro } from '@spare/mattro';
import { fluoVector } from '@palett/fluo-vector';
import { fluoMatrix } from '@palett/fluo-matrix';
import { padTable } from '@spare/pad-table';
import { liner } from '@spare/deco-util';
import { presetTable } from '@spare/preset-deco';

const cosmetics = function (table) {
  let matrix = table.rows || table.matrix,
      banner = table.head || table.banner;
  const [height, width] = size(matrix),
        labelWidth = banner && banner.length;
  if (!height || !width || !labelWidth) return AEU;
  const {
    direct,
    read,
    headRead,
    preset,
    stringPreset,
    labelPreset,
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
  const [dyeX, dyeB] = [preset && fluoMatrix(x.raw, {
    direct,
    preset,
    stringPreset,
    colorant: true
  }), labelPreset && fluoVector(b.raw, {
    preset: labelPreset,
    stringPreset: labelPreset,
    colorant: true
  })];
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
 * @param {Object} options
 * @param {Function} [options.read]
 * @param {Function} [options.headRead]
 * @param {Object} [options.preset=FRESH]
 * @param {Object} [options.stringPreset=JUNGLE]
 * @param {Object} [options.labelPreset=SUBTLE]
 * @param {number} [options.direct=COLUMNWISE]
 * @param {number} [options.top]
 * @param {number} [options.bottom]
 * @param {number} [options.left]
 * @param {number} [options.right]
 * @param {boolean} [options.discrete]
 * @param {string} [options.delim=',\n']
 * @param {string} [options.quote] - currently not functional, keeps for future fix
 * @param {boolean} [options.quote] - currently not functional, keeps for future fix
 * @param {boolean} [options.ansi=true]
 * @param {boolean} [options.fullAngle]
 * @param {number} [options.level=0]
 * @returns {string}
 */

const Deco = (options = {}) => cosmetics.bind(presetTable(options));
/***
 *
 * @param {Object} table
 * @param {Object} options
 * @param {Function} [options.read]
 * @param {Function} [options.headRead]
 * @param {Object} [options.preset=FRESH]
 * @param {Object} [options.stringPreset=JUNGLE]
 * @param {Object} [options.labelPreset=SUBTLE]
 * @param {number} [options.direct=COLUMNWISE]
 * @param {number} [options.top]
 * @param {number} [options.bottom]
 * @param {number} [options.left]
 * @param {number} [options.right]
 * @param {boolean} [options.discrete]
 * @param {string} [options.delim=',\n']
 * @param {string} [options.quote] - currently not functional, keeps for future fix
 * @param {boolean} [options.quote] - currently not functional, keeps for future fix
 * @param {boolean} [options.ansi=true]
 * @param {boolean} [options.fullAngle]
 * @param {number} [options.level=0]
 * @returns {string}
 */

const deco = (table, options = {}) => cosmetics.call(presetTable(options), table);

export { Deco, cosmetics, deco };
