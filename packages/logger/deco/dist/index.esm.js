import { STR, NUM, BIG, OBJ, FUN as FUN$1, BOO, UND, SYM } from '@typen/enum-data-types';
import { ARRAY, OBJECT, MAP, SET } from '@typen/enum-object-types';
import { isNumeric } from '@typen/num-loose';
import { fluoVector } from '@palett/fluo-vector';
import { fluoEntries } from '@palett/fluo-entries';
import { typ } from '@typen/typ';
import { mutate as mutate$2 } from '@vect/entries-mapper';
import { mutate as mutate$1, iterate } from '@vect/vector-mapper';
import { hslToRgb, hexToRgb, hslToHex } from '@palett/convert';
import { Dye } from '@palett/dye';
import { mapper } from '@vect/object-mapper';
import { Cards } from '@palett/cards';
import { lange } from '@spare/lange';
import { max } from '@aryth/comparer';
import { LPad } from '@spare/pad-string';
import { mutate } from '@vect/column-mapper';
import { TB, LF } from '@spare/util';
import { FUN } from '@typen/enums';

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
const brc = content => L + content + R;

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
const brk = content => L$1 + content + R$1;

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

const joinVector = (list, lv) => {
  const rn = LF + TB.repeat(lv);
  return `${rn}  ${list.join(`,${rn + TB}`)}${rn}`;
};

const lpad = LPad({
  ansi: true
});
const stringifyEntries = function (entries, lv) {
  const {
    vo
  } = this,
        {
    pad,
    wrap
  } = wrapInfo.call(this, entries);
  if (wrap || lv < vo) mutate(entries, 0, k => lpad(k, pad));
  mutate$1(entries, ([k, v]) => `${k}: ${v}`);
  return (wrap || lv < vo) && entries.length > 1 ? joinVector(entries, lv) : entries.join(', ');
};
const wrapInfo = function (entries) {
  const {
    wo
  } = this;
  let w = 0,
      wrap = false,
      pad = 0;
  iterate(entries, ([k, v]) => {
    k = lange(k), v = lange(v), pad = max(k, pad);
    if (!wrap && (w += k + v) > wo) wrap = true;
  });
  return {
    pad,
    wrap
  };
};

const stringifyVector = function (vector, lv) {
  const {
    va,
    wa
  } = this;
  if (lv < va) return joinVector(vector, lv);
  let rows = [],
      w = 0,
      row = [];
  iterate(vector, item => {
    row.push(item), w += lange(item);
    if (w > wa) rows.push(row.join(', ')), row = [], w = 0;
  });
  return rows.length > 1 ? joinVector(rows, lv) : vector.join(', ');
};

const deFn = function (fn) {
  let {
    wf,
    color
  } = this,
      des = `${fn}`;
  if (wf <= 128) des = des.replace(/\s+/g, ' ');
  if (des.startsWith(FUN)) des = des.slice(9);
  des = toLambda(des);
  if (des.length > wf) des = Object.prototype.toString.call(fn);
  return color ? PAL.FNC(des) : des;
};
const LB = '{ return',
      RB = '}',
      ARROW = '=>';
const toLambda = des => {
  const li = des.indexOf(LB),
        ri = des.lastIndexOf(RB);
  return li && ri ? des.slice(0, li) + ARROW + des.slice(li + LB.length, ri) : des;
};

function deNode(node, lv = 0) {
  return this.pr ? deNodePretty.call(this, node, lv) : deNodePlain.call(this, node, lv);
}
/**
 *
 * @param {*} node
 * @param {number} [lv]
 * @return {string}
 */

function deNodePretty(node, lv = 0) {
  const t = typeof node;
  if (t === STR) return isNumeric(node) ? node : PAL.STR(node);
  if (t === NUM || t === BIG) return node;

  if (t === OBJ) {
    var _deVe$call, _deEn$call, _deEn$call2;

    const {
      hi
    } = this,
          pt = typ(node);
    if (pt === ARRAY) return lv >= hi ? '[array]' : (_deVe$call = deVe.call(this, node.slice(), lv), BRK[lv & 7](_deVe$call));
    if (pt === OBJECT) return lv >= hi ? '{object}' : (_deEn$call = deEn.call(this, Object.entries(node), lv), BRC[lv & 7](_deEn$call));
    if (pt === MAP) return lv >= hi ? '(map)' : (_deEn$call2 = deEn.call(this, [...node.entries()], lv), BRK[lv & 7](_deEn$call2));
    if (pt === SET) return lv >= hi ? '(set)' : `set:[${deVe.call(this, [...node], lv)}]`;
    return `${node}`;
  }

  if (t === FUN$1) return deFn.call(this, node);
  if (t === BOO) return PAL.BOO(node);
  if (t === UND || t === SYM) return PAL.UDF(node);
}
function deNodePlain(node, lv = 0) {
  const t = typeof node;

  if (t === OBJ) {
    var _deVe$call2, _deEn$call3, _deEn$call4;

    const {
      hi
    } = this,
          pt = typ(node);
    if (pt === ARRAY) return lv >= hi ? '[array]' : (_deVe$call2 = deVe.call(this, node.slice(), lv), brk(_deVe$call2));
    if (pt === OBJECT) return lv >= hi ? '{object}' : (_deEn$call3 = deEn.call(this, Object.entries(node), lv), brc(_deEn$call3));
    if (pt === MAP) return lv >= hi ? '(map)' : (_deEn$call4 = deEn.call(this, [...node.entries()], lv), brk(_deEn$call4));
    if (pt === SET) return lv >= hi ? '(set)' : `set:[${deVe.call(this, [...node], lv)}]`;
    return `${node}`;
  }

  if (t === FUN$1) return deFn.call(this, node);
  return node;
}
let deVe = function (vector, lv) {
  mutate$1(vector, v => String(deNode.call(this, v, lv + 1)));
  if (this.color) fluoVector(vector, {
    mutate: true
  });
  return stringifyVector.call(this, vector, lv);
};
let deEn = function (entries, lv) {
  mutate$2(entries, k => String(k), v => String(deNode.call(this, v, lv + 1)));
  if (this.color) fluoEntries(entries, {
    stringPreset: IDX[lv & 7],
    mutate: true
  });
  return stringifyEntries.call(this, entries, lv);
};

/**
 *
 * @param {*} ob
 * @param {number} [hi] - maximum level of object to show detail
 * @param {number} [va] - maximum level to force vertical for array, root level = 0
 * @param {number} [vo] - maximum level to force vertical for object, root level = 0
 * @param {number} [wa] - maximum string length to hold array contents without wrap
 * @param {number} [wo] - maximum string length to hold object contents without wrap
 * @param {number} [wf] - maximum string length to hold function contents
 * @param {boolean} [color=true]
 * @returns {string|number}
 */

const deco = (ob, {
  hi = 8,
  va = 0,
  vo = 0,
  wa = 32,
  wo = 64,
  wf = 64,
  pr = true
} = {}) => pr ? deNode.call({
  hi,
  va,
  vo,
  wa,
  wo,
  wf,
  pr
}, ob) : deNode.call({
  hi,
  va,
  vo,
  wa,
  wo,
  wf,
  pr
}, ob);
const deca = ({
  hi = 8,
  va = 0,
  vo = 0,
  wa = 32,
  wo = 64,
  wf = 64,
  pr = true
} = {}) => pr ? deNode.bind({
  hi,
  va,
  vo,
  wa,
  wo,
  wf,
  pr
}) : deNode.bind({
  hi,
  va,
  vo,
  wa,
  wo,
  wf,
  pr
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
