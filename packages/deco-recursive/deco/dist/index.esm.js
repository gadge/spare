import { FRESH, PLANET } from '@palett/presets';
import { RTSP, CO as CO$7, COSP, LF } from '@spare/enum-chars';
import { nullish } from '@typen/nullish';
import { fluoEntries } from '@palett/fluo-entries';
import { fluoVector } from '@palett/fluo-vector';
import { bracket, brace } from '@spare/bracket';
import { BRK, BRC, PAL } from '@spare/deco-colors';
import { decoDate, decoDateTime } from '@spare/deco-date';
import { funcName, decoFunc } from '@spare/deco-func';
import { STR as STR$1, NUM, BIG, FUN, OBJ, BOO, UND, SYM } from '@typen/enum-data-types';
import { ARRAY, OBJECT, DATE, MAP, SET } from '@typen/enum-object-types';
import { isNumeric as isNumeric$3 } from '@typen/num-loose';
import { typ } from '@typen/typ';
import { formatDate } from '@valjoux/format-date';
import { formatDateTime } from '@valjoux/format-date-time';
import { mutateKeys, mutateValues } from '@vect/entries-mapper';
import { mutate, iterate } from '@vect/vector-mapper';
import { max } from '@aryth/comparer';
import { lange } from '@spare/lange';
import { joinLines } from '@spare/liner';
import { LPad } from '@spare/padder';
import { cosmetics } from '@spare/deco-string';
import { splitLiteral } from '@spare/splitter';
import '@vect/column-mapper';

// export const
//   FUNC = '',
//   PIGM = '',
//   HEX = ''
const RENDER = 'render';
const MUTATE_PIGMENT = {
  colorant: RENDER,
  mutate: true
};

const mutateKeyPad = entries => {
  let pad = 0;
  mutateKeys(entries, k => {
    k = String(k);
    pad = max(lange(k), pad);
    return k;
  });
  return pad;
};

const lpad = LPad({
  ansi: true
});
const renderEntries = function (entries, lv) {
  var _ref, _this$object$vert, _this$object, _ref2, _this$object$width, _this$object2, _ref3, _this$object$unit, _this$object3, _entries;

  const vert = (_ref = (_this$object$vert = (_this$object = this.object) === null || _this$object === void 0 ? void 0 : _this$object.vert) !== null && _this$object$vert !== void 0 ? _this$object$vert : this.vert) !== null && _ref !== void 0 ? _ref : 0,
        width = (_ref2 = (_this$object$width = (_this$object2 = this.object) === null || _this$object2 === void 0 ? void 0 : _this$object2.width) !== null && _this$object$width !== void 0 ? _this$object$width : this.width) !== null && _ref2 !== void 0 ? _ref2 : 0,
        unit = (_ref3 = (_this$object$unit = (_this$object3 = this.object) === null || _this$object3 === void 0 ? void 0 : _this$object3.unit) !== null && _this$object$unit !== void 0 ? _this$object$unit : this.unit) !== null && _ref3 !== void 0 ? _ref3 : 0;
  let pad;
  const rows = (lv < vert || entries.some(([, v]) => lange(v) > unit) || !width) && (pad = (_entries = entries, mutateKeyPad(_entries))) ? mutate(entries, ([k, v]) => lpad(k, pad) + RTSP + v) : wrapEntries(entries, width);
  return rows.length > 1 ? joinLines(rows, CO$7, lv) : rows.join(COSP);
};
const wrapEntries = function (entries, width) {
  var _row;

  const lines = [];
  let row = null,
      len = 0,
      kvp,
      sp = COSP.length;
  iterate(entries, ([k, v]) => {
    // row.push(kvp = k + RTSP + v), len += lange(kvp) + sp
    // if (len > width) rows.push(row.join(COSP)), row = [], len = 0
    len += lange(kvp = k + RTSP + v) + sp;
    if (row && len > width) lines.push(row.join(COSP)), row = null;
    if (!row) row = [], len = 0;
    row.push(kvp);
  });
  if ((_row = row) !== null && _row !== void 0 && _row.length) lines.push(row.join(COSP));
  return lines;
};

