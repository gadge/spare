import { Says as Says$1, says as says$1, ros as ros$1 } from '@palett/says';
import { deco as deco$2, Deco as Deco$1, delogger as delogger$1, delogNeL as delogNeL$1 } from '@spare/deco';
import { deco as deco$a, Deco as Deco$9 } from '@spare/deco-crostab';
import { deco as deco$5, Deco as Deco$4 } from '@spare/deco-entries';
import { deco as deco$7, Deco as Deco$6 } from '@spare/deco-matrix';
import { deco as deco$6, Deco as Deco$5 } from '@spare/deco-object';
import { deco as deco$8, Deco as Deco$7 } from '@spare/deco-samples';
import { deco as deco$3, Deco as Deco$2 } from '@spare/deco-string';
import { deco as deco$9, Deco as Deco$8 } from '@spare/deco-table';
import { deco as deco$4, Deco as Deco$3 } from '@spare/deco-vector';
import { QT, DT, SP, RT, COSP, DASH, LF } from '@spare/enum-chars';
import { Xr as Xr$1, xr as xr$1 } from '@spare/xr';

const APOS = 1,
      // apostrophe
DITTO = 2; // ditto mark

// from x => typeof x
const UND = 'undefined';
const BOO = 'boolean';
const NUM = 'number';
const STR = 'string';
const OBJ = 'object';
const FUN = 'function';
const SYM = 'symbol';

const LITERAL = /[A-Za-z0-9]+/;

const isLiteral = x => LITERAL.test(x);

const isString = x => typeof x === STR;

const hasLiteral = x => isString(x) && isLiteral(x);

const nullish = x => x === null || x === void 0;

const quote = x => QT + x + QT;

const ditto = x => DT + x + DT;

const Qt = mode => {
  if (mode === APOS || mode === QT) return quote;
  if (mode === DITTO || mode === DT) return ditto;
  return null;
}; // export const Qt = (read, mode) => {
//   if (!mode) return read
//   if (!read) return SelectQt(mode)
//   return x => x |> read |> SelectQt(mode)
// }


const DUALQT = /^'(.*)'$/;
const ANYQT = /'/g;
const CTQT = '\\\'';

const tenseQuote = x => DUALQT.test(x) ? x.replace(DUALQT, (_, x) => quote(x.replace(ANYQT, CTQT))) : quote(x.replace(ANYQT, CTQT));

/**
 *
 * @type {Function|function(*):string}
 */
const protoType = Function.prototype.call.bind(Object.prototype.toString);
/**
 * const rxObj = /^\[object (.*)]$/
 * Equivalent to: Object.prototype.stringify.call(o).match(rxObj)[1]
 * @param {*} o
 * @return {string}
 */

const typ = o => protoType(o).slice(8, -1);

const isNumeric = x => !isNaN(x - parseFloat(x));

const parenth = x => '(' + x + ')';

const bracket = x => '[' + x + ']';

const brace = x => '{' + x + '}';

const ansi = ['[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)', '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'];
const astral = ['[\uD800-\uDBFF][\uDC00-\uDFFF]'];
const ansiReg = new RegExp(ansi.join('|'), 'g');
const astralReg = new RegExp(astral.join('|'), 'g');
/**
 *
 * @param {string} tx
 * @returns {number}
 */

const lange = tx => tx.replace(ansiReg, '').replace(astralReg, '_').length;

const Amber = {
  base: '#FFC107',
  lighten_5: '#FFF8E1',
  lighten_4: '#FFECB3',
  lighten_3: '#FFE082',
  lighten_2: '#FFD54F',
  lighten_1: '#FFCA28',
  darken_1: '#FFB300',
  darken_2: '#FFA000',
  darken_3: '#FF8F00',
  darken_4: '#FF6F00',
  accent_1: '#FFE57F',
  accent_2: '#FFD740',
  accent_3: '#FFC400',
  accent_4: '#FFAB00'
};
const Blue = {
  base: '#2196F3',
  lighten_5: '#E3F2FD',
  lighten_4: '#BBDEFB',
  lighten_3: '#90CAF9',
  lighten_2: '#64B5F6',
  lighten_1: '#42A5F5',
  darken_1: '#1E88E5',
  darken_2: '#1976D2',
  darken_3: '#1565C0',
  darken_4: '#0D47A1',
  accent_1: '#82B1FF',
  accent_2: '#448AFF',
  accent_3: '#2979FF',
  accent_4: '#2962FF'
};
const Cyan = {
  base: '#00BCD4',
  lighten_5: '#E0F7FA',
  lighten_4: '#B2EBF2',
  lighten_3: '#80DEEA',
  lighten_2: '#4DD0E1',
  lighten_1: '#26C6DA',
  darken_1: '#00ACC1',
  darken_2: '#0097A7',
  darken_3: '#00838F',
  darken_4: '#006064',
  accent_1: '#84FFFF',
  accent_2: '#18FFFF',
  accent_3: '#00E5FF',
  accent_4: '#00B8D4'
};
const DeepOrange = {
  base: '#FF5722',
  lighten_5: '#FBE9E7',
  lighten_4: '#FFCCBC',
  lighten_3: '#FFAB91',
  lighten_2: '#FF8A65',
  lighten_1: '#FF7043',
  darken_1: '#F4511E',
  darken_2: '#E64A19',
  darken_3: '#D84315',
  darken_4: '#BF360C',
  accent_1: '#FF9E80',
  accent_2: '#FF6E40',
  accent_3: '#FF3D00',
  accent_4: '#DD2C00'
};
const DeepPurple = {
  base: '#673AB7',
  lighten_5: '#EDE7F6',
  lighten_4: '#D1C4E9',
  lighten_3: '#B39DDB',
  lighten_2: '#9575CD',
  lighten_1: '#7E57C2',
  darken_1: '#5E35B1',
  darken_2: '#512DA8',
  darken_3: '#4527A0',
  darken_4: '#311B92',
  accent_1: '#B388FF',
  accent_2: '#7C4DFF',
  accent_3: '#651FFF',
  accent_4: '#6200EA'
};
const Green = {
  base: '#4CAF50',
  lighten_5: '#E8F5E9',
  lighten_4: '#C8E6C9',
  lighten_3: '#A5D6A7',
  lighten_2: '#81C784',
  lighten_1: '#66BB6A',
  darken_1: '#43A047',
  darken_2: '#388E3C',
  darken_3: '#2E7D32',
  darken_4: '#1B5E20',
  accent_1: '#B9F6CA',
  accent_2: '#69F0AE',
  accent_3: '#00E676',
  accent_4: '#00C853'
};
const Indigo = {
  base: '#3F51B5',
  lighten_5: '#E8EAF6',
  lighten_4: '#C5CAE9',
  lighten_3: '#9FA8DA',
  lighten_2: '#7986CB',
  lighten_1: '#5C6BC0',
  darken_1: '#3949AB',
  darken_2: '#303F9F',
  darken_3: '#283593',
  darken_4: '#1A237E',
  accent_1: '#8C9EFF',
  accent_2: '#536DFE',
  accent_3: '#3D5AFE',
  accent_4: '#304FFE'
};
const LightBlue = {
  base: '#03A9F4',
  lighten_5: '#E1F5FE',
  lighten_4: '#B3E5FC',
  lighten_3: '#81D4FA',
  lighten_2: '#4FC3F7',
  lighten_1: '#29B6F6',
  darken_1: '#039BE5',
  darken_2: '#0288D1',
  darken_3: '#0277BD',
  darken_4: '#01579B',
  accent_1: '#80D8FF',
  accent_2: '#40C4FF',
  accent_3: '#00B0FF',
  accent_4: '#0091EA'
};
const LightGreen = {
  base: '#8BC34A',
  lighten_5: '#F1F8E9',
  lighten_4: '#DCEDC8',
  lighten_3: '#C5E1A5',
  lighten_2: '#AED581',
  lighten_1: '#9CCC65',
  darken_1: '#7CB342',
  darken_2: '#689F38',
  darken_3: '#558B2F',
  darken_4: '#33691E',
  accent_1: '#CCFF90',
  accent_2: '#B2FF59',
  accent_3: '#76FF03',
  accent_4: '#64DD17'
};
const Lime = {
  base: '#CDDC39',
  lighten_5: '#F9FBE7',
  lighten_4: '#F0F4C3',
  lighten_3: '#E6EE9C',
  lighten_2: '#DCE775',
  lighten_1: '#D4E157',
  darken_1: '#C0CA33',
  darken_2: '#AFB42B',
  darken_3: '#9E9D24',
  darken_4: '#827717',
  accent_1: '#F4FF81',
  accent_2: '#EEFF41',
  accent_3: '#C6FF00',
  accent_4: '#AEEA00'
};
const Orange = {
  base: '#FF9800',
  lighten_5: '#FFF3E0',
  lighten_4: '#FFE0B2',
  lighten_3: '#FFCC80',
  lighten_2: '#FFB74D',
  lighten_1: '#FFA726',
  darken_1: '#FB8C00',
  darken_2: '#F57C00',
  darken_3: '#EF6C00',
  darken_4: '#E65100',
  accent_1: '#FFD180',
  accent_2: '#FFAB40',
  accent_3: '#FF9100',
  accent_4: '#FF6D00'
};
const Pink = {
  base: '#E91E63',
  lighten_5: '#FCE4EC',
  lighten_4: '#F8BBD0',
  lighten_3: '#F48FB1',
  lighten_2: '#F06292',
  lighten_1: '#EC407A',
  darken_1: '#D81B60',
  darken_2: '#C2185B',
  darken_3: '#AD1457',
  darken_4: '#880E4F',
  accent_1: '#FF80AB',
  accent_2: '#FF4081',
  accent_3: '#F50057',
  accent_4: '#C51162'
};
const Purple = {
  base: '#9C27B0',
  lighten_5: '#F3E5F5',
  lighten_4: '#E1BEE7',
  lighten_3: '#CE93D8',
  lighten_2: '#BA68C8',
  lighten_1: '#AB47BC',
  darken_1: '#8E24AA',
  darken_2: '#7B1FA2',
  darken_3: '#6A1B9A',
  darken_4: '#4A148C',
  accent_1: '#EA80FC',
  accent_2: '#E040FB',
  accent_3: '#D500F9',
  accent_4: '#AA00FF'
};
const Red = {
  base: '#F44336',
  lighten_5: '#FFEBEE',
  lighten_4: '#FFCDD2',
  lighten_3: '#EF9A9A',
  lighten_2: '#E57373',
  lighten_1: '#EF5350',
  darken_1: '#E53935',
  darken_2: '#D32F2F',
  darken_3: '#C62828',
  darken_4: '#B71C1C',
  accent_1: '#FF8A80',
  accent_2: '#FF5252',
  accent_3: '#FF1744',
  accent_4: '#D50000'
};
const Teal = {
  base: '#009688',
  lighten_5: '#E0F2F1',
  lighten_4: '#B2DFDB',
  lighten_3: '#80CBC4',
  lighten_2: '#4DB6AC',
  lighten_1: '#26A69A',
  darken_1: '#00897B',
  darken_2: '#00796B',
  darken_3: '#00695C',
  darken_4: '#004D40',
  accent_1: '#A7FFEB',
  accent_2: '#64FFDA',
  accent_3: '#1DE9B6',
  accent_4: '#00BFA5'
};
const Yellow = {
  base: '#FFEB3B',
  lighten_5: '#FFFDE7',
  lighten_4: '#FFF9C4',
  lighten_3: '#FFF59D',
  lighten_2: '#FFF176',
  lighten_1: '#FFEE58',
  darken_1: '#FDD835',
  darken_2: '#FBC02D',
  darken_3: '#F9A825',
  darken_4: '#F57F17',
  accent_1: '#FFFF8D',
  accent_2: '#FFFF00',
  accent_3: '#FFEA00',
  accent_4: '#FFD600'
};
const BlueGrey = {
  base: '#607D8B',
  lighten_5: '#ECEFF1',
  lighten_4: '#CFD8DC',
  lighten_3: '#B0BEC5',
  lighten_2: '#90A4AE',
  lighten_1: '#78909C',
  darken_1: '#546E7A',
  darken_2: '#455A64',
  darken_3: '#37474F',
  darken_4: '#263238',
  accent_1: '#B7C9D1',
  accent_2: '#89A5B3',
  accent_3: '#6A8EA0',
  accent_4: '#547383'
};
const Brown = {
  base: '#795548',
  lighten_5: '#EFEBE9',
  lighten_4: '#D7CCC8',
  lighten_3: '#BCAAA4',
  lighten_2: '#A1887F',
  lighten_1: '#8D6E63',
  darken_1: '#6D4C41',
  darken_2: '#5D4037',
  darken_3: '#4E342E',
  darken_4: '#3E2723',
  accent_1: '#D2BEB6',
  accent_2: '#B59387',
  accent_3: '#A27767',
  accent_4: '#855F51'
};
const Grey = {
  base: '#9E9E9E',
  lighten_5: '#FAFAFA',
  lighten_4: '#F5F5F5',
  lighten_3: '#EEEEEE',
  lighten_2: '#E0E0E0',
  lighten_1: '#BDBDBD',
  darken_1: '#757575',
  darken_2: '#616161',
  darken_3: '#424242',
  darken_4: '#212121',
  accent_1: '#C4C4C4',
  accent_2: '#9E9E9E',
  accent_3: '#858585',
  accent_4: '#6B6B6B'
};
/**
 * @type {Object.<string,Object<string,Object>>}
 * @property {string[]} colors
 * @property {string[]} degrees
 */

