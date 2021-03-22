'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var presets = require('@palett/presets');
var enumChars = require('@spare/enum-chars');
var fluoEntries = require('@palett/fluo-entries');
var fluoVector = require('@palett/fluo-vector');
var decoColors = require('@spare/deco-colors');
var decoDate = require('@spare/deco-date');
var decoFunc = require('@spare/deco-func');
var enumDataTypes = require('@typen/enum-data-types');
var enumObjectTypes = require('@typen/enum-object-types');
var typ = require('@typen/typ');
require('@vect/column-mapper');
var nullish = require('@typen/nullish');
var bracket = require('@spare/bracket');
var numLoose = require('@typen/num-loose');
var formatDate = require('@valjoux/format-date');
var formatDateTime = require('@valjoux/format-date-time');
var entriesMapper = require('@vect/entries-mapper');
var vectorMapper = require('@vect/vector-mapper');
var comparer = require('@aryth/comparer');
var lange = require('@spare/lange');
var liner = require('@spare/liner');
var padder = require('@spare/padder');
var decoString = require('@spare/deco-string');
var splitter = require('@spare/splitter');

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

const SP$9 = ' ';
const CO$9 = ',';
const DOT$9 = '.';

function _defineProperty$9(obj, key, value) {
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

class Conv$9 {}

_defineProperty$9(Conv$9, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$9.cjkPunc(n) : CharConv$9.fullChars(n);

  return tx;
});

_defineProperty$9(Conv$9, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$9.fullChars(n);

  return tx;
});

class CharConv$9 {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$9;
    if (charCode === 0x3001) return CO$9;
    if (charCode === 0x3002) return DOT$9;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const SP$a = ' ';
const CO$a = ',';
const DOT$a = '.';

function _defineProperty$a(obj, key, value) {
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

class Conv$a {}

_defineProperty$a(Conv$a, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$a.cjkPunc(n) : CharConv$a.fullChars(n);

  return tx;
});

_defineProperty$a(Conv$a, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$a.fullChars(n);

  return tx;
});

class CharConv$a {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$a;
    if (charCode === 0x3001) return CO$a;
    if (charCode === 0x3002) return DOT$a;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const SP$b = ' ';
const CO$b = ',';
const DOT$b = '.';

function _defineProperty$b(obj, key, value) {
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

class Conv$b {}

_defineProperty$b(Conv$b, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$b.cjkPunc(n) : CharConv$b.fullChars(n);

  return tx;
});

_defineProperty$b(Conv$b, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$b.fullChars(n);

  return tx;
});

class CharConv$b {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$b;
    if (charCode === 0x3001) return CO$b;
    if (charCode === 0x3002) return DOT$b;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const SP$c = ' ';
const CO$c = ',';
const DOT$c = '.';

function _defineProperty$c(obj, key, value) {
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

class Conv$c {}

_defineProperty$c(Conv$c, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$c.cjkPunc(n) : CharConv$c.fullChars(n);

  return tx;
});

_defineProperty$c(Conv$c, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$c.fullChars(n);

  return tx;
});

class CharConv$c {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$c;
    if (charCode === 0x3001) return CO$c;
    if (charCode === 0x3002) return DOT$c;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const SP$d = ' ';
const CO$d = ',';
const DOT$d = '.';

function _defineProperty$d(obj, key, value) {
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

class Conv$d {}

_defineProperty$d(Conv$d, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$d.cjkPunc(n) : CharConv$d.fullChars(n);

  return tx;
});

_defineProperty$d(Conv$d, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$d.fullChars(n);

  return tx;
});

class CharConv$d {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$d;
    if (charCode === 0x3001) return CO$d;
    if (charCode === 0x3002) return DOT$d;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const SP$e = ' ';
const CO$e = ',';
const DOT$e = '.';

function _defineProperty$e(obj, key, value) {
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

class Conv$e {}

_defineProperty$e(Conv$e, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$e.cjkPunc(n) : CharConv$e.fullChars(n);

  return tx;
});

_defineProperty$e(Conv$e, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$e.fullChars(n);

  return tx;
});

class CharConv$e {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$e;
    if (charCode === 0x3001) return CO$e;
    if (charCode === 0x3002) return DOT$e;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const SP$f = ' ';
const CO$f = ',';
const DOT$f = '.';

function _defineProperty$f(obj, key, value) {
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

class Conv$f {}

_defineProperty$f(Conv$f, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$f.cjkPunc(n) : CharConv$f.fullChars(n);

  return tx;
});

_defineProperty$f(Conv$f, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$f.fullChars(n);

  return tx;
});

class CharConv$f {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$f;
    if (charCode === 0x3001) return CO$f;
    if (charCode === 0x3002) return DOT$f;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const LITERAL$2$1 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$2$1 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$2$1.bind(LITERAL$2$1);
const SP$g = ' ';
const CO$g = ',';
const DOT$g = '.';

function _defineProperty$g(obj, key, value) {
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

class Conv$g {}

_defineProperty$g(Conv$g, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$g.cjkPunc(n) : CharConv$g.fullChars(n);

  return tx;
});

_defineProperty$g(Conv$g, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$g.fullChars(n);

  return tx;
});