const renderString = function (string, level, indent) {
  var _ref, _this$string$width, _this$string, _this$string$presets, _this$string2;

  const width = (_ref = (_this$string$width = (_this$string = this.string) === null || _this$string === void 0 ? void 0 : _this$string.width) !== null && _this$string$width !== void 0 ? _this$string$width : this.width) !== null && _ref !== void 0 ? _ref : 0,
        presets = (_this$string$presets = (_this$string2 = this.string) === null || _this$string2 === void 0 ? void 0 : _this$string2.presets) !== null && _this$string$presets !== void 0 ? _this$string$presets : null;
  return cosmetics.call({
    vectify: splitLiteral,
    presets,
    width,
    indent: level + 1,
    firstLineIndent: indent
  }, string);
};

const renderVector = function (vector, lv) {
  var _ref, _this$array$vert, _this$array, _ref2, _this$array$width, _this$array2, _ref3, _this$array$unit, _this$array3;

  const vert = (_ref = (_this$array$vert = (_this$array = this.array) === null || _this$array === void 0 ? void 0 : _this$array.vert) !== null && _this$array$vert !== void 0 ? _this$array$vert : this.vert) !== null && _ref !== void 0 ? _ref : 0,
        width = (_ref2 = (_this$array$width = (_this$array2 = this.array) === null || _this$array2 === void 0 ? void 0 : _this$array2.width) !== null && _this$array$width !== void 0 ? _this$array$width : this.width) !== null && _ref2 !== void 0 ? _ref2 : 0,
        unit = (_ref3 = (_this$array$unit = (_this$array3 = this.array) === null || _this$array3 === void 0 ? void 0 : _this$array3.unit) !== null && _this$array$unit !== void 0 ? _this$array$unit : this.unit) !== null && _ref3 !== void 0 ? _ref3 : 0;
  const rows = lv < vert || vector.some(x => lange(x) > unit) || !width ? vector : wrapVector(vector, width);
  return rows.length > 1 ? joinLines(rows, CO$7, lv) : vector.join(COSP);
};
const wrapVector = function (vector, width) {
  const lines = [];
  let row = null,
      len = 0,
      sp = COSP.length;
  iterate(vector, item => {
    // row.push(item), len += lange(item) + sp
    // if (len > width) rows.push(row.join(COSP)), row = [], len = 0
    len += lange(item) + sp;
    if (row && len > width) lines.push(row.join(COSP)), row = null;
    if (!row) row = [], len = 0;
    row.push(item);
  });
  return lines;
};

function decoNode(node, level, indent) {
  return this.presets ? prettyNode.call(this, node, level, indent) : plainNode.call(this, node, level, indent);
}
/**
 *
 * @param {*} node
 * @param {number} [level]
 * @param {number} indent
 * @return {string}
 */