const Cards = {
  red: Red,
  pink: Pink,
  purple: Purple,
  deepPurple: DeepPurple,
  indigo: Indigo,
  blue: Blue,
  lightBlue: LightBlue,
  cyan: Cyan,
  teal: Teal,
  green: Green,
  lightGreen: LightGreen,
  lime: Lime,
  yellow: Yellow,
  amber: Amber,
  orange: Orange,
  deepOrange: DeepOrange,
  brown: Brown,
  blueGrey: BlueGrey,
  grey: Grey
};
Reflect.defineProperty(Cards, 'colors', {
  get() {
    return Object.keys(Cards);
  },

  enumerable: false
});
Reflect.defineProperty(Cards, 'degrees', {
  get() {
    for (let color in Cards) return Object.keys(Cards[color]);
  },

  enumerable: false
});

/**
 *
 * applicable for smaller number
 * @param {number} x
 * @returns {number}
 */


const round = x => x + (x > 0 ? 0.5 : -0.5) << 0;

const rgbToInt = ([r, g, b]) => ((r & 0xFF) << 16) + ((g & 0xFF) << 8) + (b & 0xFF);
/**
 * @param {[number,number,number]} rgb
 * @returns {string}
 */


const rgbToHex = rgb => '#' + rgbToInt(rgb).toString(16).toUpperCase().padStart(6, '0');

const diluteHex = (hex, hi) => {
  hi = hi || hex.length;
  let x = '';

  for (let i = 0, el; i < hi; i++) {
    el = hex[i];
    x += el + el;
  } // for (let c of hex) x += c + c


  return x;
};
/**
 *
 * @param {string} hex
 * @returns {number}
 */


function hexToInt(hex) {
  if (hex.charAt(0) === '#') hex = hex.substring(1);
  if (!hex[3]) hex = diluteHex(hex);
  return parseInt(hex, 16);
}
/**
 *
 * @param {string} hex
 * @returns {number[]}
 */


function hexToRgb(hex) {
  const int = hexToInt(hex);
  return [int >> 16 & 0xFF, int >> 8 & 0xFF, int & 0xFF];
}
/**
 *
 * @param {number} n
 * @param {number} h
 * @param {number} a
 * @param {number} l
 * @returns {number}
 */


const hf = (n, h, a, l) => {
  const k = (n + h / 30) % 12;
  return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
};
/**
 *
 * @param {number} h
 * @param {number} s
 * @param {number} l
 * @returns {number[]}
 */


function hslToRgb([h, s, l]) {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l),
        r = hf(0, h, a, l),
        g = hf(8, h, a, l),
        b = hf(4, h, a, l);
  return [round(r * 0xFF), round(g * 0xFF), round(b * 0xFF)]; // return [r * 0xFF & 0xFF, g * 0xFF & 0xFF, b * 0xFF & 0xFF]
}

const hslToHex = hsl => {
  var _ref, _hsl;

  return _ref = (_hsl = hsl, hslToRgb(_hsl)), rgbToHex(_ref);
};

const ESC = '\u001b';
const L = ESC + '[';
const R = 'm';
const SC = ';';
const FORE = '38;2';
const CLR_FORE = '39';
//   black: 30,
//   Red: 31,
//   Green: 32,
//   Yellow: 33,
//   Blue: 34,
//   magenta: 35,
//   Cyan: 36,
//   white: 37,
//   Grey: 90,
// }

const BOLD = '1';
const ITALIC = '3';
const UNDERLINE = '4';
const INVERSE = '7';
const CLR_BOLD = '22';
const CLR_ITALIC = '23';
const CLR_UNDERLINE = '24';
const CLR_INVERSE = '27';
const Effects = {
  bold: [BOLD, CLR_BOLD],
  italic: [ITALIC, CLR_ITALIC],
  underline: [UNDERLINE, CLR_UNDERLINE],
  inverse: [INVERSE, CLR_INVERSE]
};
/**
 *
 * @param {string} code
 * @returns {string}
 */


const brt = code => L + code + R;
/**
 *
 * @param {number[]} rgb - array of three integers, each from 0 to 255
 * @returns {string}
 */


const rgbToAnsi = rgb => FORE + SC + rgb[0] + SC + rgb[1] + SC + rgb[2];

/**
 *
 * @param {string} tx
 * @returns {string}
 */

function codedDyer(tx) {
  const {
    h,
    t
  } = this;
  return brt(h) + tx + brt(t);
}

const parseEffects = effects => {
  let h = '',
      t = '';

  if (effects.length) {
    let l, r;

    for (let e of effects) if (e in Effects && ([l, r] = Effects[e])) h += SC + l, t += SC + r;
  }

  return {
    h,
    t
  };
};
/***
 *
 * @param {number[]} rgb
 * @param {...string} [effects]
 * @returns {function(string):string}
 */


const Dye = (rgb, ...effects) => {
  const config = parseEffects(effects);
  config.h += SC + rgbToAnsi(rgb), config.t += SC + CLR_FORE;
  return codedDyer.bind(config);
};

const sortKeysByLength = dict => dict.sort(([a], [b]) => String(b).length - String(a).length);

const makeReplaceable = function (dict) {
  if (this === null || this === void 0 ? void 0 : this.sort) sortKeysByLength(dict);
  Object.defineProperty(dict, Symbol.replace, {
    value(word, after) {
      for (let [curr, proj] of this) word = word.replace(curr, proj);

      return after ? after(word) : word;
    },

    configurable: true,
    enumerable: false
  });
  return dict;
};

const DECOFUN_CONFIG = {
  pr: true,
  fw: 160,
  aw: 192
};
const DECOFUNC_CONFIG = {
  pretty: true,
  flatMark: 160,
  abbrMark: 192
};

var _Blue$lighten_, _LightBlue$accent_, _LightBlue$lighten_, _Lime$lighten_, _ref, _function, _Grey$base, _return, _Brown$lighten_;

const nameDye = Dye((_Blue$lighten_ = Blue.lighten_2, hexToRgb(_Blue$lighten_)));
const argsDye = Dye((_LightBlue$accent_ = LightBlue.accent_2, hexToRgb(_LightBlue$accent_)));
const bodyDye = Dye((_LightBlue$lighten_ = LightBlue.lighten_3, hexToRgb(_LightBlue$lighten_)));
const arrowDye = Dye((_Lime$lighten_ = Lime.lighten_1, hexToRgb(_Lime$lighten_)));
const PresetDye = (_ref = [[/function/gi, (_function = 'function', Dye((_Grey$base = Grey.base, hexToRgb(_Grey$base)))(_function))], [/return/gi, (_return = 'return', Dye((_Brown$lighten_ = Brown.lighten_3, hexToRgb(_Brown$lighten_)))(_return))], [/\bthis\b/gi, x => {
  var _x, _BlueGrey$accent_;

  return _x = x, Dye((_BlueGrey$accent_ = BlueGrey.accent_2, hexToRgb(_BlueGrey$accent_)))(_x);
}], [/\b(if|else|while|do|switch|for)\b/gi, x => {
  var _x2, _Purple$lighten_;

  return _x2 = x, Dye((_Purple$lighten_ = Purple.lighten_3, hexToRgb(_Purple$lighten_)))(_x2);
}], [/\b(var|let|const)\b/gi, x => {
  var _x3, _DeepPurple$lighten_;

  return _x3 = x, Dye((_DeepPurple$lighten_ = DeepPurple.lighten_3, hexToRgb(_DeepPurple$lighten_)))(_x3);
}]], makeReplaceable(_ref));

const funcName = func => {
  var _func$name;

  return `[fn:(${(_func$name = func === null || func === void 0 ? void 0 : func.name) !== null && _func$name !== void 0 ? _func$name : '<anonym>'})]`;
};

const LAMB_REG = /function\s*(\w*)\s*\(([\w\s,]+)\)\s*\{\s*return(.+);?\s*\}/gs;
const THIS_REG = /\bthis\b/;
const FUNC_INI = /^function/;
const MULTI_LF = /\n\s*(\n\s*)/g;

const funcToLined = func => {
  return func.toString().replace(MULTI_LF, (_, p1) => p1);
};

const flatten = (text, flatMark) => {
  const temp = text.replace(/\s+/g, ' ');
  if (temp.length <= flatMark) text = temp.replace(/;\s*}/g, ' }');
  return text;
};

const lambdafy = (text, pretty) => {
  if (!THIS_REG.test(text)) text = pretty ? text.replace(LAMB_REG, (_, name, args, body) => nameDye(name) + SP + parenth(argsDye(args)) + SP + arrowDye('=>') + bodyDye(body)) : text.replace(LAMB_REG, (_, name, args, body) => name + SP + parenth(args) + SP + '=>' + body);
  return text.replace(FUNC_INI, '').trim();
};

const abbrev = (text, abbrMark, func) => {
  if (lange(text) > abbrMark) return funcName(func);
  return text;
};

const prettify = (text, pretty) => {
  if (pretty) return text.replace(PresetDye);
  return text;
};

const decofun = function (func) {
  let text;
  const {
    pr,
    fw,
    aw
  } = this;
  text = funcToLined(func);
  text = flatten(text, fw);
  text = lambdafy(text, pr);
  text = abbrev(text, aw, func);
  return prettify(text, pr);
};

const parseConfig = p => {
  var _ref, _p$pretty, _ref2, _p$flatMark, _ref3, _p$abbrMark;

  p.pr = (_ref = (_p$pretty = p.pretty) !== null && _p$pretty !== void 0 ? _p$pretty : p.pr) !== null && _ref !== void 0 ? _ref : true;
  p.fw = (_ref2 = (_p$flatMark = p.flatMark) !== null && _p$flatMark !== void 0 ? _p$flatMark : p.fw) !== null && _ref2 !== void 0 ? _ref2 : 160;
  p.aw = (_ref3 = (_p$abbrMark = p.abbrMark) !== null && _p$abbrMark !== void 0 ? _p$abbrMark : p.aw) !== null && _ref3 !== void 0 ? _ref3 : 192;
  return p;
};
/**
 * @param {Function} func
 * @param {Object} p
 * @param {boolean} [p.pretty=true]
 * @param {number} [p.flatMark=160]
 * @param {number} [p.abbrMark=192]
 * @returns {string}
 */


const decoFunc = (func, p = DECOFUNC_CONFIG) => decofun.call(parseConfig(p), func);
/**
 * @param {Object} p
 * @param {boolean} [p.pretty=true]
 * @param {number} [p.flatMark=160]
 * @param {number} [p.abbrMark=192]
 * @returns {Function}
 */


const DecoFunc = (p = DECOFUNC_CONFIG) => decofun.bind(parseConfig(p));

const pairEnt = ([k, v]) => k + RT + v;

// from x => Object.prototype.toString.call(x)
const OBJECT = 'Object';
const ARRAY = 'Array';
const DATE = 'Date';

const isNumeric$1 = x => !!(x = +x) || x === 0;

const DIGIT_2 = '2-digit';
const DATE_CONFIG = {
  year: DIGIT_2,
  month: DIGIT_2,
  day: DIGIT_2
};
/** @type {Intl.DateTimeFormat} */

const FormatDate = new Intl.DateTimeFormat(undefined, DATE_CONFIG);
const formatDate = FormatDate.format.bind(FormatDate);

const NUMERIC = 'numeric';
const TIME_CONFIG = {
  hour: NUMERIC,
  minute: NUMERIC,
  second: NUMERIC,
  hour12: false
};
/** @type {Intl.DateTimeFormat} */

