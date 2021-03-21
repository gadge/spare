import { presetMatrix } from '@spare/preset-deco';
import { oneself as oneself$3 } from '@ject/oneself';
import { fluoMatrix } from '@palett/fluo-matrix';
import { parenth as parenth$2, bracket as bracket$2, brace, Br } from '@spare/bracket';
import { SP, LF, TB, QT, DASH, RT, RTSP, CO, COSP, COLF } from '@spare/enum-chars';
import { joinLines, liner } from '@spare/liner';
import { size } from '@vect/matrix';
import { isNumeric as isNumeric$4, parseNum as parseNum$1 } from '@texting/charset-fullwidth';
import { matrixMargin } from '@spare/matrix-margin';
import { matrixPadder } from '@spare/matrix-padder';

const ITALIC$3 = 'italic';
const INVERSE$3 = 'inverse';

const swap = function (i, j) {
  const temp = this[i];
  this[i] = this[j];
  return this[j] = temp;
};

const NUM_DESC = (a, b) => b - a;

const max$1 = (a, b) => a > b ? a : b;

const min$1 = (a, b) => a < b ? a : b;

const {
  random
} = Math;

const rand = l => ~~(random() * l);
/**
 * From [min, max] return a random integer.
 * Of [min, max], both min and max are inclusive.
 * @param {number} lo(inclusive) - int
 * @param {number} hi(inclusive) - int
 * @returns {number} int
 */


const randBetw = (lo, hi) => rand(++hi - lo) + lo;

const flopIndex = ar => rand(ar.length);

const flop = ar => ar[flopIndex(ar)];

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

const RGB$1 = 'rgb',
      HSL$3 = 'hsl',
      HEX$1 = 'hex';

const iterate$3 = function (vec, fn, l) {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);

  for (let i = 0; i < l; i++) fn.call(this, vec[i], i);
};

const mapper$8 = function (vec, fn, l) {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);
  const ve = Array(l);

  for (--l; l >= 0; l--) ve[l] = fn.call(this, vec[l], l);

  return ve;
};

function columnMapper(mx, fn, l) {
  l = l || (mx === null || mx === void 0 ? void 0 : mx.length);
  const vec = Array(l);

  for (let i = 0, {
    y
  } = this; i < l; i++) vec[i] = fn(mx[i][y], i);

  return vec;
}

const mapper$7 = (mx, y, fn, l) => columnMapper.call({
  y
}, mx, fn, l);

const select$2 = (vec, indexes, hi) => {
  var _hi;

  hi = (_hi = hi) !== null && _hi !== void 0 ? _hi : indexes === null || indexes === void 0 ? void 0 : indexes.length;
  const sample = Array(hi);

  for (--hi; hi >= 0; hi--) sample[hi] = vec[indexes[hi]];

  return sample;
};

/**
 * @param {*[][]} mx
 * @param {number[]} ys
 * @returns {*[][]}
 */

const select$1 = (mx, ys) => {
  var _ys$length;

  const hi = (_ys$length = ys === null || ys === void 0 ? void 0 : ys.length) !== null && _ys$length !== void 0 ? _ys$length : 0;
  if (hi === 0) return mx;
  if (hi === 1) return mapper$7(mx, ys[0], x => [x]);
  return mx.map(row => select$2(row, ys, hi));
};

const unwind$1 = (entries, h) => {
  h = h || (entries === null || entries === void 0 ? void 0 : entries.length);
  let keys = Array(h),
      values = Array(h);

  for (let r; --h >= 0 && (r = entries[h]);) {
    keys[h] = r[0];
    values[h] = r[1];
  }

  return [keys, values];
};

/**
 * Transpose a 2d-array.
 * @param {*[][]} mx
 * @param {number} [h]
 * @param {number} [w]
 * @returns {*[][]}
 */

const transpose$2 = (mx, h, w) => {
  var _mx$;

  h = h || (mx === null || mx === void 0 ? void 0 : mx.length), w = w || h && ((_mx$ = mx[0]) === null || _mx$ === void 0 ? void 0 : _mx$.length);
  const cols = Array(w);

  for (--w; w >= 0; w--) cols[w] = mapper$8(mx, r => r[w], h);

  return cols;
};

function duozipper$5(a, b) {
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
/**
 * zip two arrays, return the zipped array
 * @param {Array} a
 * @param {Array} b
 * @param {function(*,*,number?):*} fn
 * @param {number} [l]
 * @returns {*[]}
 */


const zipper$5 = (a, b, fn, l) => duozipper$5.call({
  fn,
  hi: l
}, a, b);

const toKeyComparer$1 = comparer => {
  return (a, b) => comparer(a[0], b[0]);
};

const mapper$6 = function (vec, fn, l) {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);
  const ve = Array(l);

  for (--l; l >= 0; l--) ve[l] = fn.call(this, vec[l], l);

  return ve;
};

const column = (mx, c, h) => mapper$6(mx, r => r[c], h);

const columns = function (y, h) {
  return mapper$6(this, r => r[y], h);
};

const Columns = mx => columns.bind(mx);

/**
 * @param {(str|[*,*])[]} labels
 * @return {TableObject} - mutated 'this' {head, rows}
 */


const selectTabular = function (labels) {
  var _lookupIndexes$call;

  let {
    rows
  } = this,
      indexes;
  [this.head, indexes] = (_lookupIndexes$call = lookupIndexes$1.call(this, labels), unwind$1(_lookupIndexes$call));
  this.rows = select$1(rows, indexes);
  return this;
};
/**
 *
 * @param {(str|[*,*])[]} labels
 * @returns {[str,number][]}
 */


const lookupIndexes$1 = function (labels) {
  return mapper$8.call(this, labels, lookupIndex$1);
};
/**
 *
 * @param {str|[*,*]} [label]
 * @returns {[str,number]}
 */


const lookupIndex$1 = function (label) {
  const {
    head
  } = this;
  if (!Array.isArray(label)) return [label, head.indexOf(label)];
  const [current, projected] = label;
  return [projected, head.indexOf(current)];
};

const selectSamples$1 = function (fieldIndexPairs) {
  const {
    rows
  } = this,
        depth = fieldIndexPairs === null || fieldIndexPairs === void 0 ? void 0 : fieldIndexPairs.length;
  return mapper$8(rows, row => {
    let o = {};
    iterate$3(fieldIndexPairs, ([field, index]) => o[field] = row[index], depth);
    return o;
  });
};
/**
 * @param labels
 * @returns {Object[]} - 'this' remains unchanged
 */


const selectTabularToSamples = function (labels) {
  const fieldIndexes = lookupIndexes$1.call(this, labels);
  return selectSamples$1.call(this, fieldIndexes);
};
/**
 *
 * @param comparer
 * @return {TableObject} - mutated 'this' {head, rows}
 */


const sortTabularByKeys$1 = function (comparer) {
  var _zipper$sort;

  let {
    head,
    rows
  } = this,
      columns = transpose$2(rows);
  [this.head, columns] = (_zipper$sort = zipper$5(head, columns, (key, row) => [key, row]).sort(toKeyComparer$1(comparer)), unwind$1(_zipper$sort));
  this.rows = transpose$2(columns);
  return this;
};
/**
 * If y >= 0 then sort by vector[y] for each vectors, else (e.g. y===undefined) sort by keys.
 * @param {function(*,*):number} comparer
 * @param {number} [index]
 * @returns {TableObject} - mutated 'this' {head, rows}
 */


const sortTabular = function (comparer, index) {
  var _zipper$sort;

  if (index < 0) return sortTabularByKeys.call(this, comparer);
  let {
    head,
    rows
  } = this,
      columns = transpose$2(rows);
  /** [column[i]s, head, columns]  */

  const Keyed = (_zipper$sort = zipper$5(head, columns, (key, column) => [column[index], key, column]).sort(toKeyComparer$1(comparer)), Columns(_zipper$sort));
  return this.head = Keyed(1), this.rows = transpose$2(Keyed(2)), this;
};

/**
 * Take the first "n" elements from an array.
 * @param len. The number denote the first "n" elements in an array.
 * @returns {*[]}. A new array length at "len".
 */


Array.prototype.take = function (len) {
  return this.slice(0, len);
};

Array.prototype.zip = function (another, zipper) {
  const {
    length
  } = this,
        arr = Array(length);

  for (let i = 0; i < length; i++) arr[i] = zipper(this[i], another[i], i);

  return arr; // return Array.from({ length: size }, (v, i) => zipper(this[i], another[i], i))
  // return this.map((x, i) => zipper(x, another[i]))
};

const CJK_LETTERS$1 = '\u4e00-\u9fbf';

const HALF_NUM = '0-9';
const HALF_UPPER = 'A-Z';
const HALF_LOWER = 'a-z';
const FULL_NUM = '０-９'; // 0xff10 - 0xff19

const FULL_UPPER = 'Ａ-Ｚ'; // 0xff21 - 0xff3a

const FULL_LOWER = 'ａ-ｚ'; // 0xff41 - 0xff5a

