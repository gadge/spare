'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lange = require('@spare/lange');
var util = require('@spare/util');
var enums = require('@typen/enums');
var numLoose = require('@typen/num-loose');
var entriesMapper = require('@vect/entries-mapper');
var columnMapper = require('@vect/column-mapper');
var fluoVector = require('@palett/fluo-vector');
var fluoEntries = require('@palett/fluo-entries');
var padString = require('@spare/pad-string');
var typ = require('@typen/typ');
var convert = require('@palett/convert');
var dye = require('@palett/dye');
var objectMapper = require('@vect/object-mapper');
var cards = require('@palett/cards');

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

const keysMutate = columnMapper.ColumnMutate(0);
const lpad = padString.LPad({
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
    case enums.STR:
      return numLoose.isNumeric(node) ? node : PAL.STR(node);

    case enums.OBJ:
      return deOb.call(this, node, lv);

    case enums.NUM:
    case enums.BIG:
      return node;

    case enums.FUN:
      return deFn.call(this, node);

    case enums.BOO:
      return PAL.BOO(node);

    case enums.UND:
    case enums.SYM:
      return PAL.UDF(node);
  }
}
const deOb = function (node, lv) {
  var _node, _deAr$call, _deEn$call, _deEn$call2;

  const {
    hi,
    tb
  } = this;
  this.rn = util.RN + tb.repeat(lv);

  switch (_node = node, typ.typ(_node)) {
    case enums.ARRAY:
      return lv >= hi ? '[array]' : (_deAr$call = deAr.call(this, node, lv), BRK[lv & 7](_deAr$call));

    case enums.OBJECT:
      return lv >= hi ? '{object}' : (_deEn$call = deEn.call(this, Object.entries(node), lv), BRC[lv & 7](_deEn$call));

    case enums.MAP:
      return lv >= hi ? '(map)' : (_deEn$call2 = deEn.call(this, [...node.entries()], lv), BRK[lv & 7](_deEn$call2));

    case enums.SET:
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
    if (!wrap && (cap += lange.lange(v)) > al) wrap = true;
    return v;
  });
  fluoVector.fluoVector(arr, {
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
  entriesMapper.mutate(entries, k => {
    if ((kw = lange.lange(k = String(k))) > pad) pad = kw;
    if (!wrap && (cap += kw) > 48) wrap = true;
    return k;
  }, v => {
    v = String(deNode.call(this, v, lv + 1));
    if (!wrap && (cap += (vw = lange.lange(v)) > 48)) wrap = true;
    return v;
  });
  if (wrap) keysMutate(entries, k => lpad(k, pad), entries.length);
  entries = fluoEntries.fluoEntries(entries, {
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
  tb: util.TB
}, ob);
const deca = ({
  hi = 8,
  vo = 0,
  al = 64
} = {}) => deNode.bind({
  hi,
  vo,
  al,
  tb: util.TB
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