class CharConv$g {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$g;
    if (charCode === 0x3001) return CO$g;
    if (charCode === 0x3002) return DOT$g;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const LITERAL$1$1 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$1$1 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$1$1.bind(LITERAL$1$1);
const LITERAL$3$1 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$3$1 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$3$1.bind(LITERAL$3$1);
const SP$h = ' ';
const CO$h = ',';
const DOT$h = '.';

function _defineProperty$h(obj, key, value) {
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

class Conv$h {}

_defineProperty$h(Conv$h, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$h.cjkPunc(n) : CharConv$h.fullChars(n);

  return tx;
});

_defineProperty$h(Conv$h, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$h.fullChars(n);

  return tx;
});

class CharConv$h {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$h;
    if (charCode === 0x3001) return CO$h;
    if (charCode === 0x3002) return DOT$h;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const LITERAL$1$2 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$1$2 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$1$2.bind(LITERAL$1$2);
const LITERAL$2$2 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$2$2 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$2$2.bind(LITERAL$2$2);
const LITERAL$4$1 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$4$1 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$4$1.bind(LITERAL$4$1);
const SP$i = ' ';
const CO$i = ',';
const DOT$i = '.';

function _defineProperty$i(obj, key, value) {
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

class Conv$i {}

_defineProperty$i(Conv$i, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$i.cjkPunc(n) : CharConv$i.fullChars(n);

  return tx;
});

_defineProperty$i(Conv$i, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$i.fullChars(n);

  return tx;
});

class CharConv$i {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$i;
    if (charCode === 0x3001) return CO$i;
    if (charCode === 0x3002) return DOT$i;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const LITERAL$1$3 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$1$3 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$1$3.bind(LITERAL$1$3);
const LITERAL$2$3 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$2$3 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$2$3.bind(LITERAL$2$3);
const LITERAL$3$2 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$3$2 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$3$2.bind(LITERAL$3$2);
const LITERAL$5$1 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$5$1 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$5$1.bind(LITERAL$5$1);
const SP$j = ' ';
const CO$j = ',';
const DOT$j = '.';

function _defineProperty$j(obj, key, value) {
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

class Conv$j {}

_defineProperty$j(Conv$j, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$j.cjkPunc(n) : CharConv$j.fullChars(n);

  return tx;
});

_defineProperty$j(Conv$j, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$j.fullChars(n);

  return tx;
});

class CharConv$j {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$j;
    if (charCode === 0x3001) return CO$j;
    if (charCode === 0x3002) return DOT$j;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const LITERAL$1$4 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$1$4 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$1$4.bind(LITERAL$1$4);
const LITERAL$2$4 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$2$4 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$2$4.bind(LITERAL$2$4);
const LITERAL$3$3 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$3$3 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$3$3.bind(LITERAL$3$3);
const LITERAL$4$2 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$4$2 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$4$2.bind(LITERAL$4$2);
const LITERAL$6$1 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$6$1 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$6$1.bind(LITERAL$6$1);
const SP$k = ' ';
const CO$k = ',';
const DOT$k = '.';

function _defineProperty$k(obj, key, value) {
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

class Conv$k {}

_defineProperty$k(Conv$k, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$k.cjkPunc(n) : CharConv$k.fullChars(n);

  return tx;
});

_defineProperty$k(Conv$k, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$k.fullChars(n);

  return tx;
});

class CharConv$k {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$k;
    if (charCode === 0x3001) return CO$k;
    if (charCode === 0x3002) return DOT$k;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const LITERAL$1$5 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$1$5 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$1$5.bind(LITERAL$1$5);
const LITERAL$2$5 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$2$5 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$2$5.bind(LITERAL$2$5);
const LITERAL$3$4 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$3$4 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$3$4.bind(LITERAL$3$4);
const LITERAL$4$3 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$4$3 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$4$3.bind(LITERAL$4$3);
const LITERAL$7$1 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$7$1 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$7$1.bind(LITERAL$7$1);
const SP$l = ' ';
const CO$l = ',';
const DOT$l = '.';

function _defineProperty$l(obj, key, value) {
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

class Conv$l {}

_defineProperty$l(Conv$l, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$l.cjkPunc(n) : CharConv$l.fullChars(n);

  return tx;
});

_defineProperty$l(Conv$l, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$l.fullChars(n);

  return tx;
});

class CharConv$l {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$l;
    if (charCode === 0x3001) return CO$l;
    if (charCode === 0x3002) return DOT$l;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}
/**
 *
 * @type {Function|function(*):string}
 */


Function.prototype.call.bind(Object.prototype.toString);
const LITERAL$1$6 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$1$6 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$1$6.bind(LITERAL$1$6);
const LITERAL$2$6 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$2$6 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$2$6.bind(LITERAL$2$6);
const LITERAL$3$5 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$3$5 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$3$5.bind(LITERAL$3$5);
const LITERAL$4$4 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$4$4 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$4$4.bind(LITERAL$4$4);
const LITERAL$5$2 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$5$2 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$5$2.bind(LITERAL$5$2);
const LITERAL$8$1 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$8$1 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$8$1.bind(LITERAL$8$1);
const SP$m = ' ';
const CO$m = ',';
const DOT$m = '.';