const ANSI_ALPHA = /(?:(?:[a-zA-Z\d]*(?:;[-a-zA-Z\d\/#&.:=?%@~_]*)*)?)/;
const ANSI_BETA = /(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-ntqry=><~])/;
const ANSI = new RegExp(`[][[\\]()#;?]*(?:${ANSI_ALPHA.source}|${ANSI_BETA.source})`);
const ASTRAL = /[\uD800-\uDBFF][\uDC00-\uDFFF]/; // 1024 * 1024
//
// Block                                   Range       Comment
// CJK Unified Ideographs                  4E00-9FFF   Common
// CJK Unified Ideographs Extension A      3400-4DBF   Rare
// CJK Unified Ideographs Extension B      20000-2A6DF Rare, historic
// CJK Unified Ideographs Extension C      2A700–2B73F Rare, historic
// CJK Unified Ideographs Extension D      2B740–2B81F Uncommon, some in current use
// CJK Unified Ideographs Extension E      2B820–2CEAF Rare, historic
// CJK Compatibility Ideographs            F900-FAFF   Duplicates, unifiable variants, corporate characters
// CJK Compatibility Ideographs Supplement 2F800-2FA1F Unifiable variants

const ANSI_G = new RegExp(ANSI, 'g');
const ASTRAL_G = new RegExp(ASTRAL, 'g');

/**
 *
 * @param {string} tx
 * @returns {number}
 */

const lange = tx => tx.replace(ANSI_G, '').replace(ASTRAL_G, '_').length;

/**
 *
 * applicable for smaller number
 * @param {number} x
 * @returns {number}
 */


const round$2 = x => x + (x > 0 ? 0.5 : -0.5) << 0;

const rgbToInt$1 = ([r, g, b]) => ((r & 0xFF) << 16) + ((g & 0xFF) << 8) + (b & 0xFF);
/**
 * @param {[number,number,number]} rgb
 * @returns {string}
 */


const rgbToHex$1 = rgb => '#' + rgbToInt$1(rgb).toString(16).toUpperCase().padStart(6, '0');

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
  return [round$2(h), round$2(s * THOUSAND$1) / 10, round$2(l * THOUSAND$1) / 10];
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

const hexToHsl$1 = hex => {
  var _ref, _hex;

  return _ref = (_hex = hex, hexToRgb$1(_hex)), rgbToHsl$1(_ref);
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
  return [round$2(r * 0xFF), round$2(g * 0xFF), round$2(b * 0xFF)]; // return [r * 0xFF & 0xFF, g * 0xFF & 0xFF, b * 0xFF & 0xFF]
}

const hslToHex$1 = hsl => {
  var _ref, _hsl;

  return _ref = (_hsl = hsl, hslToRgb$2(_hsl)), rgbToHex$1(_ref);
};

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


const enclose$2 = code => L$3 + code + R$3;
/**
 *
 * @param {number[]} rgb - array of three integers, each from 0 to 255
 * @returns {string}
 */


const rgbToAnsi$2 = rgb => FORE$2 + SC$2 + rgb[0] + SC$2 + rgb[1] + SC$2 + rgb[2];

const hexToAnsi$1 = hex => {
  const int = hexToInt$1(hex);
  return FORE$2 + SC$2 + (int >> 16 & 0xFF) + SC$2 + (int >> 8 & 0xFF) + SC$2 + (int & 0xFF);
};

const hslToAnsi$1 = hsl => {
  var _ref, _hsl;

  return _ref = (_hsl = hsl, hslToRgb$2(_hsl)), rgbToAnsi$2(_ref);
};

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

const assignEffects$2 = function (effects) {
  const conf = this;

  for (let effect of effects) if (effect in Effects$2 && (effect = Effects$2[effect])) conf.head += SC$2 + effect[0], conf.tail += SC$2 + effect[1];

  return conf;
};

const spaceToAnsi$1 = space => space === RGB$1 ? rgbToAnsi$2 : space === HEX$1 ? hexToAnsi$1 : space === HSL$3 ? hslToAnsi$1 : rgbToAnsi$2;
/**
 *
 * @param {string} text
 * @returns {string}
 */


function dye$2(text) {
  const {
    head,
    tail
  } = this;
  return head + text + tail;
}
/***
 *
 * @param {string|number[]} color
 * @returns {function(string):string}
 */


function Dye$2(color) {
  if (!color) return oneself$3;
  const config = this !== null && this !== void 0 ? this : {};
  let {
    ansi = rgbToAnsi$2,
    head = '',
    tail = '',
    effects
  } = config;
  if (effects !== null && effects !== void 0 && effects.length) assignEffects$2.call(config, effects);
  head = enclose$2(head + SC$2 + ansi(color)), tail = enclose$2(tail + SC$2 + CLR_FORE$2);
  return dye$2.bind({
    head,
    tail
  });
}
/** @type {Function} */


class DyeFactory$1 {
  /** @type {Function} */

  /** @type {string} */

  /** @type {string} */
  constructor(ansi, head, tail) {
    _defineProperty$3(this, "ansi", void 0);

    _defineProperty$3(this, "head", void 0);

    _defineProperty$3(this, "tail", void 0);

    this.ansi = ansi;
    this.head = head;
    this.tail = tail;
    return Dye$2.bind(this);
  }
  /**
   *
   * @param space
   * @param effects
   * @returns {DyeFactory|Function}
   */


  static build(space, effects) {
    var _space;

    const conf = {
      ansi: (_space = space, spaceToAnsi$1(_space)),
      head: '',
      tail: ''
    };
    if (effects !== null && effects !== void 0 && effects.length) assignEffects$2.call(conf, effects);
    return Dye$2.bind(conf);
  }

  static prep(space, ...effects) {
    var _space2;

    const conf = {
      ansi: (_space2 = space, spaceToAnsi$1(_space2)),
      head: '',
      tail: ''
    };
    if (effects !== null && effects !== void 0 && effects.length) assignEffects$2.call(conf, effects);
    return Dye$2.bind(conf);
  }

}

const sortKeysByLength = dict => dict.sort(([a], [b]) => String(b).length - String(a).length);

const makeReplaceable = function (dict) {
  if (this !== null && this !== void 0 && this.sort) sortKeysByLength(dict);
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

const DECOFUNC_CONFIG = {
  pretty: true,
  flatMark: 160,
  abbrMark: 192
};

var _Blue$lighten_, _LightBlue$accent_, _LightBlue$lighten_, _Lime$lighten_, _ref$4, _function, _Grey$base, _return, _Brown$lighten_;

const nameDye = Dye$2((_Blue$lighten_ = Blue$1.lighten_2, hexToRgb$1(_Blue$lighten_)));
const argsDye = Dye$2((_LightBlue$accent_ = LightBlue$1.accent_2, hexToRgb$1(_LightBlue$accent_)));
const bodyDye = Dye$2((_LightBlue$lighten_ = LightBlue$1.lighten_3, hexToRgb$1(_LightBlue$lighten_)));
const arrowDye = Dye$2((_Lime$lighten_ = Lime$1.lighten_1, hexToRgb$1(_Lime$lighten_)));
const PresetDye = (_ref$4 = [[/function/gi, (_function = 'function', Dye$2((_Grey$base = Grey$1.base, hexToRgb$1(_Grey$base)))(_function))], [/return/gi, (_return = 'return', Dye$2((_Brown$lighten_ = Brown$1.lighten_3, hexToRgb$1(_Brown$lighten_)))(_return))], [/\bthis\b/gi, x => {
  var _x, _BlueGrey$accent_;

  return _x = x, Dye$2((_BlueGrey$accent_ = BlueGrey$1.accent_2, hexToRgb$1(_BlueGrey$accent_)))(_x);
}], [/\b(if|else|while|do|switch|for)\b/gi, x => {
  var _x2, _Purple$lighten_;

  return _x2 = x, Dye$2((_Purple$lighten_ = Purple$1.lighten_3, hexToRgb$1(_Purple$lighten_)))(_x2);
}], [/\b(var|let|const)\b/gi, x => {
  var _x3, _DeepPurple$lighten_;

  return _x3 = x, Dye$2((_DeepPurple$lighten_ = DeepPurple$1.lighten_3, hexToRgb$1(_DeepPurple$lighten_)))(_x3);
}]], makeReplaceable(_ref$4));

const funcName = func => {
  var _func$name;

  return `[fn:(${(_func$name = func === null || func === void 0 ? void 0 : func.name) !== null && _func$name !== void 0 ? _func$name : '<anonym>'})]`;
};

const FUNCTION_BODY = /function\s*(\w*)\s*\(([\w\s,]+)\)\s*\{\s*return(.+);?\s*\}/gs;
const THIS_REG = /\bthis\b/;
const FUNCTION_INITIAL = /^function/;
const LINEFEEDS = /\n\s*(\n\s*)/g;

const funcToLined = func => {
  return func.toString().replace(LINEFEEDS, (_, p1) => p1);
};

const flatten = (text, flatMark) => {
  const temp = text.replace(/\s+/g, ' ');
  if (temp.length <= flatMark) text = temp.replace(/;\s*}/g, ' }');
  return text;
};

const lambdafy = (text, pretty, defaultName = 'anonym') => {
  if (!THIS_REG.test(text)) text = pretty ? text.replace(FUNCTION_BODY, (_, name, args, body) => nameDye(name === 'anonymous' ? defaultName : name) + SP + parenth$2(argsDye(args.trim())) + SP + arrowDye('=>') + bodyDye(body)) : text.replace(FUNCTION_BODY, (_, name, args, body) => name + SP + parenth$2(args) + SP + '=>' + body);
  return text.replace(FUNCTION_INITIAL, '').trim();
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
  text = lambdafy(text, pr, func === null || func === void 0 ? void 0 : func.name);
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

const VLKP = Symbol.for('vlkp');
const HLKP = Symbol.for('hlkp');

const coin = function (field) {
  return this.head.indexOf(field);
};

function duozipper$4(a, b) {
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
/**
 * zip two arrays, return the zipped array
 * @param {Array} a
 * @param {Array} b
 * @param {function(*,*,number?):*} fn
 * @param {number} [l]
 * @returns {*[]}
 */


const zipper$4 = (a, b, fn, l) => duozipper$4.call({
  fn,
  hi: l
}, a, b);

const wind$3 = (keys, values) => zipper$4(keys, values, (k, v) => [k, v]);

const wind$2 = (keys, values) => {
  const o = {},
        {
    length
  } = keys;

  for (let i = 0; i < length; i++) o[keys[i]] = values[i];

  return o;
};

const lookup = function (valueToFind, key, field) {
  const table = this,
        {
    head,
    rows
  } = table,
        x = head.indexOf(key),
        y = head.indexOf(field);
  if (x < 0 || y < 0) return null;
  const row = rows.find(row => row[x] === valueToFind);
  return row ? row[y] : null;
};

const lookupMany = function (valuesToFind, key, field) {
  const table = this,
        {
    head,
    rows
  } = table,
        x = head.indexOf(key),
        y = head.indexOf(field);
  if (x < 0 || y < 0) return valuesToFind.map(() => null);
  return valuesToFind.map(v => {
    const row = rows.find(row => row[x] === v);
    return row ? row[y] : null;
  });
};

const lookupTable = function (key, field, objectify) {
  const table = this,
        getColumn = Columns(table.rows);
  const [ki, vi] = [coin.call(table, key), coin.call(table, field)];
  return ki >= 0 && vi >= 0 ? objectify ? wind$2(getColumn(ki), getColumn(vi)) : wind$3(getColumn(ki), getColumn(vi)) : objectify ? {} : [];
};

const lookupCached = function (valueToFind, key, field) {
  const table = this;
  let ds, dict;
  if (!(ds = table[VLKP]) || !(dict = ds.dict) || ds.key !== key || ds.value !== field) table[VLKP] = {
    dict: dict = lookupTable.call(table, key, field, true),
    key: key,
    value: field
  };
  return dict[valueToFind];
};

/** @typedef {{side:*[],head:*[],rows:*[][]}} CrostabObject */

/**
 *
 * @param {*[]} side
 * @param {*[]} head
 * @param {*[][]} rows
 * @returns {CrostabObject}
 */

const slice = ({
  side,
  head,
  rows
}) => ({
  side,
  head,
  rows
});
/**
 *
 * @param {*[]} side
 * @param {*[]} head
 * @param {*[][]} rows
 * @returns {CrostabObject}
 */


const shallow = ({
  side,
  head,
  rows
}) => ({
  side: side.slice(),
  head: head.slice(),
  rows: rows.map(row => row.slice())
});

const wind$1 = (keys, values) => {
  const o = {},
        {
    length
  } = keys;

  for (let i = 0; i < length; i++) o[keys[i]] = values[i];

  return o;
};

const hlookup = function (valueToFind, keyField, valueField) {
  const crostab = this,
        {
    side,
    rows
  } = crostab;
  const y = (rows[side.indexOf(keyField)] || []).indexOf(valueToFind);
  const valueRow = rows[side.indexOf(valueField)] || [];
  return valueRow[y];
};

const hlookupMany = function (valuesToFind, keyField, valueField) {
  const crostab = this,
        {
    side,
    rows
  } = crostab;
  const krow = rows[side.indexOf(keyField)] || [];
  const vrow = rows[side.indexOf(valueField)] || [];
  return valuesToFind.map(v => vrow[krow.indexOf(v)]);
};

const hlookupTable = function (keyField, valueField, objectify = true) {
  const crostab = this,
        {
    side,
    rows
  } = crostab;
  const ki = side.indexOf(keyField),
        vi = side.indexOf(valueField);
  return ki >= 0 && vi >= 0 ? objectify ? wind$1(rows[ki], rows[vi]) : wind$3(rows[ki], rows[vi]) : objectify ? {} : [];
};

const hlookupCached = function (valueToFind, keyField, valueField) {
  const crostab = this;
  let ds, dict;
  if (!(ds = crostab[HLKP]) || !(dict = ds.dict) || ds.key !== keyField || ds.value !== valueField) crostab[HLKP] = {
    dict: dict = hlookupTable.call(crostab, keyField, valueField),
    key: keyField,
    value: valueField
  };
  return dict[valueToFind];
};

const iterate$2 = function (vec, fn, l) {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);

  for (let i = 0; i < l; i++) fn.call(this, vec[i], i);
};

const mapper$5 = function (vec, fn, l) {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);
  const ve = Array(l);

  for (--l; l >= 0; l--) ve[l] = fn.call(this, vec[l], l);

  return ve;
};

/**
 * Transpose a 2d-array.
 * @param {*[][]} mx
 * @param {number} [h]
 * @param {number} [w]
 * @returns {*[][]}
 */

const transpose$1 = (mx, h, w) => {
  var _mx$;

  h = h || (mx === null || mx === void 0 ? void 0 : mx.length), w = w || h && ((_mx$ = mx[0]) === null || _mx$ === void 0 ? void 0 : _mx$.length);
  const cols = Array(w);

  for (--w; w >= 0; w--) cols[w] = mapper$5(mx, r => r[w], h);

  return cols;
};

const select = (vec, indexes, hi) => {
  var _hi;

  hi = (_hi = hi) !== null && _hi !== void 0 ? _hi : indexes === null || indexes === void 0 ? void 0 : indexes.length;
  const sample = Array(hi);

  for (--hi; hi >= 0; hi--) sample[hi] = vec[indexes[hi]];

  return sample;
};

function duozipper$3(a, b) {
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
/**
 * zip two arrays, return the zipped array
 * @param {Array} a
 * @param {Array} b
 * @param {function(*,*,number?):*} fn
 * @param {number} [l]
 * @returns {*[]}
 */


const zipper$3 = (a, b, fn, l) => duozipper$3.call({
  fn,
  hi: l
}, a, b);

const selectSamples = function (fieldIndexPairs) {
  const {
    rows
  } = this,
        columns = transpose$1(rows),
        depth = fieldIndexPairs === null || fieldIndexPairs === void 0 ? void 0 : fieldIndexPairs.length;
  return mapper$5(columns, column => {
    let o = {};
    iterate$2(fieldIndexPairs, ([field, index]) => o[field] = column[index], depth);
    return o;
  });
};
/**
 * @param {(str|[*,*])[]} labels
 * @return {KeyedRows} - mutated 'this' {side, rows}
 */


const selectKeyedRows = function (labels) {
  var _lookupIndexes$call;

  let indexes;
  [this.side, indexes] = (_lookupIndexes$call = lookupIndexes.call(this, labels), unwind$1(_lookupIndexes$call));
  this.rows = select(this.rows, indexes);
  return this;
};
/**
 *
 * @param {(str|[*,*])[]} labels
 * @returns {[str,number][]}
 */


const lookupIndexes = function (labels) {
  return mapper$5.call(this, labels, lookupIndex);
};
/**
 *
 * @param {str|[*,*]} [label]
 * @returns {[str,number]}
 */


const lookupIndex = function (label) {
  const {
    side
  } = this;
  if (!Array.isArray(label)) return [label, side.indexOf(label)];
  let [current, projected] = label;
  return [projected, side.indexOf(current)];
};
/**
 * @param {(str|[*,*])[]} labels
 * @return {Object[]} - 'this' remains unchanged
 */


const selectSamplesBySide = function (labels) {
  const fieldIndexes = lookupIndexes.call(this, labels);
  return selectSamples.call(this, fieldIndexes);
};
/**
 * If y >= 0 then sort by vector[y] for each vectors, else (e.g. y===undefined) sort by keys.
 * @param {function(*,*):number} comparer
 * @param {number} [index]
 * @return {KeyedRows} - mutated 'this' {side, rows}
 */


const sortKeyedRows = function (comparer, index) {
  var _zipper$sort;

  if (index < 0) return sortRowsByKeys.call(this, comparer);
  let {
    side,
    rows
  } = this;
  /** Columns of [row[i]s, side, rows]  */

  const Cols = (_zipper$sort = zipper$3(side, rows, (key, row) => [row[index], key, row]).sort(toKeyComparer$1(comparer)), Columns(_zipper$sort));
  return this.side = Cols(1), this.rows = Cols(2), this;
};
/**
 *
 * @param comparer
 * @returns {{side:*[], rows:*[][]}}
 */


const sortRowsByKeys$1 = function (comparer) {
  var _zipper$sort;

  let {
    side,
    rows
  } = this;
  [this.side, this.rows] = (_zipper$sort = zipper$3(side, rows, (key, row) => [key, row]).sort(toKeyComparer$1(comparer)), unwind$1(_zipper$sort));
  return this;
};

const STR_ASC = (a, b) => a.localeCompare(b);

const NUM_ASC = (a, b) => a - b;

function columnMutate(mx, fn, l) {
  l = l || (mx === null || mx === void 0 ? void 0 : mx.length);

  for (let i = 0, r, {
    y
  } = this; i < l && (r = mx[i]); i++) r[y] = fn(r[y], i);

  return mx;
}

const mutate$3 = (mx, y, fn, l) => columnMutate.call({
  y
}, mx, fn, l);

const mapper$4 = function (vec, fn, l) {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);
  const ve = Array(l);

  for (--l; l >= 0; l--) ve[l] = fn.call(this, vec[l], l);

  return ve;
};

function duozipper$2(a, b) {
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
/**
 * zip two arrays, return the zipped array
 * @param {Array} a
 * @param {Array} b
 * @param {function(*,*,number?):*} fn
 * @param {number} [l]
 * @returns {*[]}
 */


const zipper$2 = (a, b, fn, l) => duozipper$2.call({
  fn,
  hi: l
}, a, b);

const pop = matrix => mapper$4(matrix, row => row.pop());
/**
 * push each element of column to each row of matrix, return void 0
 * @param {*[][]} matrix
 * @param {*[]} column
 * @returns {*}
 */


const push = (matrix, column) => void zipper$2(matrix, column, (row, el) => row.push(el));

const shift = matrix => mapper$4(matrix, row => row.shift());
/**
 * unshift each element of column to each row of matrix, return void 0
 * @param {*[][]} matrix
 * @param {*[]} column
 * @returns {*}
 */


const unshift = (matrix, column) => zipper$2(matrix, column, (row, el) => row.unshift(el));

const ROWWISE = 1;
const COLUMNWISE = 2;

const init$1 = (h, w, fn) => {
  const mx = Array(h);

  for (let i = 0, j, row; i < h; i++) for (j = 0, mx[i] = row = Array(w); j < w; j++) row[j] = fn(i, j);

  return mx;
};

/**
 *
 * @param {*[][]} mx
 * @param {function} fn
 * @param {number} [h]
 * @param {number} [w]
 * @returns {undefined}
 */
/**
 * Iterate through elements on each (x of rows,y of columns) coordinate of a 2d-array.
 * @param {*[][]} mx
 * @param {function} fn
 * @param {number} [h]
 * @param {number} [w]
 * @returns {*[]}
 */


const mapper$3 = (mx, fn, h, w) => {
  var _mx$;

  h = h || (mx === null || mx === void 0 ? void 0 : mx.length), w = w || h && ((_mx$ = mx[0]) === null || _mx$ === void 0 ? void 0 : _mx$.length);
  const tx = Array(h);

  for (let i = 0, j, r, tr; i < h; i++) for (tx[i] = tr = Array(w), r = mx[i], j = 0; j < w; j++) tr[j] = fn(r[j], i, j);

  return tx;
};

const mutate$2 = (mx, fn, h, w) => {
  var _mx$;

  h = h || (mx === null || mx === void 0 ? void 0 : mx.length), w = w || h && ((_mx$ = mx[0]) === null || _mx$ === void 0 ? void 0 : _mx$.length);

  for (let i = 0, j, r; i < h; i++) for (j = 0, r = mx[i]; j < w; j++) r[j] = fn(r[j], i, j);

  return mx;
};

const mapper$2 = function (vec, fn, l) {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);
  const ve = Array(l);

  for (--l; l >= 0; l--) ve[l] = fn.call(this, vec[l], l);

  return ve;
};

const mutate$1 = (vec, fn, l) => {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);

  for (--l; l >= 0; l--) vec[l] = fn(vec[l], l);

  return vec;
};

/**
 * Transpose a 2d-array.
 * @param {*[][]} mx
 * @param {number} [h]
 * @param {number} [w]
 * @returns {*[][]}
 */

const transpose = (mx, h, w) => {
  var _mx$;

  h = h || (mx === null || mx === void 0 ? void 0 : mx.length), w = w || h && ((_mx$ = mx[0]) === null || _mx$ === void 0 ? void 0 : _mx$.length);
  const cols = Array(w);

  for (--w; w >= 0; w--) cols[w] = mapper$2(mx, r => r[w], h);

  return cols;
};

const pair = (key, value) => {
  const o = {};
  o[key] = value;
  return o;
};

// export default Function.prototype.apply.bind(Array.prototype.push)
const acquire = (va, vb) => (Array.prototype.push.apply(va, vb), va); // export default Function.prototype.call.bind(Array.prototype.concat)

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
/**
 * zip two arrays, return the zipped array
 * @param {Array} a
 * @param {Array} b
 * @param {function(*,*,number?):*} fn
 * @param {number} [l]
 * @returns {*[]}
 */


const zipper$1 = (a, b, fn, l) => duozipper$1.call({
  fn,
  hi: l
}, a, b);

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
/**
 *
 */


class CrosTab {
  /** @type {*[]} */

  /** @type {*[]} */

  /** @type {*[][]} */

  /** @type {string} */

  /**
   *
   * @param {*[]} side
   * @param {*[]} head
   * @param {*[][]} rows
   * @param {string} [title]
   */
  constructor(side, head, rows, title) {
    _defineProperty$2(this, "side", void 0);

    _defineProperty$2(this, "head", void 0);

    _defineProperty$2(this, "rows", void 0);

    _defineProperty$2(this, "title", void 0);

    this.side = side;
    this.head = head;
    this.rows = rows;
    this.title = title || '';
  }

  static from(o) {
    return new CrosTab(o.side, o.head || o.banner, o.rows || o.matrix, o.title);
  }
  /**
   * Shallow copy
   * @param {*[]} side
   * @param {*[]} head
   * @param {function(number,number):*} func
   * @param {string} [title]
   * @return {CrosTab}
   */


  static init({
    side,
    head,
    func,
    title
  }) {
    return CrosTab.from({
      side,
      head,
      rows: init$1(side === null || side === void 0 ? void 0 : side.length, head === null || head === void 0 ? void 0 : head.length, (x, y) => func(x, y)),
      title
    });
  }

  rowwiseSamples(headFields, indexed = false, indexName = '_') {
    const samples = selectTabularToSamples.call(this, headFields);
    return indexed ? zipper$1(this.side, samples, (l, s) => Object.assign(pair(indexName, l), s)) : samples;
  }

  columnwiseSamples(sideFields, indexed = false, indexName = '_') {
    const samples = selectSamplesBySide.call(this, sideFields);
    return indexed ? zipper$1(this.head, samples, (l, s) => Object.assign(pair(indexName, l), s)) : samples;
  }

  toObject(mutate = false) {
    var _this, _this2;

    return mutate ? (_this = this, slice(_this)) : (_this2 = this, shallow(_this2));
  }

  toTable(sideLabel) {
    const head = acquire([sideLabel], this.head);
    const rows = zipper$1(this.side, this.rows, (x, row) => acquire([x], row));
    return {
      head,
      rows
    };
  }
  /** @returns {*[][]} */


  get columns() {
    return transpose(this.rows);
  }

  get size() {
    return [this.height, this.width];
  }

  get height() {
    var _this$side;

    return (_this$side = this.side) === null || _this$side === void 0 ? void 0 : _this$side.length;
  }

  get width() {
    var _this$head;

    return (_this$head = this.head) === null || _this$head === void 0 ? void 0 : _this$head.length;
  }

  roin(r) {
    return this.side.indexOf(r);
  }

  coin(c) {
    return this.head.indexOf(c);
  }

  cell(r, c) {
    return this.element(this.roin(r), this.coin(c));
  }

  element(x, y) {
    return x in this.rows ? this.rows[x][y] : undefined;
  }

  coordinate(r, c) {
    return {
      x: this.roin(r),
      y: this.coin(c)
    };
  }

  row(r) {
    return this.rows[this.roin(r)];
  }

  column(c) {
    return column(this.rows, this.coin(c), this.height);
  }

  transpose(title, {
    mutate = true
  } = {}) {
    return this.boot({
      side: this.head,
      head: this.side,
      rows: this.columns,
      title
    }, mutate);
  }

  setRow(r, row) {
    return this.rows[this.roin(r)] = row, this;
  }

  setRowBy(r, fn) {
    return mutate$1(this.row(r), fn, this.width), this;
  }

  setColumn(c, column) {
    return mutate$3(this.rows, this.coin(c), (_, i) => column[i], this.height), this;
  }

  setColumnBy(c, fn) {
    return mutate$3(this.rows, this.coin(c), fn, this.height), this;
  }

  map(fn, {
    mutate = true
  } = {}) {
    return this.boot({
      rows: mapper$3(this.rows, fn, this.height, this.width)
    }, mutate);
  }

  mapSide(fn, {
    mutate = true
  } = {}) {
    return this.boot({
      side: mapper$2(this.side, fn)
    }, mutate);
  }

  mapBanner(fn, {
    mutate = true
  } = {}) {
    return this.boot({
      head: mapper$2(this.head, fn)
    }, mutate);
  }

  mutate(fn) {
    return mutate$2(this.rows, fn, this.height, this.width), this;
  }

  mutateSide(fn) {
    return mutate$1(this.side, fn), this;
  }

  mutateBanner(fn) {
    return mutate$1(this.head, fn), this;
  }

  pushRow(label, row) {
    return this.side.push(label), this.rows.push(row), this;
  }

  unshiftRow(label, row) {
    return this.side.unshift(label), this.rows.unshift(row), this;
  }

  pushColumn(label, col) {
    return this.head.push(label), push(this.rows, col), this;
  }

  unshiftColumn(label, col) {
    return this.head.unshift(label), unshift(this.rows, col), this;
  }

  popRow() {
    return this.rows.pop();
  }

  shiftRow() {
    return this.rows.shift();
  }

  popColumn() {
    return pop(this.rows);
  }

  shiftColumn() {
    return shift(this.rows);
  }

  slice({
    top,
    bottom,
    left,
    right,
    mutate = true
  } = {}) {
    let {
      side,
      head,
      rows
    } = this;
    if (top || bottom) side = side.slice(top, bottom), rows = rows.slice(top, bottom);
    if (left || right) head = head.slice(left, right), rows = rows.map(row => row.slice(left, right));
    return this.boot({
      side,
      head,
      rows
    }, mutate);
  }

  vlookupOne(valueToFind, keyField, valueField, cached) {
    return (cached ? lookupCached : lookup).call(this, valueToFind, keyField, valueField);
  }

  vlookupMany(valuesToFind, keyField, valueField) {
    return lookupMany.call(this, valuesToFind, keyField, valueField);
  }

  vlookupTable(keyField, valueField) {
    return lookupTable.call(this, keyField, valueField);
  }

  hlookupOne(valueToFind, keyField, valueField, cached) {
    return (cached ? hlookupCached : hlookup).call(this, valueToFind, keyField, valueField);
  }

  hlookupMany(valuesToFind, keyField, valueField) {
    return hlookupMany.call(this, valuesToFind, keyField, valueField);
  }

  hlookupTable(keyField, valueField) {
    return hlookupTable.call(this, keyField, valueField);
  }

  selectRows(sideLabels, mutate = false) {
    var _this3;

    let o = mutate ? this : (_this3 = this, slice(_this3));
    selectKeyedRows.call(o, sideLabels);
    return mutate ? this : this.copy(o);
  }

  selectColumns(headLabels, mutate = false) {
    var _this4;

    let o = mutate ? this : (_this4 = this, slice(_this4));
    selectTabular.call(this, headLabels);
    return mutate ? this : this.copy(o);
  }

  select({
    side,
    head,
    mutate = false
  } = {}) {
    var _this5;

    let o = mutate ? this : (_this5 = this, slice(_this5));
    if (head === null || head === void 0 ? void 0 : head.length) selectTabular.call(o, head);
    if (side === null || side === void 0 ? void 0 : side.length) selectKeyedRows.call(o, side);
    return mutate ? this : this.copy(o);
  }

  sort({
    direct = ROWWISE,
    field,
    comparer = NUM_ASC,
    mutate = false
  } = {}) {
    var _this6;

    let o = mutate ? this : (_this6 = this, slice(_this6));
    if (direct === ROWWISE) sortKeyedRows.call(o, comparer, this.coin(field));
    if (direct === COLUMNWISE) sortTabular.call(o, comparer, this.roin(field));
    return mutate ? this : this.copy(o);
  }

  sortByLabels({
    direct = ROWWISE,
    comparer = STR_ASC,
    mutate = false
  }) {
    var _this7;

    let o = mutate ? this : (_this7 = this, slice(_this7));
    if (direct === ROWWISE) sortRowsByKeys$1.call(o, comparer);
    if (direct === COLUMNWISE) sortTabularByKeys$1.call(o, comparer);
    return mutate ? this : this.copy(o);
  }

  boot({
    side,
    head,
    rows,
    title
  } = {}, mutate) {
    if (mutate) {
      if (side) this.side = side;
      if (head) this.head = head;
      if (rows) this.rows = rows;
      if (title) this.title = title;
      return this;
    } else {
      return this.copy({
        side,
        head,
        rows,
        title
      });
    }
  }

  copy({
    side,
    head,
    rows,
    title
  } = {}) {
    if (!side) side = this.side.slice();
    if (!head) head = this.head.slice();
    if (!rows) rows = this.rows.map(row => row.slice());
    if (!title) title = this.title;
    return new CrosTab(side, head, rows, title);
  }

}

/**
 *
 * @type {Function|function(*):string}
 */
Function.prototype.call.bind(Object.prototype.toString);

const values = function (o) {
  const {
    keys
  } = this;
  const l = keys === null || keys === void 0 ? void 0 : keys.length,
        ve = Array(l);

  for (let i = 0; i < l; i++) ve[i] = o[keys[i]];

  return ve;
};

const selectValues = (o, keys) => values.call({
  keys
}, o);

const SelectValues = keys => values.bind({
  keys
});

const first = ve => ve[0];

/**
 *
 * @param sampleCollection
 * @param {Object} config
 * @param {[]} config.side
 * @param {[]} config.head
 * @returns {CrosTab}
 */


function samplesToCrostab(sampleCollection, config = {}) {
  var _config$side, _config$head, _samples;

  const samples = config.side ? selectValues(sampleCollection, config.side) : Object.values(sampleCollection);
  const side = (_config$side = config.side) !== null && _config$side !== void 0 ? _config$side : Object.keys(sampleCollection);
  const head = (_config$head = config.head) !== null && _config$head !== void 0 ? _config$head : Object.keys((_samples = samples, first(_samples)));
  const rows = samples.map(config.head ? SelectValues(config.head) : Object.values);
  return CrosTab.from({
    side,
    head,
    rows
  });
}

const INILOW = /^[a-z]+/;
const LITERAL = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const CAPWORD = /[A-Z][a-z]+|[A-Z]+(?=[A-Z][a-z]|\d|\W|_|$)|[\d]+[a-z]*/g;

const iterate$1 = function (vec, fn, l) {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);

  for (let i = 0; i < l; i++) fn.call(this, vec[i], i);
};

const mapper$1 = function (vec, fn, l) {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);
  const ve = Array(l);

  for (--l; l >= 0; l--) ve[l] = fn.call(this, vec[l], l);

  return ve;
};