const FormatTime = new Intl.DateTimeFormat(undefined, TIME_CONFIG);
const formatTime = FormatTime.format.bind(FormatTime);

/**
 *
 * @param {[*,*][]} ents
 * @param {function} keyFn
 * @param {function} [valFn]
 * @param {number} [l]
 * @returns {undefined}
 */
/**
 *
 * @param {[*,*][]} ents
 * @param {function} keyMap
 * @param {function} [valMap]
 * @param {number} [l]
 * @returns {[*,*][]}
 */


const mutate = (ents, keyMap, valMap, l) => {
  l = l || ents && ents.length, valMap = valMap || keyMap;

  for (let i = 0, r; i < l; i++) {
    r = ents[i], r[0] = keyMap(r[0], i), r[1] = valMap(r[1], i);
  }

  return ents;
};

const decoKey = function (x) {
  return /\W/.test(x) || isNumeric(x) ? tenseQuote(x) : x;
};

const DEFN = {
  pr: false
};

function deco(node) {
  var _decofun$call, _node$toString;

  const {
    loose,
    quote
  } = this;
  if (node === void 0 || node === null) return node;
  const t = typeof node;
  if (t === NUM || t === BOO) return node;
  if (t === STR) return loose && isNumeric$1(node) ? node : quote(node);
  if (t === FUN) return _decofun$call = decofun.call(DEFN, node), quote(_decofun$call);

  if (t === OBJ) {
    var _node$map$join, _mutate$map$join, _ref;

    const pt = typ(node);
    if (pt === ARRAY) return _node$map$join = node.map(deco.bind(this)).join(COSP), bracket(_node$map$join);
    if (pt === OBJECT) return _mutate$map$join = mutate(Object.entries(node), decoKey, deco.bind(this)).map(pairEnt).join(COSP), brace(_mutate$map$join);
    if (pt === DATE) return _ref = `${formatDate(node)}'${formatTime(node)}`, quote(_ref);
  }

  return _node$toString = node.toString(), quote(_node$toString);
}

const parseQuote = q => {
  var _Qt;

  return typeof q === FUN ? q : (_Qt = Qt(q)) !== null && _Qt !== void 0 ? _Qt : quote;
};

const presetConfig = p => {
  var _p$loose;

  p.loose = (_p$loose = p.loose) !== null && _p$loose !== void 0 ? _p$loose : true;
  p.quote = parseQuote(p.quote);
  return p;
};
/**
 *
 * @param x
 * @param {Object} p
 * @param {boolean} [p.loose]
 * @param {Function|string|number} [p.quote]
 * @return {string|*}
 */


const decoPale = (x, p = {}) => deco.call(presetConfig(p), x);
/**
 *
 * @param {Object} p
 * @param {boolean} [p.loose]
 * @param {Function|string|number} [p.quote]
 */


const DecoPale = (p = {}) => deco.bind(presetConfig(p));

const max = (a, b) => a > b ? a : b;

const min = (a, b) => a < b ? a : b;

const AQUA = {
  max: Cards.cyan.accent_2,
  min: Cards.green.darken_1,
  na: Cards.grey.lighten_4
};
const ATLAS = {
  max: Cards.cyan.lighten_3,
  min: Cards.orange.lighten_2,
  na: Cards.pink.lighten_4
};
const AURORA = {
  max: Cards.green.accent_3,
  min: Cards.deepPurple.accent_1,
  na: Cards.teal.accent_1
};
const AZURE = {
  max: Cards.cyan.accent_1,
  min: Cards.lightBlue.accent_4,
  na: Cards.deepOrange.accent_1
};
const FRESH = {
  max: Cards.lightGreen.accent_3,
  min: Cards.deepOrange.accent_3,
  na: Cards.blue.lighten_3
};
const MOSS = {
  max: Cards.lightGreen.accent_3,
  min: Cards.teal.lighten_3,
  na: Cards.brown.accent_1
};
const INSTA = {
  max: Cards.orange.accent_2,
  min: Cards.purple.accent_1,
  na: Cards.grey.lighten_2
};
const JUNGLE = {
  max: Cards.lime.accent_3,
  min: Cards.lightGreen.accent_3,
  na: Cards.blueGrey.accent_1
};
const LAVA = {
  max: Cards.amber.accent_3,
  min: Cards.red.lighten_1,
  na: Cards.grey.accent_2
};
const METRO = {
  max: Cards.pink.lighten_2,
  min: Cards.blue.lighten_4,
  na: Cards.teal.accent_3
};
const OCEAN = {
  max: Cards.lightBlue.accent_2,
  min: Cards.indigo.base,
  na: Cards.pink.lighten_3
};
const PLANET = {
  max: Cards.teal.accent_2,
  min: Cards.blue.darken_3,
  na: Cards.cyan.lighten_4
};
const POME = {
  max: Cards.red.lighten_2,
  min: Cards.yellow.darken_1,
  na: Cards.green.lighten_2
};
const SUBTLE = {
  max: Cards.grey.lighten_5,
  min: Cards.grey.darken_1,
  na: Cards.indigo.lighten_3
};
const VIOLA = {
  max: Cards.pink.lighten_4,
  min: Cards.deepPurple.accent_2,
  na: Cards.amber.darken_2
};

const STR$1 = 'string';

const stringValue = word => {
  let l = word === null || word === void 0 ? void 0 : word.length;
  if (!l) return NaN;
  if (typeof word !== STR$1) return NaN;
  if (l >= 4) return ((word.charCodeAt(0) & 0x7f) << 21) + ((word.charCodeAt(1) & 0x7f) << 14) + ((word.charCodeAt(2) & 0x7f) << 7) + (word.charCodeAt(3) & 0x7f);
  if (l === 3) return ((word.charCodeAt(0) & 0x7f) << 21) + ((word.charCodeAt(1) & 0x7f) << 14) + ((word.charCodeAt(2) & 0x7f) << 7);
  if (l === 2) return ((word.charCodeAt(0) & 0x7f) << 21) + ((word.charCodeAt(1) & 0x7f) << 14);
  if (l === 1) return (word.charCodeAt(0) & 0x7f) << 21;
};

const iterate = function (vec, fn, l) {
  l = l || vec && vec.length;

  for (let i = 0; i < l; i++) fn.call(this, vec[i], i);
};

const parseNumeric = x => +x;

const duobound = function (words, [x, y] = []) {
  var _x$filter, _x$mapper, _y$filter, _y$mapper;

  const l = words === null || words === void 0 ? void 0 : words.length;
  let vX = undefined,
      vY = undefined;
  if (!l) return [vX, vY];
  const filterX = (_x$filter = x === null || x === void 0 ? void 0 : x.filter) !== null && _x$filter !== void 0 ? _x$filter : isNumeric,
        mapperX = (_x$mapper = x === null || x === void 0 ? void 0 : x.mapper) !== null && _x$mapper !== void 0 ? _x$mapper : parseNumeric;
  const filterY = (_y$filter = y === null || y === void 0 ? void 0 : y.filter) !== null && _y$filter !== void 0 ? _y$filter : hasLiteral,
        mapperY = (_y$mapper = y === null || y === void 0 ? void 0 : y.mapper) !== null && _y$mapper !== void 0 ? _y$mapper : stringValue;
  iterate(words, (v, i) => {
    var _vX, _vY;

    if (filterX(v) && ((_vX = vX) !== null && _vX !== void 0 ? _vX : vX = Array(l))) {
      var _vX$max;

      v = mapperX(v);

      if (v > ((_vX$max = vX.max) !== null && _vX$max !== void 0 ? _vX$max : vX.max = vX.min = v)) {
        vX.max = v;
      } else if (v < vX.min) {
        vX.min = v;
      }

      return vX[i] = v;
    }

    if (filterY(v) && ((_vY = vY) !== null && _vY !== void 0 ? _vY : vY = Array(l))) {
      var _vY$max;

      v = mapperY(v);

      if (v > ((_vY$max = vY.max) !== null && _vY$max !== void 0 ? _vY$max : vY.max = vY.min = v)) {
        vY.max = v;
      } else if (v < vY.min) {
        vY.min = v;
      }

      return vY[i] = v;
    }

    return NaN;
  }, l);
  return [vX, vY];
};

const iterate$1 = function (vec, fn, l) {
  l = l || vec && vec.length;

  for (let i = 0; i < l; i++) fn.call(this, vec[i], i);
};

const reviter = function (vec, fn, l) {
  l = l || vec && vec.length;

  for (--l; l >= 0; l--) fn.call(this, vec[l], l);
};

const mapper = function (vec, fn, l) {
  l = l || vec && vec.length;
  const ar = Array(l);

  for (--l; l >= 0; l--) ar[l] = fn.call(this, vec[l], l);

  return ar;
};

const mutate$1 = (vec, fn, l) => {
  l = l || vec && vec.length;

  for (--l; l >= 0; l--) vec[l] = fn(vec[l], l);

  return vec;
};

var Mapper = /*#__PURE__*/Object.freeze({
      __proto__: null,
      iterate: iterate$1,
      mapper: mapper,
      mutate: mutate$1,
      reviter: reviter
});

/**
 *
 * applicable for smaller number
 * @param {number} x
 * @returns {number}
 */


const round$1 = x => x + (x > 0 ? 0.5 : -0.5) << 0;

const bound = ([r, g, b]) => {
  let ma = r,
      mi = r;

  if (g > r) {
    ma = g;
  } else {
    mi = g;
  }

  if (b > ma) ma = b;
  if (b < mi) mi = b;
  return {
    max: ma,
    sum: ma + mi,
    dif: ma - mi
  };
};

const hue = (r, g, b, max, dif) => {
  if (dif === 0) return 0;

  switch (max) {
    case r:
      return ((g - b) / dif + (g < b ? 6 : 0)) % 6;

    case g:
      return (b - r) / dif + 2;

    case b:
      return (r - g) / dif + 4;
  }
};

const THOUSAND = 1000;
/**
 * !dif: dif===0
 * @param {number} r - [0,255]
 * @param {number} g - [0,255]
 * @param {number} b - [0,255]
 * @returns {[number,number,number]} [Hue([0,360]), Saturation([0,100]), Lightness([0,100])]
 */

function rgbToHsl([r, g, b]) {
  r /= 255;
  g /= 255;
  b /= 255;
  const {
    max,
    sum,
    dif
  } = bound([r, g, b]);
  let h = hue(r, g, b, max, dif) * 60,
      s = !dif ? 0 : sum > 1 ? dif / (2 - sum) : dif / sum,
      l = sum / 2;
  return [round$1(h), round$1(s * THOUSAND) / 10, round$1(l * THOUSAND) / 10];
}

const diluteHex$1 = (hex, hi) => {
  hi = hi || hex.length;
  let x = '';

  for (let i = 0, el; i < hi; i++) {
    el = hex[i];
    x += el + el;
  } // for (let c of hex) x += c + c


  return x;
};
/**
 *
 * @param {string} hex
 * @returns {number}
 */


function hexToInt$1(hex) {
  if (hex.charAt(0) === '#') hex = hex.substring(1);
  if (!hex[3]) hex = diluteHex$1(hex);
  return parseInt(hex, 16);
}
/**
 *
 * @param {string} hex
 * @returns {number[]}
 */


function hexToRgb$1(hex) {
  const int = hexToInt$1(hex);
  return [int >> 16 & 0xFF, int >> 8 & 0xFF, int & 0xFF];
}

const hexToHsl = hex => {
  var _ref, _hex;

  return _ref = (_hex = hex, hexToRgb$1(_hex)), rgbToHsl(_ref);
};
/**
 *
 * @param {number} n
 * @param {number} h
 * @param {number} a
 * @param {number} l
 * @returns {number}
 */


const hf$1 = (n, h, a, l) => {
  const k = (n + h / 30) % 12;
  return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
};
/**
 *
 * @param {number} h
 * @param {number} s
 * @param {number} l
 * @returns {number[]}
 */


function hslToRgb$1([h, s, l]) {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l),
        r = hf$1(0, h, a, l),
        g = hf$1(8, h, a, l),
        b = hf$1(4, h, a, l);
  return [round$1(r * 0xFF), round$1(g * 0xFF), round$1(b * 0xFF)]; // return [r * 0xFF & 0xFF, g * 0xFF & 0xFF, b * 0xFF & 0xFF]
}