function _defineProperty$m(obj, key, value) {
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

class Conv$m {}

_defineProperty$m(Conv$m, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$m.cjkPunc(n) : CharConv$m.fullChars(n);

  return tx;
});

_defineProperty$m(Conv$m, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$m.fullChars(n);

  return tx;
});

class CharConv$m {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$m;
    if (charCode === 0x3001) return CO$m;
    if (charCode === 0x3002) return DOT$m;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}
/**
 *
 * @type {Function|function(*):string}
 */


Function.prototype.call.bind(Object.prototype.toString);
/**
 *
 * @type {Function|function(*):string}
 */

Function.prototype.call.bind(Object.prototype.toString);
const LITERAL$1$7 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$1$7 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$1$7.bind(LITERAL$1$7);
const LITERAL$2$7 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$2$7 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$2$7.bind(LITERAL$2$7);
const LITERAL$3$6 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$3$6 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$3$6.bind(LITERAL$3$6);
const LITERAL$4$5 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$4$5 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$4$5.bind(LITERAL$4$5);
const LITERAL$5$3 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$5$3 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$5$3.bind(LITERAL$5$3);
const LITERAL$6$2 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$6$2 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$6$2.bind(LITERAL$6$2);
const LITERAL$9$1 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$9$1 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$9$1.bind(LITERAL$9$1);
const SP$n = ' ';
const CO$n = ',';
const DOT$n = '.';

function _defineProperty$n(obj, key, value) {
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

class Conv$n {}

_defineProperty$n(Conv$n, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$n.cjkPunc(n) : CharConv$n.fullChars(n);

  return tx;
});

_defineProperty$n(Conv$n, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$n.fullChars(n);

  return tx;
});

class CharConv$n {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$n;
    if (charCode === 0x3001) return CO$n;
    if (charCode === 0x3002) return DOT$n;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}
/**
 *
 * @type {Function|function(*):string}
 */


Function.prototype.call.bind(Object.prototype.toString);
/**
 *
 * @type {Function|function(*):string}
 */

Function.prototype.call.bind(Object.prototype.toString);
/**
 *
 * @type {Function|function(*):string}
 */

Function.prototype.call.bind(Object.prototype.toString);
const LITERAL$1$8 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$1$8 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$1$8.bind(LITERAL$1$8);
const LITERAL$2$8 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$2$8 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$2$8.bind(LITERAL$2$8);
const LITERAL$3$7 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$3$7 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$3$7.bind(LITERAL$3$7);
const LITERAL$4$6 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$4$6 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$4$6.bind(LITERAL$4$6);
const LITERAL$5$4 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$5$4 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$5$4.bind(LITERAL$5$4);
const LITERAL$6$3 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$6$3 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$6$3.bind(LITERAL$6$3);
const LITERAL$7$2 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$7$2 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$7$2.bind(LITERAL$7$2);
const LITERAL$a = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$a$1 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$a$1.bind(LITERAL$a);
const SP$o = ' ';
const CO$o = ',';
const DOT$o = '.';

function _defineProperty$o(obj, key, value) {
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

class Conv$o {}

_defineProperty$o(Conv$o, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$o.cjkPunc(n) : CharConv$o.fullChars(n);

  return tx;
});

_defineProperty$o(Conv$o, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$o.fullChars(n);

  return tx;
});

class CharConv$o {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$o;
    if (charCode === 0x3001) return CO$o;
    if (charCode === 0x3002) return DOT$o;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}
/**
 *
 * @type {Function|function(*):string}
 */


Function.prototype.call.bind(Object.prototype.toString);
/**
 *
 * @type {Function|function(*):string}
 */

Function.prototype.call.bind(Object.prototype.toString);
/**
 *
 * @type {Function|function(*):string}
 */

Function.prototype.call.bind(Object.prototype.toString);
/**
 *
 * @type {Function|function(*):string}
 */

Function.prototype.call.bind(Object.prototype.toString);
const LITERAL$1$9 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$1$9 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$1$9.bind(LITERAL$1$9);
const LITERAL$2$9 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$2$9 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$2$9.bind(LITERAL$2$9);
const LITERAL$3$8 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$3$8 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$3$8.bind(LITERAL$3$8);
const LITERAL$4$7 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$4$7 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$4$7.bind(LITERAL$4$7);
const LITERAL$5$5 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$5$5 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$5$5.bind(LITERAL$5$5);
const LITERAL$6$4 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$6$4 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$6$4.bind(LITERAL$6$4);
const LITERAL$7$3 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$7$3 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$7$3.bind(LITERAL$7$3);
const LITERAL$8$2 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$8$2 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$8$2.bind(LITERAL$8$2);
const LITERAL$b$1 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$b = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$b.bind(LITERAL$b$1);
const SP$p = ' ';
const CO$p = ',';
const DOT$p = '.';

function _defineProperty$p(obj, key, value) {
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

class Conv$p {}

_defineProperty$p(Conv$p, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$p.cjkPunc(n) : CharConv$p.fullChars(n);

  return tx;
});