function prettyNode(node, level = 0, indent) {
  const t = typeof node;
  if (t === STR$1) return isNumeric$3(node) ? node : renderString.call(this, node, level, indent);
  if (t === NUM || t === BIG) return node;
  if (t === FUN) return level >= this.depth ? funcName(node) : decoFunc(node, this);

  if (t === OBJ) {
    var _deVe$call, _deEn$call, _deEn$call2;

    const {
      depth
    } = this,
          pt = typ(node);
    if (pt === ARRAY) return level >= depth ? '[array]' : (_deVe$call = deVe.call(this, node.slice(), level), BRK[level & 7](_deVe$call));
    if (pt === OBJECT) return level >= depth ? '{object}' : (_deEn$call = deEn.call(this, Object.entries(node), level), BRC[level & 7](_deEn$call));
    if (pt === DATE) return level >= depth ? decoDate(node) : decoDateTime(node);
    if (pt === MAP) return level >= depth ? '(map)' : (_deEn$call2 = deEn.call(this, [...node.entries()], level), BRK[level & 7](_deEn$call2));
    if (pt === SET) return level >= depth ? '(set)' : `set:[${deVe.call(this, [...node], level)}]`;
    return `${node}`;
  }

  if (t === BOO) return PAL.BOO(node);
  if (t === UND || t === SYM) return PAL.UDF(node);
  return `${node}`;
}
function plainNode(node, level = 0, indent) {
  const t = typeof node,
        {
    qm
  } = this;
  if (t === STR$1) return qm ? qm + node + qm : renderString.call(this, node, level, indent);
  if (t === FUN) return level >= this.depth ? funcName(node) : decoFunc(node, this);

  if (t === OBJ) {
    var _deVe$call2, _deEn$call3, _deEn$call4;

    const {
      depth
    } = this,
          pt = typ(node);
    if (pt === ARRAY) return level >= depth ? '[array]' : (_deVe$call2 = deVe.call(this, node.slice(), level), bracket(_deVe$call2));
    if (pt === OBJECT) return level >= depth ? '{object}' : (_deEn$call3 = deEn.call(this, Object.entries(node), level), brace(_deEn$call3));
    if (pt === DATE) return level >= depth ? formatDate(node) : formatDateTime(node);
    if (pt === MAP) return level >= depth ? '(map)' : (_deEn$call4 = deEn.call(this, [...node.entries()], level), bracket(_deEn$call4));
    if (pt === SET) return level >= depth ? '(set)' : `set:[${deVe.call(this, [...node], level)}]`;
    return `${node}`;
  }

  return node;
}
const deVe = function (vector, lv) {
  const config = this;
  mutate(vector, v => String(decoNode.call(config, v, lv + 1)));
  if (config.fluos) fluoVector.call(MUTATE_PIGMENT, vector, config.fluos);
  return renderVector.call(config, vector, lv);
};
const deEn = function (entries, lv) {
  const config = this;
  const pad = mutateKeyPad(entries);
  mutateValues(entries, v => String(decoNode.call(config, v, lv + 1, pad)));
  if (config.fluos) fluoEntries.call(MUTATE_PIGMENT, entries, config.fluos);
  return renderEntries.call(config, entries, lv);
};

const SP$1 = ' ';
const CO$1 = ',';
const DOT$1 = '.';

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class Conv$1 {}

_defineProperty$1(Conv$1, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$1.cjkPunc(n) : CharConv$1.fullChars(n);

  return tx;
});

_defineProperty$1(Conv$1, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$1.fullChars(n);

  return tx;
});

class CharConv$1 {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$1;
    if (charCode === 0x3001) return CO$1;
    if (charCode === 0x3002) return DOT$1;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const SP$2 = ' ';
const CO$2 = ',';
const DOT$2 = '.';

function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class Conv$2 {}

_defineProperty$2(Conv$2, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$2.cjkPunc(n) : CharConv$2.fullChars(n);

  return tx;
});

_defineProperty$2(Conv$2, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$2.fullChars(n);

  return tx;
});

class CharConv$2 {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$2;
    if (charCode === 0x3001) return CO$2;
    if (charCode === 0x3002) return DOT$2;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const SP$3 = ' ';
const CO$3 = ',';
const DOT$3 = '.';

function _defineProperty$3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class Conv$3 {}

_defineProperty$3(Conv$3, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$3.cjkPunc(n) : CharConv$3.fullChars(n);

  return tx;
});

_defineProperty$3(Conv$3, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$3.fullChars(n);

  return tx;
});

class CharConv$3 {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$3;
    if (charCode === 0x3001) return CO$3;
    if (charCode === 0x3002) return DOT$3;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const SP$4 = ' ';
const CO$4 = ',';
const DOT$4 = '.';

function _defineProperty$4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class Conv$4 {}

_defineProperty$4(Conv$4, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$4.cjkPunc(n) : CharConv$4.fullChars(n);

  return tx;
});

_defineProperty$4(Conv$4, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$4.fullChars(n);

  return tx;
});

