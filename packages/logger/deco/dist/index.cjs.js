'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumDataTypes = require('@typen/enum-data-types');
var enumObjectTypes = require('@typen/enum-object-types');
var numLoose = require('@typen/num-loose');
var typ = require('@typen/typ');
var fluoVector = require('@palett/fluo-vector');
var fluoEntries = require('@palett/fluo-entries');
var entriesMapper = require('@vect/entries-mapper');
var vectorMapper = require('@vect/vector-mapper');
var convert = require('@palett/convert');
var dye = require('@palett/dye');
var objectMapper = require('@vect/object-mapper');
var cards = require('@palett/cards');
var lange = require('@spare/lange');
var comparer = require('@aryth/comparer');
var padString = require('@spare/pad-string');
var decoUtil = require('@spare/deco-util');
var columnMapper = require('@vect/column-mapper');
var enums = require('@typen/enums');

var _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8;
const L = '{ ',
      R = ' }';
const Tubes = {
  0: dye.Dye((_ref = [45, 100, 53], convert.hslToRgb(_ref))),
  1: dye.Dye((_ref2 = [44, 100, 59], convert.hslToRgb(_ref2))),
  2: dye.Dye((_ref3 = [43, 100, 64], convert.hslToRgb(_ref3))),
  3: dye.Dye((_ref4 = [42, 100, 70], convert.hslToRgb(_ref4))),
  4: dye.Dye((_ref5 = [41, 100, 74], convert.hslToRgb(_ref5))),
  5: dye.Dye((_ref6 = [40, 100, 78], convert.hslToRgb(_ref6))),
  6: dye.Dye((_ref7 = [39, 100, 82], convert.hslToRgb(_ref7))),
  7: dye.Dye((_ref8 = [37, 100, 86], convert.hslToRgb(_ref8)))
};
const Puncs = objectMapper.mapper(Tubes, hsl => {
  var _L, _R;

  return [(_L = L, hsl(_L)), (_R = R, hsl(_R))];
});
const BRC = objectMapper.mapper(Puncs, ([L, R]) => content => L + content + R);
const brc = content => L + content + R;

var _ref$1, _ref2$1, _ref3$1, _ref4$1, _ref5$1, _ref6$1, _ref7$1, _ref8$1;
const L$1 = '[ ',
      R$1 = ' ]';
const Tubes$1 = {
  0: dye.Dye((_ref$1 = [199, 100, 63], convert.hslToRgb(_ref$1))),
  1: dye.Dye((_ref2$1 = [201, 100, 68], convert.hslToRgb(_ref2$1))),
  2: dye.Dye((_ref3$1 = [203, 100, 72], convert.hslToRgb(_ref3$1))),
  3: dye.Dye((_ref4$1 = [205, 100, 76], convert.hslToRgb(_ref4$1))),
  5: dye.Dye((_ref5$1 = [207, 100, 84], convert.hslToRgb(_ref5$1))),
  4: dye.Dye((_ref6$1 = [209, 100, 80], convert.hslToRgb(_ref6$1))),
  6: dye.Dye((_ref7$1 = [211, 100, 88], convert.hslToRgb(_ref7$1))),
  7: dye.Dye((_ref8$1 = [214, 100, 90], convert.hslToRgb(_ref8$1)))
};
const Puncs$1 = objectMapper.mapper(Tubes$1, dye => {
  var _L, _R;

  return [(_L = L$1, dye(_L)), (_R = R$1, dye(_R))];
});
const BRK = objectMapper.mapper(Puncs$1, ([L, R]) => content => L + content + R);
const brk = content => L$1 + content + R$1;

var _Cards$brown$lighten_, _Cards$lightGreen$acc, _Cards$deepOrange$acc, _Cards$teal$lighten_, _Cards$brown$lighten_2, _Cards$blue$accent_, _Cards$amber$base, _Cards$green$accent_;
/**
 *
 * @type {Object<string,function>}
 */

const PAL = {
  IDX: dye.Dye((_Cards$brown$lighten_ = cards.Cards.brown.lighten_5, convert.hexToRgb(_Cards$brown$lighten_))),
  STR: dye.Dye((_Cards$lightGreen$acc = cards.Cards.lightGreen.accent_2, convert.hexToRgb(_Cards$lightGreen$acc))),
  NUM: dye.Dye((_Cards$deepOrange$acc = cards.Cards.deepOrange.accent_2, convert.hexToRgb(_Cards$deepOrange$acc))),
  BOO: dye.Dye((_Cards$teal$lighten_ = cards.Cards.teal.lighten_2, convert.hexToRgb(_Cards$teal$lighten_))),
  UDF: dye.Dye((_Cards$brown$lighten_2 = cards.Cards.brown.lighten_3, convert.hexToRgb(_Cards$brown$lighten_2))),
  BRK: dye.Dye((_Cards$blue$accent_ = cards.Cards.blue.accent_2, convert.hexToRgb(_Cards$blue$accent_))),
  BRC: dye.Dye((_Cards$amber$base = cards.Cards.amber.base, convert.hexToRgb(_Cards$amber$base))),
  FNC: dye.Dye((_Cards$green$accent_ = cards.Cards.green.accent_4, convert.hexToRgb(_Cards$green$accent_)))
};