const mutate = (vec, fn, l) => {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);

  for (--l; l >= 0; l--) vec[l] = fn(vec[l], l);

  return vec;
};

// from x => typeof x
const UND = 'undefined';
const BOO = 'boolean';
const NUM$1 = 'number';
const BIG = 'bigint';
const STR$4 = 'string';
const OBJ = 'object';
const FUN = 'function';
const SYM = 'symbol';

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

const isNumeric$3 = x => (x = +x) || x === 0;

const isNumeric$2 = x => !isNaN(x - parseFloat(x));

const v1 = word => (word.toLowerCase().charCodeAt(0) & 0x7f) << 21;

const v2 = word => (((word = word.toLowerCase()).charCodeAt(0) & 0x7f) << 21) + ((word.charCodeAt(1) & 0x7f) << 14);

const v3 = word => (((word = word.toLowerCase()).charCodeAt(0) & 0x7f) << 21) + ((word.charCodeAt(1) & 0x7f) << 14) + ((word.charCodeAt(2) & 0x7f) << 7);

const v4 = word => (((word = word.toLowerCase()).charCodeAt(0) & 0x7f) << 21) + ((word.charCodeAt(1) & 0x7f) << 14) + ((word.charCodeAt(2) & 0x7f) << 7) + (word.charCodeAt(3) & 0x7f);