_defineProperty$p(Conv$p, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$p.fullChars(n);

  return tx;
});

class CharConv$p {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$p;
    if (charCode === 0x3001) return CO$p;
    if (charCode === 0x3002) return DOT$p;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}
/**
 *
 * @type {Function|function(*):string}
 */


Function.prototype.call.bind(Object.prototype.toString);
/**
 *
 * @type {Function|function(*):string}
 */

Function.prototype.call.bind(Object.prototype.toString);
/**
 *
 * @type {Function|function(*):string}
 */

Function.prototype.call.bind(Object.prototype.toString);
/**
 *
 * @type {Function|function(*):string}
 */

Function.prototype.call.bind(Object.prototype.toString);
/**
 *
 * @type {Function|function(*):string}
 */

Function.prototype.call.bind(Object.prototype.toString);
const LITERAL$1$a = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$1$a = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$1$a.bind(LITERAL$1$a);
const LITERAL$2$a = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$2$a = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$2$a.bind(LITERAL$2$a);
const LITERAL$3$9 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$3$9 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$3$9.bind(LITERAL$3$9);
const LITERAL$4$8 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$4$8 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$4$8.bind(LITERAL$4$8);
const LITERAL$5$6 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$5$6 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$5$6.bind(LITERAL$5$6);
const LITERAL$6$5 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$6$5 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$6$5.bind(LITERAL$6$5);
const LITERAL$7$4 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$7$4 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$7$4.bind(LITERAL$7$4);
const LITERAL$8$3 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$8$3 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$8$3.bind(LITERAL$8$3);
const LITERAL$9$2 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$9$2 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$9$2.bind(LITERAL$9$2);
const LITERAL$c$1 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$c = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$c.bind(LITERAL$c$1);
const SP$q = ' ';
const CO$q = ',';
const DOT$q = '.';

function _defineProperty$q(obj, key, value) {
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

class Conv$q {}

_defineProperty$q(Conv$q, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$q.cjkPunc(n) : CharConv$q.fullChars(n);

  return tx;
});

_defineProperty$q(Conv$q, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$q.fullChars(n);

  return tx;
});

class CharConv$q {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$q;
    if (charCode === 0x3001) return CO$q;
    if (charCode === 0x3002) return DOT$q;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}
/**
 *
 * @type {Function|function(*):string}
 */

Function.prototype.call.bind(Object.prototype.toString);
/**
 *
 * @type {Function|function(*):string}
 */

Function.prototype.call.bind(Object.prototype.toString);
/**
 *
 * @type {Function|function(*):string}
 */

Function.prototype.call.bind(Object.prototype.toString);
/**
 *
 * @type {Function|function(*):string}
 */

Function.prototype.call.bind(Object.prototype.toString);
/**
 *
 * @type {Function|function(*):string}
 */

Function.prototype.call.bind(Object.prototype.toString);
const LITERAL$1$b = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$1$b = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$1$b.bind(LITERAL$1$b);
const LITERAL$2$b = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$2$b = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$2$b.bind(LITERAL$2$b);
const LITERAL$3$a = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$3$a = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$3$a.bind(LITERAL$3$a);
const LITERAL$4$9 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$4$9 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$4$9.bind(LITERAL$4$9);
const LITERAL$5$7 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$5$7 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$5$7.bind(LITERAL$5$7);
const LITERAL$6$6 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$6$6 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$6$6.bind(LITERAL$6$6);
const LITERAL$7$5 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$7$5 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$7$5.bind(LITERAL$7$5);
const LITERAL$8$4 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$8$4 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$8$4.bind(LITERAL$8$4);
const LITERAL$9$3 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$9$3 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$9$3.bind(LITERAL$9$3);
const LITERAL$d = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$d = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$d.bind(LITERAL$d);

/**
 * validate
 * @param x
 * @param y
 * @returns {number}
 */


const validate$1 = (x, y) => isNaN(x - y) ? NaN : y;

const parseNum$2 = x => validate$1(x, parseFloat(x));

const SP = ' ';
const CO = ',';
const DOT = '.';

const FULL_NUM = '０-９'; // 0xff10 - 0xff19

const REG_NUM_FULL = new RegExp(`^\s*[－＋]?(?:，*[${FULL_NUM}]+)*．?[${FULL_NUM}]+\s*$`);
/**
 *
 * @param {string} tx
 * @returns {boolean}
 */

const isNumeric$1 = tx => REG_NUM_FULL.test(tx);

const NON_SPACE = /[^\s]/;

