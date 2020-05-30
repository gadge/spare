import { RTSP, CO, COSP, LF } from '@spare/enum-chars';
import { fluoEnt } from '@palett/fluo-entries';
import { fluoVec } from '@palett/fluo-vector';
import { bracket, brace } from '@spare/bracket';
import { BRK, BRC, PAL, IDX } from '@spare/deco-colors';
import { decoDate, decoDateTime } from '@spare/deco-date';
import { funcName, decoFunc } from '@spare/deco-func';
import { STR, NUM, BIG, FUN, OBJ, BOO, UND, SYM } from '@typen/enum-data-types';
import { ARRAY, OBJECT, DATE, MAP, SET } from '@typen/enum-object-types';
import { isNumeric } from '@typen/num-loose';
import { typ } from '@typen/typ';
import { formatDate } from '@valjoux/format-date';
import { formatDateTime } from '@valjoux/format-date-time';
import { mutate as mutate$2 } from '@vect/entries-mapper';
import { mutate as mutate$1, iterate } from '@vect/vector-mapper';
import { max } from '@aryth/comparer';
import { lange } from '@spare/lange';
import { joinLines } from '@spare/liner';
import { LPad } from '@spare/pad-string';
import { mutate } from '@vect/column-mapper';

/** @type {{mutate: boolean}} */
const MUTABLE = {
  mutate: true
};

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
  max: Cards.lime.accent_4,
  min: Cards.green.darken_1,
  na: Cards.lightBlue.accent_1
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

const LITERAL = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper = function (text) {
  const reg = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = reg.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = reg.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};

/**
 * @type {Function|function(string):string[]}
 * @function
 */


const splitLiteral = ripper.bind(LITERAL);

/** @type {{mutate: boolean}} */

const MUTABLE$1 = {
  mutate: true
};

const Joiner = delim => v => Array.prototype.join.call(v, delim);

const cosmetics = function (text) {
  const {
    delim,
    vectify,
    joiner,
    presets,
    effects
  } = this;
  const words = vectify(text);
  fluoVec.call(MUTABLE$1, words, presets, effects);
  return (joiner !== null && joiner !== void 0 ? joiner : Joiner(delim))(words);
};

const NUMERIC_PRESET = {
  preset: FRESH
};
const LITERAL_PRESET = {
  preset: SUBTLE
};
const PRESETS = [NUMERIC_PRESET, LITERAL_PRESET];

const presetString = p => {
  var _p$delim, _p$presets, _p$vectify;

  p.delim = (_p$delim = p === null || p === void 0 ? void 0 : p.delim) !== null && _p$delim !== void 0 ? _p$delim : '';
  p.presets = (_p$presets = p === null || p === void 0 ? void 0 : p.presets) !== null && _p$presets !== void 0 ? _p$presets : PRESETS;
  p.vectify = (_p$vectify = p === null || p === void 0 ? void 0 : p.vectify) !== null && _p$vectify !== void 0 ? _p$vectify : splitLiteral;
  return p;
};
/**
 *
 * @param {Object} p
 * @param {string} [p.delim]
 * @param {Object[]} [p.presets]
 * @param {string[]} [p.effects]
 * @param {Function} [p.vectify]
 * @param {Function} [p.joiner]
 * @return {Function}
 */


const Deco = (p = {}) => cosmetics.bind(presetString(p));

const decoString = Deco({
  presets: [, {
    preset: JUNGLE
  }]
});

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
  mutate$1(entries, ([k, v]) => k + RTSP + v);
  return (wrap || lv < vo) && entries.length > 1 ? joinLines(entries, CO, lv) : entries.join(COSP);
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
  if (lv < va) return joinLines(vector, CO, lv);
  let rows = [],
      w = 0,
      row = [];
  iterate(vector, item => {
    row.push(item), w += lange(item);
    if (w > wa) rows.push(row.join(COSP)), row = [], w = 0;
  });
  return rows.length > 1 ? joinLines(rows, CO, lv) : vector.join(COSP);
};

function decoNode(node, lv = 0) {
  return this.pr ? prettyNode.call(this, node, lv) : plainNode.call(this, node, lv);
}
/**
 *
 * @param {*} node
 * @param {number} [lv]
 * @return {string}
 */

function prettyNode(node, lv = 0) {
  const t = typeof node;
  if (t === STR) return isNumeric(node) ? node : decoString(node);
  if (t === NUM || t === BIG) return node;
  if (t === FUN) return lv >= this.hi ? funcName(node) : decoFunc(node, this);

  if (t === OBJ) {
    var _deVe$call, _deEn$call, _deEn$call2;

    const {
      hi
    } = this,
          pt = typ(node);
    if (pt === ARRAY) return lv >= hi ? '[array]' : (_deVe$call = deVe.call(this, node.slice(), lv), BRK[lv & 7](_deVe$call));
    if (pt === OBJECT) return lv >= hi ? '{object}' : (_deEn$call = deEn.call(this, Object.entries(node), lv), BRC[lv & 7](_deEn$call));
    if (pt === DATE) return lv >= hi ? decoDate(node) : decoDateTime(node);
    if (pt === MAP) return lv >= hi ? '(map)' : (_deEn$call2 = deEn.call(this, [...node.entries()], lv), BRK[lv & 7](_deEn$call2));
    if (pt === SET) return lv >= hi ? '(set)' : `set:[${deVe.call(this, [...node], lv)}]`;
    return `${node}`;
  }

  if (t === BOO) return PAL.BOO(node);
  if (t === UND || t === SYM) return PAL.UDF(node);
  return `${node}`;
}
function plainNode(node, lv = 0) {
  const t = typeof node,
        {
    qm
  } = this;
  if (t === STR) return qm ? qm + node + qm : node;
  if (t === FUN) return lv >= this.hi ? funcName(node) : decoFunc(node, this);

  if (t === OBJ) {
    var _deVe$call2, _deEn$call3, _deEn$call4;

    const {
      hi
    } = this,
          pt = typ(node);
    if (pt === ARRAY) return lv >= hi ? '[array]' : (_deVe$call2 = deVe.call(this, node.slice(), lv), bracket(_deVe$call2));
    if (pt === OBJECT) return lv >= hi ? '{object}' : (_deEn$call3 = deEn.call(this, Object.entries(node), lv), brace(_deEn$call3));
    if (pt === DATE) return lv >= hi ? formatDate(node) : formatDateTime(node);
    if (pt === MAP) return lv >= hi ? '(map)' : (_deEn$call4 = deEn.call(this, [...node.entries()], lv), bracket(_deEn$call4));
    if (pt === SET) return lv >= hi ? '(set)' : `set:[${deVe.call(this, [...node], lv)}]`;
    return `${node}`;
  }

  return node;
}
let deVe = function (vector, lv) {
  mutate$1(vector, v => String(decoNode.call(this, v, lv + 1)));
  if (this.pr) fluoVec.call(MUTABLE, vector);
  return stringifyVector.call(this, vector, lv);
};
let deEn = function (entries, lv) {
  mutate$2(entries, k => String(k), v => String(decoNode.call(this, v, lv + 1)));
  if (this.pr) fluoEnt.call(MUTABLE, entries, [, {
    preset: IDX[lv & 7]
  }]);
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
  wf = 160,
  qm = null
} = {}) => decoNode.call({
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
  pr = true,
  hi = 8,
  va = 0,
  vo = 0,
  wa = 32,
  wo = 64,
  wf = 160,
  qm = null
} = {}) => decoNode.bind({
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

  return void console.log((_x2 = x, deco(_x2)), LF);
};

export { deca, deco, decoNode, delogNeL, delogger };