const stringValue = word => {
  const l = word === null || word === void 0 ? void 0 : word.length;
  if (!l) return NaN;
  if (typeof word !== STR$4) return NaN;
  if (l >= 8) return (v4(word.slice(0, 4)) << 2) + v4(word.slice(-4));
  if (l === 7) return (v4(word.slice(0, 4)) << 2) + v3(word.slice(-3));
  if (l === 6) return (v4(word.slice(0, 4)) << 2) + v2(word.slice(-2));
  if (l === 5) return (v4(word.slice(0, 4)) << 2) + v1(word.slice(-1));
  if (l === 4) return v4(word) << 2;
  if (l === 3) return v3(word) << 2;
  if (l === 2) return v2(word) << 2;
  if (l === 1) return v1(word) << 2;
};

const LITERAL_LOWER = `${HALF_UPPER}${HALF_LOWER}${HALF_NUM}`;
const LITERAL_UPPER = `${FULL_UPPER}${FULL_LOWER}${FULL_NUM}`;

const LITERAL_ANY = new RegExp(`[${LITERAL_LOWER}${CJK_LETTERS$1}${LITERAL_UPPER}]+`);

const isString = x => typeof x === STR$4;

const isLiteralAny = x => LITERAL_ANY.test(x);

const hasLiteralAny = x => isString(x) && isLiteralAny(x);

const STR$3 = 'string';
const COMMA = /,/g;

const isNumeric$1 = x => {
  if (typeof x === STR$3) x = x.replace(COMMA, '');
  return !isNaN(x - parseFloat(x));
};
/**
 * validate
 * @param x
 * @param y
 * @returns {number}
 */


const validate = (x, y) => isNaN(x - y) ? NaN : y;

const parseNum = x => {
  if (typeof x === STR$3) x = x.replace(COMMA, '');
  return validate(x, parseFloat(x));
};

const iterate = function (vec, fn, l) {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);

  for (let i = 0; i < l; i++) fn.call(this, vec[i], i);
};
/**
 *
 * @typedef {Array} BoundedVector
 * @typedef {number} BoundedVector.max
 * @typedef {number} BoundedVector.min
 *
 * @typedef {Object} Config
 * @typedef {Function} Config.filter
 * @typedef {Function} Config.mapper
 *
 * @param {*[]} words
 * @param {Config} [configX]
 * @param {Config} [configY]
 * @return {[?BoundedVector, ?BoundedVector]}
 */


const duobound = function (words, [configX, configY] = []) {
  const l = words === null || words === void 0 ? void 0 : words.length;
  let vecX = undefined,
      vecY = undefined;
  if (!l) return [vecX, vecY];
  const {
    filter: filterX,
    mapper: mapperX
  } = configX,
        {
    filter: filterY,
    mapper: mapperY
  } = configY;
  iterate(words, (v, i) => {
    var _vecX, _vecY;

    if (filterX(v) && ((_vecX = vecX) !== null && _vecX !== void 0 ? _vecX : vecX = Array(l))) {
      var _vecX$max;

      v = mapperX(v);

      if (v > ((_vecX$max = vecX.max) !== null && _vecX$max !== void 0 ? _vecX$max : vecX.max = vecX.min = v)) {
        vecX.max = v;
      } else if (v < vecX.min) {
        vecX.min = v;
      }

      return vecX[i] = v;
    }

    if (filterY(v) && ((_vecY = vecY) !== null && _vecY !== void 0 ? _vecY : vecY = Array(l))) {
      var _vecY$max;

      v = mapperY(v);

      if (v > ((_vecY$max = vecY.max) !== null && _vecY$max !== void 0 ? _vecY$max : vecY.max = vecY.min = v)) {
        vecY.max = v;
      } else if (v < vecY.min) {
        vecY.min = v;
      }

      return vecY[i] = v;
    }

    return NaN;
  }, l);
  return [vecX, vecY];
};
/**
 *
 * @typedef {*[]} BoundedVector
 * @typedef {number} BoundedVector.max
 * @typedef {number} BoundedVector.min
 *
 * @typedef {Object} Config
 * @typedef {Function} Config.filter
 * @typedef {Function} Config.mapper
 *
 * @param {*[]} words
 * @param {Config} [config]
 * @return {?BoundedVector}
 */


const solebound = function (words, config) {
  const l = words === null || words === void 0 ? void 0 : words.length;
  let vec = undefined;
  if (!l) return vec;
  const {
    filter,
    mapper
  } = config;
  iterate(words, (v, i) => {
    var _vec;

    if (filter(v) && ((_vec = vec) !== null && _vec !== void 0 ? _vec : vec = Array(l))) {
      var _vec$max;

      v = mapper(v);

      if (v > ((_vec$max = vec.max) !== null && _vec$max !== void 0 ? _vec$max : vec.max = vec.min = v)) {
        vec.max = v;
      } else if (v < vec.min) {
        vec.min = v;
      }

      return vec[i] = v;
    }

    return NaN;
  }, l);
  return vec;
};
/**
 *
 * @typedef {Array} BoundedVector
 * @typedef {number} BoundedVector.max
 * @typedef {number} BoundedVector.min
 *
 * @typedef {Object} Config
 * @typedef {function(*):boolean} Config.filter
 * @typedef {function(*):number} Config.mapper
 *
 * @param {*[]} words
 * @param {Config[]} configs
 * @return {?BoundedVector[]}
 */


const multibound = function (words, configs) {
  const l = words === null || words === void 0 ? void 0 : words.length;
  const vectorCollection = configs.map(x => undefined);
  if (!l) return vectorCollection;
  iterate(words, (v, i) => configs.some(({
    filter,
    mapper
  }, j) => {
    var _vec;

    let vec = vectorCollection[j];

    if (filter(v) && ((_vec = vec) !== null && _vec !== void 0 ? _vec : vec = vectorCollection[j] = Array(l))) {
      var _vec$max;

      v = mapper(v);

      if (v > ((_vec$max = vec.max) !== null && _vec$max !== void 0 ? _vec$max : vec.max = vec.min = v)) {
        vec.max = v;
      } else if (v < vec.min) {
        vec.min = v;
      }

      return vec[i] = v, true;
    }
  }), l);
  return vectorCollection;
};
/**
 *
 * @typedef {Array} BoundedVector
 * @typedef {number} BoundedVector.max
 * @typedef {number} BoundedVector.min
 *
 * @typedef {Object} Config
 * @typedef {function(*):boolean} Config.filter
 * @typedef {function(*):number} Config.mapper
 *
 * @param {*[]} words
 * @param {Config[]} configs
 * @return {?BoundedVector[]}
 */


const boundaries = function (words, configs) {
  const count = configs.length;
  if (count > 2) return multibound(words, configs);

  if (count === 2) {
    var _x$filter, _x$mapper, _y$filter, _y$mapper;

    const [x = {}, y = {}] = configs;
    x.filter = (_x$filter = x === null || x === void 0 ? void 0 : x.filter) !== null && _x$filter !== void 0 ? _x$filter : isNumeric$1, x.mapper = (_x$mapper = x === null || x === void 0 ? void 0 : x.mapper) !== null && _x$mapper !== void 0 ? _x$mapper : parseNum;
    y.filter = (_y$filter = y === null || y === void 0 ? void 0 : y.filter) !== null && _y$filter !== void 0 ? _y$filter : hasLiteralAny, y.mapper = (_y$mapper = y === null || y === void 0 ? void 0 : y.mapper) !== null && _y$mapper !== void 0 ? _y$mapper : stringValue;
    return duobound(words, configs);
  }

  if (count === 1) {
    var _x$filter2, _x$mapper2;

    const [x = {}] = configs;
    x.filter = (_x$filter2 = x === null || x === void 0 ? void 0 : x.filter) !== null && _x$filter2 !== void 0 ? _x$filter2 : isNumeric$1, x.mapper = (_x$mapper2 = x === null || x === void 0 ? void 0 : x.mapper) !== null && _x$mapper2 !== void 0 ? _x$mapper2 : parseNum;
    return [solebound(words, configs[0])];
  }

  return [];
};

const constraint$1 = (x, min, max) => x > max ? max : x < min ? min : x;

const toner = (hsl, dh, ds, dl) => {
  hsl[0] = constraint$1(hsl[0] + dh, 0, 360);
  hsl[1] = constraint$1(hsl[1] + ds, 0, 100);
  hsl[2] = constraint$1(hsl[2] + dl, 0, 100);
  return hsl;
};

({
  max: Cards$1.cyan.accent_2,
  min: Cards$1.green.darken_1,
  na: Cards$1.grey.lighten_4
});
const ATLAS = {
  max: Cards$1.cyan.lighten_3,
  min: Cards$1.orange.lighten_2,
  na: Cards$1.pink.lighten_4
};
({
  max: Cards$1.green.accent_3,
  min: Cards$1.deepPurple.accent_1,
  na: Cards$1.teal.accent_1
});
const AZURE = {
  max: Cards$1.cyan.accent_1,
  min: Cards$1.lightBlue.accent_4,
  na: Cards$1.deepOrange.accent_1
};
({
  max: Cards$1.lightGreen.accent_3,
  min: Cards$1.deepOrange.accent_3,
  na: Cards$1.blue.lighten_3
});
({
  max: Cards$1.orange.accent_2,
  min: Cards$1.purple.accent_1,
  na: Cards$1.grey.lighten_2
});
({
  max: Cards$1.lime.accent_3,
  min: Cards$1.lightGreen.accent_3,
  na: Cards$1.blueGrey.accent_1
});
({
  max: Cards$1.amber.accent_3,
  min: Cards$1.red.lighten_1,
  na: Cards$1.grey.accent_2
});
({
  max: Cards$1.pink.lighten_2,
  min: Cards$1.blue.lighten_4,
  na: Cards$1.teal.accent_3
});
const MOSS = {
  max: Cards$1.lightGreen.accent_3,
  min: Cards$1.teal.lighten_3,
  na: Cards$1.brown.accent_1
};
({
  max: Cards$1.lightBlue.accent_2,
  min: Cards$1.indigo.base,
  na: Cards$1.pink.lighten_3
});
({
  max: Cards$1.teal.accent_2,
  min: Cards$1.blue.darken_3,
  na: Cards$1.cyan.lighten_4
});
({
  max: Cards$1.red.lighten_2,
  min: Cards$1.yellow.darken_1,
  na: Cards$1.green.lighten_2
});
const SUBTLE$1 = {
  max: Cards$1.grey.lighten_5,
  min: Cards$1.grey.darken_1,
  na: Cards$1.indigo.lighten_3
};
({
  max: Cards$1.pink.lighten_4,
  min: Cards$1.deepPurple.accent_2,
  na: Cards$1.amber.darken_2
});

const reverseHue = hue => {
  hue += 180;
  return hue > 360 ? hue - 360 : hue < 0 ? hue + 360 : hue;
};

const constraint = (x, min, max) => x > max ? max : x < min ? min : x;

const randPreset = hex => {
  var _min, _toner, _ref;

  const min = hex;
  const hsl = (_min = min, hexToHsl$1(_min));
  const max = (_toner = toner(hsl.slice(), randBetw(-12, 12), randBetw(-5, 10), randBetw(6, 18)), hslToHex$1(_toner));
  const na = (_ref = [reverseHue(hsl[0]), constraint(hsl[1] - 32, 5, 90), constraint(hsl[2] + 24, 40, 96)], hslToHex$1(_ref));
  return {
    min,
    max,
    na
  };
};


const STR$2 = 'string';

const parseHsl$1 = color => {
  var _color;

  return typeof color === STR$2 ? (_color = color, hexToHsl$1(_color)) : color;
};
/**
 *
 * @param {Object} [preset]
 * @param {string} preset.max
 * @param {string} preset.min
 * @return {?{dif: number[], min: number[]}}
 */