const AQUA$1 = {
  max: Cards.cyan.accent_2,
  min: Cards.green.darken_1,
  na: Cards.grey.lighten_4
};
const ATLAS$1 = {
  max: Cards.cyan.lighten_3,
  min: Cards.orange.lighten_2,
  na: Cards.pink.lighten_4
};
const AURORA$1 = {
  max: Cards.green.accent_3,
  min: Cards.deepPurple.accent_1,
  na: Cards.teal.accent_1
};
const AZURE$1 = {
  max: Cards.cyan.accent_1,
  min: Cards.lightBlue.accent_4,
  na: Cards.deepOrange.accent_1
};
const FRESH$1 = {
  max: Cards.lightGreen.accent_3,
  min: Cards.deepOrange.accent_3,
  na: Cards.blue.lighten_3
};
const MOSS$1 = {
  max: Cards.lightGreen.accent_3,
  min: Cards.teal.lighten_3,
  na: Cards.brown.accent_1
};
const INSTA$1 = {
  max: Cards.orange.accent_2,
  min: Cards.purple.accent_1,
  na: Cards.grey.lighten_2
};
const JUNGLE$1 = {
  max: Cards.lime.accent_3,
  min: Cards.lightGreen.accent_3,
  na: Cards.blueGrey.accent_1
};
const LAVA$1 = {
  max: Cards.amber.accent_3,
  min: Cards.red.lighten_1,
  na: Cards.grey.accent_2
};
const METRO$1 = {
  max: Cards.pink.lighten_2,
  min: Cards.blue.lighten_4,
  na: Cards.teal.accent_3
};
const OCEAN$1 = {
  max: Cards.lightBlue.accent_2,
  min: Cards.indigo.base,
  na: Cards.pink.lighten_3
};
const PLANET$1 = {
  max: Cards.teal.accent_2,
  min: Cards.blue.darken_3,
  na: Cards.cyan.lighten_4
};
const POME$1 = {
  max: Cards.red.lighten_2,
  min: Cards.yellow.darken_1,
  na: Cards.green.lighten_2
};
const SUBTLE$1 = {
  max: Cards.grey.lighten_5,
  min: Cards.grey.darken_1,
  na: Cards.indigo.lighten_3
};
const VIOLA$1 = {
  max: Cards.pink.lighten_4,
  min: Cards.deepPurple.accent_2,
  na: Cards.amber.darken_2
};

const ESC$1 = '\u001b';
const L$1 = ESC$1 + '[';
const R$1 = 'm';
const SC$1 = ';';
const FORE$1 = '38;2';
const CLR_FORE$1 = '39';
//   black: 30,
//   Red: 31,
//   Green: 32,
//   Yellow: 33,
//   Blue: 34,
//   magenta: 35,
//   Cyan: 36,
//   white: 37,
//   Grey: 90,
// }

const BOLD$1 = '1';
const ITALIC$1 = '3';
const UNDERLINE$1 = '4';
const INVERSE$1 = '7';
const CLR_BOLD$1 = '22';
const CLR_ITALIC$1 = '23';
const CLR_UNDERLINE$1 = '24';
const CLR_INVERSE$1 = '27';
const Effects$1 = {
  bold: [BOLD$1, CLR_BOLD$1],
  italic: [ITALIC$1, CLR_ITALIC$1],
  underline: [UNDERLINE$1, CLR_UNDERLINE$1],
  inverse: [INVERSE$1, CLR_INVERSE$1]
};
/**
 *
 * @param {string} code
 * @returns {string}
 */


const brt$1 = code => L$1 + code + R$1;
/**
 *
 * @param {number[]} rgb - array of three integers, each from 0 to 255
 * @returns {string}
 */


const rgbToAnsi$1 = rgb => FORE$1 + SC$1 + rgb[0] + SC$1 + rgb[1] + SC$1 + rgb[2];

/**
 *
 * @param {string} tx
 * @returns {string}
 */

function codedDyer$1(tx) {
  const {
    h,
    t
  } = this;
  return brt$1(h) + tx + brt$1(t);
}

const parseEffects$1 = effects => {
  let h = '',
      t = '';

  if (effects.length) {
    let l, r;

    for (let e of effects) if (e in Effects$1 && ([l, r] = Effects$1[e])) h += SC$1 + l, t += SC$1 + r;
  }

  return {
    h,
    t
  };
};
/***
 *
 * @param {number[]} rgb
 * @param {...string} [effects]
 * @returns {function(string):string}
 */


const Dye$1 = (rgb, ...effects) => {
  const config = parseEffects$1(effects);
  config.h += SC$1 + rgbToAnsi$1(rgb), config.t += SC$1 + CLR_FORE$1;
  return codedDyer$1.bind(config);
};

const PrepDye = function (...effects) {
  const config = parseEffects$1(effects);
  return RgbDyerCreator.bind(config);
};

const RgbDyerCreator = function (rgb) {
  let {
    h,
    t
  } = this;
  h += SC$1 + rgbToAnsi$1(rgb), t += SC$1 + CLR_FORE$1;
  return codedDyer$1.bind({
    h,
    t
  });
};

function duozipper(a, b) {
  let {
    fn,
    lo,
    hi
  } = this;
  lo = lo || 0;
  const vec = Array(hi = hi || a && a.length);

  for (--hi; hi >= lo; hi--) vec[hi] = fn(a[hi], b[hi], hi);

  return vec;
}
/**
 * zip two arrays, return the zipped array
 * @param {Array} a
 * @param {Array} b
 * @param {function(*,*,number?):*} fn
 * @param {number} [l]
 * @returns {*[]}
 */


const zipper = (a, b, fn, l) => duozipper.call({
  fn,
  hi: l
}, a, b);

/**
 * Create a dye from a hsl array
 * @param {[number,number,number]} hsl
 * @returns {function}
 */

const hslToDye = hsl => {
  var _ref, _hsl;

  return _ref = (_hsl = hsl, hslToRgb$1(_hsl)), Dye$1(_ref);
};


const STR$2 = 'string';

const parseHsl = color => {
  var _color;

  return typeof color === STR$2 ? (_color = color, hexToHsl(_color)) : color;
};
/**
 *
 * @param max
 * @param min
 * @returns {{dif: [number,number,number], min: [number,number,number]}}
 */


const colorBound = ([maxH, maxS, maxL], [minH, minS, minL]) => ({
  min: [minH, minS, minL],
  dif: [maxH - minH, maxS - minS, maxL - minL]
});

const presetToLeap = ({
  max,
  min
}) => {
  var _max, _min;

  return colorBound((_max = max, parseHsl(_max)), (_min = min, parseHsl(_min)));
};

const presetToFlat = ({
  na
}) => {
  var _ref, _na;

  return _ref = (_na = na, parseHsl(_na)), hslToDye(_ref);
};

const {
  iterate: iterate$2,
  reviter: reviter$1,
  mapper: mapper$1,
  mutate: mutate$2
} = Mapper;

/**
 *
 * @param {Object} bound
 * @param {number} [bound.min] - if min: if dif, return {min,dif}; if max, return calculated {min,dif}
 * @param {number} [bound.dif] - if dif: if max, return calculated {min,dif}; else return {min:0,dif}
 * @param {number} [bound.max] - if max: return {min:0,dif:max}; else return {min:0,dif:0}
 * @return {{dif: number, min: number}}
 */

const boundToLeap = bound => {
  let {
    min,
    max,
    dif
  } = bound;

  if (!nullish(min)) {
    if (!nullish(dif)) return {
      min,
      dif
    };
    if (!nullish(max)) return {
      min,
      dif: max - min
    };
  }

  if (!nullish(dif)) {
    if (!nullish(max)) return {
      min: max - dif,
      dif
    };
    return {
      min: 0,
      dif
    };
  }

  if (!nullish(max)) return {
    min: 0,
    dif: max
  };
  return {
    min: 0,
    dif: 0
  };
};
/**
 * Create a dye from a hsl array
 * @param {[number,number,number]} hsl
 * @returns {function}
 */


function hslToDye$1(hsl) {
  var _ref, _hsl, _ref2, _hsl2;

  const effects = this;
  return effects ? (_ref = (_hsl = hsl, hslToRgb$1(_hsl)), PrepDye.apply(null, effects)(_ref)) : (_ref2 = (_hsl2 = hsl, hslToRgb$1(_hsl2)), Dye$1(_ref2));
}

const leverage = ([h, s, l], base) => [h / base, s / base, l / base];

const scale = (x, min$1, lever, base, ceil) => min((max(x, min$1) - min$1) * lever + base, ceil);

const projector = function (x) {
  const {
    min: m,
    lever: [rH, rS, rL],
    base: [mH, mS, mL],
    effects
  } = this;
  return hslToDye$1.call(effects, [scale(x, m, rH, mH, 360), scale(x, m, rS, mS, 100), scale(x, m, rL, mL, 100)]);
};
/**
 *
 * @param {{[min]:number,[max]:number,[dif]:number}} bound
 * @param {{max:*,min:*}} preset
 * @param {string[]} [effects]
 * @returns {function(*):function}
 * @constructor
 */


const Projector = (bound, preset, effects) => {
  var _bound, _preset;

  if (!bound) return void 0;
  bound = (_bound = bound, boundToLeap(_bound));
  /** @type {{min:number[],dif:number[]}} */

  const leap = (_preset = preset, presetToLeap(_preset));

  if (!bound.dif) {
    const dye = hslToDye$1.call(effects, leap.min);
    return () => dye;
  }

  return projector.bind({
    min: bound.min,
    lever: leverage(leap.dif, bound.dif),
    base: leap.min,
    effects: effects
  });
};

/**
 *
 * @typedef {Object} PalettProjectConfig
 * @typedef {Function} PalettProjectConfig.filter
 * @typedef {Function} PalettProjectConfig.mapper
 * @typedef {Object} PalettProjectConfig.preset
 *
 * @param vec
 * @param {PalettProjectConfig[]} presets
 * @param {string[]} effects
 */


const fluoVec = function (vec, presets = [], effects) {
  var _x$preset, _y$preset;

  if (!(vec === null || vec === void 0 ? void 0 : vec.length)) return [];
  const colorant = this === null || this === void 0 ? void 0 : this.colorant,
        mutate$1 = this === null || this === void 0 ? void 0 : this.mutate;
  const [x, y] = presets;
  const pX = (_x$preset = x === null || x === void 0 ? void 0 : x.preset) !== null && _x$preset !== void 0 ? _x$preset : FRESH$1,
        pY = (_y$preset = y === null || y === void 0 ? void 0 : y.preset) !== null && _y$preset !== void 0 ? _y$preset : PLANET$1;
  const [bX, bY] = duobound(vec, presets);
  const dX = Projector(bX, pX, effects),
        dY = Projector(bY, pY, effects);
  const mapper$1$1 = mutate$1 ? mutate$2 : mapper$1;
  return colorant ? mapper$1$1(vec, Colorant(bX, dX, bY, dY, presetToFlat(pX))) : mapper$1$1(vec, Pigment(bX, dX, bY, dY, presetToFlat(pY)));
};

const Colorant = function (bX, dX, bY, dY, dye) {
  return (_, i) => {
    const x = bX && bX[i],
          y = bY && bY[i];
    return !nullish(x) ? dX(x) : !nullish(y) ? dY(y) : dye;
  };
};

const Pigment = function (bX, dX, bY, dY, dye) {
  return (n, i) => {
    var _n, _n2, _n3;

    const x = bX && bX[i],
          y = bY && bY[i];
    return !nullish(x) ? (_n = n, dX(x)(_n)) : !nullish(y) ? (_n2 = n, dY(y)(_n2)) : (_n3 = n, dye(_n3));
  };
};

const unwind = (entries, h) => {
  h = h || entries && entries.length;
  let keys = Array(h),
      values = Array(h);

  for (let r; --h >= 0 && (r = entries[h]);) {
    keys[h] = r[0];
    values[h] = r[1];
  }

  return [keys, values];
};

/**
 *
 * @param {[*,*][]} ea
 * @param {[*,*][]} eb
 * @param {function} keyMap
 * @param {function} [valMap]
 * @param {number} [l]
 * @returns {[*,*][]}
 */


const mutazip = (ea, eb, keyMap, valMap, l) => {
  l = l || ea && ea.length, valMap = valMap || keyMap;

  for (let a, b, i = 0; i < l && (a = ea[i]) && (b = eb[i]); i++) a[0] = keyMap(a[0], b[0], i), a[1] = valMap(a[1], b[1], i);

  return ea;
};

