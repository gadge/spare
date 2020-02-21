import { lange } from '@spare/lange';
import { RN, TB } from '@spare/util';
import { SYM, UND, BOO, FUN, BIG, NUM, OBJ, STR, SET, MAP, OBJECT, ARRAY } from '@typen/enums';
import { isNumeric } from '@typen/num-loose';
import { mutate } from '@vect/entries-mapper';
import { ColumnMutate } from '@vect/column-mapper';
import { fluoVector } from '@palett/fluo-vector';
import { fluoEntries } from '@palett/fluo-entries';
import { LPad } from '@spare/pad-string';
import { typ } from '@typen/typ';
import { hslToRgb, hexToRgb, hslToHex } from '@palett/convert';
import { Dye } from '@palett/dye';
import { mapper } from '@vect/object-mapper';
import { Cards } from '@palett/cards';

var _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8;
const L = '{ ',
      R = ' }';
const Tubes = {
  0: Dye((_ref = [45, 100, 53], hslToRgb(_ref))),
  1: Dye((_ref2 = [44, 100, 59], hslToRgb(_ref2))),
  2: Dye((_ref3 = [43, 100, 64], hslToRgb(_ref3))),
  3: Dye((_ref4 = [42, 100, 70], hslToRgb(_ref4))),
  4: Dye((_ref5 = [41, 100, 74], hslToRgb(_ref5))),
  5: Dye((_ref6 = [40, 100, 78], hslToRgb(_ref6))),
  6: Dye((_ref7 = [39, 100, 82], hslToRgb(_ref7))),
  7: Dye((_ref8 = [37, 100, 86], hslToRgb(_ref8)))
};
const Puncs = mapper(Tubes, hsl => {
  var _L, _R;

  return [(_L = L, hsl(_L)), (_R = R, hsl(_R))];
});
const BRC = mapper(Puncs, ([L, R]) => content => L + content + R);

var _ref$1, _ref2$1, _ref3$1, _ref4$1, _ref5$1, _ref6$1, _ref7$1, _ref8$1;
const L$1 = '[ ',
      R$1 = ' ]';
const Tubes$1 = {
  0: Dye((_ref$1 = [199, 100, 63], hslToRgb(_ref$1))),
  1: Dye((_ref2$1 = [201, 100, 68], hslToRgb(_ref2$1))),
  2: Dye((_ref3$1 = [203, 100, 72], hslToRgb(_ref3$1))),
  3: Dye((_ref4$1 = [205, 100, 76], hslToRgb(_ref4$1))),
  5: Dye((_ref5$1 = [207, 100, 84], hslToRgb(_ref5$1))),
  4: Dye((_ref6$1 = [209, 100, 80], hslToRgb(_ref6$1))),
  6: Dye((_ref7$1 = [211, 100, 88], hslToRgb(_ref7$1))),
  7: Dye((_ref8$1 = [214, 100, 90], hslToRgb(_ref8$1)))
};
const Puncs$1 = mapper(Tubes$1, dye => {
  var _L, _R;

  return [(_L = L$1, dye(_L)), (_R = R$1, dye(_R))];
});
const BRK = mapper(Puncs$1, ([L, R]) => content => L + content + R);

var _Cards$brown$lighten_, _Cards$lightGreen$acc, _Cards$deepOrange$acc, _Cards$teal$lighten_, _Cards$brown$lighten_2, _Cards$blue$accent_, _Cards$amber$base, _Cards$green$accent_;
/**
 *
 * @type {Object<string,function>}
 */

const PAL = {
  IDX: Dye((_Cards$brown$lighten_ = Cards.brown.lighten_5, hexToRgb(_Cards$brown$lighten_))),
  STR: Dye((_Cards$lightGreen$acc = Cards.lightGreen.accent_2, hexToRgb(_Cards$lightGreen$acc))),
  NUM: Dye((_Cards$deepOrange$acc = Cards.deepOrange.accent_2, hexToRgb(_Cards$deepOrange$acc))),
  BOO: Dye((_Cards$teal$lighten_ = Cards.teal.lighten_2, hexToRgb(_Cards$teal$lighten_))),
  UDF: Dye((_Cards$brown$lighten_2 = Cards.brown.lighten_3, hexToRgb(_Cards$brown$lighten_2))),
  BRK: Dye((_Cards$blue$accent_ = Cards.blue.accent_2, hexToRgb(_Cards$blue$accent_))),
  BRC: Dye((_Cards$amber$base = Cards.amber.base, hexToRgb(_Cards$amber$base))),
  FNC: Dye((_Cards$green$accent_ = Cards.green.accent_4, hexToRgb(_Cards$green$accent_)))
};