const presetToLeap$1 = preset => {
  var _max, _min;

  if (!preset) return null;
  const {
    max,
    min
  } = preset;
  return colorBound$1((_max = max, parseHsl$1(_max)), (_min = min, parseHsl$1(_min)));
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

const nullish$1 = x => x === null || x === void 0;

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

  if (!nullish$1(min)) {
    if (!nullish$1(dif)) return {
      min,
      dif
    };
    if (!nullish$1(max)) return {
      min,
      dif: max - min
    };
  }

  if (!nullish$1(dif)) {
    if (!nullish$1(max)) return {
      min: max - dif,
      dif
    };
    return {
      min: 0,
      dif
    };
  }

  if (!nullish$1(max)) return {
    min: 0,
    dif: max
  };
  return {
    min: 0,
    dif: 0
  };
};

const oneself$2 = x => x;

const HSL$2 = 'hsl';

const leverage$1 = ([h, s, l], base) => [h / base, s / base, l / base];

class ProjectorFactory$1 {
  /**
   * @typedef {[number,number,number]} Hsl
   * @param {{min:number,dif:number}} leap
   * @param {{min:Hsl,dif:Hsl,na:?Hsl}} preset
   * @param {string[]} effects
   * @returns {ProjectorFactory}
   */
  constructor(leap, preset, effects) {
    if (nullish$1(preset)) return new VoidProjectorFactory$1();
    if (leap.dif === 0) return new BinProjectorFactory$1(leap, preset, effects);
    this.factory = DyeFactory$1.build(HSL$2, effects);
    this.min = leap.min;
    this.lever = leverage$1(preset.dif, leap.dif);
    this.base = preset.min;
    this.na = preset.na;
  }

  static build(bound, {
    preset,
    effects
  } = {}) {
    var _bound, _preset;

    if (!bound) return null;
    bound = (_bound = bound, boundToLeap$1(_bound));
    preset = preset ? (_preset = preset, presetToLeap$1(_preset)) : null;
    return new ProjectorFactory$1(bound, preset, effects);
  }

  render(value, text) {
    return this.factory(this.color(value))(text);
  }

  make(value) {
    return this.factory(this.color(value));
  }

  color(value) {
    if (isNaN(value)) return this.na;
    const {
      min,
      lever: [levH, levS, levL],
      base: [minH, minS, minL]
    } = this;
    return [scale$1(value, min, levH, minH, 360), scale$1(value, min, levS, minS, 100), scale$1(value, min, levL, minL, 100)];
  }

}

class BinProjectorFactory$1 {
  constructor(bound, {
    min,
    na
  }, effects) {
    this.factory = DyeFactory$1.build(HSL$2, effects);
    this.base = min;
    this.na = na;
  }

  render(value, text) {
    return this.factory(this.color(value))(text);
  }

  make(value) {
    return this.factory(this.color(value));
  }

  color(value) {
    return isNaN(value) ? this.na : this.base;
  }

}

class VoidProjectorFactory$1 {
  constructor() {}

  render(value, text) {
    return text;
  }

  make(value) {
    return oneself$2;
  }

  color(value) {
    return null;
  }

}

const scale$1 = (x, min$1$1, lever, base, ceil) => min$1((max$1(x, min$1$1) - min$1$1) * lever + base, ceil);

const oneself$1 = x => x;
/**
 *
 * applicable for smaller number
 * @param {number} x
 * @returns {number}
 */


const round$1 = x => x + (x > 0 ? 0.5 : -0.5) << 0;

const rgbToInt = ([r, g, b]) => ((r & 0xFF) << 16) + ((g & 0xFF) << 8) + (b & 0xFF);
/**
 * @param {[number,number,number]} rgb
 * @returns {string}
 */


const rgbToHex = rgb => '#' + rgbToInt(rgb).toString(16).toUpperCase().padStart(6, '0');
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

const hslToHex = hsl => {
  var _ref, _hsl;

  return _ref = (_hsl = hsl, hslToRgb$1(_hsl)), rgbToHex(_ref);
}; // export const
//   FUNC = '',
//   PIGM = '',
//   HEX = ''


const MAKER = 'maker',
      RENDER = 'render',
      COLOR = 'color';
/**
 * @typedef {Object} FluoSetting
 * @typedef {{min:string,max:string,na:string}} FluoSetting.preset
 * @typedef {string[]} FluoSetting.effects
 * @typedef {Function} FluoSetting.filter
 * @typedef {Function} FluoSetting.mapper
 *
 * @param {*[]} vec
 * @param {FluoSetting[]} configs
 * @returns {*[]}
 */

const fluoVector = function (vec, configs) {
  if (!(vec !== null && vec !== void 0 && vec.length)) return [];
  const projectorSet = makeProjector(vec, configs);
  const mapper$1$1 = this !== null && this !== void 0 && this.mutate ? mutate : mapper$1;

  switch (this === null || this === void 0 ? void 0 : this.colorant) {
    case COLOR:
      return mapper$1$1(vec, PointColorFactory.color(projectorSet));

    case MAKER:
      return mapper$1$1(vec, PointColorFactory.maker(projectorSet));

    case RENDER:
    default:
      return mapper$1$1(vec, PointColorFactory.render(projectorSet));
  }
};

const makeProjector = (vec, configs) => {
  const [confX, confY] = configs;
  const [vecX, vecY] = boundaries(vec, configs);
  const [projX, projY] = [ProjectorFactory$1.build(vecX, confX), ProjectorFactory$1.build(vecY, confY)];
  return [[vecX, projX], [vecY, projY]];
};

class PointColorFactory {
  static color([[bX, pX], [bY, pY]]) {
    function toColor(hsl) {
      var _hsl;

      return hsl ? (_hsl = hsl, hslToHex(_hsl)) : null;
    }

    return (_, i) => {
      let v;

      if (!nullish$1(v = bX && bX[i])) {
        var _pX$color;

        return _pX$color = pX.color(v), toColor(_pX$color);
      }

      if (!nullish$1(v = bY && bY[i])) {
        var _pY$color;

        return _pY$color = pY.color(v), toColor(_pY$color);
      }

      return null;
    };
  }

  static maker([[bX, pX], [bY, pY]]) {
    return (_, i) => {
      var _pX$make;

      let v;

      if (!nullish$1(v = bX && bX[i])) {
        return pX.make(v);
      }

      if (!nullish$1(v = bY && bY[i])) {
        return pY.make(v);
      }

      return (_pX$make = pX === null || pX === void 0 ? void 0 : pX.make(pX.na)) !== null && _pX$make !== void 0 ? _pX$make : oneself$1;
    };
  }

  static render([[bX, pX], [bY, pY]]) {
    return (n, i) => {
      var _pX$render;

      let v;

      if (!nullish$1(v = bX && bX[i])) {
        return pX.render(v, n);
      }

      if (!nullish$1(v = bY && bY[i])) {
        return pY.render(v, n);
      }

      return (_pX$render = pX === null || pX === void 0 ? void 0 : pX.render(pX.na, n)) !== null && _pX$render !== void 0 ? _pX$render : n;
    };
  }

}

function duozipper(a, b) {
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

const wind = (keys, values) => zipper(keys, values, (k, v) => [k, v]);

const unwind = (entries, h) => {
  h = h || (entries === null || entries === void 0 ? void 0 : entries.length);
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
  l = l || (ea === null || ea === void 0 ? void 0 : ea.length), valMap = valMap || keyMap;

  for (let a, b, i = 0; i < l && (a = ea[i]) && (b = eb[i]); i++) a[0] = keyMap(a[0], b[0], i), a[1] = valMap(a[1], b[1], i);

  return ea;
};

/**
 * @typedef {Object} FluoSetting
 * @typedef {{min:string,max:string,na:string}} FluoSetting.preset
 * @typedef {string[]} FluoSetting.effects
 * @typedef {Function} FluoSetting.filter
 * @typedef {Function} FluoSetting.mapper
 *
 * @param {[*,*][]} entries
 * @param {FluoSetting[]} configs
 * @returns {*[]}
 */

const fluoEntries = function (entries, configs) {
  const colorant = this === null || this === void 0 ? void 0 : this.colorant,
        mutate = this === null || this === void 0 ? void 0 : this.mutate;
  let [keys, items] = unwind(entries);
  const context = {
    colorant,
    mutate: true
  };
  fluoVector.call(context, keys, configs);
  fluoVector.call(context, items, configs);
  const rendered = wind(keys, items);
  return mutate ? mutazip(entries, rendered, (a, b) => b) : rendered;
};

const isTab = c => c === '\t' || c === ' ';

const deNaTab = tx => {
  let i = 0;

  for (let {
    length
  } = tx; i < length; i++) if (!isTab(tx.charAt(i))) return i;

  return i;
};

/**
 *
 * @type {Function|function(*):string}
 */
Function.prototype.call.bind(Object.prototype.toString);

// export const rpad = String.prototype.padEnd


Function.prototype.call.bind(String.prototype.padStart);

Function.prototype.call.bind(String.prototype.padEnd);

/**
 *
 * @param {[*,*][]} entries
 * @param {Function} keyFn
 * @param {Function} [valFn]
 * @param {number} [l]
 * @returns {undefined}
 */
/**
 *
 * @param {[*,*][]} entries
 * @param {Function} keyMap
 * @param {number} [l]
 * @returns {[*,*][]}
 */


const mutateKeys = (entries, keyMap, l) => {
  var _l;

  l = (_l = l) !== null && _l !== void 0 ? _l : entries === null || entries === void 0 ? void 0 : entries.length;

  for (let i = 0, r; i < l; i++) {
    r = entries[i], r[0] = keyMap(r[0], i);
  }

  return entries;
};
/**
 *
 * @param {[*,*][]} entries
 * @param {Function} valMap
 * @param {number} [l]
 * @returns {[*,*][]}
 */


const mutateValues = (entries, valMap, l) => {
  var _l;

  l = (_l = l) !== null && _l !== void 0 ? _l : entries === null || entries === void 0 ? void 0 : entries.length;

  for (let i = 0, r; i < l; i++) {
    r = entries[i], r[1] = valMap(r[1], i);
  }

  return entries;
};

fluoEntries.bind({
  colorant: false,
  mutate: true
});

fluoVector.bind({
  colorant: false,
  mutate: true
});

/**
 * Camel/pascal case phrase -> Lowercase dashed phrase, snake or kebab.
 * Snake: fox_jumps_over_dog
 * Kebab: fox-jumps-over-dog
 * @example 'TheCyberPunk2077Cdpr' -> 'the-cyber-punk-2077nd-cdpr'
 * @param {string} phrase camel/pascal-case phrase
 * @param {string} de
 * @returns {string} lowercase dashed phrase
 */


function camelToSnake(phrase, de = '-') {
  let ms,
      wd,
      ph = '';
  if (((ms = INILOW.exec(phrase)) || (ms = CAPWORD.exec(phrase))) && ([wd] = ms)) ph = wd.toLowerCase();

  while ((ms = CAPWORD.exec(phrase)) && ([wd] = ms)) ph += de + wd.toLowerCase();

  return ph;
}

const RED = 'red',
      PINK = 'pink',
      PURPLE = 'purple',
      DEEPPURPLE = 'deepPurple',
      INDIGO = 'indigo',
      BLUE = 'blue',
      LIGHTBLUE = 'lightBlue',
      CYAN = 'cyan',
      TEAL = 'teal',
      GREEN = 'green',
      LIGHTGREEN = 'lightGreen',
      LIME = 'lime',
      YELLOW = 'yellow',
      AMBER = 'amber',
      ORANGE = 'orange',
      DEEPORANGE = 'deepOrange',
      BROWN = 'brown',
      BLUEGREY = 'blueGrey',
      GREY = 'grey';

/**
 * Create an array.
 * @param {number} size Integer starts at zero.
 * @param {function(number):*|*} [fn] defines how index i corresponds to value(i).
 * @returns {*[]}
 */


const init = (size, fn) => {
  if (size === (size & 0x7f)) {
    let arr = [];

    for (let i = 0; i < size; i++) arr[i] = fn(i);

    return arr;
  }

  return Array(size).fill(null).map((_, i) => fn(i));
};

const red = [RED, PINK];
const purple = [PURPLE, DEEPPURPLE];
const blue = [INDIGO, BLUE, LIGHTBLUE, CYAN];
const green = [TEAL, GREEN];
const yellowGreen = [LIGHTGREEN, LIME, YELLOW];
const orange$1 = [AMBER, ORANGE, DEEPORANGE];
const grey$1 = [BROWN, BLUEGREY, GREY];
const rainbow = [].concat(red, purple, blue, green, yellowGreen, orange$1);
const entire = rainbow.concat(grey$1);
const ColorGroups = {
  red,
  purple,
  blue,
  green,
  yellowGreen,
  orange: orange$1,
  grey: grey$1,
  rainbow,
  entire
};
const accents = init(4, i => `accent_${i + 1}`).reverse(),
      lightens = init(5, i => `lighten_${i + 1}`).reverse(),
      darkens = init(4, i => `darken_${i + 1}`);
const Degrees = {
  entire: [...accents, ...lightens, 'base', ...darkens],
  base: ['base'],
  lightens: lightens,
  darkens: darkens,
  accents: accents,
  readable: [...accents.slice(-3), ...lightens.slice(-3), 'base']
};

var _ref$3;

const lexicon = (_ref$3 = [[/light/gi, 'l'], [/deep/gi, 'd']], makeReplaceable(_ref$3));

const shortenDescription = name => name.replace(lexicon, x => camelToSnake(x, '.'));

function palettCrostab({
  space = HEX$1,
  degrees = Degrees.entire,
  colors = ColorGroups.entire,
  dyed = false
} = {}) {
  const crostab = samplesToCrostab(Cards$1, {
    side: colors,
    head: degrees
  }).transpose();

  if (space !== HEX$1) {
    crostab.mutate(space === RGB$1 ? hexToRgb$1 : space === HSL$3 ? hexToHsl$1 : oneself$3);
  }

  if (dyed) {
    const dyeFactory = DyeFactory$1.build(space, [INVERSE$3]);
    space === HEX$1 ? crostab.mutate(hex => {
      var _hex;

      return _hex = hex, dyeFactory(hex)(_hex);
    }) : crostab.mutate(xyz => {
      var _mapper;

      return _mapper = mapper$1(xyz, v => v.toFixed(0).padStart(3)), dyeFactory(xyz)(_mapper);
    });
  }

  return crostab.mutateBanner(shortenDescription);
}

const LIGHTEN = 'lighten',
      ACCENT = 'accent',
      DARKEN = 'darken';

const degreeToIndice = degree => {
  let i = degree.indexOf('_');
  if (i < 0) return randBetw(14, 16);
  let cate = degree.slice(0, i),
      order = degree.slice(++i);
  if (cate === LIGHTEN) return 15 - --order * 3;
  if (cate === ACCENT) return 14 - --order * 3;
  if (cate === DARKEN) return 13 - --order * 3;
  return rand(16);
};

const sortBy = function (indicator, comparer) {
  const vec = this,
        kvs = mutate(vec, (x, i) => [indicator(x, i), x]).sort(toKeyComparer(comparer));
  return mutate(kvs, ([, value]) => value);
};

const toKeyComparer = comparer => (a, b) => comparer(a[0], b[0]); // accent  15 -3

function* presetFlopper({
  degrees = Degrees.entire,
  colors = ColorGroups.rainbow,
  space = HEX$1,
  defaultColor = Grey$1.lighten_1,
  exhausted = true
} = {}) {
  var _defaultColor, _crostab$head;

  const crostab = palettCrostab({
    space,
    degrees,
    colors,
    dyed: false
  });
  degrees = sortBy.call(degrees.slice(), degreeToIndice, NUM_DESC);
  let h = degrees.length,
      w = colors.length;

  for (let i = 0; i < h; i++) {
    for (let j = w - 1, side = degrees[i], head = crostab.head.slice(); j >= 0; j--) {
      const banner = swap.call(head, rand(j), j);
      const hex = crostab.cell(side, banner);
      yield randPreset(hex);
    }
  }

  defaultColor = (_defaultColor = defaultColor) !== null && _defaultColor !== void 0 ? _defaultColor : crostab.cell(degrees[0], (_crostab$head = crostab.head, flop(_crostab$head)));
  const defaultPreset = randPreset(defaultColor);

  while (!exhausted) yield defaultPreset;

  return defaultPreset;
}

/** @type {{mutate: boolean}} */
const MUTABLE = {
  mutate: true
};

const clearAnsi = tx => tx.replace(ANSI_G, '');

const hasAnsi = tx => ANSI.test(tx);

const SPACE = /\s+/g;
const LINEFEED = /\r?\n/;

const foldToVector = function (text) {
  const {
    width: wd = 80,
    regex = SPACE,
    firstLineIndent
  } = this !== null && this !== void 0 ? this : {};
  const lines = [];
  let ms,
      ph,
      pr = 0,
      cu = 0,
      la = 0,
      nx = 0,
      th = pr + wd;
  if (firstLineIndent) text = SP.repeat(firstLineIndent) + text;

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    // VO |> says['progress'].p(pr).p(DA).br(cu + ':' + la).p(DA).br(nx).p(codes(ph)).br(/\r?\n/.test(ph)).p(DA).p(th)
    nx = ms.index;
    if (nx > th) lines.push(text.slice(pr, cu)), pr = la, th = pr + wd;
    if (LINEFEED.test(ph)) lines.push(text.slice(pr, nx)), pr = regex.lastIndex, th = pr + wd;
    cu = nx, la = regex.lastIndex;
  }

  if (text.length > th) lines.push(text.slice(pr, cu)), pr = la;
  if (pr < text.length) lines.push(text.slice(pr));
  if (firstLineIndent) lines[0] = lines[0].slice(firstLineIndent);
  return lines;
};

