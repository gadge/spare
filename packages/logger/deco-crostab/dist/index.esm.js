import { DASH, AEU } from '@spare/enum-chars';
import { vettro } from '@spare/vettro';
import { mattro } from '@spare/mattro';
import { padTable } from '@spare/pad-table';
import { fluoVector } from '@palett/fluo-vector';
import { fluo } from '@palett/fluo-matrix';
import { zipper } from '@vect/vector-zipper';
import { size, POINTWISE } from '@vect/matrix';
import { DASH as DASH$1, SP } from '@spare/enum-full-angle-chars';
import { hasChn, toFullAngle } from '@spare/string';
import { Lange } from '@spare/lange';
import { LPad, RPad } from '@spare/pad-string';
import { max } from '@aryth/comparer';
import { maxBy } from '@vect/vector-indicator';
import { mapper } from '@vect/vector-mapper';
import { liner, presetCrostabOptions } from '@spare/deco-util';

const padSide = (side, title, {
  dye,
  ansi,
  fullAngle
} = {}) => {
  if (fullAngle) return padSideFullAngle(side, title, ansi);
  const lpad = LPad({
    ansi
  }),
        rpad = RPad({
    ansi
  }),
        lange = Lange(ansi);
  const pad = max(lange(title), maxBy(side, lange));
  return {
    title: rpad(title, pad),
    hr: DASH.repeat(pad),
    side: dye ? zipper(side, dye, (x, d) => {
      var _lpad;

      return _lpad = lpad(x, pad), d(_lpad);
    }) : mapper(side, x => lpad(x, pad))
  };
};
const padSideFullAngle = (side, title, {
  dye,
  ansi,
  dash = DASH$1,
  fill = SP
} = {}) => {
  const cn = hasChn(title) || side.some(hasChn);
  if (!cn) return padSide(side, title, {
    ansi
  });
  const lpad = LPad({
    ansi,
    fill
  }),
        rpad = RPad({
    ansi,
    fill
  }),
        lange = Lange(ansi);
  const pad = max(lange(title), maxBy(side, lange));
  return {
    title: rpad(toFullAngle(title), pad),
    hr: dash.repeat(pad),
    side: dye ? zipper(side, dye, (x, d) => {
      var _lpad2;

      return _lpad2 = lpad(toFullAngle(x), pad), d(_lpad2);
    }) : mapper(side, x => lpad(toFullAngle(x), pad))
  };
};

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
    direct = POINTWISE,
    abstract,
    bannerAbstract,
    sideAbstract,
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
  const [x, b, s] = [mattro(matrix, {
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
    abstract: bannerAbstract
  }), vettro(stand, {
    head: top,
    tail: bottom,
    abstract: sideAbstract
  })];
  const [dyeX, dyeB, dyeS] = [preset && fluo(x.raw, {
    direct,
    preset,
    stringPreset,
    colorant: true
  }), labelPreset && fluoVector(b.raw, {
    preset: labelPreset,
    stringPreset: labelPreset,
    colorant: true
  }), labelPreset && fluoVector(s.raw, {
    preset: labelPreset,
    stringPreset: labelPreset,
    colorant: true
  })];
  let {
    title,
    hr: br,
    side
  } = padSide(s.text, name, {
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
 * @param {Object} options
 * @param {number} [options.direct=ROWWISE] - pointwise = 0, rowwise = 1, columnwise = 2
 * @param {function(*):string} [options.abstract]
 * @param {function(*):string} [options.headAbstract]
 * @param {function(*):string} [options.sideAbstract]
 * @param {Preset} [options.preset=FRESH]
 * @param {Preset} [options.stringPreset=JUNGLE]
 * @param {Preset} [options.labelPreset]
 * @param {number} [options.top]
 * @param {number} [options.bottom]
 * @param {number} [options.left]
 * @param {number} [options.right]
 * @param {string} [options.delim=',\n']
 * @param {string} [options.quote] - currently not functional, keeps for future fix
 * @param {boolean} [options.bracket] - currently not functional, keeps for future fix
 * @param {boolean} [options.ansi]
 * @param {boolean} [options.fullAngle]
 * @returns {string}
 */

const Deco = (options = {}) => cosmetics.bind(presetCrostabOptions(options));
/**
 *
 * @param {Object} crostab
 * @param {Object} options
 * @param {number} [options.direct=ROWWISE] - pointwise = 0, rowwise = 1, columnwise = 2
 * @param {function(*):string} [options.abstract]
 * @param {function(*):string} [options.headAbstract]
 * @param {function(*):string} [options.sideAbstract]
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
 * @returns {string}
 */

const deco = (crostab, options = {}) => cosmetics.call(presetCrostabOptions(options), crostab);

export { Deco, cosmetics, deco };