const wind = (keys, values) => zipper(keys, values, (k, v) => [k, v]);

/**
 *
 * @typedef {Object} PalettProjectConfig
 * @typedef {Function} PalettProjectConfig.filter
 * @typedef {Function} PalettProjectConfig.mapper
 * @typedef {Object} PalettProjectConfig.preset
 *
 * @param entries
 * @param {PalettProjectConfig[]} [presets]
 * @param {string[]} [effects]
 */


const fluoEnt = function (entries, presets, effects) {
  const colorant = this === null || this === void 0 ? void 0 : this.colorant,
        mutate = this === null || this === void 0 ? void 0 : this.mutate;
  let [keys, items] = unwind(entries);
  const config = {
    colorant,
    mutate: true
  };
  fluoVec.call(config, keys, presets, effects);
  fluoVec.call(config, items, presets, effects);
  const rendered = wind(keys, items);
  return mutate ? mutazip(entries, rendered, (a, b) => b) : rendered;
};

const mapper$2 = (o, fn) => {
  const ob = {};

  for (let k in o) if (Object.hasOwnProperty.call(o, k)) ob[k] = fn(o[k]);

  return ob;
};

var _ref$1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8;

const Dyes = {
  0: Dye((_ref$1 = [45, 100, 53], hslToRgb(_ref$1))),
  1: Dye((_ref2 = [44, 100, 59], hslToRgb(_ref2))),
  2: Dye((_ref3 = [43, 100, 64], hslToRgb(_ref3))),
  3: Dye((_ref4 = [42, 100, 70], hslToRgb(_ref4))),
  4: Dye((_ref5 = [41, 100, 74], hslToRgb(_ref5))),
  5: Dye((_ref6 = [40, 100, 78], hslToRgb(_ref6))),
  6: Dye((_ref7 = [39, 100, 82], hslToRgb(_ref7))),
  7: Dye((_ref8 = [37, 100, 86], hslToRgb(_ref8)))
};
const L$2 = '{ ',
      R$2 = ' }';
const BRC = mapper$2(Dyes, dye => {
  var _L, _R;

  const l = (_L = L$2, dye(_L)),
        r = (_R = R$2, dye(_R));
  return content => l + content + r;
});

var _ref$1$1, _ref2$1, _ref3$1, _ref4$1, _ref5$1, _ref6$1, _ref7$1, _ref8$1;

const Dyes$1 = {
  0: Dye((_ref$1$1 = [199, 100, 63], hslToRgb(_ref$1$1))),
  1: Dye((_ref2$1 = [201, 100, 68], hslToRgb(_ref2$1))),
  2: Dye((_ref3$1 = [203, 100, 72], hslToRgb(_ref3$1))),
  3: Dye((_ref4$1 = [205, 100, 76], hslToRgb(_ref4$1))),
  4: Dye((_ref5$1 = [207, 100, 84], hslToRgb(_ref5$1))),
  5: Dye((_ref6$1 = [209, 100, 80], hslToRgb(_ref6$1))),
  6: Dye((_ref7$1 = [211, 100, 88], hslToRgb(_ref7$1))),
  7: Dye((_ref8$1 = [214, 100, 90], hslToRgb(_ref8$1)))
};
const L$1$1 = '[ ',
      R$1$1 = ' ]';
const BRK = mapper$2(Dyes$1, dye => {
  var _L, _R;

  const l = (_L = L$1$1, dye(_L)),
        r = (_R = R$1$1, dye(_R));
  return content => l + content + r;
});

var _Cards$brown$lighten_, _Cards$lightGreen$acc, _Cards$deepOrange$acc, _Cards$teal$lighten_, _Cards$brown$lighten_2, _Cards$blueGrey$light, _Cards$blue$accent_, _Cards$amber$base, _Cards$green$accent_;
/**
 *
 * @type {Object<string,Function>}
 */


const PAL = {
  IDX: Dye((_Cards$brown$lighten_ = Cards.brown.lighten_5, hexToRgb(_Cards$brown$lighten_))),
  STR: Dye((_Cards$lightGreen$acc = Cards.lightGreen.accent_2, hexToRgb(_Cards$lightGreen$acc))),
  NUM: Dye((_Cards$deepOrange$acc = Cards.deepOrange.accent_2, hexToRgb(_Cards$deepOrange$acc))),
  BOO: Dye((_Cards$teal$lighten_ = Cards.teal.lighten_2, hexToRgb(_Cards$teal$lighten_))),
  UDF: Dye((_Cards$brown$lighten_2 = Cards.brown.lighten_3, hexToRgb(_Cards$brown$lighten_2))),
  SYM: Dye((_Cards$blueGrey$light = Cards.blueGrey.lighten_2, hexToRgb(_Cards$blueGrey$light))),
  BRK: Dye((_Cards$blue$accent_ = Cards.blue.accent_2, hexToRgb(_Cards$blue$accent_))),
  BRC: Dye((_Cards$amber$base = Cards.amber.base, hexToRgb(_Cards$amber$base))),
  FNC: Dye((_Cards$green$accent_ = Cards.green.accent_4, hexToRgb(_Cards$green$accent_)))
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

const max$1 = (a, b) => a > b ? a : b;

const min$1 = (a, b) => a < b ? a : b;

const bound$1 = ([r, g, b]) => {
  let ma = r,
      mi = r;

  if (g > r) {
    ma = g;
  } else {
    mi = g;
  }

  if (b > ma) ma = b;
  if (b < mi) mi = b;
  return {
    max: ma,
    sum: ma + mi,
    dif: ma - mi
  };
};

const hue$1 = (r, g, b, max, dif) => {
  if (dif === 0) return 0;

  switch (max) {
    case r:
      return ((g - b) / dif + (g < b ? 6 : 0)) % 6;

    case g:
      return (b - r) / dif + 2;

    case b:
      return (r - g) / dif + 4;
  }
};

const THOUSAND$1 = 1000;
/**
 * !dif: dif===0
 * @param {number} r - [0,255]
 * @param {number} g - [0,255]
 * @param {number} b - [0,255]
 * @returns {[number,number,number]} [Hue([0,360]), Saturation([0,100]), Lightness([0,100])]
 */

function rgbToHsl$1([r, g, b]) {
  r /= 255;
  g /= 255;
  b /= 255;
  const {
    max,
    sum,
    dif
  } = bound$1([r, g, b]);
  let h = hue$1(r, g, b, max, dif) * 60,
      s = !dif ? 0 : sum > 1 ? dif / (2 - sum) : dif / sum,
      l = sum / 2;
  return [round$1(h), round$1(s * THOUSAND$1) / 10, round$1(l * THOUSAND$1) / 10];
}

const diluteHex$2 = (hex, hi) => {
  hi = hi || hex.length;
  let x = '';

  for (let i = 0, el; i < hi; i++) {
    el = hex[i];
    x += el + el;
  } // for (let c of hex) x += c + c


  return x;
};
/**
 *
 * @param {string} hex
 * @returns {number}
 */


function hexToInt$2(hex) {
  if (hex.charAt(0) === '#') hex = hex.substring(1);
  if (!hex[3]) hex = diluteHex$2(hex);
  return parseInt(hex, 16);
}
/**
 *
 * @param {string} hex
 * @returns {number[]}
 */


function hexToRgb$2(hex) {
  const int = hexToInt$2(hex);
  return [int >> 16 & 0xFF, int >> 8 & 0xFF, int & 0xFF];
}

const hexToHsl$1 = hex => {
  var _ref, _hex;

  return _ref = (_hex = hex, hexToRgb$2(_hex)), rgbToHsl$1(_ref);
};
/**
 *
 * @param {number} n
 * @param {number} h
 * @param {number} a
 * @param {number} l
 * @returns {number}
 */


const hf$2 = (n, h, a, l) => {
  const k = (n + h / 30) % 12;
  return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
};
/**
 *
 * @param {number} h
 * @param {number} s
 * @param {number} l
 * @returns {number[]}
 */


function hslToRgb$2([h, s, l]) {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l),
        r = hf$2(0, h, a, l),
        g = hf$2(8, h, a, l),
        b = hf$2(4, h, a, l);
  return [round$1(r * 0xFF), round$1(g * 0xFF), round$1(b * 0xFF)]; // return [r * 0xFF & 0xFF, g * 0xFF & 0xFF, b * 0xFF & 0xFF]
}

const ESC$2 = '\u001b';
const L$3 = ESC$2 + '[';
const R$3 = 'm';
const SC$2 = ';';
const FORE$2 = '38;2';
const CLR_FORE$2 = '39';
//   black: 30,
//   Red: 31,
//   Green: 32,
//   Yellow: 33,
//   Blue: 34,
//   magenta: 35,
//   Cyan: 36,
//   white: 37,
//   Grey: 90,
// }

const BOLD$2 = '1';
const ITALIC$2 = '3';
const UNDERLINE$2 = '4';
const INVERSE$2 = '7';
const CLR_BOLD$2 = '22';
const CLR_ITALIC$2 = '23';
const CLR_UNDERLINE$2 = '24';
const CLR_INVERSE$2 = '27';
const Effects$2 = {
  bold: [BOLD$2, CLR_BOLD$2],
  italic: [ITALIC$2, CLR_ITALIC$2],
  underline: [UNDERLINE$2, CLR_UNDERLINE$2],
  inverse: [INVERSE$2, CLR_INVERSE$2]
};
/**
 *
 * @param {string} code
 * @returns {string}
 */


const brt$2 = code => L$3 + code + R$3;
/**
 *
 * @param {number[]} rgb - array of three integers, each from 0 to 255
 * @returns {string}
 */


const rgbToAnsi$2 = rgb => FORE$2 + SC$2 + rgb[0] + SC$2 + rgb[1] + SC$2 + rgb[2];

/**
 *
 * @param {string} tx
 * @returns {string}
 */

function codedDyer$2(tx) {
  const {
    h,
    t
  } = this;
  return brt$2(h) + tx + brt$2(t);
}

const parseEffects$2 = effects => {
  let h = '',
      t = '';

  if (effects.length) {
    let l, r;

    for (let e of effects) if (e in Effects$2 && ([l, r] = Effects$2[e])) h += SC$2 + l, t += SC$2 + r;
  }

  return {
    h,
    t
  };
};
/***
 *
 * @param {number[]} rgb
 * @param {...string} [effects]
 * @returns {function(string):string}
 */


const Dye$2 = (rgb, ...effects) => {
  const config = parseEffects$2(effects);
  config.h += SC$2 + rgbToAnsi$2(rgb), config.t += SC$2 + CLR_FORE$2;
  return codedDyer$2.bind(config);
};

const PrepDye$1 = function (...effects) {
  const config = parseEffects$2(effects);
  return RgbDyerCreator$1.bind(config);
};

const RgbDyerCreator$1 = function (rgb) {
  let {
    h,
    t
  } = this;
  h += SC$2 + rgbToAnsi$2(rgb), t += SC$2 + CLR_FORE$2;
  return codedDyer$2.bind({
    h,
    t
  });
};

/**
 * Create a dye from a hsl array
 * @param {[number,number,number]} hsl
 * @returns {function}
 */

const hslToDye$2 = hsl => {
  var _ref, _hsl;

  return _ref = (_hsl = hsl, hslToRgb$2(_hsl)), Dye$2(_ref);
};


const STR$3 = 'string';

const parseHsl$1 = color => {
  var _color;

  return typeof color === STR$3 ? (_color = color, hexToHsl$1(_color)) : color;
};
/**
 *
 * @param max
 * @param min
 * @returns {{dif: [number,number,number], min: [number,number,number]}}
 */


const colorBound$1 = ([maxH, maxS, maxL], [minH, minS, minL]) => ({
  min: [minH, minS, minL],
  dif: [maxH - minH, maxS - minS, maxL - minL]
});

const presetToLeap$1 = ({
  max,
  min
}) => {
  var _max, _min;

  return colorBound$1((_max = max, parseHsl$1(_max)), (_min = min, parseHsl$1(_min)));
};

const presetToFlat$1 = ({
  na
}) => {
  var _ref, _na;

  return _ref = (_na = na, parseHsl$1(_na)), hslToDye$2(_ref);
};