const fold = function (text) {
  var _this$delim, _text;

  const context = this;
  const delim = (_this$delim = this === null || this === void 0 ? void 0 : this.delim) !== null && _this$delim !== void 0 ? _this$delim : LF;
  const lines = (_text = text, foldToVector.bind(context)(_text));
  return lines.join(delim);
};

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


const splitLiteral = ripper.bind(LITERAL);

/**
 * @prop width - foldToVector
 * @prop firstLineIndent - foldToVector
 * @prop indent - applicable only when valid width
 * @prop vectify - fluoString
 * @prop joiner - fluoString
 * @prop presets - fluoString
 * @prop effects - fluoString
 * @param text
 * @return {string}
 */

const cosmetics$1 = function (text) {
  var _text, _context$indent;

  const context = this,
        length = (_text = text) === null || _text === void 0 ? void 0 : _text.length;
  if (!length) return '';
  if (hasAnsi(text)) return text;
  const {
    width,
    presets
  } = context;
  if (width && length > width) text = fold.call({
    width: width,
    firstLineIndent: context.firstLineIndent,
    delim: LF + TB.repeat((_context$indent = context.indent) !== null && _context$indent !== void 0 ? _context$indent : 0)
  }, text);
  if (presets) text = fluoString.call(context, text);
  return text;
};

const fluoString = function (text) {
  const config = this;
  const {
    vectify,
    joiner
  } = this;
  const words = vectify(text);
  fluoVector.call(MUTABLE, words, config); // use: presets, effects

  return joiner ? joiner(words) : words.join('');
};

const NUMERIC_PRESET = ATLAS;
const LITERAL_PRESET = SUBTLE$1;
const PRESETS = [NUMERIC_PRESET, LITERAL_PRESET];

const presetString = p => {
  if (nullish$1(p.presets)) p.presets = PRESETS;
  if (nullish$1(p.vectify)) p.vectify = splitLiteral;
  if (nullish$1(p.width)) p.width = 0;
  return p;
};
/**
 * @param {string} text
 * @param {Object} [p]
 * @param {number} [p.width=80]
 * @param {number} [p.indent]
 * @param {number} [p.firstLineIndent]
 * @param {Object[]} [p.presets]
 * @param {string[]} [p.effects]
 * @param {Function} [p.vectify]
 * @param {Function} [p.joiner]
 * @return {string}
 */


const deco$3 = (text, p = {}) => cosmetics$1.call(presetString(p), text);

const mapper = (o, fn) => {
  const ob = {};

  for (let k in o) if (Object.hasOwnProperty.call(o, k)) ob[k] = fn(o[k]);

  return ob;
};

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

function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");

  return _classApplyDescriptorGet(receiver, descriptor);
}

function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");

  _classApplyDescriptorSet(receiver, descriptor, value);

  return value;
}

function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }

  return privateMap.get(receiver);
}

function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
  }
}

class Callable$1 extends Function {
  constructor(f) {
    super();
    Reflect.setPrototypeOf(f, new.target.prototype);
    return f;
  }

}

const tab = ind => SP.repeat(ind << 1);

const narrate = (text, context) => {
  let {
    name,
    des,
    ind,
    log,
    att
  } = context;
  let signature = `${tab(ind)}[${name}]`;
  if (att) signature += SP + att();
  if (des !== null && des !== void 0 && des.length) signature += des, context.des = '';
  if (typeof text !== STR$4) text += '';
  return void log(signature, text.includes(LF) ? (LF + text).replace(/\n/g, LF + tab(++ind)) : text);
};
/** @type {function} */


class Pal extends Callable$1 {
  /** @type {string}   */

  /** @type {string}   */

  /** @type {number}   */

  /** @type {Function} */

  /** @type {Function} */
  constructor(name, {
    indent = 0,
    logger,
    attach
  } = {}) {
    super(text => narrate(text, this));

    _defineProperty$1(this, "name", '');

    _defineProperty$1(this, "des", '');

    _defineProperty$1(this, "ind", 0);

    _defineProperty$1(this, "log", console.log);

    _defineProperty$1(this, "att", void 0);

    if (name) this.name = name;
    if (indent) this.ind = indent;
    if (logger) this.log = logger;
    if (attach) this.attach(attach);
  }

  p(words) {
    return this.des += SP + words, this;
  }

  br(words) {
    return this.des += SP + parenth$2(words), this;
  }

  to(someone) {
    if (someone instanceof Pal) someone = someone.name;
    this.des += ' -> ' + bracket$2(someone);
    return this;
  }

  attach(func) {
    if (typeof func === FUN) {
      this.att = func;
    }

    return this;
  }

  detach() {
    return this.att = null, this;
  }

  level(logger) {
    if (typeof logger === STR$4 && logger in console) {
      return this.log = console[logger], this;
    }

    if (typeof logger === FUN) {
      return this.log = logger, this;
    }

    return this;
  }

  get asc() {
    return this.ind++, this;
  }

  get desc() {
    return this.ind && this.ind--, this;
  }
  /**
   * @param {string} title
   * @param {Object} [options]
   * @returns {Pal|function}
   */


  static build(title, options) {
    return new Pal(title, options);
  }

}

var _roster = new WeakMap();

var _pool = new WeakMap();

var _effects = new WeakMap();

class Says {
  /** @type {Object<string,Pal|function>} */

  /** @type {Generator<{max:*,min:*,na:*}>} */

  /** @type {string[]!} */
  constructor(roster, effects) {
    _roster.set(this, {
      writable: true,
      value: {}
    });

    _pool.set(this, {
      writable: true,
      value: presetFlopper({
        exhausted: false
      })
    });

    _effects.set(this, {
      writable: true,
      value: undefined
    });

    if (roster) _classPrivateFieldSet(this, _roster, roster);

    _classPrivateFieldSet(this, _effects, effects);

    return new Proxy(this, {
      /** @returns {Pal|function} */
      get(t, p) {
        if (p in t) return typeof (p = t[p]) === FUN ? p.bind(t) : p;
        if (p in _classPrivateFieldGet(t, _roster)) return _classPrivateFieldGet(t, _roster)[p];
        return t.aboard(p, _classPrivateFieldGet(t, _pool).next().value);
      }

    });
  }

  aboard(name, presets) {
    const effects = _classPrivateFieldGet(this, _effects);

    if (!presets) ({
      value: presets
    } = _classPrivateFieldGet(this, _pool).next());
    return _classPrivateFieldGet(this, _roster)[name] = Pal.build(deco$3(String(name), {
      presets,
      effects
    }));
  }

  roster(name) {
    var _classPrivateFieldGet2;

    if (name) return ((_classPrivateFieldGet2 = _classPrivateFieldGet(this, _roster)[name]) !== null && _classPrivateFieldGet2 !== void 0 ? _classPrivateFieldGet2 : this.aboard(name)).name;
    return mapper(_classPrivateFieldGet(this, _roster), ({
      name
    }) => name);
  }
  /**
   *
   * @param roster
   * @param effects
   * @returns {Says|Object<string,function>}
   */


  static build({
    roster,
    effects = [ITALIC$3]
  } = {}) {
    return new Says(roster, effects);
  }

}
/** @type {Function|Says} */


new Says();

var _ref$1, _ref2$1, _ref3$1, _ref4$1, _ref5$1, _ref6$1, _ref7$1, _ref8$1;

const Dyes$1 = {
  0: Dye$2((_ref$1 = [45, 100, 53], hslToRgb$2(_ref$1))),
  1: Dye$2((_ref2$1 = [44, 100, 59], hslToRgb$2(_ref2$1))),
  2: Dye$2((_ref3$1 = [43, 100, 64], hslToRgb$2(_ref3$1))),
  3: Dye$2((_ref4$1 = [42, 100, 70], hslToRgb$2(_ref4$1))),
  4: Dye$2((_ref5$1 = [41, 100, 74], hslToRgb$2(_ref5$1))),
  5: Dye$2((_ref6$1 = [40, 100, 78], hslToRgb$2(_ref6$1))),
  6: Dye$2((_ref7$1 = [39, 100, 82], hslToRgb$2(_ref7$1))),
  7: Dye$2((_ref8$1 = [37, 100, 86], hslToRgb$2(_ref8$1)))
};
const L$1$1 = '{ ',
      R$1$1 = ' }';
const BRC = mapper(Dyes$1, dye => {
  var _L, _R;

  const l = (_L = L$1$1, dye(_L)),
        r = (_R = R$1$1, dye(_R));
  return content => l + content + r;
});

var _ref$2, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8;

const Dyes = {
  0: Dye$2((_ref$2 = [199, 100, 63], hslToRgb$2(_ref$2))),
  1: Dye$2((_ref2 = [201, 100, 68], hslToRgb$2(_ref2))),
  2: Dye$2((_ref3 = [203, 100, 72], hslToRgb$2(_ref3))),
  3: Dye$2((_ref4 = [205, 100, 76], hslToRgb$2(_ref4))),
  4: Dye$2((_ref5 = [207, 100, 84], hslToRgb$2(_ref5))),
  5: Dye$2((_ref6 = [209, 100, 80], hslToRgb$2(_ref6))),
  6: Dye$2((_ref7 = [211, 100, 88], hslToRgb$2(_ref7))),
  7: Dye$2((_ref8 = [214, 100, 90], hslToRgb$2(_ref8)))
};
const L$2 = '[ ',
      R$2 = ' ]';
const BRK = mapper(Dyes, dye => {
  var _L, _R;

  const l = (_L = L$2, dye(_L)),
        r = (_R = R$2, dye(_R));
  return content => l + content + r;
});

var _Cards$brown$lighten_, _Cards$lightGreen$acc, _Cards$deepOrange$acc, _Cards$teal$lighten_, _Cards$brown$lighten_2, _Cards$blueGrey$light, _Cards$blue$accent_, _Cards$amber$base, _Cards$green$accent_;
/**
 *
 * @type {Object<string,Function>}
 */