const parseNum$1 = text => {
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

  return parseNum$2(t);
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

const isNumeric = x => {
  var _x;

  x = (_x = x) === null || _x === void 0 ? void 0 : _x.replace(COMMA, '');
  return !isNaN(x - parseFloat(x));
};

const validate = (x, y) => isNaN(x - y) ? NaN : y;

const parseNum = x => {
  var _x;

  x = (_x = x) === null || _x === void 0 ? void 0 : _x.replace(COMMA, '');
  return validate(x, parseFloat(x));
};

const STR$1 = 'string';
/**
 *
 * @type {Function|function(*):string}
 */

Function.prototype.call.bind(Object.prototype.toString);
const CJK_LETTERS$1 = '\u4e00-\u9fbf';
const HALF_NUM$1 = '0-9';
const HALF_UPPER$1 = 'A-Z';
const HALF_LOWER$1 = 'a-z';
const FULL_NUM$1 = '０-９'; // 0xff10 - 0xff19

const FULL_UPPER$1 = 'Ａ-Ｚ'; // 0xff21 - 0xff3a

const FULL_LOWER$1 = 'ａ-ｚ'; // 0xff41 - 0xff5a

const LITERAL_LOWER$1 = `${HALF_UPPER$1}${HALF_LOWER$1}${HALF_NUM$1}`;
const LITERAL_UPPER$1 = `${FULL_UPPER$1}${FULL_LOWER$1}${FULL_NUM$1}`;
const LITERAL$c = new RegExp(`[${LITERAL_LOWER$1}]+`); // LITERAL = /[A-Za-z0-9]+/

const LITERAL_ANY$1 = new RegExp(`[${LITERAL_LOWER$1}${CJK_LETTERS$1}${LITERAL_UPPER$1}]+`);

const isLiteral$1 = x => LITERAL$c.test(x);

const isLiteralAny$1 = x => LITERAL_ANY$1.test(x);

const v1$1 = word => (word.toLowerCase().charCodeAt(0) & 0x7f) << 21;

const v2$1 = word => (((word = word.toLowerCase()).charCodeAt(0) & 0x7f) << 21) + ((word.charCodeAt(1) & 0x7f) << 14);

const v3$1 = word => (((word = word.toLowerCase()).charCodeAt(0) & 0x7f) << 21) + ((word.charCodeAt(1) & 0x7f) << 14) + ((word.charCodeAt(2) & 0x7f) << 7);

const v4$1 = word => (((word = word.toLowerCase()).charCodeAt(0) & 0x7f) << 21) + ((word.charCodeAt(1) & 0x7f) << 14) + ((word.charCodeAt(2) & 0x7f) << 7) + (word.charCodeAt(3) & 0x7f);

const stringValue$1 = word => {
  const l = word === null || word === void 0 ? void 0 : word.length;
  if (!l) return NaN;
  if (typeof word !== STR$1) return NaN;
  if (l >= 8) return (v4$1(word.slice(0, 4)) << 2) + v4$1(word.slice(-4));
  if (l === 7) return (v4$1(word.slice(0, 4)) << 2) + v3$1(word.slice(-3));
  if (l === 6) return (v4$1(word.slice(0, 4)) << 2) + v2$1(word.slice(-2));
  if (l === 5) return (v4$1(word.slice(0, 4)) << 2) + v1$1(word.slice(-1));
  if (l === 4) return v4$1(word) << 2;
  if (l === 3) return v3$1(word) << 2;
  if (l === 2) return v2$1(word) << 2;
  if (l === 1) return v1$1(word) << 2;
};

const iterate$1$1 = function (vec, fn, l) {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);

  for (let i = 0; i < l; i++) fn.call(this, vec[i], i);
};

const reviter$1$1 = function (vec, fn, l) {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);

  for (--l; l >= 0; l--) fn.call(this, vec[l], l);
};

const mapper$1$1 = function (vec, fn, l) {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);
  const ve = Array(l);

  for (--l; l >= 0; l--) ve[l] = fn.call(this, vec[l], l);

  return ve;
};

const mutate$1$1 = (vec, fn, l) => {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);

  for (--l; l >= 0; l--) vec[l] = fn(vec[l], l);

  return vec;
};

var Mapper$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  iterate: iterate$1$1,
  mapper: mapper$1$1,
  mutate: mutate$1$1,
  reviter: reviter$1$1
}); // export default Function.prototype.apply.bind(Array.prototype.push)

const acquire$1$1 = (va, vb) => (Array.prototype.push.apply(va, vb), va); // export default Function.prototype.call.bind(Array.prototype.concat)


const merge$1$1 = (va, vb) => Array.prototype.concat.call(va, vb);

const merges$1$1 = (...vectors) => Array.prototype.concat.apply([], vectors);

var Merge$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  acquire: acquire$1$1,
  merge: merge$1$1,
  merges: merges$1$1
});

function duozipper$1(a, b) {
  let {
    fn,
    lo,
    hi
  } = this;
  lo = lo || 0;
  const vec = Array(hi = hi || (a === null || a === void 0 ? void 0 : a.length));

  for (--hi; hi >= lo; hi--) vec[hi] = fn(a[hi], b[hi], hi);

  return vec;
}

function trizipper$1(a, b, c) {
  let {
    fn,
    lo,
    hi
  } = this;
  lo = lo || 0;
  const vec = Array(hi = hi || (a === null || a === void 0 ? void 0 : a.length));

  for (--hi; hi >= lo; hi--) vec[hi] = fn(a[hi], b[hi], c[hi], hi);

  return vec;
}