const Amber$1 = {
  base: '#FFC107',
  lighten_5: '#FFF8E1',
  lighten_4: '#FFECB3',
  lighten_3: '#FFE082',
  lighten_2: '#FFD54F',
  lighten_1: '#FFCA28',
  darken_1: '#FFB300',
  darken_2: '#FFA000',
  darken_3: '#FF8F00',
  darken_4: '#FF6F00',
  accent_1: '#FFE57F',
  accent_2: '#FFD740',
  accent_3: '#FFC400',
  accent_4: '#FFAB00'
};
const Blue$1 = {
  base: '#2196F3',
  lighten_5: '#E3F2FD',
  lighten_4: '#BBDEFB',
  lighten_3: '#90CAF9',
  lighten_2: '#64B5F6',
  lighten_1: '#42A5F5',
  darken_1: '#1E88E5',
  darken_2: '#1976D2',
  darken_3: '#1565C0',
  darken_4: '#0D47A1',
  accent_1: '#82B1FF',
  accent_2: '#448AFF',
  accent_3: '#2979FF',
  accent_4: '#2962FF'
};
const Cyan$1 = {
  base: '#00BCD4',
  lighten_5: '#E0F7FA',
  lighten_4: '#B2EBF2',
  lighten_3: '#80DEEA',
  lighten_2: '#4DD0E1',
  lighten_1: '#26C6DA',
  darken_1: '#00ACC1',
  darken_2: '#0097A7',
  darken_3: '#00838F',
  darken_4: '#006064',
  accent_1: '#84FFFF',
  accent_2: '#18FFFF',
  accent_3: '#00E5FF',
  accent_4: '#00B8D4'
};
const DeepOrange$1 = {
  base: '#FF5722',
  lighten_5: '#FBE9E7',
  lighten_4: '#FFCCBC',
  lighten_3: '#FFAB91',
  lighten_2: '#FF8A65',
  lighten_1: '#FF7043',
  darken_1: '#F4511E',
  darken_2: '#E64A19',
  darken_3: '#D84315',
  darken_4: '#BF360C',
  accent_1: '#FF9E80',
  accent_2: '#FF6E40',
  accent_3: '#FF3D00',
  accent_4: '#DD2C00'
};
const DeepPurple$1 = {
  base: '#673AB7',
  lighten_5: '#EDE7F6',
  lighten_4: '#D1C4E9',
  lighten_3: '#B39DDB',
  lighten_2: '#9575CD',
  lighten_1: '#7E57C2',
  darken_1: '#5E35B1',
  darken_2: '#512DA8',
  darken_3: '#4527A0',
  darken_4: '#311B92',
  accent_1: '#B388FF',
  accent_2: '#7C4DFF',
  accent_3: '#651FFF',
  accent_4: '#6200EA'
};
const Green$1 = {
  base: '#4CAF50',
  lighten_5: '#E8F5E9',
  lighten_4: '#C8E6C9',
  lighten_3: '#A5D6A7',
  lighten_2: '#81C784',
  lighten_1: '#66BB6A',
  darken_1: '#43A047',
  darken_2: '#388E3C',
  darken_3: '#2E7D32',
  darken_4: '#1B5E20',
  accent_1: '#B9F6CA',
  accent_2: '#69F0AE',
  accent_3: '#00E676',
  accent_4: '#00C853'
};
const Indigo$1 = {
  base: '#3F51B5',
  lighten_5: '#E8EAF6',
  lighten_4: '#C5CAE9',
  lighten_3: '#9FA8DA',
  lighten_2: '#7986CB',
  lighten_1: '#5C6BC0',
  darken_1: '#3949AB',
  darken_2: '#303F9F',
  darken_3: '#283593',
  darken_4: '#1A237E',
  accent_1: '#8C9EFF',
  accent_2: '#536DFE',
  accent_3: '#3D5AFE',
  accent_4: '#304FFE'
};
const LightBlue$1 = {
  base: '#03A9F4',
  lighten_5: '#E1F5FE',
  lighten_4: '#B3E5FC',
  lighten_3: '#81D4FA',
  lighten_2: '#4FC3F7',
  lighten_1: '#29B6F6',
  darken_1: '#039BE5',
  darken_2: '#0288D1',
  darken_3: '#0277BD',
  darken_4: '#01579B',
  accent_1: '#80D8FF',
  accent_2: '#40C4FF',
  accent_3: '#00B0FF',
  accent_4: '#0091EA'
};
const LightGreen$1 = {
  base: '#8BC34A',
  lighten_5: '#F1F8E9',
  lighten_4: '#DCEDC8',
  lighten_3: '#C5E1A5',
  lighten_2: '#AED581',
  lighten_1: '#9CCC65',
  darken_1: '#7CB342',
  darken_2: '#689F38',
  darken_3: '#558B2F',
  darken_4: '#33691E',
  accent_1: '#CCFF90',
  accent_2: '#B2FF59',
  accent_3: '#76FF03',
  accent_4: '#64DD17'
};
const Lime$1 = {
  base: '#CDDC39',
  lighten_5: '#F9FBE7',
  lighten_4: '#F0F4C3',
  lighten_3: '#E6EE9C',
  lighten_2: '#DCE775',
  lighten_1: '#D4E157',
  darken_1: '#C0CA33',
  darken_2: '#AFB42B',
  darken_3: '#9E9D24',
  darken_4: '#827717',
  accent_1: '#F4FF81',
  accent_2: '#EEFF41',
  accent_3: '#C6FF00',
  accent_4: '#AEEA00'
};
const Orange$1 = {
  base: '#FF9800',
  lighten_5: '#FFF3E0',
  lighten_4: '#FFE0B2',
  lighten_3: '#FFCC80',
  lighten_2: '#FFB74D',
  lighten_1: '#FFA726',
  darken_1: '#FB8C00',
  darken_2: '#F57C00',
  darken_3: '#EF6C00',
  darken_4: '#E65100',
  accent_1: '#FFD180',
  accent_2: '#FFAB40',
  accent_3: '#FF9100',
  accent_4: '#FF6D00'
};
const Pink$1 = {
  base: '#E91E63',
  lighten_5: '#FCE4EC',
  lighten_4: '#F8BBD0',
  lighten_3: '#F48FB1',
  lighten_2: '#F06292',
  lighten_1: '#EC407A',
  darken_1: '#D81B60',
  darken_2: '#C2185B',
  darken_3: '#AD1457',
  darken_4: '#880E4F',
  accent_1: '#FF80AB',
  accent_2: '#FF4081',
  accent_3: '#F50057',
  accent_4: '#C51162'
};
const Purple$1 = {
  base: '#9C27B0',
  lighten_5: '#F3E5F5',
  lighten_4: '#E1BEE7',
  lighten_3: '#CE93D8',
  lighten_2: '#BA68C8',
  lighten_1: '#AB47BC',
  darken_1: '#8E24AA',
  darken_2: '#7B1FA2',
  darken_3: '#6A1B9A',
  darken_4: '#4A148C',
  accent_1: '#EA80FC',
  accent_2: '#E040FB',
  accent_3: '#D500F9',
  accent_4: '#AA00FF'
};
const Red$1 = {
  base: '#F44336',
  lighten_5: '#FFEBEE',
  lighten_4: '#FFCDD2',
  lighten_3: '#EF9A9A',
  lighten_2: '#E57373',
  lighten_1: '#EF5350',
  darken_1: '#E53935',
  darken_2: '#D32F2F',
  darken_3: '#C62828',
  darken_4: '#B71C1C',
  accent_1: '#FF8A80',
  accent_2: '#FF5252',
  accent_3: '#FF1744',
  accent_4: '#D50000'
};
const Teal$1 = {
  base: '#009688',
  lighten_5: '#E0F2F1',
  lighten_4: '#B2DFDB',
  lighten_3: '#80CBC4',
  lighten_2: '#4DB6AC',
  lighten_1: '#26A69A',
  darken_1: '#00897B',
  darken_2: '#00796B',
  darken_3: '#00695C',
  darken_4: '#004D40',
  accent_1: '#A7FFEB',
  accent_2: '#64FFDA',
  accent_3: '#1DE9B6',
  accent_4: '#00BFA5'
};
const Yellow$1 = {
  base: '#FFEB3B',
  lighten_5: '#FFFDE7',
  lighten_4: '#FFF9C4',
  lighten_3: '#FFF59D',
  lighten_2: '#FFF176',
  lighten_1: '#FFEE58',
  darken_1: '#FDD835',
  darken_2: '#FBC02D',
  darken_3: '#F9A825',
  darken_4: '#F57F17',
  accent_1: '#FFFF8D',
  accent_2: '#FFFF00',
  accent_3: '#FFEA00',
  accent_4: '#FFD600'
};
const BlueGrey$1 = {
  base: '#607D8B',
  lighten_5: '#ECEFF1',
  lighten_4: '#CFD8DC',
  lighten_3: '#B0BEC5',
  lighten_2: '#90A4AE',
  lighten_1: '#78909C',
  darken_1: '#546E7A',
  darken_2: '#455A64',
  darken_3: '#37474F',
  darken_4: '#263238',
  accent_1: '#B7C9D1',
  accent_2: '#89A5B3',
  accent_3: '#6A8EA0',
  accent_4: '#547383'
};
const Brown$1 = {
  base: '#795548',
  lighten_5: '#EFEBE9',
  lighten_4: '#D7CCC8',
  lighten_3: '#BCAAA4',
  lighten_2: '#A1887F',
  lighten_1: '#8D6E63',
  darken_1: '#6D4C41',
  darken_2: '#5D4037',
  darken_3: '#4E342E',
  darken_4: '#3E2723',
  accent_1: '#D2BEB6',
  accent_2: '#B59387',
  accent_3: '#A27767',
  accent_4: '#855F51'
};
const Grey$1 = {
  base: '#9E9E9E',
  lighten_5: '#FAFAFA',
  lighten_4: '#F5F5F5',
  lighten_3: '#EEEEEE',
  lighten_2: '#E0E0E0',
  lighten_1: '#BDBDBD',
  darken_1: '#757575',
  darken_2: '#616161',
  darken_3: '#424242',
  darken_4: '#212121',
  accent_1: '#C4C4C4',
  accent_2: '#9E9E9E',
  accent_3: '#858585',
  accent_4: '#6B6B6B'
};
/**
 * @type {Object.<string,Object<string,Object>>}
 * @property {string[]} colors
 * @property {string[]} degrees
 */

const Cards$1 = {
  red: Red$1,
  pink: Pink$1,
  purple: Purple$1,
  deepPurple: DeepPurple$1,
  indigo: Indigo$1,
  blue: Blue$1,
  lightBlue: LightBlue$1,
  cyan: Cyan$1,
  teal: Teal$1,
  green: Green$1,
  lightGreen: LightGreen$1,
  lime: Lime$1,
  yellow: Yellow$1,
  amber: Amber$1,
  orange: Orange$1,
  deepOrange: DeepOrange$1,
  brown: Brown$1,
  blueGrey: BlueGrey$1,
  grey: Grey$1
};
Reflect.defineProperty(Cards$1, 'colors', {
  get() {
    return Object.keys(Cards$1);
  },

  enumerable: false
});
Reflect.defineProperty(Cards$1, 'degrees', {
  get() {
    for (let color in Cards$1) return Object.keys(Cards$1[color]);
  },

  enumerable: false
});

const AQUA$2 = {
  max: Cards$1.cyan.accent_2,
  min: Cards$1.green.darken_1,
  na: Cards$1.grey.lighten_4
};
const ATLAS$2 = {
  max: Cards$1.cyan.lighten_3,
  min: Cards$1.orange.lighten_2,
  na: Cards$1.pink.lighten_4
};
const AURORA$2 = {
  max: Cards$1.green.accent_3,
  min: Cards$1.deepPurple.accent_1,
  na: Cards$1.teal.accent_1
};
const AZURE$2 = {
  max: Cards$1.cyan.accent_1,
  min: Cards$1.lightBlue.accent_4,
  na: Cards$1.deepOrange.accent_1
};
const FRESH$2 = {
  max: Cards$1.lightGreen.accent_3,
  min: Cards$1.deepOrange.accent_3,
  na: Cards$1.blue.lighten_3
};
const MOSS$2 = {
  max: Cards$1.lightGreen.accent_3,
  min: Cards$1.teal.lighten_3,
  na: Cards$1.brown.accent_1
};
const INSTA$2 = {
  max: Cards$1.orange.accent_2,
  min: Cards$1.purple.accent_1,
  na: Cards$1.grey.lighten_2
};
const JUNGLE$2 = {
  max: Cards$1.lime.accent_3,
  min: Cards$1.lightGreen.accent_3,
  na: Cards$1.blueGrey.accent_1
};
const LAVA$2 = {
  max: Cards$1.amber.accent_3,
  min: Cards$1.red.lighten_1,
  na: Cards$1.grey.accent_2
};
const METRO$2 = {
  max: Cards$1.pink.lighten_2,
  min: Cards$1.blue.lighten_4,
  na: Cards$1.teal.accent_3
};
const OCEAN$2 = {
  max: Cards$1.lightBlue.accent_2,
  min: Cards$1.indigo.base,
  na: Cards$1.pink.lighten_3
};
const PLANET$2 = {
  max: Cards$1.teal.accent_2,
  min: Cards$1.blue.darken_3,
  na: Cards$1.cyan.lighten_4
};
const POME$2 = {
  max: Cards$1.red.lighten_2,
  min: Cards$1.yellow.darken_1,
  na: Cards$1.green.lighten_2
};
const SUBTLE$2 = {
  max: Cards$1.grey.lighten_5,
  min: Cards$1.grey.darken_1,
  na: Cards$1.indigo.lighten_3
};
const VIOLA$2 = {
  max: Cards$1.pink.lighten_4,
  min: Cards$1.deepPurple.accent_2,
  na: Cards$1.amber.darken_2
};