const PAL = {
  IDX: Dye$2((_Cards$brown$lighten_ = Cards$1.brown.lighten_5, hexToRgb$1(_Cards$brown$lighten_))),
  STR: Dye$2((_Cards$lightGreen$acc = Cards$1.lightGreen.accent_2, hexToRgb$1(_Cards$lightGreen$acc))),
  NUM: Dye$2((_Cards$deepOrange$acc = Cards$1.deepOrange.accent_2, hexToRgb$1(_Cards$deepOrange$acc))),
  BOO: Dye$2((_Cards$teal$lighten_ = Cards$1.teal.lighten_2, hexToRgb$1(_Cards$teal$lighten_))),
  UDF: Dye$2((_Cards$brown$lighten_2 = Cards$1.brown.lighten_3, hexToRgb$1(_Cards$brown$lighten_2))),
  SYM: Dye$2((_Cards$blueGrey$light = Cards$1.blueGrey.lighten_2, hexToRgb$1(_Cards$blueGrey$light))),
  BRK: Dye$2((_Cards$blue$accent_ = Cards$1.blue.accent_2, hexToRgb$1(_Cards$blue$accent_))),
  BRC: Dye$2((_Cards$amber$base = Cards$1.amber.base, hexToRgb$1(_Cards$amber$base))),
  FNC: Dye$2((_Cards$green$accent_ = Cards$1.green.accent_4, hexToRgb$1(_Cards$green$accent_)))
};
({
  0: {
    max: hslToHex$1([75, 90, 85]),
    min: hslToHex$1([89, 99, 72]),
    na: Cards$1.grey.lighten_4
  },
  1: {
    max: hslToHex$1([80, 88, 87]),
    min: hslToHex$1([83, 98, 71]),
    na: Cards$1.grey.lighten_4
  },
  2: {
    max: hslToHex$1([93, 87, 82]),
    min: hslToHex$1([93, 97, 70]),
    na: Cards$1.grey.lighten_3
  },
  3: {
    max: hslToHex$1([103, 86, 82]),
    min: hslToHex$1([103, 96, 69]),
    na: Cards$1.grey.lighten_2
  },
  4: {
    max: hslToHex$1([113, 85, 82]),
    min: hslToHex$1([113, 95, 68]),
    na: Cards$1.grey.lighten_1
  },
  5: {
    max: hslToHex$1([123, 84, 82]),
    min: hslToHex$1([123, 94, 68]),
    na: Cards$1.grey.base
  },
  6: {
    max: hslToHex$1([133, 83, 82]),
    min: hslToHex$1([133, 93, 68]),
    na: Cards$1.grey.darken_1
  },
  7: {
    max: hslToHex$1([143, 82, 82]),
    min: hslToHex$1([143, 92, 68]),
    na: Cards$1.grey.darken_2
  }
});

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

const max = (a, b) => a > b ? a : b;

const min = (a, b) => a < b ? a : b;

/**
 *
 * applicable for smaller number
 * @param {number} x
 * @returns {number}
 */


const round = x => x + (x > 0 ? 0.5 : -0.5) << 0;

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
  return [round(h), round(s * THOUSAND) / 10, round(l * THOUSAND) / 10];
}

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

const hexToHsl = hex => {
  var _ref, _hex;

  return _ref = (_hex = hex, hexToRgb(_hex)), rgbToHsl(_ref);
};
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

({
  max: Cards.cyan.accent_2,
  min: Cards.green.darken_1,
  na: Cards.grey.lighten_4
});
({
  max: Cards.cyan.lighten_3,
  min: Cards.orange.lighten_2,
  na: Cards.pink.lighten_4
});
({
  max: Cards.green.accent_3,
  min: Cards.deepPurple.accent_1,
  na: Cards.teal.accent_1
});
({
  max: Cards.cyan.accent_1,
  min: Cards.lightBlue.accent_4,
  na: Cards.deepOrange.accent_1
});
({
  max: Cards.lightGreen.accent_3,
  min: Cards.deepOrange.accent_3,
  na: Cards.blue.lighten_3
});
({
  max: Cards.orange.accent_2,
  min: Cards.purple.accent_1,
  na: Cards.grey.lighten_2
});
({
  max: Cards.lime.accent_3,
  min: Cards.lightGreen.accent_3,
  na: Cards.blueGrey.accent_1
});
({
  max: Cards.amber.accent_3,
  min: Cards.red.lighten_1,
  na: Cards.grey.accent_2
});
const METRO = {
  max: Cards.pink.lighten_2,
  min: Cards.blue.lighten_4,
  na: Cards.teal.accent_3
};
({
  max: Cards.lightGreen.accent_3,
  min: Cards.teal.lighten_3,
  na: Cards.brown.accent_1
});
({
  max: Cards.lightBlue.accent_2,
  min: Cards.indigo.base,
  na: Cards.pink.lighten_3
});
const PLANET = {
  max: Cards.teal.accent_2,
  min: Cards.blue.darken_3,
  na: Cards.cyan.lighten_4
};
({
  max: Cards.red.lighten_2,
  min: Cards.yellow.darken_1,
  na: Cards.green.lighten_2
});
const SUBTLE = {
  max: Cards.grey.lighten_5,
  min: Cards.grey.darken_1,
  na: Cards.indigo.lighten_3
};
({
  max: Cards.pink.lighten_4,
  min: Cards.deepPurple.accent_2,
  na: Cards.amber.darken_2
});

const ESC$1 = '\u001b';
const L$1 = ESC$1 + '[';
const R$1 = 'm';
const SC$1 = ';';
const FORE$1 = '38;2';
const CLR_FORE$1 = '39'; //   black: 30,
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

const enclose$1 = code => L$1 + code + R$1;
/**
 *
 * @param {number[]} rgb - array of three integers, each from 0 to 255
 * @returns {string}
 */


const rgbToAnsi$1 = rgb => FORE$1 + SC$1 + rgb[0] + SC$1 + rgb[1] + SC$1 + rgb[2];

const assignEffects$1 = function (effects) {
  const conf = this;

  for (let effect of effects) if (effect in Effects$1 && (effect = Effects$1[effect])) conf.head += SC$1 + effect[0], conf.tail += SC$1 + effect[1];

  return conf;
};
/**
 *
 * @param {string} text
 * @returns {string}
 */


function dye$1(text) {
  const {
    head,
    tail
  } = this;
  return head + text + tail;
}
/***
 *
 * @param {string|number[]} color
 * @returns {function(string):string}
 */


function Dye$1(color) {
  if (!color) return oneself$3;
  const config = this !== null && this !== void 0 ? this : {};
  let {
    ansi = rgbToAnsi$1,
    head = '',
    tail = '',
    effects
  } = config;
  if (effects !== null && effects !== void 0 && effects.length) assignEffects$1.call(config, effects);
  head = enclose$1(head + SC$1 + ansi(color)), tail = enclose$1(tail + SC$1 + CLR_FORE$1);
  return dye$1.bind({
    head,
    tail
  });
}
/**
 * Create a dye from a hsl array
 * @param {[number,number,number]} hsl
 * @returns {function}
 */


const hslToDye = hsl => {
  var _ref, _hsl;

  return _ref = (_hsl = hsl, hslToRgb(_hsl)), Dye$1(_ref);
}; // from x => typeof x


const STR$1 = 'string';

const parseHsl = color => {
  var _color;

  return typeof color === STR$1 ? (_color = color, hexToHsl(_color)) : color;
};
/**
 * @param {Object} [preset]
 * @param {string} preset.na
 * @return {Function}
 */


const presetToFlat = preset => {
  var _ref, _na;

  if (!preset) return oneself$3;
  const na = preset.na;
  return _ref = (_na = na, parseHsl(_na)), hslToDye(_ref);
};
/**
 *
 * @param {Object} [preset]
 * @param {string} preset.max
 * @param {string} preset.min
 * @return {?{dif: number[], min: number[]}}
 */