function quazipper$1(a, b, c, d) {
  let {
    fn,
    lo,
    hi
  } = this;
  lo = lo || 0;
  const vec = Array(hi = hi || (a === null || a === void 0 ? void 0 : a.length));

  for (--hi; hi >= lo; hi--) vec[hi] = fn(a[hi], b[hi], c[hi], d[hi], hi);

  return vec;
}

const Duozipper$1$1 = (fn, {
  lo,
  hi
} = {}) => duozipper$1.bind({
  fn,
  lo,
  hi
});

const Trizipper$1$1 = (fn, {
  lo,
  hi
} = {}) => trizipper$1.bind({
  fn,
  lo,
  hi
});

const Quazipper$1$1 = (fn, {
  lo,
  hi
} = {}) => quazipper$1.bind({
  fn,
  lo,
  hi
});
/**
 * zip two arrays, return the zipped array
 * @param {Array} a
 * @param {Array} b
 * @param {function(*,*,number?):*} fn
 * @param {number} [l]
 * @returns {*[]}
 */


const zipper$1$1 = (a, b, fn, l) => duozipper$1.call({
  fn,
  hi: l
}, a, b);

const mutazip$1$1 = (va, vb, fn, l) => {
  l = l || (va === null || va === void 0 ? void 0 : va.length);

  for (--l; l >= 0; l--) va[l] = fn(va[l], vb[l], l);

  return va;
};

var Zipper$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Duozipper: Duozipper$1$1,
  Quazipper: Quazipper$1$1,
  Trizipper: Trizipper$1$1,
  mutazip: mutazip$1$1,
  zipper: zipper$1$1
});
const {
  iterate: iterate$2,
  reviter: reviter$2,
  mapper: mapper$2,
  mutate: mutate$2
} = Mapper$1;
const {
  zipper: zipper$2,
  mutazip: mutazip$2,
  Duozipper: Duozipper$2,
  Trizipper: Trizipper$2,
  Quazipper: Quazipper$2
} = Zipper$1;
const {
  acquire: acquire$2,
  merge: merge$2,
  merges: merges$2
} = Merge$1;

const isNumericAny$1 = x => isNumeric$1(x) || isNumeric(x);

const NUM_BOUND_CONF_FULL$1 = {
  filter: isNumericAny$1,
  mapper: parseNum$1
};
const STR_BOUND_CONF_FULL$1 = {
  filter: isLiteralAny$1,
  mapper: stringValue$1
};
const NUM_BOUND_CONF_HALF$1 = {
  filter: isNumeric,
  mapper: parseNum
};
const STR_BOUND_CONF_HALF$1 = {
  filter: isLiteral$1,
  mapper: stringValue$1
};
const NUMERIC_PRESET$1 = presets.FRESH;
const LITERAL_PRESET$1 = presets.PLANET;

class FluoConfigs$1 extends Array {
  constructor(presets) {
    super();
    if (presets.length) acquire$2(this, presets.map(preset => ({
      preset
    })));
  }

  static build(...presets) {
    return new FluoConfigs$1(presets);
  }

  assignPresets(...presets) {
    if (presets.length === 0) presets = [NUMERIC_PRESET$1, LITERAL_PRESET$1];
    return mutazip$2(this, presets, (conf, preset) => conf ? (conf.preset = preset, conf) : {
      preset
    }, presets.length);
  }

  assignEffect(...effects) {
    if (effects.length === 0) return this;
    return mutate$2(this, conf => (conf.effects = effects, conf));
  }

  assignBoundConfigs(full) {
    const boundConfigs = full ? [NUM_BOUND_CONF_FULL$1, STR_BOUND_CONF_FULL$1, STR_BOUND_CONF_FULL$1] : [NUM_BOUND_CONF_HALF$1, STR_BOUND_CONF_HALF$1, STR_BOUND_CONF_HALF$1];
    return mutazip$2(this, boundConfigs, (conf, boundConf) => Object.assign(conf, boundConf));
  }

}

class DecoConfig$1 {
  constructor() {}

  assignPresets(...presets) {
    var _this$fluos;

    const fluos = (_this$fluos = this.fluos) !== null && _this$fluos !== void 0 ? _this$fluos : this.fluos = [];
    FluoConfigs$1.prototype.assignPresets.apply(fluos, presets);
    return this;
  }

  assignBoundConfig(charWidth) {
    var _this$fluos2;

    const fluos = (_this$fluos2 = this.fluos) !== null && _this$fluos2 !== void 0 ? _this$fluos2 : this.fluos = [];
    FluoConfigs$1.prototype.assignBoundConfigs.call(fluos, charWidth);
    return this;
  }

}
/**
 *
 * @type {Function|function(*):string}
 */

Function.prototype.call.bind(Object.prototype.toString);
/**
 *
 * @type {Function|function(*):string}
 */


Function.prototype.call.bind(Object.prototype.toString);
/**
 *
 * @type {Function|function(*):string}
 */

Function.prototype.call.bind(Object.prototype.toString);
/**
 *
 * @type {Function|function(*):string}
 */

Function.prototype.call.bind(Object.prototype.toString);
/**
 *
 * @type {Function|function(*):string}
 */

