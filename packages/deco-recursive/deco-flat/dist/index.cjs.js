'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var presets = require('@palett/presets');
var fluoEntries = require('@palett/fluo-entries');
var fluoVector = require('@palett/fluo-vector');
var decoColors = require('@spare/deco-colors');
var decoDate = require('@spare/deco-date');
var decoFunc = require('@spare/deco-func');
var enumChars = require('@spare/enum-chars');
var enumDataTypes = require('@typen/enum-data-types');
var enumObjectTypes = require('@typen/enum-object-types');
var typ = require('@typen/typ');
var columnMapper = require('@vect/column-mapper');

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

const SP$7 = ' ';
const CO$7 = ',';
const DOT$7 = '.';

function _defineProperty$7(obj, key, value) {
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

class Conv$7 {}

_defineProperty$7(Conv$7, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$7.cjkPunc(n) : CharConv$7.fullChars(n);

  return tx;
});

_defineProperty$7(Conv$7, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$7.fullChars(n);

  return tx;
});

class CharConv$7 {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$7;
    if (charCode === 0x3001) return CO$7;
    if (charCode === 0x3002) return DOT$7;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const SP$8 = ' ';
const CO$8 = ',';
const DOT$8 = '.';

function _defineProperty$8(obj, key, value) {
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

class Conv$8 {}

_defineProperty$8(Conv$8, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$8.cjkPunc(n) : CharConv$8.fullChars(n);

  return tx;
});

_defineProperty$8(Conv$8, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$8.fullChars(n);

  return tx;
});

class CharConv$8 {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$8;
    if (charCode === 0x3001) return CO$8;
    if (charCode === 0x3002) return DOT$8;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const SP = ' ';
const CO = ',';
const DOT = '.';

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

const NUMERIC_PRESET = presets.FRESH;
const LITERAL_PRESET = presets.PLANET;

const MUTABLE = {
  mutate: true
};
function decoflat(lv, node) {
  const t = typeof node;
  if (t === enumDataTypes.STR) return node; // isNumeric(node) ? node : PAL.STR(node)

  if (t === enumDataTypes.NUM) return node;
  if (t === enumDataTypes.FUN) return decoFunc.decofun.call(decoFunc.DECOFUN_CONFIG, node);

  if (t === enumDataTypes.OBJ) {
    var _deVec$call, _deOb$call;

    const pt = typ.typ(node);
    if (pt === enumObjectTypes.ARRAY) return _deVec$call = deVec.call(this, lv, node), decoColors.BRK[lv & 7](_deVec$call);
    if (pt === enumObjectTypes.OBJECT) return _deOb$call = deOb.call(this, lv, node), decoColors.BRC[lv & 7](_deOb$call);
    if (pt === enumObjectTypes.DATE) return decoDate.decoDateTime(node);
    return `${node}`;
  }

  if (t === enumDataTypes.BOO) return decoColors.PAL.BOO(node);
  if (t === enumDataTypes.UND) return decoColors.PAL.UDF(node);
  if (t === enumDataTypes.SYM) return decoColors.PAL.SYM(node.toString());
  return node;
}

function deVec(lv, ve) {
  const config = this; // const presets = this?.presets

  const list = ve.map(decoflat.bind(config, lv + 1));
  fluoVector.fluoVector.call(MUTABLE, list, config);
  return list.join(enumChars.COSP);
}

function deOb(lv, ob) {
  const config = this; // const presets = this?.presets

  const ents = columnMapper.mutate(Object.entries(ob), 1, decoflat.bind(this, lv + 1));
  fluoEntries.fluoEntries.call(MUTABLE, ents, config);
  return ents.map(([k, v]) => k + enumChars.RT + v).join(enumChars.COSP);
}

/**
 * @Function
 * @type {Function|function(*):string}
 *  */

const decoFlat = (o, {
  presets = [NUMERIC_PRESET, LITERAL_PRESET]
} = {}) => decoflat.call({
  presets,
  mutate: true
}, 0, o);
/**
 *
 * @param {Object[]} presets
 * @return {Function|function(*):string}
 * @constructor
 */

const DecoFlat = ({
  presets = [NUMERIC_PRESET, LITERAL_PRESET]
} = {}) => decoflat.bind({
  presets,
  mutate: true
}, 0);

exports.DecoFlat = DecoFlat;
exports.decoFlat = decoFlat;
