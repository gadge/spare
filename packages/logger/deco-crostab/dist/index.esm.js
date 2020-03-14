import { FRESH, JUNGLE, SUBTLE } from '@palett/presets';
import { size, POINTWISE } from '@vect/matrix';
import { DASH, SPACE, AEU, RN } from '@spare/util';
import { vettro } from '@spare/vettro';
import { mattro } from '@spare/mattro';
import { padTable } from '@spare/pad-table';
import { fluoVector } from '@palett/fluo-vector';
import { fluo } from '@palett/fluo-matrix';
import { zipper } from '@vect/vector-zipper';
import { hasChn, toFullAngle } from '@spare/string';
import { Lange } from '@spare/lange';
import { LPad, RPad } from '@spare/pad-string';
import { max } from '@aryth/comparer';
import { maxBy } from '@vect/vector-indicator';
import { mapper } from '@vect/vector-mapper';

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
    hr: '-'.repeat(pad),
    side: dye ? zipper(side, dye, (x, d) => {
      var _lpad;

      return _lpad = lpad(x, pad), d(_lpad);
    }) : mapper(side, x => lpad(x, pad))
  };
};
const padSideFullAngle = (side, title, {
  dye,
  ansi,
  dash = DASH,
  fill = SPACE
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

/**
 *
 * @param {Object} crostab
 * @returns {string}
 */

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
    preset = FRESH,
    stringPreset = JUNGLE,
    labelPreset = SUBTLE,
    top = 0,
    left = 0,
    bottom = 0,
    right = 0,
    ansi = false,
    fullAngle = false
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
  return [title + VLINE + head.join(VLINE), br + HCONN + hr.join(HCONN)].concat(zipper(side, rows, (sd, row) => sd + VLINE + row.join(VLINE))).join(RN);
};

/**
 *
 * @param {Object} crostab
 * @param {number} [direct] pointwise = 0, rowwise = 1, columnwise = 2
 * @param {function(*):string} [abstract]
 * @param {function(*):string} [bannerAbstract]
 * @param {function(*):string} [sideAbstract]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [preset]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [stringPreset]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [labelPreset]
 * @param {number} [top]
 * @param {number} [left]
 * @param {number} [bottom]
 * @param {number} [right]
 * @param {boolean} [ansi=false]
 * @param {boolean} [fullAngle=false]
 * @returns {string}
 */

const deco = (crostab, {
  direct = POINTWISE,
  abstract,
  bannerAbstract,
  sideAbstract,
  preset = FRESH,
  stringPreset = JUNGLE,
  labelPreset = SUBTLE,
  top = 0,
  left = 0,
  bottom = 0,
  right = 0,
  ansi = true,
  fullAngle = false
} = {}) => cosmetics.call({
  direct,
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
  fullAngle
}, crostab);

/**
 *
 * @param {number} [direct] pointwise = 0, rowwise = 1, columnwise = 2
 * @param {function(*):string} [abstract]
 * @param {function(*):string} [bannerAbstract]
 * @param {function(*):string} [sideAbstract]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [preset]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [stringPreset]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [labelPreset]
 * @param {number} [top]
 * @param {number} [left]
 * @param {number} [bottom]
 * @param {number} [right]
 * @param {boolean} [ansi=false]
 * @param {boolean} [fullAngle=false]
 * @returns {string}
 */

const Deco = ({
  direct = POINTWISE,
  abstract,
  bannerAbstract,
  sideAbstract,
  preset = FRESH,
  stringPreset = JUNGLE,
  labelPreset = SUBTLE,
  top = 0,
  left = 0,
  bottom = 0,
  right = 0,
  ansi = true,
  fullAngle = false
} = {}) => cosmetics.bind({
  direct,
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
  fullAngle
});

export { Deco, deco };