var _ref$2, _ref2$2, _ref3$2, _ref4$2, _ref5$2, _ref6$2, _ref7$2, _ref8$2;
const IDXSigns = {
  0: Dye((_ref$2 = [20, 16, 93], hslToRgb(_ref$2))),
  1: Dye((_ref2$2 = [18, 18, 88], hslToRgb(_ref2$2))),
  2: Dye((_ref3$2 = [17, 20, 83], hslToRgb(_ref3$2))),
  3: Dye((_ref4$2 = [16, 22, 78], hslToRgb(_ref4$2))),
  4: Dye((_ref5$2 = [15, 24, 73], hslToRgb(_ref5$2))),
  5: Dye((_ref6$2 = [14, 26, 69], hslToRgb(_ref6$2))),
  6: Dye((_ref7$2 = [14, 28, 65], hslToRgb(_ref7$2))),
  7: Dye((_ref8$2 = [13, 28, 61], hslToRgb(_ref8$2)))
};
const IDX = {
  0: {
    max: hslToHex([75, 90, 85]),
    min: hslToHex([89, 99, 72]),
    na: Cards.grey.lighten_4
  },
  1: {
    max: hslToHex([80, 88, 87]),
    min: hslToHex([83, 98, 71]),
    na: Cards.grey.lighten_4
  },
  2: {
    max: hslToHex([93, 87, 82]),
    min: hslToHex([93, 97, 70]),
    na: Cards.grey.lighten_3
  },
  3: {
    max: hslToHex([103, 86, 82]),
    min: hslToHex([103, 96, 69]),
    na: Cards.grey.lighten_2
  },
  4: {
    max: hslToHex([113, 85, 82]),
    min: hslToHex([113, 95, 68]),
    na: Cards.grey.lighten_1
  },
  5: {
    max: hslToHex([123, 84, 82]),
    min: hslToHex([123, 94, 68]),
    na: Cards.grey.base
  },
  6: {
    max: hslToHex([133, 83, 82]),
    min: hslToHex([133, 93, 68]),
    na: Cards.grey.darken_1
  },
  7: {
    max: hslToHex([143, 82, 82]),
    min: hslToHex([143, 92, 68]),
    na: Cards.grey.darken_2
  }
};

const keysMutate = ColumnMutate(0);
const lpad = LPad({
  ansi: true
});
/**
 *
 * @param {*} node
 * @param {number} [lv]
 * @return {string}
 */

function deNode(node, lv = 0) {
  switch (typeof node) {
    case STR:
      return isNumeric(node) ? node : PAL.STR(node);

    case OBJ:
      return deOb.call(this, node, lv);

    case NUM:
    case BIG:
      return node;

    case FUN:
      return deFn.call(this, node);

    case BOO:
      return PAL.BOO(node);

    case UND:
    case SYM:
      return PAL.UDF(node);
  }
}
const deOb = function (node, lv) {
  var _node, _deAr$call, _deEn$call, _deEn$call2;

  const {
    hi,
    tb
  } = this;
  this.rn = RN + tb.repeat(lv);

  switch (_node = node, typ(_node)) {
    case ARRAY:
      return lv >= hi ? '[array]' : (_deAr$call = deAr.call(this, node, lv), BRK[lv & 7](_deAr$call));

    case OBJECT:
      return lv >= hi ? '{object}' : (_deEn$call = deEn.call(this, Object.entries(node), lv), BRC[lv & 7](_deEn$call));

    case MAP:
      return lv >= hi ? '(map)' : (_deEn$call2 = deEn.call(this, [...node.entries()], lv), BRK[lv & 7](_deEn$call2));

    case SET:
      return lv >= hi ? '(set)' : `set:[${deAr.call(this, [...node], lv)}]`;

    default:
      return `${node}`;
  }
};
let deAr = function (arr, lv) {
  let {
    rn,
    tb,
    al
  } = this,
      cap = 0,
      wrap = false;
  arr = arr.map(v => {
    v = String(deNode.call(this, v, lv + 1));
    if (!wrap && (cap += lange(v)) > al) wrap = true;
    return v;
  });
  fluoVector(arr, {
    mutate: true
  });
  return wrap ? `${rn}  ${arr.join(`,${rn + tb}`)}${rn}` : arr.join(',');
};
let deEn = function (entries, lv) {
  const {
    vo,
    rn,
    tb
  } = this;
  let pad = 0,
      cap = 0,
      wrap = lv < vo,
      kw,
      vw;
  mutate(entries, k => {
    if ((kw = lange(k = String(k))) > pad) pad = kw;
    if (!wrap && (cap += pad) > 48) wrap = true;
    return k;
  }, v => {
    v = String(deNode.call(this, v, lv + 1));
    if (!wrap && (cap += vw = lange(v)) > 48) wrap = true;
    return v;
  });
  if (wrap) keysMutate(entries, k => lpad(k, pad), entries.length);
  entries = fluoEntries(entries, {
    mutate: true,
    stringPreset: IDX[lv & 7]
  }).map(([k, v]) => `${k}: ${v}`);
  return wrap ? `${rn}  ${entries.join(`,${rn + tb}`)}${rn}` : entries.join(', ');
};
const deFn = function (fn) {
  var _fn;

  // const result = 'simple_lambda(x) => "".concat(x);'
  // const reg = /{[\s]+(return)/g
  // reg.exec(`${fn}`).map(it => `(${it})`)|> logger
  fn = (fn = `${fn}`).startsWith('function') ? fn.slice(9) : fn;
  return _fn = fn, PAL.FNC(_fn);
};

/**
 *
 * @param {*} ob
 * @param {number} [hi] - maximum level of object to show detail
 * @param {number} [vo] - maximum level to force vertical for object, root level = 0
 * @param {number} [al] - maximum string length to hold array contents
 * @returns {string|number}
 */

const deco = (ob, {
  hi = 8,
  vo = 0,
  al = 64
} = {}) => deNode.call({
  hi,
  vo,
  al,
  tb: TB
}, ob);
const deca = ({
  hi = 8,
  vo = 0,
  al = 64
} = {}) => deNode.bind({
  hi,
  vo,
  al,
  tb: TB
});

const delogger = x => {
  var _x;

  return void console.log((_x = x, deco(_x)));
};
const delogNeL = x => {
  var _x2;

  return void console.log((_x2 = x, deco(_x2)), '\n');
};

export { deNode, deca, deco, delogNeL, delogger };