Function.prototype.call.bind(Object.prototype.toString);
const LITERAL$1 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$1 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$1.bind(LITERAL$1);
const LITERAL$2 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$2 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$2.bind(LITERAL$2);
const LITERAL$3 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$3 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$3.bind(LITERAL$3);
const LITERAL$4 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$4 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$4.bind(LITERAL$4);
const LITERAL$5 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$5 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$5.bind(LITERAL$5);
const LITERAL$6 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$6 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$6.bind(LITERAL$6);
const LITERAL$7 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$7 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$7.bind(LITERAL$7);
const LITERAL$8 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$8 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$8.bind(LITERAL$8);
const LITERAL$9 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$9 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$9.bind(LITERAL$9);
const LITERAL$b = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$a = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$a.bind(LITERAL$b);

const LITERAL = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper.bind(LITERAL);

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
  entriesMapper.mutateKeys(entries, k => {
    k = String(k);
    pad = comparer.max(lange.lange(k), pad);
    return k;
  });
  return pad;
};

const lpad = padder.LPad({
  ansi: true
});
const renderEntries = function (entries, lv) {
  var _ref, _this$object$vert, _this$object, _ref2, _this$object$width, _this$object2, _ref3, _this$object$unit, _this$object3, _entries;

  const vert = (_ref = (_this$object$vert = (_this$object = this.object) === null || _this$object === void 0 ? void 0 : _this$object.vert) !== null && _this$object$vert !== void 0 ? _this$object$vert : this.vert) !== null && _ref !== void 0 ? _ref : 0,
        width = (_ref2 = (_this$object$width = (_this$object2 = this.object) === null || _this$object2 === void 0 ? void 0 : _this$object2.width) !== null && _this$object$width !== void 0 ? _this$object$width : this.width) !== null && _ref2 !== void 0 ? _ref2 : 0,
        unit = (_ref3 = (_this$object$unit = (_this$object3 = this.object) === null || _this$object3 === void 0 ? void 0 : _this$object3.unit) !== null && _this$object$unit !== void 0 ? _this$object$unit : this.unit) !== null && _ref3 !== void 0 ? _ref3 : 0;
  let pad;
  const rows = (lv < vert || entries.some(([, v]) => lange.lange(v) > unit) || !width) && (pad = (_entries = entries, mutateKeyPad(_entries))) ? vectorMapper.mutate(entries, ([k, v]) => lpad(k, pad) + enumChars.RTSP + v) : wrapEntries(entries, width);
  return rows.length > 1 ? liner.joinLines(rows, enumChars.CO, lv) : rows.join(enumChars.COSP);
};
const wrapEntries = function (entries, width) {
  var _row;

  const lines = [];
  let row = null,
      len = 0,
      kvp,
      sp = enumChars.COSP.length;
  vectorMapper.iterate(entries, ([k, v]) => {
    // row.push(kvp = k + RTSP + v), len += lange(kvp) + sp
    // if (len > width) rows.push(row.join(COSP)), row = [], len = 0
    len += lange.lange(kvp = k + enumChars.RTSP + v) + sp;
    if (row && len > width) lines.push(row.join(enumChars.COSP)), row = null;
    if (!row) row = [], len = 0;
    row.push(kvp);
  });
  if ((_row = row) !== null && _row !== void 0 && _row.length) lines.push(row.join(enumChars.COSP));
  return lines;
};

