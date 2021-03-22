import { FluoConfigs } from '@palett/fluo';
import { randPreset, presetToLeap, AZURE, MOSS, ATLAS, SUBTLE } from '@palett/presets';
import { LF, SP as SP$k, CO as CO$k, COSP, RTSP } from '@spare/enum-chars';
import { NUM_ASC, STR_ASC, NUM_DESC, min, max } from '@aryth/comparer';
import { mapper as mapper$6, iterate as iterate$3, mutate as mutate$3 } from '@vect/vector-mapper';
import { mapper as mapper$5, mutate as mutate$4 } from '@vect/column-mapper';
import { nullish } from '@typen/nullish';
import { FUN, STR as STR$2, NUM as NUM$1, BIG, OBJ, BOO, UND, SYM } from '@typen/enum-data-types';
import { funcName, decoFunc } from '@spare/deco-func';
import { typ } from '@typen/typ';
import { fluoEntries } from '@palett/fluo-entries';
import { fluoVector } from '@palett/fluo-vector';
import { BRK, BRC, PAL } from '@spare/deco-colors';
import { decoDate, decoDateTime } from '@spare/deco-date';
import { ARRAY, OBJECT, DATE, MAP, SET } from '@typen/enum-object-types';
import { parenth as parenth$2, bracket as bracket$2, brace } from '@spare/bracket';
import { lange } from '@spare/lange';
import { mutateKeys, mutateValues } from '@vect/entries-mapper';
import { joinLines } from '@spare/liner';
import { deco as deco$1, _decoString } from '@spare/deco-string';
import { isNumeric as isNumeric$1 } from '@typen/num-loose';
import { formatDate } from '@valjoux/format-date';
import { formatDateTime } from '@valjoux/format-date-time';
import { LPad } from '@spare/padder';
import { splitLiteral } from '@spare/splitter';

const ITALIC$1 = 'italic';
const INVERSE$1 = 'inverse';

const swap = function (i, j) {
  const temp = this[i];
  this[i] = this[j];
  return this[j] = temp;
};

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

const RGB = 'rgb',
      HSL$1 = 'hsl',
      HEX = 'hex';

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
  if (hi === 1) return mapper$5(mx, ys[0], x => [x]);
  return mx.map(row => select$2(row, ys, hi));
};

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
 * Transpose a 2d-array.
 * @param {*[][]} mx
 * @param {number} [h]
 * @param {number} [w]
 * @returns {*[][]}
 */

const transpose$4 = (mx, h, w) => {
  var _mx$;

  h = h || (mx === null || mx === void 0 ? void 0 : mx.length), w = w || h && ((_mx$ = mx[0]) === null || _mx$ === void 0 ? void 0 : _mx$.length);
  const cols = Array(w);

  for (--w; w >= 0; w--) cols[w] = mapper$6(mx, r => r[w], h);

  return cols;
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

const toKeyComparer$1 = comparer => {
  return (a, b) => comparer(a[0], b[0]);
};

const column = (mx, c, h) => mapper$6(mx, r => r[c], h);

const columns$1 = function (y, h) {
  return mapper$6(this, r => r[y], h);
};

const Columns$1 = mx => columns$1.bind(mx);

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
  [this.head, indexes] = (_lookupIndexes$call = lookupIndexes$1.call(this, labels), unwind(_lookupIndexes$call));
  this.rows = select$1(rows, indexes);
  return this;
};
/**
 *
 * @param {(str|[*,*])[]} labels
 * @returns {[str,number][]}
 */