const presetToLeap = preset => {
  var _max, _min;

  if (!preset) return null;
  const {
    max,
    min
  } = preset;
  return colorBound((_max = max, parseHsl(_max)), (_min = min, parseHsl(_min)));
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

/**
 *
 * @type {Function|function(*):string}
 */
Function.prototype.call.bind(Object.prototype.toString);

const isNumeric = x => !isNaN(x - parseFloat(x));

const nullish = x => x === null || x === void 0;

const RGB = 'rgb',
      HSL$1 = 'hsl',
      HEX = 'hex';

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


const enclose = code => L + code + R;
/**
 *
 * @param {number[]} rgb - array of three integers, each from 0 to 255
 * @returns {string}
 */


const rgbToAnsi = rgb => FORE + SC + rgb[0] + SC + rgb[1] + SC + rgb[2];

const hexToAnsi = hex => {
  const int = hexToInt(hex);
  return FORE + SC + (int >> 16 & 0xFF) + SC + (int >> 8 & 0xFF) + SC + (int & 0xFF);
};

const hslToAnsi = hsl => {
  var _ref, _hsl;

  return _ref = (_hsl = hsl, hslToRgb(_hsl)), rgbToAnsi(_ref);
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

const assignEffects = function (effects) {
  const conf = this;

  for (let effect of effects) if (effect in Effects && (effect = Effects[effect])) conf.head += SC + effect[0], conf.tail += SC + effect[1];

  return conf;
};

const spaceToAnsi = space => space === RGB ? rgbToAnsi : space === HEX ? hexToAnsi : space === HSL$1 ? hslToAnsi : rgbToAnsi;
/**
 *
 * @param {string} text
 * @returns {string}
 */


function dye(text) {
  const {
    head,
    tail
  } = this;
  return head + text + tail;
}
/***
 *
 * @param {string|number[]} color
 * @returns {function(string):string}
 */


function Dye(color) {
  if (!color) return oneself$3;
  const config = this !== null && this !== void 0 ? this : {};
  let {
    ansi = rgbToAnsi,
    head = '',
    tail = '',
    effects
  } = config;
  if (effects !== null && effects !== void 0 && effects.length) assignEffects.call(config, effects);
  head = enclose(head + SC + ansi(color)), tail = enclose(tail + SC + CLR_FORE);
  return dye.bind({
    head,
    tail
  });
}
/** @type {Function} */


class DyeFactory {
  /** @type {Function} */

  /** @type {string} */

  /** @type {string} */
  constructor(ansi, head, tail) {
    _defineProperty(this, "ansi", void 0);

    _defineProperty(this, "head", void 0);

    _defineProperty(this, "tail", void 0);

    this.ansi = ansi;
    this.head = head;
    this.tail = tail;
    return Dye.bind(this);
  }
  /**
   *
   * @param space
   * @param effects
   * @returns {DyeFactory|Function}
   */


  static build(space, effects) {
    var _space;

    const conf = {
      ansi: (_space = space, spaceToAnsi(_space)),
      head: '',
      tail: ''
    };
    if (effects !== null && effects !== void 0 && effects.length) assignEffects.call(conf, effects);
    return Dye.bind(conf);
  }

  static prep(space, ...effects) {
    var _space2;

    const conf = {
      ansi: (_space2 = space, spaceToAnsi(_space2)),
      head: '',
      tail: ''
    };
    if (effects !== null && effects !== void 0 && effects.length) assignEffects.call(conf, effects);
    return Dye.bind(conf);
  }

}

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

const oneself = x => x;

const HSL = 'hsl';

const leverage = ([h, s, l], base) => [h / base, s / base, l / base];

class ProjectorFactory {
  /**
   * @typedef {[number,number,number]} Hsl
   * @param {{min:number,dif:number}} leap
   * @param {{min:Hsl,dif:Hsl,na:?Hsl}} pres
   * @param {string[]} effects
   * @returns {ProjectorFactory}
   */
  constructor(leap, pres, effects) {
    if (nullish(pres)) return new VoidProjectorFactory();
    if (leap.dif === 0) return new BinProjectorFactory(leap, pres, effects);
    this.factory = DyeFactory.build(HSL, effects);
    this.min = leap.min;
    this.lever = leverage(pres.dif, leap.dif);
    this.base = pres.min;
    this.na = pres.na;
  }

  static build(bound = {}, preset, effects) {
    var _bound, _preset;

    bound = (_bound = bound, boundToLeap(_bound));
    preset = preset ? (_preset = preset, presetToLeap(_preset)) : null;
    return new ProjectorFactory(bound, preset, effects);
  }

  render(value, text) {
    return this.factory(this.color(value))(text);
  }

  make(value) {
    return this.factory(this.color(value));
  }

  color(value) {
    if (isNaN(value)) return this.na;
    const {
      min,
      lever: [levH, levS, levL],
      base: [minH, minS, minL]
    } = this;
    return [scale(value, min, levH, minH, 360), scale(value, min, levS, minS, 100), scale(value, min, levL, minL, 100)];
  }

}

class BinProjectorFactory {
  constructor(bound, {
    min,
    na
  }, effects) {
    this.factory = DyeFactory.build(HSL, effects);
    this.base = min;
    this.na = na;
  }

  render(value, text) {
    return this.factory(this.color(value))(text);
  }

  make(value) {
    return this.factory(this.color(value));
  }

  color(value) {
    return isNaN(value) ? this.na : this.base;
  }

}

class VoidProjectorFactory {
  constructor() {}

  render(value, text) {
    return text;
  }

  make(value) {
    return oneself;
  }

  color(value) {
    return null;
  }

}
/**
 *
 * @param {{[min]:number,[max]:number,[dif]:number}} bound
 * @param {{max:*,min:*}} preset
 * @param {string[]} [effects]
 * @returns {function(*):Function}
 */


const Projector = (bound, preset, effects) => projector.bind(ProjectorFactory.build(bound, preset, effects));

const projector = function (value) {
  const {
    factory,
    min,
    lever: [levH, levS, levL],
    base: [minH, minS, minL],
    na
  } = this;
  return factory(na ? this.base : [scale(value, min, levH, minH, 360), scale(value, min, levS, minS, 100), scale(value, min, levL, minL, 100)]);
};

const scale = (x, min$1, lever, base, ceil) => min((max(x, min$1) - min$1) * lever + base, ceil);

const Colorant = (bound, preset = PLANET, effects) => {
  const projector = Projector(boundToLeap(bound), preset, effects);
  const defaultDye = presetToFlat(preset);
  return x => isNumeric(x) ? projector(x) : defaultDye;
};

const padDeci = x => x >= 10 ? '' + x : '0' + x;

const padKilo = x => x >= 1000 ? '' + x : ('' + x).padStart(4, '0');

const padMilli = ms => (ms = '' + ms).length > 2 ? ms : ('00' + ms).slice(-3);

class Timestamp {
  constructor(datePreset, timePreset, milliPreset) {
    if (datePreset) {
      this.dy = Colorant({
        min: 1990,
        max: 2030
      }, datePreset);
      this.dm = Colorant({
        min: 1,
        max: 12
      }, datePreset);
      this.dd = Colorant({
        min: 1,
        max: 31
      }, datePreset);
    }

    if (timePreset) {
      this.dh = Colorant({
        min: 0,
        max: 23
      }, timePreset);
      this.ds = Colorant({
        min: 0,
        max: 59
      }, timePreset);
    }

    if (milliPreset) {
      this.dt = Colorant({
        min: 0,
        max: 999
      }, milliPreset);
    }
  }

  static build(datePreset = METRO, timePreset = SUBTLE, milliPreset = SUBTLE) {
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

timestamp.time.bind(timestamp);
/** @type {Function} */

timestamp.roughTime.bind(timestamp);
/** @type {Function} */

const dateTime = timestamp.dateTime.bind(timestamp);

const decoDate = date;
const decoDateTime = dateTime;

// from x => Object.prototype.toString.call(x)
const OBJECT = 'Object';
const ARRAY = 'Array';
const MAP = 'Map';
const SET = 'Set';
const DATE = 'Date';

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
FormatTime.format.bind(FormatTime);

/** @type {Intl.DateTimeFormat} */

const FormatDateTime = new Intl.DateTimeFormat(undefined, { ...DATE_CONFIG,
  ...TIME_CONFIG
});
const formatDateTime = FormatDateTime.format.bind(FormatDateTime);

const ansiPadLength = (tx, pd) => hasAnsi(tx) ? tx.length + pd - lange(tx) : pd; // export const lpad = String.prototype.padStart
// export const rpad = String.prototype.padEnd


const lpad$1 = Function.prototype.call.bind(String.prototype.padStart);

const LPad = ({
  ansi = true,
  fill
} = {}) => ansi ? (tx, pd) => lpad$1(tx, ansiPadLength(tx, pd), fill) : (tx, pd) => lpad$1(tx, pd, fill);

Function.prototype.call.bind(String.prototype.padEnd);

const mutateKeyPad = entries => {
  let pad = 0;
  mutateKeys(entries, k => {
    k = String(k);
    pad = max$1(lange(k), pad);
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
  return rows.length > 1 ? joinLines(rows, CO, lv) : rows.join(COSP);
};

const wrapEntries = function (entries, width) {
  var _row;

  const lines = [];
  let row = null,
      len = 0,
      kvp,
      sp = COSP.length;
  iterate$1(entries, ([k, v]) => {
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
  return cosmetics$1.call({
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
  return rows.length > 1 ? joinLines(rows, CO, lv) : vector.join(COSP);
};

const wrapVector = function (vector, width) {
  const lines = [];
  let row = null,
      len = 0,
      sp = COSP.length;
  iterate$1(vector, item => {
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
  if (t === STR$4) return isNumeric$3(node) ? node : renderString.call(this, node, level, indent);
  if (t === NUM$1 || t === BIG) return node;
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
  if (t === STR$4) return qm ? qm + node + qm : renderString.call(this, node, level, indent);
  if (t === FUN) return level >= this.depth ? funcName(node) : decoFunc(node, this);

  if (t === OBJ) {
    var _deVe$call2, _deEn$call3, _deEn$call4;

    const {
      depth
    } = this,
          pt = typ(node);
    if (pt === ARRAY) return level >= depth ? '[array]' : (_deVe$call2 = deVe.call(this, node.slice(), level), bracket$2(_deVe$call2));
    if (pt === OBJECT) return level >= depth ? '{object}' : (_deEn$call3 = deEn.call(this, Object.entries(node), level), brace(_deEn$call3));
    if (pt === DATE) return level >= depth ? formatDate(node) : formatDateTime(node);
    if (pt === MAP) return level >= depth ? '(map)' : (_deEn$call4 = deEn.call(this, [...node.entries()], level), bracket$2(_deEn$call4));
    if (pt === SET) return level >= depth ? '(set)' : `set:[${deVe.call(this, [...node], level)}]`;
    return `${node}`;
  }

  return node;
}

const deVe = function (vector, lv) {
  const config = this;
  mutate(vector, v => String(decoNode.call(config, v, lv + 1)));
  if (config.presets) fluoVector.call(MUTABLE, vector, config);
  return renderVector.call(config, vector, lv);
};

const deEn = function (entries, lv) {
  const config = this;
  const pad = mutateKeyPad(entries);
  mutateValues(entries, v => String(decoNode.call(config, v, lv + 1, pad)));
  if (config.presets) fluoEntries.call(MUTABLE, entries, config);
  return renderEntries.call(config, entries, lv);
};

const presetDeco = p => {
  var _p$wf, _p$pr;

  if (!p) p = {};
  p.wf = (_p$wf = p.wf) !== null && _p$wf !== void 0 ? _p$wf : 160;
  if (nullish$1(p.presets)) p.presets = (_p$pr = p.pr) !== null && _p$pr !== void 0 ? _p$pr : [AZURE, MOSS];
  if (nullish$1(p.depth)) p.depth = 8; // 展示级别

  if (nullish$1(p.vert)) p.vert = 0; // 在此级别以下均设为竖排

  if (nullish$1(p.unit)) p.unit = 32; // 若 数组/键值对的值 单个元素长度超过此, 则进行竖排

  if (nullish$1(p.width)) p.width = 80; // 字符超过此, 则换行

  if (nullish$1(p.string)) p.string = {};
  const s = p.string;
  if (nullish$1(s.presets)) s.presets = [ATLAS, SUBTLE$1];
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


const deco$2 = (ob, p = {}) => decoNode.call(presetDeco(p), ob); // TODO: fix string.presets default configuration

const CJK_PUNCS = '\u3000-\u303f';
const CJK_LETTERS = '\u4e00-\u9fbf';
const FULL_CHARS = '\uff00-\uffef'; // full letters + full puncs

const HAN = new RegExp(`[${CJK_PUNCS}${CJK_LETTERS}${FULL_CHARS}]`); // HAN ideographs

HAN.test.bind(HAN);

fluoMatrix.bind({
  colorant: false,
  mutate: true
});

var _ref;

const REG_CR = /\r/g;
const BACKSLASH_CR = '\\r';
const REG_LF = /\n/g;
const BACKSLASH_LF = '\\n';
(_ref = [[REG_CR, BACKSLASH_CR], [REG_LF, BACKSLASH_LF]], makeReplaceable(_ref));

var id = 0;

function _classPrivateFieldLooseKey(name) {
  return "__private_" + id++ + "_" + name;
}

function _classPrivateFieldLooseBase(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }

  return receiver;
} // from x => typeof x


const NUM = 'number';
const STR = 'string';
const DEF = 'default';

var _Cards$orange$lighten, _Cards$indigo$lighten;

const orange = Dye$2((_Cards$orange$lighten = Cards$1.orange.lighten_3, hexToRgb$1(_Cards$orange$lighten)));
const indigo = Dye$2((_Cards$indigo$lighten = Cards$1.indigo.lighten_1, hexToRgb$1(_Cards$indigo$lighten)));

const bracket$1 = tx => orange('[') + tx + orange(']');

const parenth$1 = tx => indigo('(') + tx + indigo(')');

var _Cards$blueGrey$base, _Cards$grey$darken_;

const blueGrey = Dye$2((_Cards$blueGrey$base = Cards$1.blueGrey.base, hexToRgb$1(_Cards$blueGrey$base)));
const grey = Dye$2((_Cards$grey$darken_ = Cards$1.grey.darken_1, hexToRgb$1(_Cards$grey$darken_)));

const bracket = (tx = '') => blueGrey('[') + grey(tx) + blueGrey(']');

const parenth = (tx = '') => blueGrey('(') + grey(tx) + blueGrey(')');
/**
 *
 * @param {*} [text]
 * @return {string}
 */


function render(text) {
  const queue = this,
        {
    indent
  } = queue;
  if (text !== null && text !== void 0 && text.length) queue.push(text);
  return SP.repeat(indent << 1) + queue.join(SP);
}

const EDGE_BRACKET = /^[(\[{].*[)\]}]$/;

const enqueue = function (key, ...items) {
  const {
    queue,
    conf
  } = this;
  const {
    bracket,
    parenth
  } = conf;
  if (items.every(nullish$1)) ;else {
    var _String;

    items = items.map(String).join(COSP);
    queue.push((_String = String(key), bracket.major(_String)));
    queue.push(hasAnsi(items) && EDGE_BRACKET.test(clearAnsi(items)) ? items : parenth.major(items));
  }
  return this;
};

const initQueue = t => {
  var _t;

  const queue = [];
  let hi, indent;
  if (t && (hi = (_t = t = String(t)) === null || _t === void 0 ? void 0 : _t.length) && (indent = deNaTab(t)) < hi) queue.push(t.slice(indent));
  queue.indent = indent;
  return {
    queue
  };
};

let _Symbol$toPrimitive;

class Callable extends Function {
  constructor(f) {
    super();
    Reflect.setPrototypeOf(f, new.target.prototype);
    return f;
  }

}
/**
 * @typedef {Array<string>} ArrayWithIndent
 * @typedef {string} ArrayWithIndent.indent
 */

/**
 * @type {Object<string,string>}
 */


var _conf = _classPrivateFieldLooseKey("conf");

_Symbol$toPrimitive = Symbol.toPrimitive;

class XrStream extends Callable {
  /** @type {ArrayWithIndent} */

  /** @type {number} */

  /** @type {{br:{major:Function,minor:Function},pa:{major:Function,minor:Function}} */
  constructor(word, pretty = true) {
    super(word => render.call(this.queue, word));
    this.queue = void 0;
    this.indent = void 0;
    Object.defineProperty(this, _conf, {
      writable: true,
      value: {}
    });
    Object.assign(this, initQueue(word));
    _classPrivateFieldLooseBase(this, _conf)[_conf].bracket = pretty ? {
      major: bracket$1,
      minor: bracket
    } : {
      major: bracket$2,
      minor: bracket$2
    };
    _classPrivateFieldLooseBase(this, _conf)[_conf].parenth = pretty ? {
      major: parenth$1,
      minor: parenth
    } : {
      major: parenth$2,
      minor: parenth$2
    };
    return new Proxy(this, {
      get(target, name, receiver) {
        return name in target ? target[name] // `[proxy.get] (${ String(name) }) (${ target?.name })` |> logger,
        : (...items) => (enqueue.call(target, name, ...items), receiver);
      }

    });
  }

  get conf() {
    return _classPrivateFieldLooseBase(this, _conf)[_conf];
  }

  asc() {
    return this.queue.indent++, this;
  }

  desc() {
    return this.queue.indent--, this;
  }

  p(...items) {
    return this.queue.push(...items), this;
  }

  br(...items) {
    return this.queue.push(items.map(parenth$2).join(CO)), this;
  }

  toString() {
    return render.call(this.queue);
  }

  [_Symbol$toPrimitive](h) {
    switch (h) {
      case STR:
      case DEF:
        return render.call(this.queue);

      case NUM:
        return this.queue.indent;

      default:
        throw new Error('XrStream Symbol.toPrimitive error');
    }
  }

}

new XrStream();

const logger = (x, ...p) => void console.log(x + '', ...p);
/** @type {Function} */

const deco$1 = deco$2;

const fluo = fluoMatrix.bind({
  colorant: false,
  mutate: true
});
/**
 *
 * @param {*[][]} rows
 * @param {object} config
 * @param {number} config.direct
 * @param {object|object[]} config.presets
 * @param {string[]} config.effects
 * @param {boolean} config.full
 * @returns {string[][]}
 */

const matrixColour = (rows, config) => {
  if (config.presets) {
    var _ref, _presets;

    let presets;

    if (config.full) {
      if (Array.isArray(config.presets)) {
        presets = config.presets.slice().map(o => Object.assign({}, o));

        presets[0].filter = x => isNumeric$2(x) || isNumeric$4(x);

        presets[0].mapper = parseNum$1;
      } else {
        presets = Object.assign({}, config.presets);

        presets.filter = x => isNumeric$2(x) || isNumeric$4(x);

        presets.mapper = parseNum$1;
      }
    }

    const conf = Object.assign({}, config);
    conf.presets = presets;
    _ref = (_presets = presets, deco$1(_presets)), logger(_ref);
    rows = fluo(rows, config); // use: direct, presets, effects
  }

  return rows;
};

const cosmetics = function (rows = []) {
  var _Br;

  const config = this,
        [height, width] = size(rows);
  if (!height || !width) return liner([], config);
  let {
    discrete,
    delim,
    bracket,
    level
  } = config;
  const br = (_Br = Br(bracket)) !== null && _Br !== void 0 ? _Br : oneself$3;
  rows = matrixMargin(rows, config); // use: top, bottom, left, right, read, rule

  rows = matrixPadder(rows, config); // use: ansi

  rows = matrixColour(rows, config); // use: direct, presets, effects

  return liner(rows.map(line => br(line.join(delim))), {
    discrete,
    delim: COLF,
    bracket,
    level
  });
};

/***
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=', ']
 *
 * @param {boolean|number} [p.bracket=true]
 *
 * @param {Function} [p.read]
 *
 * @param {Object|Object[]} [p.presets=[FRESH, OCEAN]]
 * @param {number} [p.direct=ROWWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]
 *
 * @param {boolean} [p.ansi]
 * @param {boolean} [p.full]
 * @param {number} [p.level=0]
 *
 * @returns {Function}
 */

const Deco = (p = {}) => cosmetics.bind(presetMatrix(p));
/***
 *
 * @param {*[][]} matrix
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=', ']
 *
 * @param {boolean|number} [p.bracket=true]
 *
 * @param {Function} [p.read]
 *
 * @param {Object|Object[]} [p.presets=[FRESH, OCEAN]]
 * @param {number} [p.direct=ROWWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]
 *
 * @param {boolean} [p.ansi]
 * @param {boolean} [p.full]
 * @param {number} [p.level=0]
 *
 * @returns {string}
 */

const deco = (matrix, p = {}) => cosmetics.call(presetMatrix(p), matrix);

export { Deco, cosmetics, deco };