const renderString = function (string, level, indent) {
  var _ref, _this$string$width, _this$string, _this$string$presets, _this$string2;

  const width = (_ref = (_this$string$width = (_this$string = this.string) === null || _this$string === void 0 ? void 0 : _this$string.width) !== null && _this$string$width !== void 0 ? _this$string$width : this.width) !== null && _ref !== void 0 ? _ref : 0,
        presets = (_this$string$presets = (_this$string2 = this.string) === null || _this$string2 === void 0 ? void 0 : _this$string2.presets) !== null && _this$string$presets !== void 0 ? _this$string$presets : null;
  return decoString._decoString.call({
    vectify: splitter.splitLiteral,
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
  const rows = lv < vert || vector.some(x => lange.lange(x) > unit) || !width ? vector : wrapVector(vector, width);
  return rows.length > 1 ? liner.joinLines(rows, enumChars.CO, lv) : vector.join(enumChars.COSP);
};
const wrapVector = function (vector, width) {
  const lines = [];
  let row = null,
      len = 0,
      sp = enumChars.COSP.length;
  vectorMapper.iterate(vector, item => {
    // row.push(item), len += lange(item) + sp
    // if (len > width) rows.push(row.join(COSP)), row = [], len = 0
    len += lange.lange(item) + sp;
    if (row && len > width) lines.push(row.join(enumChars.COSP)), row = null;
    if (!row) row = [], len = 0;
    row.push(item);
  });
  return lines;
};

function _deco(node, level, indent) {
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
  if (t === enumDataTypes.STR) return numLoose.isNumeric(node) ? node : renderString.call(this, node, level, indent);
  if (t === enumDataTypes.NUM || t === enumDataTypes.BIG) return node;
  if (t === enumDataTypes.FUN) return level >= this.depth ? decoFunc.funcName(node) : decoFunc.decoFunc(node, this);

  if (t === enumDataTypes.OBJ) {
    var _deVe$call, _deEn$call, _deEn$call2;

    const {
      depth
    } = this,
          pt = typ.typ(node);
    if (pt === enumObjectTypes.ARRAY) return level >= depth ? '[array]' : (_deVe$call = deVe.call(this, node.slice(), level), decoColors.BRK[level & 7](_deVe$call));
    if (pt === enumObjectTypes.OBJECT) return level >= depth ? '{object}' : (_deEn$call = deEn.call(this, Object.entries(node), level), decoColors.BRC[level & 7](_deEn$call));
    if (pt === enumObjectTypes.DATE) return level >= depth ? decoDate.decoDate(node) : decoDate.decoDateTime(node);
    if (pt === enumObjectTypes.MAP) return level >= depth ? '(map)' : (_deEn$call2 = deEn.call(this, [...node.entries()], level), decoColors.BRK[level & 7](_deEn$call2));
    if (pt === enumObjectTypes.SET) return level >= depth ? '(set)' : `set:[${deVe.call(this, [...node], level)}]`;
    return `${node}`;
  }

  if (t === enumDataTypes.BOO) return decoColors.PAL.BOO(node);
  if (t === enumDataTypes.UND || t === enumDataTypes.SYM) return decoColors.PAL.UDF(node);
  return `${node}`;
}
function plainNode(node, level = 0, indent) {
  const t = typeof node,
        {
    qm
  } = this;
  if (t === enumDataTypes.STR) return qm ? qm + node + qm : renderString.call(this, node, level, indent);
  if (t === enumDataTypes.FUN) return level >= this.depth ? decoFunc.funcName(node) : decoFunc.decoFunc(node, this);

  if (t === enumDataTypes.OBJ) {
    var _deVe$call2, _deEn$call3, _deEn$call4;

    const {
      depth
    } = this,
          pt = typ.typ(node);
    if (pt === enumObjectTypes.ARRAY) return level >= depth ? '[array]' : (_deVe$call2 = deVe.call(this, node.slice(), level), bracket.bracket(_deVe$call2));
    if (pt === enumObjectTypes.OBJECT) return level >= depth ? '{object}' : (_deEn$call3 = deEn.call(this, Object.entries(node), level), bracket.brace(_deEn$call3));
    if (pt === enumObjectTypes.DATE) return level >= depth ? formatDate.formatDate(node) : formatDateTime.formatDateTime(node);
    if (pt === enumObjectTypes.MAP) return level >= depth ? '(map)' : (_deEn$call4 = deEn.call(this, [...node.entries()], level), bracket.bracket(_deEn$call4));
    if (pt === enumObjectTypes.SET) return level >= depth ? '(set)' : `set:[${deVe.call(this, [...node], level)}]`;
    return `${node}`;
  }

  return node;
}
const deVe = function (vector, lv) {
  const config = this;
  vectorMapper.mutate(vector, v => String(_deco.call(config, v, lv + 1)));
  if (config.fluos) fluoVector.fluoVector.call(MUTATE_PIGMENT, vector, config.fluos);
  return renderVector.call(config, vector, lv);
};
const deEn = function (entries, lv) {
  const config = this;
  const pad = mutateKeyPad(entries);
  entriesMapper.mutateValues(entries, v => String(_deco.call(config, v, lv + 1, pad)));
  if (config.fluos) fluoEntries.fluoEntries.call(MUTATE_PIGMENT, entries, config.fluos);
  return renderEntries.call(config, entries, lv);
};

const presetDeco = p => {
  var _p$wf, _p$pr;

  if (!p) p = {};
  p.wf = (_p$wf = p.wf) !== null && _p$wf !== void 0 ? _p$wf : 160;
  if (nullish.nullish(p.presets)) p.presets = (_p$pr = p.pr) !== null && _p$pr !== void 0 ? _p$pr : [presets.AZURE, presets.MOSS];
  DecoConfig$1.prototype.assignPresets.call(p, presets.AZURE, presets.MOSS);
  if (nullish.nullish(p.depth)) p.depth = 8; // 展示级别

  if (nullish.nullish(p.vert)) p.vert = 0; // 在此级别以下均设为竖排

  if (nullish.nullish(p.unit)) p.unit = 32; // 若 数组/键值对的值 单个元素长度超过此, 则进行竖排

  if (nullish.nullish(p.width)) p.width = 80; // 字符超过此, 则换行

  if (nullish.nullish(p.string)) p.string = {};
  const s = p.string; // if (nullish(s.presets)) s.presets = [ATLAS, SUBTLE]

  DecoConfig$1.prototype.assignPresets.call(s, presets.ATLAS, presets.SUBTLE); // p |> JSON.stringify |> logger

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


const deco = (ob, p = {}) => _deco.call(presetDeco(p), ob); // TODO: fix string.presets default configuration

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

const Deco = (p = {}) => _deco.bind(presetDeco(p));
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

  return void console.log((_x2 = x, deco(_x2)), enumChars.LF);
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

exports.Deco = Deco;
exports._deco = _deco;
exports.deca = deca;
exports.deco = deco;
exports.delogNeL = delogNeL;
exports.delogger = delogger;