/**
 *
 * @param {Object} bound
 * @param {number} [bound.min] - if min: if dif, return {min,dif}; if max, return calculated {min,dif}
 * @param {number} [bound.dif] - if dif: if max, return calculated {min,dif}; else return {min:0,dif}
 * @param {number} [bound.max] - if max: return {min:0,dif:max}; else return {min:0,dif:0}
 * @return {{dif: number, min: number}}
 */

const boundToLeap$1 = bound => {
  let {
    min,
    max,
    dif
  } = bound;

  if (!nullish(min)) {
    if (!nullish(dif)) return {
      min,
      dif
    };
    if (!nullish(max)) return {
      min,
      dif: max - min
    };
  }

  if (!nullish(dif)) {
    if (!nullish(max)) return {
      min: max - dif,
      dif
    };
    return {
      min: 0,
      dif
    };
  }

  if (!nullish(max)) return {
    min: 0,
    dif: max
  };
  return {
    min: 0,
    dif: 0
  };
};
/**
 * Create a dye from a hsl array
 * @param {[number,number,number]} hsl
 * @returns {function}
 */


function hslToDye$3(hsl) {
  var _ref, _hsl, _ref2, _hsl2;

  const effects = this;
  return effects ? (_ref = (_hsl = hsl, hslToRgb$2(_hsl)), PrepDye$1.apply(null, effects)(_ref)) : (_ref2 = (_hsl2 = hsl, hslToRgb$2(_hsl2)), Dye$2(_ref2));
}

const leverage$1 = ([h, s, l], base) => [h / base, s / base, l / base];

const scale$1 = (x, min$1$1, lever, base, ceil) => min$1((max$1(x, min$1$1) - min$1$1) * lever + base, ceil);

const projector$1 = function (x) {
  const {
    min: m,
    lever: [rH, rS, rL],
    base: [mH, mS, mL],
    effects
  } = this;
  return hslToDye$3.call(effects, [scale$1(x, m, rH, mH, 360), scale$1(x, m, rS, mS, 100), scale$1(x, m, rL, mL, 100)]);
};
/**
 *
 * @param {{[min]:number,[max]:number,[dif]:number}} bound
 * @param {{max:*,min:*}} preset
 * @param {string[]} [effects]
 * @returns {function(*):function}
 * @constructor
 */


const Projector$1 = (bound, preset, effects) => {
  var _bound, _preset;

  if (!bound) return void 0;
  bound = (_bound = bound, boundToLeap$1(_bound));
  /** @type {{min:number[],dif:number[]}} */

  const leap = (_preset = preset, presetToLeap$1(_preset));

  if (!bound.dif) {
    const dye = hslToDye$3.call(effects, leap.min);
    return () => dye;
  }

  return projector$1.bind({
    min: bound.min,
    lever: leverage$1(leap.dif, bound.dif),
    base: leap.min,
    effects: effects
  });
};

const Colorant$1 = (bound, preset = PLANET$2, effects) => {
  const vleap = boundToLeap$1(bound),
        prime = presetToFlat$1(preset);
  let dye = Projector$1(vleap, preset, effects);
  return x => isNumeric(x) ? dye(x) : prime;
};

const Amber$2 = {
  base: '#FFC107',
  lighten_5: '#FFF8E1',
  lighten_4: '#FFECB3',
  lighten_3: '#FFE082',
  lighten_2: '#FFD54F',
  lighten_1: '#FFCA28',
  darken_1: '#FFB300',
  darken_2: '#FFA000',
  darken_3: '#FF8F00',
  darken_4: '#FF6F00',
  accent_1: '#FFE57F',
  accent_2: '#FFD740',
  accent_3: '#FFC400',
  accent_4: '#FFAB00'
};
const Blue$2 = {
  base: '#2196F3',
  lighten_5: '#E3F2FD',
  lighten_4: '#BBDEFB',
  lighten_3: '#90CAF9',
  lighten_2: '#64B5F6',
  lighten_1: '#42A5F5',
  darken_1: '#1E88E5',
  darken_2: '#1976D2',
  darken_3: '#1565C0',
  darken_4: '#0D47A1',
  accent_1: '#82B1FF',
  accent_2: '#448AFF',
  accent_3: '#2979FF',
  accent_4: '#2962FF'
};
const Cyan$2 = {
  base: '#00BCD4',
  lighten_5: '#E0F7FA',
  lighten_4: '#B2EBF2',
  lighten_3: '#80DEEA',
  lighten_2: '#4DD0E1',
  lighten_1: '#26C6DA',
  darken_1: '#00ACC1',
  darken_2: '#0097A7',
  darken_3: '#00838F',
  darken_4: '#006064',
  accent_1: '#84FFFF',
  accent_2: '#18FFFF',
  accent_3: '#00E5FF',
  accent_4: '#00B8D4'
};
const DeepOrange$2 = {
  base: '#FF5722',
  lighten_5: '#FBE9E7',
  lighten_4: '#FFCCBC',
  lighten_3: '#FFAB91',
  lighten_2: '#FF8A65',
  lighten_1: '#FF7043',
  darken_1: '#F4511E',
  darken_2: '#E64A19',
  darken_3: '#D84315',
  darken_4: '#BF360C',
  accent_1: '#FF9E80',
  accent_2: '#FF6E40',
  accent_3: '#FF3D00',
  accent_4: '#DD2C00'
};
const DeepPurple$2 = {
  base: '#673AB7',
  lighten_5: '#EDE7F6',
  lighten_4: '#D1C4E9',
  lighten_3: '#B39DDB',
  lighten_2: '#9575CD',
  lighten_1: '#7E57C2',
  darken_1: '#5E35B1',
  darken_2: '#512DA8',
  darken_3: '#4527A0',
  darken_4: '#311B92',
  accent_1: '#B388FF',
  accent_2: '#7C4DFF',
  accent_3: '#651FFF',
  accent_4: '#6200EA'
};
const Green$2 = {
  base: '#4CAF50',
  lighten_5: '#E8F5E9',
  lighten_4: '#C8E6C9',
  lighten_3: '#A5D6A7',
  lighten_2: '#81C784',
  lighten_1: '#66BB6A',
  darken_1: '#43A047',
  darken_2: '#388E3C',
  darken_3: '#2E7D32',
  darken_4: '#1B5E20',
  accent_1: '#B9F6CA',
  accent_2: '#69F0AE',
  accent_3: '#00E676',
  accent_4: '#00C853'
};
const Indigo$2 = {
  base: '#3F51B5',
  lighten_5: '#E8EAF6',
  lighten_4: '#C5CAE9',
  lighten_3: '#9FA8DA',
  lighten_2: '#7986CB',
  lighten_1: '#5C6BC0',
  darken_1: '#3949AB',
  darken_2: '#303F9F',
  darken_3: '#283593',
  darken_4: '#1A237E',
  accent_1: '#8C9EFF',
  accent_2: '#536DFE',
  accent_3: '#3D5AFE',
  accent_4: '#304FFE'
};
const LightBlue$2 = {
  base: '#03A9F4',
  lighten_5: '#E1F5FE',
  lighten_4: '#B3E5FC',
  lighten_3: '#81D4FA',
  lighten_2: '#4FC3F7',
  lighten_1: '#29B6F6',
  darken_1: '#039BE5',
  darken_2: '#0288D1',
  darken_3: '#0277BD',
  darken_4: '#01579B',
  accent_1: '#80D8FF',
  accent_2: '#40C4FF',
  accent_3: '#00B0FF',
  accent_4: '#0091EA'
};
const LightGreen$2 = {
  base: '#8BC34A',
  lighten_5: '#F1F8E9',
  lighten_4: '#DCEDC8',
  lighten_3: '#C5E1A5',
  lighten_2: '#AED581',
  lighten_1: '#9CCC65',
  darken_1: '#7CB342',
  darken_2: '#689F38',
  darken_3: '#558B2F',
  darken_4: '#33691E',
  accent_1: '#CCFF90',
  accent_2: '#B2FF59',
  accent_3: '#76FF03',
  accent_4: '#64DD17'
};
const Lime$2 = {
  base: '#CDDC39',
  lighten_5: '#F9FBE7',
  lighten_4: '#F0F4C3',
  lighten_3: '#E6EE9C',
  lighten_2: '#DCE775',
  lighten_1: '#D4E157',
  darken_1: '#C0CA33',
  darken_2: '#AFB42B',
  darken_3: '#9E9D24',
  darken_4: '#827717',
  accent_1: '#F4FF81',
  accent_2: '#EEFF41',
  accent_3: '#C6FF00',
  accent_4: '#AEEA00'
};
const Orange$2 = {
  base: '#FF9800',
  lighten_5: '#FFF3E0',
  lighten_4: '#FFE0B2',
  lighten_3: '#FFCC80',
  lighten_2: '#FFB74D',
  lighten_1: '#FFA726',
  darken_1: '#FB8C00',
  darken_2: '#F57C00',
  darken_3: '#EF6C00',
  darken_4: '#E65100',
  accent_1: '#FFD180',
  accent_2: '#FFAB40',
  accent_3: '#FF9100',
  accent_4: '#FF6D00'
};
const Pink$2 = {
  base: '#E91E63',
  lighten_5: '#FCE4EC',
  lighten_4: '#F8BBD0',
  lighten_3: '#F48FB1',
  lighten_2: '#F06292',
  lighten_1: '#EC407A',
  darken_1: '#D81B60',
  darken_2: '#C2185B',
  darken_3: '#AD1457',
  darken_4: '#880E4F',
  accent_1: '#FF80AB',
  accent_2: '#FF4081',
  accent_3: '#F50057',
  accent_4: '#C51162'
};
const Purple$2 = {
  base: '#9C27B0',
  lighten_5: '#F3E5F5',
  lighten_4: '#E1BEE7',
  lighten_3: '#CE93D8',
  lighten_2: '#BA68C8',
  lighten_1: '#AB47BC',
  darken_1: '#8E24AA',
  darken_2: '#7B1FA2',
  darken_3: '#6A1B9A',
  darken_4: '#4A148C',
  accent_1: '#EA80FC',
  accent_2: '#E040FB',
  accent_3: '#D500F9',
  accent_4: '#AA00FF'
};
const Red$2 = {
  base: '#F44336',
  lighten_5: '#FFEBEE',
  lighten_4: '#FFCDD2',
  lighten_3: '#EF9A9A',
  lighten_2: '#E57373',
  lighten_1: '#EF5350',
  darken_1: '#E53935',
  darken_2: '#D32F2F',
  darken_3: '#C62828',
  darken_4: '#B71C1C',
  accent_1: '#FF8A80',
  accent_2: '#FF5252',
  accent_3: '#FF1744',
  accent_4: '#D50000'
};
const Teal$2 = {
  base: '#009688',
  lighten_5: '#E0F2F1',
  lighten_4: '#B2DFDB',
  lighten_3: '#80CBC4',
  lighten_2: '#4DB6AC',
  lighten_1: '#26A69A',
  darken_1: '#00897B',
  darken_2: '#00796B',
  darken_3: '#00695C',
  darken_4: '#004D40',
  accent_1: '#A7FFEB',
  accent_2: '#64FFDA',
  accent_3: '#1DE9B6',
  accent_4: '#00BFA5'
};
const Yellow$2 = {
  base: '#FFEB3B',
  lighten_5: '#FFFDE7',
  lighten_4: '#FFF9C4',
  lighten_3: '#FFF59D',
  lighten_2: '#FFF176',
  lighten_1: '#FFEE58',
  darken_1: '#FDD835',
  darken_2: '#FBC02D',
  darken_3: '#F9A825',
  darken_4: '#F57F17',
  accent_1: '#FFFF8D',
  accent_2: '#FFFF00',
  accent_3: '#FFEA00',
  accent_4: '#FFD600'
};
const BlueGrey$2 = {
  base: '#607D8B',
  lighten_5: '#ECEFF1',
  lighten_4: '#CFD8DC',
  lighten_3: '#B0BEC5',
  lighten_2: '#90A4AE',
  lighten_1: '#78909C',
  darken_1: '#546E7A',
  darken_2: '#455A64',
  darken_3: '#37474F',
  darken_4: '#263238',
  accent_1: '#B7C9D1',
  accent_2: '#89A5B3',
  accent_3: '#6A8EA0',
  accent_4: '#547383'
};
const Brown$2 = {
  base: '#795548',
  lighten_5: '#EFEBE9',
  lighten_4: '#D7CCC8',
  lighten_3: '#BCAAA4',
  lighten_2: '#A1887F',
  lighten_1: '#8D6E63',
  darken_1: '#6D4C41',
  darken_2: '#5D4037',
  darken_3: '#4E342E',
  darken_4: '#3E2723',
  accent_1: '#D2BEB6',
  accent_2: '#B59387',
  accent_3: '#A27767',
  accent_4: '#855F51'
};
const Grey$2 = {
  base: '#9E9E9E',
  lighten_5: '#FAFAFA',
  lighten_4: '#F5F5F5',
  lighten_3: '#EEEEEE',
  lighten_2: '#E0E0E0',
  lighten_1: '#BDBDBD',
  darken_1: '#757575',
  darken_2: '#616161',
  darken_3: '#424242',
  darken_4: '#212121',
  accent_1: '#C4C4C4',
  accent_2: '#9E9E9E',
  accent_3: '#858585',
  accent_4: '#6B6B6B'
};
/**
 * @type {Object.<string,Object<string,Object>>}
 * @property {string[]} colors
 * @property {string[]} degrees
 */