var _ref$2, _ref2$2, _ref3$2, _ref4$2, _ref5$2, _ref6$2, _ref7$2, _ref8$2;
const IDXSigns = {
  0: dye.Dye((_ref$2 = [20, 16, 93], convert.hslToRgb(_ref$2))),
  1: dye.Dye((_ref2$2 = [18, 18, 88], convert.hslToRgb(_ref2$2))),
  2: dye.Dye((_ref3$2 = [17, 20, 83], convert.hslToRgb(_ref3$2))),
  3: dye.Dye((_ref4$2 = [16, 22, 78], convert.hslToRgb(_ref4$2))),
  4: dye.Dye((_ref5$2 = [15, 24, 73], convert.hslToRgb(_ref5$2))),
  5: dye.Dye((_ref6$2 = [14, 26, 69], convert.hslToRgb(_ref6$2))),
  6: dye.Dye((_ref7$2 = [14, 28, 65], convert.hslToRgb(_ref7$2))),
  7: dye.Dye((_ref8$2 = [13, 28, 61], convert.hslToRgb(_ref8$2)))
};
const IDX = {
  0: {
    max: convert.hslToHex([75, 90, 85]),
    min: convert.hslToHex([89, 99, 72]),
    na: cards.Cards.grey.lighten_4
  },
  1: {
    max: convert.hslToHex([80, 88, 87]),
    min: convert.hslToHex([83, 98, 71]),
    na: cards.Cards.grey.lighten_4
  },
  2: {
    max: convert.hslToHex([93, 87, 82]),
    min: convert.hslToHex([93, 97, 70]),
    na: cards.Cards.grey.lighten_3
  },
  3: {
    max: convert.hslToHex([103, 86, 82]),
    min: convert.hslToHex([103, 96, 69]),
    na: cards.Cards.grey.lighten_2
  },
  4: {
    max: convert.hslToHex([113, 85, 82]),
    min: convert.hslToHex([113, 95, 68]),
    na: cards.Cards.grey.lighten_1
  },
  5: {
    max: convert.hslToHex([123, 84, 82]),
    min: convert.hslToHex([123, 94, 68]),
    na: cards.Cards.grey.base
  },
  6: {
    max: convert.hslToHex([133, 83, 82]),
    min: convert.hslToHex([133, 93, 68]),
    na: cards.Cards.grey.darken_1
  },
  7: {
    max: convert.hslToHex([143, 82, 82]),
    min: convert.hslToHex([143, 92, 68]),
    na: cards.Cards.grey.darken_2
  }
};

