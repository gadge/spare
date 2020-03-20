import { size } from '@vect/matrix';
import { AEU } from '@spare/enum-chars';
import { vettro } from '@spare/vettro';
import { mattro } from '@spare/mattro';
import { fluoVector } from '@palett/fluo-vector';
import { fluoMatrix } from '@palett/fluo-matrix';
import { padTable } from '@spare/pad-table';
import { liner, presetTableOptions } from '@spare/deco-util';

const cosmetics = function (table) {
  let matrix = table.rows || table.matrix,
      banner = table.head || table.banner;
  const [height, width] = size(matrix),
        labelWidth = banner && banner.length;
  if (!height || !width || !labelWidth) return AEU;
  const {
    direct,
    abstract,
    headAbstract,
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
    level
  } = this;
  const [x, b] = [mattro(matrix, {
    top,
    bottom,
    left,
    right,
    height,
    width,
    abstract
  }), vettro(banner, {
    head: left,
    tail: right,
    abstract: headAbstract
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
    level
  });
};

/**
 * @typedef {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} Preset
 */

/***
 *
 * @param {Object} options
 * @param {number} [options.direct=ROWWISE] - pointwise = 0, rowwise = 1, columnwise = 2
 * @param {function(*):string} [options.abstract]
 * @param {function(*):string} [options.headAbstract]
 * @param {Preset} [options.preset=FRESH]
 * @param {Preset} [options.stringPreset=JUNGLE]
 * @param {Preset} [options.labelPreset=SUBTLE]
 * @param {number} [options.top]
 * @param {number} [options.bottom]
 * @param {number} [options.left]
 * @param {number} [options.right]
 * @param {string} [options.delim=',\n']
 * @param {string} [options.quote] - currently not functional, keeps for future fix
 * @param {boolean} [options.bracket] - currently not functional, keeps for future fix
 * @param {boolean} [options.ansi]
 * @param {boolean} [options.fullAngle]
 * @param {boolean} [options.discrete]
 * @param {number} [options.level=0]
 * @returns {string}
 */

const Deco = (options = {}) => cosmetics.bind(presetTableOptions(options));
/***
 *
 * @param {Object} table
 * @param {Object} options
 * @param {number} [options.direct=ROWWISE] - pointwise = 0, rowwise = 1, columnwise = 2
 * @param {function(*):string} [options.abstract]
 * @param {function(*):string} [options.headAbstract]
 * @param {Preset} [options.preset=FRESH]
 * @param {Preset} [options.stringPreset=JUNGLE]
 * @param {Preset} [options.labelPreset=SUBTLE]
 * @param {number} [options.top]
 * @param {number} [options.bottom]
 * @param {number} [options.left]
 * @param {number} [options.right]
 * @param {string} [options.delim=',\n']
 * @param {string} [options.quote] - currently not functional, keeps for future fix
 * @param {boolean} [options.bracket] - currently not functional, keeps for future fix
 * @param {boolean} [options.ansi]
 * @param {boolean} [options.fullAngle]
 * @param {boolean} [options.discrete]
 * @param {number} [options.level=0]
 * @returns {string}
 */

const deco = (table, options = {}) => cosmetics.call(presetTableOptions(options), table);

export { Deco, cosmetics, deco };
