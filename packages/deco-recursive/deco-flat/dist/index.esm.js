import { FRESH, PLANET } from '@palett/presets';
import { fluoEntries } from '@palett/fluo-entries';
import { fluoVector } from '@palett/fluo-vector';
import { BRK, BRC, PAL } from '@spare/deco-colors';
import { decoDateTime } from '@spare/deco-date';
import { decofun, DECOFUN_CONFIG } from '@spare/deco-func';
import { COSP, RT } from '@spare/enum-chars';
import { STR, NUM, FUN, OBJ, BOO, UND, SYM } from '@typen/enum-data-types';
import { ARRAY, OBJECT, DATE } from '@typen/enum-object-types';
import { typ } from '@typen/typ';
import { mutate } from '@vect/column-mapper';

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

const NUMERIC_PRESET = FRESH;
const LITERAL_PRESET = PLANET;

const MUTABLE = {
  mutate: true
};
function decoflat(lv, node) {
  const t = typeof node;
  if (t === STR) return node; // isNumeric(node) ? node : PAL.STR(node)

  if (t === NUM) return node;
  if (t === FUN) return decofun.call(DECOFUN_CONFIG, node);

  if (t === OBJ) {
    var _deVec$call, _deOb$call;

    const pt = typ(node);
    if (pt === ARRAY) return _deVec$call = deVec.call(this, lv, node), BRK[lv & 7](_deVec$call);
    if (pt === OBJECT) return _deOb$call = deOb.call(this, lv, node), BRC[lv & 7](_deOb$call);
    if (pt === DATE) return decoDateTime(node);
    return `${node}`;
  }

  if (t === BOO) return PAL.BOO(node);
  if (t === UND) return PAL.UDF(node);
  if (t === SYM) return PAL.SYM(node.toString());
  return node;
}

function deVec(lv, ve) {
  const config = this; // const presets = this?.presets

  const list = ve.map(decoflat.bind(config, lv + 1));
  fluoVector.call(MUTABLE, list, config);
  return list.join(COSP);
}

function deOb(lv, ob) {
  const config = this; // const presets = this?.presets

  const ents = mutate(Object.entries(ob), 1, decoflat.bind(this, lv + 1));
  fluoEntries.call(MUTABLE, ents, config);
  return ents.map(([k, v]) => k + RT + v).join(COSP);
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

export { DecoFlat, decoFlat };