const lpad = padString.LPad({
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
  if (wrap || lv < vo) columnMapper.mutate(entries, 0, k => lpad(k, pad));
  vectorMapper.mutate(entries, ([k, v]) => `${k}: ${v}`);
  return (wrap || lv < vo) && entries.length > 1 ? decoUtil.joinLines(entries, lv) : entries.join(', ');
};
const wrapInfo = function (entries) {
  const {
    wo
  } = this;
  let w = 0,
      wrap = false,
      pad = 0;
  vectorMapper.iterate(entries, ([k, v]) => {
    k = lange.lange(k), v = lange.lange(v), pad = comparer.max(k, pad);
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
  if (lv < va) return decoUtil.joinLines(vector, lv);
  let rows = [],
      w = 0,
      row = [];
  vectorMapper.iterate(vector, item => {
    row.push(item), w += lange.lange(item);
    if (w > wa) rows.push(row.join(', ')), row = [], w = 0;
  });
  return rows.length > 1 ? decoUtil.joinLines(rows, lv) : vector.join(', ');
};

const deFn = function (fn) {
  let {
    wf,
    pr
  } = this,
      des = `${fn}`;
  if (wf <= 128) des = des.replace(/\s+/g, ' ');
  if (des.startsWith(enums.FUN)) des = des.slice(9);
  des = toLambda(des);
  if (des.length > wf) des = Object.prototype.toString.call(fn);
  return pr ? PAL.FNC(des) : des;
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
  if (t === enumDataTypes.STR) return numLoose.isNumeric(node) ? node : PAL.STR(node);
  if (t === enumDataTypes.NUM || t === enumDataTypes.BIG) return node;

  if (t === enumDataTypes.OBJ) {
    var _deVe$call, _deEn$call, _deEn$call2;

    const {
      hi
    } = this,
          pt = typ.typ(node);
    if (pt === enumObjectTypes.ARRAY) return lv >= hi ? '[array]' : (_deVe$call = deVe.call(this, node.slice(), lv), BRK[lv & 7](_deVe$call));
    if (pt === enumObjectTypes.OBJECT) return lv >= hi ? '{object}' : (_deEn$call = deEn.call(this, Object.entries(node), lv), BRC[lv & 7](_deEn$call));
    if (pt === enumObjectTypes.MAP) return lv >= hi ? '(map)' : (_deEn$call2 = deEn.call(this, [...node.entries()], lv), BRK[lv & 7](_deEn$call2));
    if (pt === enumObjectTypes.SET) return lv >= hi ? '(set)' : `set:[${deVe.call(this, [...node], lv)}]`;
    return `${node}`;
  }

  if (t === enumDataTypes.FUN) return deFn.call(this, node);
  if (t === enumDataTypes.BOO) return PAL.BOO(node);
  if (t === enumDataTypes.UND || t === enumDataTypes.SYM) return PAL.UDF(node);
}
function deNodePlain(node, lv = 0) {
  const t = typeof node,
        {
    qm
  } = this;
  if (t === enumDataTypes.STR) return qm ? qm + node + qm : node;

  if (t === enumDataTypes.OBJ) {
    var _deVe$call2, _deEn$call3, _deEn$call4;

    const {
      hi
    } = this,
          pt = typ.typ(node);
    if (pt === enumObjectTypes.ARRAY) return lv >= hi ? '[array]' : (_deVe$call2 = deVe.call(this, node.slice(), lv), brk(_deVe$call2));
    if (pt === enumObjectTypes.OBJECT) return lv >= hi ? '{object}' : (_deEn$call3 = deEn.call(this, Object.entries(node), lv), brc(_deEn$call3));
    if (pt === enumObjectTypes.MAP) return lv >= hi ? '(map)' : (_deEn$call4 = deEn.call(this, [...node.entries()], lv), brk(_deEn$call4));
    if (pt === enumObjectTypes.SET) return lv >= hi ? '(set)' : `set:[${deVe.call(this, [...node], lv)}]`;
    return `${node}`;
  }

  if (t === enumDataTypes.FUN) return deFn.call(this, node);
  return node;
}
let deVe = function (vector, lv) {
  vectorMapper.mutate(vector, v => String(deNode.call(this, v, lv + 1)));
  if (this.pr) fluoVector.fluoVector(vector, {
    mutate: true
  });
  return stringifyVector.call(this, vector, lv);
};
let deEn = function (entries, lv) {
  entriesMapper.mutate(entries, k => String(k), v => String(deNode.call(this, v, lv + 1)));
  if (this.pr) fluoEntries.fluoEntries(entries, {
    stringPreset: IDX[lv & 7],
    mutate: true
  });
  return stringifyEntries.call(this, entries, lv);
};

/**
 *
 * @param {*} ob
 * @param {boolean} [pr=true]
 * @param {number} [hi] - maximum level of object to show detail
 * @param {number} [va] - maximum level to force vertical for array, root level = 0
 * @param {number} [vo] - maximum level to force vertical for object, root level = 0
 * @param {number} [wa] - maximum string length to hold array contents without wrap
 * @param {number} [wo] - maximum string length to hold object contents without wrap
 * @param {number} [wf] - maximum string length to hold function contents
 * @param {?string} [qm=null] - quotation mark
 * @returns {string|number}
 */

const deco = (ob, {
  pr = true,
  hi = 8,
  va = 0,
  vo = 0,
  wa = 32,
  wo = 64,
  wf = 64,
  qm = null
} = {}) => deNode.call({
  pr,
  hi,
  va,
  vo,
  wa,
  wo,
  wf,
  qm
}, ob);
const deca = ({
  hi = 8,
  va = 0,
  vo = 0,
  wa = 32,
  wo = 64,
  wf = 64,
  pr = true,
  qm = null
} = {}) => deNode.bind({
  pr,
  hi,
  va,
  vo,
  wa,
  wo,
  wf,
  qm
});

const delogger = x => {
  var _x;

  return void console.log((_x = x, deco(_x)));
};
const delogNeL = x => {
  var _x2;

  return void console.log((_x2 = x, deco(_x2)), '\n');
};

exports.deNode = deNode;
exports.deca = deca;
exports.deco = deco;
exports.delogNeL = delogNeL;
exports.delogger = delogger;