const lookupIndexes$1 = function (labels) {
  return mapper$6.call(this, labels, lookupIndex$1);
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
  return mapper$6(rows, row => {
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
      columns = transpose$4(rows);
  [this.head, columns] = (_zipper$sort = zipper$4(head, columns, (key, row) => [key, row]).sort(toKeyComparer$1(comparer)), unwind(_zipper$sort));
  this.rows = transpose$4(columns);
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
      columns = transpose$4(rows);
  /** [column[i]s, head, columns]  */

  const Keyed = (_zipper$sort = zipper$4(head, columns, (key, column) => [column[index], key, column]).sort(toKeyComparer$1(comparer)), Columns$1(_zipper$sort));
  return this.head = Keyed(1), this.rows = transpose$4(Keyed(2)), this;
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

const VLKP = Symbol.for('vlkp');
const HLKP = Symbol.for('hlkp');

const coin = function (field) {
  return this.head.indexOf(field);
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

const wind$2 = (keys, values) => zipper$3(keys, values, (k, v) => [k, v]);

const wind$1 = (keys, values) => {
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
        getColumn = Columns$1(table.rows);
  const [ki, vi] = [coin.call(table, key), coin.call(table, field)];
  return ki >= 0 && vi >= 0 ? objectify ? wind$1(getColumn(ki), getColumn(vi)) : wind$2(getColumn(ki), getColumn(vi)) : objectify ? {} : [];
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

const wind = (keys, values) => {
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
  return ki >= 0 && vi >= 0 ? objectify ? wind(rows[ki], rows[vi]) : wind$2(rows[ki], rows[vi]) : objectify ? {} : [];
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

/**
 * Transpose a 2d-array.
 * @param {*[][]} mx
 * @param {number} [h]
 * @param {number} [w]
 * @returns {*[][]}
 */

const transpose$3 = (mx, h, w) => {
  var _mx$;

  h = h || (mx === null || mx === void 0 ? void 0 : mx.length), w = w || h && ((_mx$ = mx[0]) === null || _mx$ === void 0 ? void 0 : _mx$.length);
  const cols = Array(w);

  for (--w; w >= 0; w--) cols[w] = mapper$6(mx, r => r[w], h);

  return cols;
};

const select = (vec, indexes, hi) => {
  var _hi;

  hi = (_hi = hi) !== null && _hi !== void 0 ? _hi : indexes === null || indexes === void 0 ? void 0 : indexes.length;
  const sample = Array(hi);

  for (--hi; hi >= 0; hi--) sample[hi] = vec[indexes[hi]];

  return sample;
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

const selectSamples = function (fieldIndexPairs) {
  const {
    rows
  } = this,
        columns = transpose$3(rows),
        depth = fieldIndexPairs === null || fieldIndexPairs === void 0 ? void 0 : fieldIndexPairs.length;
  return mapper$6(columns, column => {
    let o = {};
    iterate$3(fieldIndexPairs, ([field, index]) => o[field] = column[index], depth);
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
  [this.side, indexes] = (_lookupIndexes$call = lookupIndexes.call(this, labels), unwind(_lookupIndexes$call));
  this.rows = select(this.rows, indexes);
  return this;
};
/**
 *
 * @param {(str|[*,*])[]} labels
 * @returns {[str,number][]}
 */


const lookupIndexes = function (labels) {
  return mapper$6.call(this, labels, lookupIndex);
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

  const Cols = (_zipper$sort = zipper$2(side, rows, (key, row) => [row[index], key, row]).sort(toKeyComparer$1(comparer)), Columns$1(_zipper$sort));
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
  [this.side, this.rows] = (_zipper$sort = zipper$2(side, rows, (key, row) => [key, row]).sort(toKeyComparer$1(comparer)), unwind(_zipper$sort));
  return this;
};

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

const pop = matrix => mapper$6(matrix, row => row.pop());
/**
 * push each element of column to each row of matrix, return void 0
 * @param {*[][]} matrix
 * @param {*[]} column
 * @returns {*}
 */


const push = (matrix, column) => void zipper$1(matrix, column, (row, el) => row.push(el));

const shift = matrix => mapper$6(matrix, row => row.shift());
/**
 * unshift each element of column to each row of matrix, return void 0
 * @param {*[][]} matrix
 * @param {*[]} column
 * @returns {*}
 */


const unshift = (matrix, column) => zipper$1(matrix, column, (row, el) => row.unshift(el));

const ROWWISE$1 = 1;
const COLUMNWISE$1 = 2;

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


const mapper$4 = (mx, fn, h, w) => {
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

  for (--w; w >= 0; w--) cols[w] = mapper$6(mx, r => r[w], h);

  return cols;
};

const pair = (key, value) => {
  const o = {};
  o[key] = value;
  return o;
};

// export default Function.prototype.apply.bind(Array.prototype.push)
const acquire = (va, vb) => (Array.prototype.push.apply(va, vb), va); // export default Function.prototype.call.bind(Array.prototype.concat)

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
    _defineProperty$m(this, "side", void 0);

    _defineProperty$m(this, "head", void 0);

    _defineProperty$m(this, "rows", void 0);

    _defineProperty$m(this, "title", void 0);

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
    return indexed ? zipper(this.side, samples, (l, s) => Object.assign(pair(indexName, l), s)) : samples;
  }

  columnwiseSamples(sideFields, indexed = false, indexName = '_') {
    const samples = selectSamplesBySide.call(this, sideFields);
    return indexed ? zipper(this.head, samples, (l, s) => Object.assign(pair(indexName, l), s)) : samples;
  }

  toObject(mutate = false) {
    var _this, _this2;

    return mutate ? (_this = this, slice(_this)) : (_this2 = this, shallow(_this2));
  }

  toTable(sideLabel) {
    const head = acquire([sideLabel], this.head);
    const rows = zipper(this.side, this.rows, (x, row) => acquire([x], row));
    return {
      head,
      rows
    };
  }
  /** @returns {*[][]} */


  get columns() {
    return transpose$2(this.rows);
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
    return mutate$3(this.row(r), fn, this.width), this;
  }

  setColumn(c, column) {
    return mutate$4(this.rows, this.coin(c), (_, i) => column[i], this.height), this;
  }

  setColumnBy(c, fn) {
    return mutate$4(this.rows, this.coin(c), fn, this.height), this;
  }

  map(fn, {
    mutate = true
  } = {}) {
    return this.boot({
      rows: mapper$4(this.rows, fn, this.height, this.width)
    }, mutate);
  }

  mapSide(fn, {
    mutate = true
  } = {}) {
    return this.boot({
      side: mapper$6(this.side, fn)
    }, mutate);
  }

  mapBanner(fn, {
    mutate = true
  } = {}) {
    return this.boot({
      head: mapper$6(this.head, fn)
    }, mutate);
  }

  mutate(fn) {
    return mutate$2(this.rows, fn, this.height, this.width), this;
  }

  mutateSide(fn) {
    return mutate$3(this.side, fn), this;
  }

  mutateBanner(fn) {
    return mutate$3(this.head, fn), this;
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
    direct = ROWWISE$1,
    field,
    comparer = NUM_ASC,
    mutate = false
  } = {}) {
    var _this6;

    let o = mutate ? this : (_this6 = this, slice(_this6));
    if (direct === ROWWISE$1) sortKeyedRows.call(o, comparer, this.coin(field));
    if (direct === COLUMNWISE$1) sortTabular.call(o, comparer, this.roin(field));
    return mutate ? this : this.copy(o);
  }

  sortByLabels({
    direct = ROWWISE$1,
    comparer = STR_ASC,
    mutate = false
  }) {
    var _this7;

    let o = mutate ? this : (_this7 = this, slice(_this7));
    if (direct === ROWWISE$1) sortRowsByKeys$1.call(o, comparer);
    if (direct === COLUMNWISE$1) sortTabularByKeys$1.call(o, comparer);
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

const oneself$2 = x => x;

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

  return _ref = (_hsl = hsl, hslToRgb$1(_hsl)), rgbToAnsi(_ref);
};

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
  if (!color) return oneself$2;
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
    _defineProperty$l(this, "ansi", void 0);

    _defineProperty$l(this, "head", void 0);

    _defineProperty$l(this, "tail", void 0);

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

const INILOW = /^[a-z]+/;

const CAPWORD = /[A-Z][a-z]+|[A-Z]+(?=[A-Z][a-z]|\d|\W|_|$)|[\d]+[a-z]*/g;

const SP$1$1 = ' ';
const CO$1$1 = ',';
const DOT$1$1 = '.';

function _defineProperty$1$1(obj, key, value) {
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

class Conv$1$1 {}

_defineProperty$1$1(Conv$1$1, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$1$1.cjkPunc(n) : CharConv$1$1.fullChars(n);

  return tx;
});

_defineProperty$1$1(Conv$1$1, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$1$1.fullChars(n);

  return tx;
});

class CharConv$1$1 {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$1$1;
    if (charCode === 0x3001) return CO$1$1;
    if (charCode === 0x3002) return DOT$1$1;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const SP$2$1 = ' ';
const CO$2$1 = ',';
const DOT$2$1 = '.';

function _defineProperty$2$1(obj, key, value) {
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

class Conv$2$1 {}

_defineProperty$2$1(Conv$2$1, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$2$1.cjkPunc(n) : CharConv$2$1.fullChars(n);

  return tx;
});

_defineProperty$2$1(Conv$2$1, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$2$1.fullChars(n);

  return tx;
});

class CharConv$2$1 {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$2$1;
    if (charCode === 0x3001) return CO$2$1;
    if (charCode === 0x3002) return DOT$2$1;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const SP$3$1 = ' ';
const CO$3$1 = ',';
const DOT$3$1 = '.';

function _defineProperty$3$1(obj, key, value) {
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

class Conv$3$1 {}

_defineProperty$3$1(Conv$3$1, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$3$1.cjkPunc(n) : CharConv$3$1.fullChars(n);

  return tx;
});

_defineProperty$3$1(Conv$3$1, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$3$1.fullChars(n);

  return tx;
});

class CharConv$3$1 {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$3$1;
    if (charCode === 0x3001) return CO$3$1;
    if (charCode === 0x3002) return DOT$3$1;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const SP$4$1 = ' ';
const CO$4$1 = ',';
const DOT$4$1 = '.';

function _defineProperty$4$1(obj, key, value) {
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

class Conv$4$1 {}

_defineProperty$4$1(Conv$4$1, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$4$1.cjkPunc(n) : CharConv$4$1.fullChars(n);

  return tx;
});

_defineProperty$4$1(Conv$4$1, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$4$1.fullChars(n);

  return tx;
});

class CharConv$4$1 {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$4$1;
    if (charCode === 0x3001) return CO$4$1;
    if (charCode === 0x3002) return DOT$4$1;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const SP$5$1 = ' ';
const CO$5$1 = ',';
const DOT$5$1 = '.';

function _defineProperty$5$1(obj, key, value) {
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

class Conv$5$1 {}

_defineProperty$5$1(Conv$5$1, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$5$1.cjkPunc(n) : CharConv$5$1.fullChars(n);

  return tx;
});

_defineProperty$5$1(Conv$5$1, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$5$1.fullChars(n);

  return tx;
});

class CharConv$5$1 {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$5$1;
    if (charCode === 0x3001) return CO$5$1;
    if (charCode === 0x3002) return DOT$5$1;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const SP$6$1 = ' ';
const CO$6$1 = ',';
const DOT$6$1 = '.';

function _defineProperty$6$1(obj, key, value) {
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

class Conv$6$1 {}

_defineProperty$6$1(Conv$6$1, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$6$1.cjkPunc(n) : CharConv$6$1.fullChars(n);

  return tx;
});

_defineProperty$6$1(Conv$6$1, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$6$1.fullChars(n);

  return tx;
});

class CharConv$6$1 {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$6$1;
    if (charCode === 0x3001) return CO$6$1;
    if (charCode === 0x3002) return DOT$6$1;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const SP$7$1 = ' ';
const CO$7$1 = ',';
const DOT$7$1 = '.';

function _defineProperty$7$1(obj, key, value) {
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

class Conv$7$1 {}

_defineProperty$7$1(Conv$7$1, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$7$1.cjkPunc(n) : CharConv$7$1.fullChars(n);

  return tx;
});

_defineProperty$7$1(Conv$7$1, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$7$1.fullChars(n);

  return tx;
});

class CharConv$7$1 {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$7$1;
    if (charCode === 0x3001) return CO$7$1;
    if (charCode === 0x3002) return DOT$7$1;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const SP$8$1 = ' ';
const CO$8$1 = ',';
const DOT$8$1 = '.';

function _defineProperty$8$1(obj, key, value) {
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

class Conv$8$1 {}

_defineProperty$8$1(Conv$8$1, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$8$1.cjkPunc(n) : CharConv$8$1.fullChars(n);

  return tx;
});

_defineProperty$8$1(Conv$8$1, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$8$1.fullChars(n);

  return tx;
});

class CharConv$8$1 {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$8$1;
    if (charCode === 0x3001) return CO$8$1;
    if (charCode === 0x3002) return DOT$8$1;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const SP$9$1 = ' ';
const CO$9$1 = ',';
const DOT$9$1 = '.';

function _defineProperty$9$1(obj, key, value) {
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

class Conv$9$1 {}

_defineProperty$9$1(Conv$9$1, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$9$1.cjkPunc(n) : CharConv$9$1.fullChars(n);

  return tx;
});

_defineProperty$9$1(Conv$9$1, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$9$1.fullChars(n);

  return tx;
});

class CharConv$9$1 {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$9$1;
    if (charCode === 0x3001) return CO$9$1;
    if (charCode === 0x3002) return DOT$9$1;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const SP$a$1 = ' ';
const CO$a$1 = ',';
const DOT$a$1 = '.';

function _defineProperty$a$1(obj, key, value) {
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

class Conv$a$1 {}

_defineProperty$a$1(Conv$a$1, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$a$1.cjkPunc(n) : CharConv$a$1.fullChars(n);

  return tx;
});

_defineProperty$a$1(Conv$a$1, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$a$1.fullChars(n);

  return tx;
});

class CharConv$a$1 {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$a$1;
    if (charCode === 0x3001) return CO$a$1;
    if (charCode === 0x3002) return DOT$a$1;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const SP$b$1 = ' ';
const CO$b$1 = ',';
const DOT$b$1 = '.';

function _defineProperty$b$1(obj, key, value) {
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

class Conv$b$1 {}

_defineProperty$b$1(Conv$b$1, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$b$1.cjkPunc(n) : CharConv$b$1.fullChars(n);

  return tx;
});

_defineProperty$b$1(Conv$b$1, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$b$1.fullChars(n);

  return tx;
});

class CharConv$b$1 {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$b$1;
    if (charCode === 0x3001) return CO$b$1;
    if (charCode === 0x3002) return DOT$b$1;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const SP$c$1 = ' ';
const CO$c$1 = ',';
const DOT$c$1 = '.';

function _defineProperty$c$1(obj, key, value) {
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

class Conv$c$1 {}

_defineProperty$c$1(Conv$c$1, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$c$1.cjkPunc(n) : CharConv$c$1.fullChars(n);

  return tx;
});

_defineProperty$c$1(Conv$c$1, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$c$1.fullChars(n);

  return tx;
});

class CharConv$c$1 {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$c$1;
    if (charCode === 0x3001) return CO$c$1;
    if (charCode === 0x3002) return DOT$c$1;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const SP$d$1 = ' ';
const CO$d$1 = ',';
const DOT$d$1 = '.';

function _defineProperty$d$1(obj, key, value) {
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

class Conv$d$1 {}

_defineProperty$d$1(Conv$d$1, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$d$1.cjkPunc(n) : CharConv$d$1.fullChars(n);

  return tx;
});

_defineProperty$d$1(Conv$d$1, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$d$1.fullChars(n);

  return tx;
});

class CharConv$d$1 {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$d$1;
    if (charCode === 0x3001) return CO$d$1;
    if (charCode === 0x3002) return DOT$d$1;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const SP$e$1 = ' ';
const CO$e$1 = ',';
const DOT$e$1 = '.';

function _defineProperty$e$1(obj, key, value) {
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

class Conv$e$1 {}

_defineProperty$e$1(Conv$e$1, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$e$1.cjkPunc(n) : CharConv$e$1.fullChars(n);

  return tx;
});

_defineProperty$e$1(Conv$e$1, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$e$1.fullChars(n);

  return tx;
});

class CharConv$e$1 {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$e$1;
    if (charCode === 0x3001) return CO$e$1;
    if (charCode === 0x3002) return DOT$e$1;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const SP$f$1 = ' ';
const CO$f$1 = ',';
const DOT$f$1 = '.';

function _defineProperty$f$1(obj, key, value) {
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

class Conv$f$1 {}

_defineProperty$f$1(Conv$f$1, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$f$1.cjkPunc(n) : CharConv$f$1.fullChars(n);

  return tx;
});

_defineProperty$f$1(Conv$f$1, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$f$1.fullChars(n);

  return tx;
});

class CharConv$f$1 {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$f$1;
    if (charCode === 0x3001) return CO$f$1;
    if (charCode === 0x3002) return DOT$f$1;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const LITERAL$2$1$1 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$2$1$1 = function (text) {
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


ripper$2$1$1.bind(LITERAL$2$1$1);
const SP$g$1 = ' ';
const CO$g$1 = ',';
const DOT$g$1 = '.';

function _defineProperty$g$1(obj, key, value) {
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

class Conv$g$1 {}

_defineProperty$g$1(Conv$g$1, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$g$1.cjkPunc(n) : CharConv$g$1.fullChars(n);

  return tx;
});

_defineProperty$g$1(Conv$g$1, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$g$1.fullChars(n);

  return tx;
});

class CharConv$g$1 {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$g$1;
    if (charCode === 0x3001) return CO$g$1;
    if (charCode === 0x3002) return DOT$g$1;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const LITERAL$1$1$1 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$1$1$1 = function (text) {
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


ripper$1$1$1.bind(LITERAL$1$1$1);
const LITERAL$3$1$1 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$3$1$1 = function (text) {
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


ripper$3$1$1.bind(LITERAL$3$1$1);
const SP$h$1 = ' ';
const CO$h$1 = ',';
const DOT$h$1 = '.';

function _defineProperty$h$1(obj, key, value) {
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

class Conv$h$1 {}

_defineProperty$h$1(Conv$h$1, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$h$1.cjkPunc(n) : CharConv$h$1.fullChars(n);

  return tx;
});

_defineProperty$h$1(Conv$h$1, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv$h$1.fullChars(n);

  return tx;
});

class CharConv$h$1 {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP$h$1;
    if (charCode === 0x3001) return CO$h$1;
    if (charCode === 0x3002) return DOT$h$1;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const LITERAL$1$2$1 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$1$2$1 = function (text) {
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


ripper$1$2$1.bind(LITERAL$1$2$1);
const LITERAL$2$2$1 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$2$2$1 = function (text) {
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


ripper$2$2$1.bind(LITERAL$2$2$1);
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
const SP$j = ' ';
const CO$j = ',';
const DOT$j = '.';

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

class Conv$j {}

_defineProperty$k(Conv$j, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$j.cjkPunc(n) : CharConv$j.fullChars(n);

  return tx;
});

_defineProperty$k(Conv$j, "fullChars", text => {
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
const LITERAL$7 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

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


ripper$6.bind(LITERAL$7);

const SP$i = ' ';
const CO$i = ',';
const DOT$i = '.';

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

class Conv$i {}

_defineProperty$j(Conv$i, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv$i.cjkPunc(n) : CharConv$i.fullChars(n);

  return tx;
});

_defineProperty$j(Conv$i, "fullChars", text => {
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

const POINTWISE = 0;
const ROWWISE = 1;
const COLUMNWISE = 2;

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
const LITERAL$6 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

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


ripper$5.bind(LITERAL$6);

const isTab = c => c === '\t' || c === ' ';

const deNaTab = tx => {
  let i = 0;

  for (let {
    length
  } = tx; i < length; i++) if (!isTab(tx.charAt(i))) return i;

  return i;
};

// export const rpad = String.prototype.padEnd


Function.prototype.call.bind(String.prototype.padStart);

Function.prototype.call.bind(String.prototype.padEnd);

fluoEntries.bind({
  colorant: false,
  mutate: true
});

// export const
//   FUNC = '',
//   PIGM = '',
//   HEX = ''
const RENDER$2 = 'render';
const MUTATE_PIGMENT$1 = {
  colorant: RENDER$2,
  mutate: true
};

fluoVector.bind(MUTATE_PIGMENT$1);

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

var _ref$1;

const lexicon = (_ref$1 = [[/light/gi, 'l'], [/deep/gi, 'd']], makeReplaceable(_ref$1));

const shortenDescription = name => name.replace(lexicon, x => camelToSnake(x, '.'));

function palettCrostab({
  space = HEX,
  degrees = Degrees.entire,
  colors = ColorGroups.entire,
  dyed = false
} = {}) {
  const crostab = samplesToCrostab(Cards, {
    side: colors,
    head: degrees
  }).transpose();

  if (space !== HEX) {
    crostab.mutate(space === RGB ? hexToRgb : space === HSL$1 ? hexToHsl : oneself$2);
  }

  if (dyed) {
    const dyeFactory = DyeFactory.build(space, [INVERSE$1]);
    space === HEX ? crostab.mutate(hex => {
      var _hex;

      return _hex = hex, dyeFactory(hex)(_hex);
    }) : crostab.mutate(xyz => {
      var _mapper;

      return _mapper = mapper$6(xyz, v => v.toFixed(0).padStart(3)), dyeFactory(xyz)(_mapper);
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
        kvs = mutate$3(vec, (x, i) => [indicator(x, i), x]).sort(toKeyComparer(comparer));
  return mutate$3(kvs, ([, value]) => value);
};

const toKeyComparer = comparer => (a, b) => comparer(a[0], b[0]); // accent  15 -3

function* presetFlopper({
  degrees = Degrees.entire,
  colors = ColorGroups.rainbow,
  space = HEX,
  defaultColor = Grey.lighten_1,
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

const mapper$3 = (o, fn) => {
  const ob = {};

  for (let k in o) if (Object.hasOwnProperty.call(o, k)) ob[k] = fn(o[k]);

  return ob;
};

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

const tab = ind => SP$k.repeat(ind << 1);

const narrate = (text, context) => {
  let {
    name,
    des,
    ind,
    log,
    att
  } = context;
  let signature = `${tab(ind)}[${name}]`;
  if (att) signature += SP$k + att();
  if (des !== null && des !== void 0 && des.length) signature += des, context.des = '';
  if (typeof text !== STR$2) text += '';
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

    _defineProperty$i(this, "name", '');

    _defineProperty$i(this, "des", '');

    _defineProperty$i(this, "ind", 0);

    _defineProperty$i(this, "log", console.log);

    _defineProperty$i(this, "att", void 0);

    if (name) this.name = name;
    if (indent) this.ind = indent;
    if (logger) this.log = logger;
    if (attach) this.attach(attach);
  }

  p(words) {
    return this.des += SP$k + words, this;
  }

  br(words) {
    return this.des += SP$k + parenth$2(words), this;
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
    if (typeof logger === STR$2 && logger in console) {
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
    return _classPrivateFieldGet(this, _roster)[name] = Pal.build(deco$1(String(name), {
      presets,
      effects
    }));
  }

  roster(name) {
    var _classPrivateFieldGet2;

    if (name) return ((_classPrivateFieldGet2 = _classPrivateFieldGet(this, _roster)[name]) !== null && _classPrivateFieldGet2 !== void 0 ? _classPrivateFieldGet2 : this.aboard(name)).name;
    return mapper$3(_classPrivateFieldGet(this, _roster), ({
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
    effects = [ITALIC$1]
  } = {}) {
    return new Says(roster, effects);
  }

}
/** @type {Function|Says} */


new Says();

LPad({
  ansi: true
});

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
const LITERAL$5 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

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


ripper.bind(LITERAL$5);

const columns = function (y, h) {
  return mapper$6(this, r => r[y], h);
};

const Columns = mx => columns.bind(mx);

const iterate$2 = function (mx, fnOnColumns, h, w) {
  var _mx$;

  h = h || (mx === null || mx === void 0 ? void 0 : mx.length), w = w || h && ((_mx$ = mx[0]) === null || _mx$ === void 0 ? void 0 : _mx$.length);

  for (let j = 0, cols = Columns(mx); j < w; j++) fnOnColumns.call(this, cols(j, h), j);
};

const mapper$2 = (mx, mapOnColumns, h, w) => {
  var _mx$;

  h = h || (mx === null || mx === void 0 ? void 0 : mx.length), w = w || h && ((_mx$ = mx[0]) === null || _mx$ === void 0 ? void 0 : _mx$.length); // 'mapperColumns' |> logger

  const tcol = Array(w);

  for (let j = 0, cols = Columns(mx); j < w; j++) {
    tcol[j] = mapOnColumns(cols(j, h), j); // Xr().index(j).col(cols(j, h)).result(tcol[j]) |> logger
  } // tcol |> logger


  return tcol;
};

var ColumnsMapper = /*#__PURE__*/Object.freeze({
  __proto__: null,
  iterate: iterate$2,
  mapper: mapper$2
});

const iso = (h, w, v) => {
  const mx = Array(h);

  for (let i = 0, j, ro; i < h; i++) for (j = 0, mx[i] = ro = Array(w); j < w; j++) ro[j] = v;

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
const iterate$1 = function (mx, fn, h, w) {
  var _mx$;

  h = h || (mx === null || mx === void 0 ? void 0 : mx.length), w = w || h && ((_mx$ = mx[0]) === null || _mx$ === void 0 ? void 0 : _mx$.length);

  for (let i = 0, j, r; i < h; i++) for (r = mx[i], j = 0; j < w; j++) fn.call(this, r[j], i, j);
};
/**
 * Iterate through elements on each (x of rows,y of columns) coordinate of a 2d-array.
 * @param {*[][]} mx
 * @param {function} fn
 * @param {number} [h]
 * @param {number} [w]
 * @returns {*[]}
 */


const mapper$1 = (mx, fn, h, w) => {
  var _mx$;

  h = h || (mx === null || mx === void 0 ? void 0 : mx.length), w = w || h && ((_mx$ = mx[0]) === null || _mx$ === void 0 ? void 0 : _mx$.length);
  const tx = Array(h);

  for (let i = 0, j, r, tr; i < h; i++) for (tx[i] = tr = Array(w), r = mx[i], j = 0; j < w; j++) tr[j] = fn(r[j], i, j);

  return tx;
};

const mutate$1 = (mx, fn, h, w) => {
  var _mx$;

  h = h || (mx === null || mx === void 0 ? void 0 : mx.length), w = w || h && ((_mx$ = mx[0]) === null || _mx$ === void 0 ? void 0 : _mx$.length);

  for (let i = 0, j, r; i < h; i++) for (j = 0, r = mx[i]; j < w; j++) r[j] = fn(r[j], i, j);

  return mx;
};

const selectMutate = (mx, ys, fn, h) => {
  h = h || (mx === null || mx === void 0 ? void 0 : mx.length);
  const depth = ys.length;

  for (let i = 0, y, r, j; i < h; i++) for (y = 0, r = mx[i]; y < depth; y++) r[j = ys[y]] = fn(r[j], i, j);

  return mx;
};

var Mapper = /*#__PURE__*/Object.freeze({
  __proto__: null,
  iterate: iterate$1,
  mapper: mapper$1,
  mutate: mutate$1,
  selectMutate: selectMutate
});

const height$1 = mx => mx === null || mx === void 0 ? void 0 : mx.length;

const width$1 = mx => {
  let r;
  return height$1(mx) && (r = mx[0]) ? r.length : r;
};

const size$1 = mx => {
  let h, r;
  return mx && (h = mx.length) && (r = mx[0]) ? [h, r.length] : [h, r];
};

var Size = /*#__PURE__*/Object.freeze({
  __proto__: null,
  height: height$1,
  size: size$1,
  width: width$1
});

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

  for (--w; w >= 0; w--) cols[w] = mapper$6(mx, r => r[w], h);

  return cols;
};

var Transpose = /*#__PURE__*/Object.freeze({
  __proto__: null,
  transpose: transpose$1
});

const {
  iterate,
  mutate,
  mapper
} = Mapper;
const {
  size,
  width,
  height
} = Size;
const {
  transpose
} = Transpose;
const {
  mapper: columnsMapper
} = ColumnsMapper;

const v1 = word => (word.toLowerCase().charCodeAt(0) & 0x7f) << 21;

const v2 = word => (((word = word.toLowerCase()).charCodeAt(0) & 0x7f) << 21) + ((word.charCodeAt(1) & 0x7f) << 14);

const v3 = word => (((word = word.toLowerCase()).charCodeAt(0) & 0x7f) << 21) + ((word.charCodeAt(1) & 0x7f) << 14) + ((word.charCodeAt(2) & 0x7f) << 7);

const v4 = word => (((word = word.toLowerCase()).charCodeAt(0) & 0x7f) << 21) + ((word.charCodeAt(1) & 0x7f) << 14) + ((word.charCodeAt(2) & 0x7f) << 7) + (word.charCodeAt(3) & 0x7f);

const stringValue = word => {
  const l = word === null || word === void 0 ? void 0 : word.length;
  if (!l) return NaN;
  if (typeof word !== STR$2) return NaN;
  if (l >= 8) return (v4(word.slice(0, 4)) << 2) + v4(word.slice(-4));
  if (l === 7) return (v4(word.slice(0, 4)) << 2) + v3(word.slice(-3));
  if (l === 6) return (v4(word.slice(0, 4)) << 2) + v2(word.slice(-2));
  if (l === 5) return (v4(word.slice(0, 4)) << 2) + v1(word.slice(-1));
  if (l === 4) return v4(word) << 2;
  if (l === 3) return v3(word) << 2;
  if (l === 2) return v2(word) << 2;
  if (l === 1) return v1(word) << 2;
};

const HALF_NUM = '0-9';
const HALF_UPPER = 'A-Z';
const HALF_LOWER = 'a-z';

const ANSI_ALPHA = /(?:(?:[a-zA-Z\d]*(?:;[-a-zA-Z\d\/#&.:=?%@~_]*)*)?)/;
const ANSI_BETA = /(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-ntqry=><~])/;
const ANSI = new RegExp(`[][[\\]()#;?]*(?:${ANSI_ALPHA.source}|${ANSI_BETA.source})`);
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

const LITERAL_LOWER = `${HALF_UPPER}${HALF_LOWER}${HALF_NUM}`;
const LITERAL = new RegExp(`[${LITERAL_LOWER}]+`); // LITERAL = /[A-Za-z0-9]+/

const isString = x => typeof x === STR$2;

const isLiteral = x => LITERAL.test(x);

const hasLiteral = x => isString(x) && isLiteral(x);

const STR$1 = 'string';
const COMMA = /,/g;

const isNumeric = x => {
  if (typeof x === STR$1) x = x.replace(COMMA, '');
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
  if (typeof x === STR$1) x = x.replace(COMMA, '');
  return validate(x, parseFloat(x));
};

/**
 *
 * @typedef {*[][]} BoundedMatrix
 * @typedef {number} BoundedMatrix.max
 * @typedef {number} BoundedMatrix.min
 *
 * @typedef {Object} Config
 * @typedef {Function} Config.filter
 * @typedef {Function} Config.mapper
 *
 * @param {*[][]} wordx
 * @param {Config} configX
 * @param {Config} configY
 * @return {[?BoundedMatrix, ?BoundedMatrix]}
 */


const duobound = (wordx, [configX, configY] = []) => {
  const [h, w] = size$1(wordx);
  let matX = undefined,
      matY = undefined;
  if (!h || !w) return [matX, matY];
  const {
    filter: filterX,
    mapper: mapperX
  } = configX,
        {
    filter: filterY,
    mapper: mapperY
  } = configY;
  iterate$1(wordx, (v, i, j) => {
    var _matX, _matY;

    if (filterX(v) && ((_matX = matX) !== null && _matX !== void 0 ? _matX : matX = iso(h, w, undefined))) {
      var _matX$max;

      v = mapperX(v);

      if (v > ((_matX$max = matX.max) !== null && _matX$max !== void 0 ? _matX$max : matX.max = matX.min = v)) {
        matX.max = v;
      } else if (v < matX.min) {
        matX.min = v;
      }

      return matX[i][j] = v;
    }

    if (filterY(v) && ((_matY = matY) !== null && _matY !== void 0 ? _matY : matY = iso(h, w, undefined))) {
      var _matY$max;

      v = mapperY(v);

      if (v > ((_matY$max = matY.max) !== null && _matY$max !== void 0 ? _matY$max : matY.max = matY.min = v)) {
        matY.max = v;
      } else if (v < matY.min) {
        matY.min = v;
      }

      return matY[i][j] = v;
    }

    return NaN;
  }, h, w);
  return [matX, matY];
};
/**
 *
 * @typedef {*[][]} BoundedMatrix
 * @typedef {number} BoundedMatrix.max
 * @typedef {number} BoundedMatrix.min
 *
 * @typedef {Object} Config
 * @typedef {Function} Config.filter
 * @typedef {Function} Config.mapper
 *
 * @param {*[][]} wordx
 * @param {Config} [config]
 * @return {?BoundedMatrix}
 */


const solebound = (wordx, config) => {
  const [height, width] = size$1(wordx);
  /** @type {?BoundedMatrix} */

  let mx = undefined;
  if (!height || !width) return mx;
  const {
    filter,
    mapper
  } = config;
  iterate$1(wordx, (v, i, j) => {
    var _mx;

    if (filter(v) && ((_mx = mx) !== null && _mx !== void 0 ? _mx : mx = iso(height, width, undefined))) {
      var _mx$max;

      v = mapper(v);

      if (v > ((_mx$max = mx.max) !== null && _mx$max !== void 0 ? _mx$max : mx.max = mx.min = v)) {
        mx.max = v;
      } else if (v < mx.min) {
        mx.min = v;
      }

      return mx[i][j] = v;
    }

    return NaN;
  }, height, width);
  return mx;
};
/**
 *
 * @typedef {*[][]} BoundedMatrix
 * @typedef {number} BoundedMatrix.max
 * @typedef {number} BoundedMatrix.min
 *
 * @typedef {Object} Config
 * @typedef {Function} Config.filter
 * @typedef {Function} Config.mapper
 *
 * @param {*[][]} wordx
 * @param {Config[]} configs
 * @return {?BoundedMatrix[]}
 */


const multibound = (wordx, configs) => {
  const [h, w] = size$1(wordx);
  const matrixCollection = configs.map(_ => undefined);
  if (!h || !w) return matrixCollection;
  iterate$1(wordx, (v, i, j) => {
    configs.some(({
      filter,
      mapper
    }, k) => {
      var _mx;

      let mx = matrixCollection[k];

      if (filter(v) && ((_mx = mx) !== null && _mx !== void 0 ? _mx : mx = matrixCollection[k] = iso(h, w, undefined))) {
        var _mx$max;

        v = mapper(v);

        if (v > ((_mx$max = mx.max) !== null && _mx$max !== void 0 ? _mx$max : mx.max = mx.min = v)) {
          mx.max = v;
        } else if (v < mx.min) {
          mx.min = v;
        }

        mx[i][j] = v;
        return true;
      }
    });
  }, h, w);
  return matrixCollection;
};
/**
 *
 * @typedef {*[][]} BoundedMatrix
 * @typedef {number} BoundedMatrix.max
 * @typedef {number} BoundedMatrix.min
 *
 * @typedef {Object} Config
 * @typedef {function(*):boolean} Config.filter
 * @typedef {function(*):number} Config.mapper
 *
 * @param {*[][]} wordx
 * @param {Config[]} configs
 * @return {?BoundedMatrix[]}
 */


const boundaries = function (wordx, configs = []) {
  const count = configs.length;
  if (count === 0) return [];

  if (count === 1) {
    var _x$filter, _x$mapper;

    const [x] = configs;
    const filter = (_x$filter = x === null || x === void 0 ? void 0 : x.filter) !== null && _x$filter !== void 0 ? _x$filter : isNumeric,
          mapper = (_x$mapper = x === null || x === void 0 ? void 0 : x.mapper) !== null && _x$mapper !== void 0 ? _x$mapper : parseNum;
    return [solebound(wordx, {
      filter,
      mapper
    })];
  }

  if (count === 2) {
    var _x$filter2, _x$mapper2, _y$filter, _y$mapper;

    const [x, y] = configs;
    const fX = (_x$filter2 = x === null || x === void 0 ? void 0 : x.filter) !== null && _x$filter2 !== void 0 ? _x$filter2 : isNumeric,
          mX = (_x$mapper2 = x === null || x === void 0 ? void 0 : x.mapper) !== null && _x$mapper2 !== void 0 ? _x$mapper2 : parseNum;
    const fY = (_y$filter = y === null || y === void 0 ? void 0 : y.filter) !== null && _y$filter !== void 0 ? _y$filter : hasLiteral,
          mY = (_y$mapper = y === null || y === void 0 ? void 0 : y.mapper) !== null && _y$mapper !== void 0 ? _y$mapper : stringValue;
    return duobound(wordx, [{
      filter: fX,
      mapper: mX
    }, {
      filter: fY,
      mapper: mY
    }]);
  }

  if (count >= 3) return multibound(wordx, configs);
};

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

const oneself$1 = x => x;

const HSL = 'hsl';

const leverage = ([h, s, l], base) => [h / base, s / base, l / base];

class ProjectorFactory {
  /**
   * @typedef {[number,number,number]} Hsl
   * @param {{min:number,dif:number}} leap
   * @param {{min:Hsl,dif:Hsl,na:?Hsl}} preset
   * @param {string[]} effects
   * @returns {ProjectorFactory}
   */
  constructor(leap, preset, effects) {
    if (nullish(preset)) return new VoidProjectorFactory();
    if (leap.dif === 0) return new BinProjectorFactory(leap, preset, effects);
    this.factory = DyeFactory.build(HSL, effects);
    this.min = leap.min;
    this.lever = leverage(preset.dif, leap.dif);
    this.base = preset.min;
    this.na = preset.na;
  }

  static build(bound, {
    preset,
    effects
  } = {}) {
    var _bound, _preset;

    if (!bound) return null;
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
    return oneself$1;
  }

  color(value) {
    return null;
  }

}

const scale = (x, min$1, lever, base, ceil) => min((max(x, min$1) - min$1) * lever + base, ceil);

/**
 *
 * @typedef {Object} FluoSetting
 * @typedef {{min:string,max:string,na:string}} FluoSetting.preset
 * @typedef {string[]} FluoSetting.effects
 * @typedef {Function} FluoSetting.filter
 * @typedef {Function} FluoSetting.mapper
 *
 * @param {*[][]} mx
 * @param {FluoSetting[]} [config]
 * @returns {*[][]}
 */

function fluoByColumns(mx, config) {
  var _columnsMapper;

  const context = this;
  return _columnsMapper = columnsMapper(mx, col => fluoVector.call(context, col, config)), transpose(_columnsMapper);
}
/**
 *
 * @typedef {Object} FluoSetting
 * @typedef {{min:string,max:string,na:string}} FluoSetting.preset
 * @typedef {string[]} FluoSetting.effects
 * @typedef {Function} FluoSetting.filter
 * @typedef {Function} FluoSetting.mapper
 *
 * @param {*[][]} mx
 * @param {FluoSetting[]} [config]
 * @returns {*[][]}
 */


function fluoByRows(mx, config) {
  const context = this,
        mapper$1 = context !== null && context !== void 0 && context.mutate ? mutate$3 : mapper$6;
  return mapper$1(mx, row => fluoVector.call(context, row, config));
}

const oneself = x => x;
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
}; // export const
//   FUNC = '',
//   PIGM = '',
//   HEX = ''


const MAKER = 'maker',
      RENDER$1 = 'render',
      COLOR = 'color';
/**
 * @typedef {Object} FluoSetting
 * @typedef {{min:string,max:string,na:string}} FluoSetting.preset
 * @typedef {string[]} FluoSetting.effects
 * @typedef {Function} FluoSetting.filter
 * @typedef {Function} FluoSetting.mapper
 *
 * @param {*[][]} matrix
 * @param {FluoSetting[]} configs
 * @returns {*[][]}
 */

const fluoPointwise = function (matrix, configs) {
  const [h, w] = size(matrix);
  if (!h || !w) return [[]];
  const projectorSet = makeProjector(matrix, configs);
  const mapper$1 = this !== null && this !== void 0 && this.mutate ? mutate : mapper;

  switch (this === null || this === void 0 ? void 0 : this.colorant) {
    case COLOR:
      return mapper$1(matrix, PointColorFactory.color(projectorSet));

    case MAKER:
      return mapper$1(matrix, PointColorFactory.maker(projectorSet));

    case RENDER$1:
    default:
      return mapper$1(matrix, PointColorFactory.render(projectorSet));
  }
};

const makeProjector = (matrix, configs) => {
  const [confX, confY] = configs;
  const [matX, matY] = boundaries(matrix, configs);
  const [projX, projY] = [ProjectorFactory.build(matX, confX), ProjectorFactory.build(matY, confY)];
  return [[matX, projX], [matY, projY]];
};

class PointColorFactory {
  static color([[bX, pX], [bY, pY]]) {
    function toColor(some) {
      var _some;

      return some ? (_some = some, hslToHex(_some)) : null;
    }

    return (_, i, j) => {
      let v;

      if (!nullish(v = bX && bX[i][j])) {
        var _pX$color;

        return _pX$color = pX.color(v), toColor(_pX$color);
      }

      if (!nullish(v = bY && bY[i][j])) {
        var _pY$color;

        return _pY$color = pY.color(v), toColor(_pY$color);
      }

      return null;
    };
  }

  static maker([[bX, pX], [bY, pY]]) {
    return (_, i, j) => {
      var _pX$make;

      let v;

      if (!nullish(v = bX && bX[i][j])) {
        return pX.make(v);
      }

      if (!nullish(v = bY && bY[i][j])) {
        return pY.make(v);
      }

      return (_pX$make = pX === null || pX === void 0 ? void 0 : pX.make(pX.na)) !== null && _pX$make !== void 0 ? _pX$make : oneself;
    };
  }

  static render([[bX, pX], [bY, pY]]) {
    return (n, i, j) => {
      var _pX$render;

      let v;

      if (!nullish(v = bX && bX[i][j])) {
        return pX.render(v, n);
      }

      if (!nullish(v = bY && bY[i][j])) {
        return pY.render(v, n);
      }

      return (_pX$render = pX === null || pX === void 0 ? void 0 : pX.render(pX.na, n)) !== null && _pX$render !== void 0 ? _pX$render : n;
    };
  }

}
/**
 *
 * @typedef {Object} FluoSetting
 * @typedef {{min:string,max:string,na:string}} FluoSetting.preset
 * @typedef {string[]} FluoSetting.effects
 * @typedef {Function} FluoSetting.filter
 * @typedef {Function} FluoSetting.mapper
 *
 * @param {*[][]} mx
 * @param {number} [direct=POINTWISE]
 * @param {FluoSetting[]} [configs]
 */


const fluoMatrix = function (mx, direct, configs) {
  switch (direct) {
    case ROWWISE:
      return fluoByRows.call(this, mx, configs);

    case COLUMNWISE:
      return fluoByColumns.call(this, mx, configs);

    case POINTWISE:
    default:
      return fluoPointwise.call(this, mx, configs);
  }
};

const clearAnsi = tx => tx.replace(ANSI_G, '');

const hasAnsi = tx => ANSI.test(tx);

const CJK_PUNCS = '\u3000-\u303f';
const CJK_LETTERS = '\u4e00-\u9fbf';
const FULL_CHARS = '\uff00-\uffef'; // full letters + full puncs

const HAN = new RegExp(`[${CJK_PUNCS}${CJK_LETTERS}${FULL_CHARS}]`); // HAN ideographs

HAN.test.bind(HAN);

//   FUNC = '',
//   PIGM = '',
//   HEX = ''

const RENDER = 'render';
const MUTATE_PIGMENT = {
  colorant: RENDER,
  mutate: true
};
fluoMatrix.bind(MUTATE_PIGMENT);

var _ref;

const REG_CR = /\r/g;
const BACKSLASH_CR = '\\r';
const REG_LF = /\n/g;
const BACKSLASH_LF = '\\n';
(_ref = [[REG_CR, BACKSLASH_CR], [REG_LF, BACKSLASH_LF]], makeReplaceable(_ref));

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

const orange = Dye((_Cards$orange$lighten = Cards.orange.lighten_3, hexToRgb(_Cards$orange$lighten)));
const indigo = Dye((_Cards$indigo$lighten = Cards.indigo.lighten_1, hexToRgb(_Cards$indigo$lighten)));

const bracket$1 = tx => orange('[') + tx + orange(']');

const parenth$1 = tx => indigo('(') + tx + indigo(')');

var _Cards$blueGrey$base, _Cards$grey$darken_;

const blueGrey = Dye((_Cards$blueGrey$base = Cards.blueGrey.base, hexToRgb(_Cards$blueGrey$base)));
const grey = Dye((_Cards$grey$darken_ = Cards.grey.darken_1, hexToRgb(_Cards$grey$darken_)));

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
  return SP$k.repeat(indent << 1) + queue.join(SP$k);
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
  if (items.every(nullish)) ;else {
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
    return this.queue.push(items.map(parenth$2).join(CO$k)), this;
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
  const rows = (lv < vert || entries.some(([, v]) => lange(v) > unit) || !width) && (pad = (_entries = entries, mutateKeyPad(_entries))) ? mutate$3(entries, ([k, v]) => lpad(k, pad) + RTSP + v) : wrapEntries(entries, width);
  return rows.length > 1 ? joinLines(rows, CO$k, lv) : rows.join(COSP);
};
const wrapEntries = function (entries, width) {
  var _row;

  const lines = [];
  let row = null,
      len = 0,
      kvp,
      sp = COSP.length;
  iterate$3(entries, ([k, v]) => {
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
  return _decoString.call({
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
  return rows.length > 1 ? joinLines(rows, CO$k, lv) : vector.join(COSP);
};
const wrapVector = function (vector, width) {
  const lines = [];
  let row = null,
      len = 0,
      sp = COSP.length;
  iterate$3(vector, item => {
    // row.push(item), len += lange(item) + sp
    // if (len > width) rows.push(row.join(COSP)), row = [], len = 0
    len += lange(item) + sp;
    if (row && len > width) lines.push(row.join(COSP)), row = null;
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
  if (t === STR$2) return isNumeric$1(node) ? node : renderString.call(this, node, level, indent);
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
  if (t === STR$2) return qm ? qm + node + qm : renderString.call(this, node, level, indent);
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
  mutate$3(vector, v => String(_deco.call(config, v, lv + 1)));
  if (config.fluos) fluoVector.call(MUTATE_PIGMENT$1, vector, config.fluos);
  return renderVector.call(config, vector, lv);
};
const deEn = function (entries, lv) {
  const config = this;
  const pad = mutateKeyPad(entries);
  mutateValues(entries, v => String(_deco.call(config, v, lv + 1, pad)));
  if (config.fluos) fluoEntries.call(MUTATE_PIGMENT$1, entries, config.fluos);
  return renderEntries.call(config, entries, lv);
};

const presetDeco = p => {
  var _p$wf, _p$pr, _ref, _p;

  if (!p) p = {};
  p.wf = (_p$wf = p.wf) !== null && _p$wf !== void 0 ? _p$wf : 160;
  if (nullish(p.presets)) p.presets = (_p$pr = p.pr) !== null && _p$pr !== void 0 ? _p$pr : [AZURE, MOSS];
  FluoConfigs.prototype.assignPresets.call(p.fluos, AZURE, MOSS);
  if (nullish(p.depth)) p.depth = 8; // 展示级别

  if (nullish(p.vert)) p.vert = 0; // 在此级别以下均设为竖排

  if (nullish(p.unit)) p.unit = 32; // 若 数组/键值对的值 单个元素长度超过此, 则进行竖排

  if (nullish(p.width)) p.width = 80; // 字符超过此, 则换行

  if (nullish(p.string)) p.string = {};
  const s = p.string; // if (nullish(s.presets)) s.presets = [ATLAS, SUBTLE]

  FluoConfigs.prototype.assignPresets.call(s.fluos, ATLAS, SUBTLE);
  _ref = (_p = p, JSON.stringify(_p)), logger(_ref);
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

export { Deco, _deco, deca, deco, delogNeL, delogger };