const Cards$2 = {
  red: Red$2,
  pink: Pink$2,
  purple: Purple$2,
  deepPurple: DeepPurple$2,
  indigo: Indigo$2,
  blue: Blue$2,
  lightBlue: LightBlue$2,
  cyan: Cyan$2,
  teal: Teal$2,
  green: Green$2,
  lightGreen: LightGreen$2,
  lime: Lime$2,
  yellow: Yellow$2,
  amber: Amber$2,
  orange: Orange$2,
  deepOrange: DeepOrange$2,
  brown: Brown$2,
  blueGrey: BlueGrey$2,
  grey: Grey$2
};
Reflect.defineProperty(Cards$2, 'colors', {
  get() {
    return Object.keys(Cards$2);
  },

  enumerable: false
});
Reflect.defineProperty(Cards$2, 'degrees', {
  get() {
    for (let color in Cards$2) return Object.keys(Cards$2[color]);
  },

  enumerable: false
});

const AQUA$3 = {
  max: Cards$2.cyan.accent_2,
  min: Cards$2.green.darken_1,
  na: Cards$2.grey.lighten_4
};
const ATLAS$3 = {
  max: Cards$2.cyan.lighten_3,
  min: Cards$2.orange.lighten_2,
  na: Cards$2.pink.lighten_4
};
const AURORA$3 = {
  max: Cards$2.green.accent_3,
  min: Cards$2.deepPurple.accent_1,
  na: Cards$2.teal.accent_1
};
const AZURE$3 = {
  max: Cards$2.cyan.accent_1,
  min: Cards$2.lightBlue.accent_4,
  na: Cards$2.deepOrange.accent_1
};
const FRESH$3 = {
  max: Cards$2.lightGreen.accent_3,
  min: Cards$2.deepOrange.accent_3,
  na: Cards$2.blue.lighten_3
};
const MOSS$3 = {
  max: Cards$2.lightGreen.accent_3,
  min: Cards$2.teal.lighten_3,
  na: Cards$2.brown.accent_1
};
const INSTA$3 = {
  max: Cards$2.orange.accent_2,
  min: Cards$2.purple.accent_1,
  na: Cards$2.grey.lighten_2
};
const JUNGLE$3 = {
  max: Cards$2.lime.accent_3,
  min: Cards$2.lightGreen.accent_3,
  na: Cards$2.blueGrey.accent_1
};
const LAVA$3 = {
  max: Cards$2.amber.accent_3,
  min: Cards$2.red.lighten_1,
  na: Cards$2.grey.accent_2
};
const METRO$3 = {
  max: Cards$2.pink.lighten_2,
  min: Cards$2.blue.lighten_4,
  na: Cards$2.teal.accent_3
};
const OCEAN$3 = {
  max: Cards$2.lightBlue.accent_2,
  min: Cards$2.indigo.base,
  na: Cards$2.pink.lighten_3
};
const PLANET$3 = {
  max: Cards$2.teal.accent_2,
  min: Cards$2.blue.darken_3,
  na: Cards$2.cyan.lighten_4
};
const POME$3 = {
  max: Cards$2.red.lighten_2,
  min: Cards$2.yellow.darken_1,
  na: Cards$2.green.lighten_2
};
const SUBTLE$3 = {
  max: Cards$2.grey.lighten_5,
  min: Cards$2.grey.darken_1,
  na: Cards$2.indigo.lighten_3
};
const VIOLA$3 = {
  max: Cards$2.pink.lighten_4,
  min: Cards$2.deepPurple.accent_2,
  na: Cards$2.amber.darken_2
};

const padDeci = x => x >= 10 ? '' + x : '0' + x;

const padKilo = x => x >= 1000 ? '' + x : ('' + x).padStart(4, '0');

const padMilli = ms => (ms = '' + ms).length > 2 ? ms : ('00' + ms).slice(-3);

class Timestamp {
  constructor(datePreset, timePreset, milliPreset) {
    if (datePreset) {
      this.dy = Colorant$1({
        min: 1990,
        max: 2030
      }, datePreset);
      this.dm = Colorant$1({
        min: 1,
        max: 12
      }, datePreset);
      this.dd = Colorant$1({
        min: 1,
        max: 31
      }, datePreset);
    }

    if (timePreset) {
      this.dh = Colorant$1({
        min: 0,
        max: 23
      }, timePreset);
      this.ds = Colorant$1({
        min: 0,
        max: 59
      }, timePreset);
    }

    if (milliPreset) {
      this.dt = Colorant$1({
        min: 0,
        max: 999
      }, milliPreset);
    }
  }

  static build(datePreset = METRO$3, timePreset = SUBTLE$3, milliPreset = SUBTLE$3) {
    return new Timestamp(datePreset, timePreset, milliPreset);
  }
  /** @param {Date} dt */


  date(dt = new Date()) {
    return this.decoYMD(dt.getFullYear(), dt.getMonth() + 1, dt.getDate());
  }
  /** @param {Date} dt */


  roughTime(dt = new Date()) {
    return this.decoHMS(dt.getHours(), dt.getMinutes(), dt.getSeconds());
  }
  /** @param {Date} dt */


  time(dt = new Date()) {
    return this.roughTime(dt) + '.' + this.decoMilli(dt.getMilliseconds());
  }
  /** @param {Date} dt */


  dateTime(dt = new Date()) {
    return this.date(dt) + QT + this.roughTime(dt);
  }

  decoYMD(year, month, day) {
    var _padKilo, _padDeci, _padDeci2;

    return this.dy ? (_padKilo = padKilo(year), this.dy(year)(_padKilo)) + DASH + (_padDeci = padDeci(month), this.dm(month)(_padDeci)) + DASH + (_padDeci2 = padDeci(day), this.dd(day)(_padDeci2)) : padKilo(year) + DASH + padDeci(month) + DASH + padDeci(day);
  }

  decoHMS(hour, minute, second) {
    var _padDeci3, _padDeci4, _padDeci5;

    return this.dh ? (_padDeci3 = padDeci(hour), this.dh(hour)(_padDeci3)) + RT + (_padDeci4 = padDeci(minute), this.ds(minute)(_padDeci4)) + RT + (_padDeci5 = padDeci(second), this.ds(second)(_padDeci5)) : padDeci(hour) + RT + padDeci(minute) + RT + padDeci(second);
  }

  decoMilli(milli) {
    var _padMilli;

    return this.dt ? (_padMilli = padMilli(milli), this.dt(milli)(_padMilli)) : padMilli(milli);
  }

}

const timestamp = Timestamp.build();
/** @type {Function} */

const date = timestamp.date.bind(timestamp);
/** @type {Function} */

const time = timestamp.time.bind(timestamp);
/** @type {Function} */

const roughTime = timestamp.roughTime.bind(timestamp);
/** @type {Function} */

const dateTime = timestamp.dateTime.bind(timestamp);

const decoDateTime = dateTime;

function columnMutate(mx, fn, l) {
  l = l || mx && mx.length;

  for (let i = 0, r, {
    y
  } = this; i < l && (r = mx[i]); i++) r[y] = fn(r[y], i);

  return mx;
}

const mutate$3 = (mx, y, fn, l) => columnMutate.call({
  y
}, mx, fn, l);

const NUMERIC_PRESET = {
  preset: FRESH
};
const LITERAL_PRESET = {
  preset: PLANET
};
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
  const presets = this === null || this === void 0 ? void 0 : this.presets;
  const list = ve.map(decoflat.bind(this, lv + 1));
  fluoVec.call(MUTABLE, list, presets);
  return list.join(COSP);
}

function deOb(lv, ob) {
  const presets = this === null || this === void 0 ? void 0 : this.presets;
  const ents = mutate$3(Object.entries(ob), 1, decoflat.bind(this, lv + 1));
  fluoEnt.call(MUTABLE, ents, presets);
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

const logger = (x, ...p) => void console.log(x + '', ...p);
const logNeL = (x, ...p) => void console.log(x + '', ...p, LF);

/** @type {Function} */

const Xr = Xr$1;
/** @type {Function} */

const xr = xr$1;
/** @class */

const Says = Says$1;
/** @type {Function} */

const says = says$1;
/** @type {Function} */

const ros = ros$1;
/** @type {Function} */

const deco$1 = deco$2;
/** @type {Function} */

const Deco = Deco$1;
/** @type {Function} */

const deca = Deco$1;
/** @type {Function} */

const delogger = delogger$1;
/** @type {Function} */

const delogNeL = delogNeL$1;
/** @type {Function} */

const decoString = deco$3;
/** @type {Function} */

const decoVector = deco$4;
/** @type {Function} */

const decoEntries = deco$5;
/** @type {Function} */

const decoObject = deco$6;
/** @type {Function} */

const decoMatrix = deco$7;
/** @type {Function} */

const decoSamples = deco$8;
/** @type {Function} */

const decoTable = deco$9;
/** @type {Function} */

const decoCrostab = deco$a;
/** @type {Function} */

const decoFunc$1 = decoFunc;
/** @type {Function} */

const decoPale$1 = decoPale;
/** @type {Function} */

const decoFlat$1 = decoFlat;
/** @type {Function} */

const DecoString = Deco$2;
/** @type {Function} */

const DecoVector = Deco$3;
/** @type {Function} */

const DecoEntries = Deco$4;
/** @type {Function} */

const DecoObject = Deco$5;
/** @type {Function} */

const DecoMatrix = Deco$6;
/** @type {Function} */

const DecoSamples = Deco$7;
/** @type {Function} */

const DecoTable = Deco$8;
/** @type {Function} */

const DecoCrostab = Deco$9;
/** @type {Function} */

const DecoFunc$1 = DecoFunc;
/** @type {Function} */

const DecoPale$1 = DecoPale;
/** @type {Function} */

const DecoFlat$1 = DecoFlat;

export { Deco, DecoCrostab, DecoEntries, DecoFlat$1 as DecoFlat, DecoFunc$1 as DecoFunc, DecoMatrix, DecoObject, DecoPale$1 as DecoPale, DecoSamples, DecoString, DecoTable, DecoVector, Says, Xr, deca, deco$1 as deco, decoCrostab, decoEntries, decoFlat$1 as decoFlat, decoFunc$1 as decoFunc, decoMatrix, decoObject, decoPale$1 as decoPale, decoSamples, decoString, decoTable, decoVector, delogNeL, delogger, logNeL, logger, ros, says, xr };