class CharConv$4 {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$4;
    if (charCode === 0x3001) return CO$4;
    if (charCode === 0x3002) return DOT$4;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const SP$5 = ' ';
const CO$5 = ',';
const DOT$5 = '.';

function _defineProperty$5(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class Conv$5 {}

_defineProperty$5(Conv$5, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$5.cjkPunc(n) : CharConv$5.fullChars(n);

  return tx;
});

_defineProperty$5(Conv$5, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$5.fullChars(n);

  return tx;
});

class CharConv$5 {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$5;
    if (charCode === 0x3001) return CO$5;
    if (charCode === 0x3002) return DOT$5;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const SP$6 = ' ';
const CO$6 = ',';
const DOT$6 = '.';

function _defineProperty$6(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class Conv$6 {}

_defineProperty$6(Conv$6, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$6.cjkPunc(n) : CharConv$6.fullChars(n);

  return tx;
});

_defineProperty$6(Conv$6, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$6.fullChars(n);

  return tx;
});

class CharConv$6 {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$6;
    if (charCode === 0x3001) return CO$6;
    if (charCode === 0x3002) return DOT$6;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

/**
 * validate
 * @param x
 * @param y
 * @returns {number}
 */


const validate = (x, y) => isNaN(x - y) ? NaN : y;

const parseNum$1 = x => validate(x, parseFloat(x));

const SP = ' ';
const CO = ',';
const DOT = '.';

const FULL_NUM$1 = '０-９'; // 0xff10 - 0xff19

const REG_NUM_FULL = new RegExp(`^\s*[－＋]?(?:，*[${FULL_NUM$1}]+)*．?[${FULL_NUM$1}]+\s*$`);
/**
 *
 * @param {string} tx
 * @returns {boolean}
 */

const isNumeric$2 = tx => REG_NUM_FULL.test(tx);

const NON_SPACE = /[^\s]/;

const parseNum = text => {
  if (!text) return NaN;
  let l = text.length,
      i = text.search(NON_SPACE),
      t = '',
      n,
      v;

  while (i < l && (n = text.charCodeAt(i++))) if (n !== 0xff0c) {
    v = 0xFF & n + 0x20;
    t += String.fromCharCode(v < n ? v : n);
  }

  return parseNum$1(t);
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class Conv {}

_defineProperty(Conv, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv.cjkPunc(n) : CharConv.fullChars(n);

  return tx;
});

_defineProperty(Conv, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv.fullChars(n);

  return tx;
});

class CharConv {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP;
    if (charCode === 0x3001) return CO;
    if (charCode === 0x3002) return DOT;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const COMMA = /,/g;

const isNumeric$1 = x => {
  var _x;

  x = (_x = x) === null || _x === void 0 ? void 0 : _x.replace(COMMA, '');
  return !isNaN(x - parseFloat(x));
};

const NUMERIC_PRESET = FRESH;
const LITERAL_PRESET = PLANET;

const STR = 'string';

const v1 = word => (word.toLowerCase().charCodeAt(0) & 0x7f) << 21;

const v2 = word => (((word = word.toLowerCase()).charCodeAt(0) & 0x7f) << 21) + ((word.charCodeAt(1) & 0x7f) << 14);

const v3 = word => (((word = word.toLowerCase()).charCodeAt(0) & 0x7f) << 21) + ((word.charCodeAt(1) & 0x7f) << 14) + ((word.charCodeAt(2) & 0x7f) << 7);

const v4 = word => (((word = word.toLowerCase()).charCodeAt(0) & 0x7f) << 21) + ((word.charCodeAt(1) & 0x7f) << 14) + ((word.charCodeAt(2) & 0x7f) << 7) + (word.charCodeAt(3) & 0x7f);

const stringValue = word => {
  const l = word === null || word === void 0 ? void 0 : word.length;
  if (!l) return NaN;
  if (typeof word !== STR) return NaN;
  if (l >= 8) return (v4(word.slice(0, 4)) << 2) + v4(word.slice(-4));
  if (l === 7) return (v4(word.slice(0, 4)) << 2) + v3(word.slice(-3));
  if (l === 6) return (v4(word.slice(0, 4)) << 2) + v2(word.slice(-2));
  if (l === 5) return (v4(word.slice(0, 4)) << 2) + v1(word.slice(-1));
  if (l === 4) return v4(word) << 2;
  if (l === 3) return v3(word) << 2;
  if (l === 2) return v2(word) << 2;
  if (l === 1) return v1(word) << 2;
};

const CJK_LETTERS = '\u4e00-\u9fbf';
const HALF_NUM = '0-9';
const HALF_UPPER = 'A-Z';
const HALF_LOWER = 'a-z';
const FULL_NUM = '０-９'; // 0xff10 - 0xff19

const FULL_UPPER = 'Ａ-Ｚ'; // 0xff21 - 0xff3a

const FULL_LOWER = 'ａ-ｚ'; // 0xff41 - 0xff5a

const LITERAL_LOWER = `${HALF_UPPER}${HALF_LOWER}${HALF_NUM}`;
const LITERAL_UPPER = `${FULL_UPPER}${FULL_LOWER}${FULL_NUM}`;
const LITERAL_ANY = new RegExp(`[${LITERAL_LOWER}${CJK_LETTERS}${LITERAL_UPPER}]+`);

const isLiteralAny = x => LITERAL_ANY.test(x);

const isNumeric = x => isNumeric$2(x) || isNumeric$1(x);

const NUM_BOUND_CONF_FULL = {
  filter: isNumeric,
  mapper: parseNum
};
const STR_BOUND_CONF_FULL = {
  filter: isLiteralAny,
  mapper: stringValue
};

const assignFluoConfigs = (p, ...presets) => {
  var _p$presets;

  if (presets.length === 0) presets = (_p$presets = p.presets) !== null && _p$presets !== void 0 ? _p$presets : [NUMERIC_PRESET, LITERAL_PRESET];

  if (presets.length === 1) {
    if (!p.fluos) p.fluos = presets.map(preset => ({
      preset
    }));

    if (p.full) {
      const [confNum = {}] = p.fluos;
      if (!confNum.filter && !confNum.mapper) Object.assign(confNum, NUM_BOUND_CONF_FULL);
    }

    return p;
  }

  if (presets.length === 2) {
    if (!p.fluos) p.fluos = presets.map(preset => ({
      preset
    }));

    if (p.full) {
      const [confNum = {}, confStr = {}] = p.fluos;
      if (!confNum.filter && !confNum.mapper) Object.assign(confNum, NUM_BOUND_CONF_FULL);
      if (!confStr.filter && !confStr.mapper) Object.assign(confStr, STR_BOUND_CONF_FULL);
    }

    return p;
  }

  if (presets.length >= 3) {
    if (!p.fluos) p.fluos = presets.map(preset => ({
      preset
    }));

    if (p.full) {
      const [confNum = {}, confStr = {}, confLab = {}] = p.fluos;
      if (!confNum.filter && !confNum.mapper) Object.assign(confNum, NUM_BOUND_CONF_FULL);
      if (!confStr.filter && !confStr.mapper) Object.assign(confStr, STR_BOUND_CONF_FULL);
      if (!confLab.filter && !confLab.mapper) Object.assign(confLab, STR_BOUND_CONF_FULL);
    }

    return p;
  }
};

const presetDeco = p => {
  var _p$wf;

  if (!p) p = {};
  p.wf = (_p$wf = p.wf) !== null && _p$wf !== void 0 ? _p$wf : 160; // if (nullish(p.presets)) p.presets = p.pr ?? [AZURE, MOSS]

  assignFluoConfigs(p);
  if (nullish(p.depth)) p.depth = 8; // 展示级别

  if (nullish(p.vert)) p.vert = 0; // 在此级别以下均设为竖排

  if (nullish(p.unit)) p.unit = 32; // 若 数组/键值对的值 单个元素长度超过此, 则进行竖排

  if (nullish(p.width)) p.width = 80; // 字符超过此, 则换行

  if (nullish(p.string)) p.string = {};
  const s = p.string; // if (nullish(s.presets)) s.presets = [ATLAS, SUBTLE]

  assignFluoConfigs(s);
  return p;
};
/**
 *
 * @typedef {Object} DecoConfig
 * @typedef {Object} [DecoConfig.presets] - if set, prettify the result
 * @typedef {Object} [DecoConfig.depth] - if set, only output levels under it
 * @typedef {Object} [DecoConfig.vert] - if set, all levels under it output elements vertically
 * @typedef {Object} [DecoConfig.unit]  - if set, if array/key-value-pair element length exceeds it, vertically output the array/key-value-pair
 * @typedef {Object} [DecoConfig.width] - if set, wrap lines if string length exceeds it
 *
 * @param {*} ob
 * @param {DecoConfig} [p]
 * @param {DecoConfig} [p.object]
 * @param {DecoConfig} [p.array]
 * @param {DecoConfig} [p.string]
 * @param {number} [p.wf=160] - maximum length of string to hold function contents
 * @param {?string} [p.qm=null] - quotation mark
 * @returns {string|number}
 */


const deco = (ob, p = {}) => decoNode.call(presetDeco(p), ob); // TODO: fix string.presets default configuration

/**
 *
 * @typedef {Object} DecoConfig
 * @typedef {Object} [DecoConfig.presets] - if set, prettify the result
 * @typedef {Object} [DecoConfig.depth] - if set, only output levels under it
 * @typedef {Object} [DecoConfig.vert] - if set, all levels under it output elements vertically
 * @typedef {Object} [DecoConfig.unit]  - if set, if array/key-value-pair element length exceeds it, vertically output the array/key-value-pair
 * @typedef {Object} [DecoConfig.width] - if set, wrap lines if string length exceeds it
 *
 * @param {DecoConfig} [p]
 * @param {DecoConfig} [p.object]
 * @param {DecoConfig} [p.array]
 * @param {DecoConfig} [p.string]
 * @param {number} [p.wf=160] - maximum length of string to hold function contents
 * @param {?string} [p.qm=null] - quotation mark
 * @returns {string|number}
 */

const Deco = (p = {}) => decoNode.bind(presetDeco(p));
/**
 *
 * @typedef {Object} DecoConfig
 * @typedef {Object} [DecoConfig.presets] - if set, prettify the result
 * @typedef {Object} [DecoConfig.depth] - if set, only output levels under it
 * @typedef {Object} [DecoConfig.vert] - if set, all levels under it output elements vertically
 * @typedef {Object} [DecoConfig.unit]  - if set, if array/key-value-pair element length exceeds it, vertically output the array/key-value-pair
 * @typedef {Object} [DecoConfig.width] - if set, wrap lines if string length exceeds it
 *
 * @param {*} ob
 * @param {DecoConfig} [p]
 * @param {DecoConfig} [p.object]
 * @param {DecoConfig} [p.array]
 * @param {DecoConfig} [p.string]
 * @param {number} [p.wf=160] - maximum length of string to hold function contents
 * @param {?string} [p.quote=null] - quotation mark
 * @returns {string|number}
 */

const deca = Deco;
const delogger = x => {
  var _x;

  return void console.log((_x = x, deco(_x)));
};
const delogNeL = x => {
  var _x2;

  return void console.log((_x2 = x, deco(_x2)), LF);
}; // const config = {
//   depth: 5,
//   presets: [AZURE, MOSS],
//   width: 64,
//   vert: 5,
//   method: {
//     width: 64,
//     presets: [AZURE, MOSS],
//   },
//   object: {
//     width: 64,
//     vert: 5,
//     presets: [AZURE, MOSS],
//   },
//   array: {
//     width: 64,
//     vert: 5,
//     presets: [AZURE, MOSS],
//   },
//   string: {
//     width: 64,
//     vert: 5,
//     presets: [AZURE, MOSS],
//   }
// }

export { Deco, deca, deco, decoNode, delogNeL, delogger };
