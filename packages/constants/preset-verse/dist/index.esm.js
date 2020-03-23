import { PAR as PAR$1, BRK as BRK$1, BRC as BRC$1, ANBR as ANBR$1, NONE, BRACKET, BRACE } from '@spare/enum-brackets';
import { LF, CO, TB, ELLIP, COSP, COLF, SP } from '@spare/enum-chars';
import { Qt, quote } from '@spare/quote';
import { isNumeric as isNumeric$1, inferType } from '@typen/num-strict';

// from x => typeof x
const BOO = 'boolean';
const NUM = 'number';
const STR = 'string';

// from x => Object.prototype.toString.call(x)
const OBJECT = 'Object';
const ARRAY = 'Array';

/**
 *
 * @param {*} x
 * @return {string}
 */


const totx = x => `${x}`;

/**
 *
 * @param {*[]} ar
 * @param {number} [h] - head margin length
 * @param {number} [t] - tail margin length
 * @param {number} [l] - array length
 * @returns {*[]}
 */
const marginCopy = (ar, h, t, l) => {
  const ve = Array(l = l || ar.length),
        s = l - t;

  for (--h; h >= 0; h--) ve[h] = ar[h];

  for (--l; l >= s; l--) ve[l] = ar[l];

  return ve;
};
/**
 *
 * @param {*[]} ar
 * @param {function(*)|function(*,number)} fn
 * @param {number} [h] - head margin length
 * @param {number} [t] - tail margin length
 * @param {number} [l] - array length
 * @returns {*[]}
 */


const marginMapper = (ar, fn, h, t, l) => {
  const ve = Array(l = l || ar.length),
        s = l - t;

  for (--h; h >= 0; h--) ve[h] = fn(ar[h], h);

  for (--l; l >= s; l--) ve[l] = fn(ar[l], l);

  return ve;
};
/**
 *
 * @param {*[]} ar
 * @param {function(*)|function(*,number)} fn
 * @param {number} [h] - head margin length
 * @param {number} [t] - tail margin length
 * @param {number} [l] - array length
 * @returns {*[]}
 */


const marginMutate = (ar, fn, h, t, l) => {
  l = l || ar.length;
  const s = l - t;

  for (--h; h >= 0; h--) ar[h] = fn(ar[h], h);

  for (--l; l >= s; l--) ar[l] = fn(ar[l], l);

  return ar;
};

const marginSizing = (ar, head, tail) => {
  let l,
      dash = true;
  if (!ar || !(l = ar.length)) [head, tail, dash] = [0, 0, false];
  if (!head && !tail || head >= l) [head, tail, dash] = [l, 0, false];
  return {
    head,
    tail,
    dash
  };
};

class Vectogin {
  constructor(vec, head, tail, dash) {
    this.vec = vec;
    this.head = head;
    this.tail = tail;
    this.dash = dash;
  }

  static build(ar, h = 0, t = 0) {
    const {
      head,
      tail,
      dash
    } = marginSizing(ar, h, t);
    const cutVec = marginCopy(ar, head, tail);
    return new Vectogin(cutVec, head, tail, dash);
  }

  map(fn, mutate = false) {
    const {
      vec,
      head,
      tail
    } = this;
    return mutate ? this.reboot(marginMutate(vec, fn, head, tail)) : this.clone(marginMapper(vec, fn, head, tail));
  }

  stringify(fn, mutate = true) {
    return this.map(fn ? _ => String(fn(_)) : totx, mutate);
  }

  toVector(el) {
    const {
      vec,
      head,
      tail
    } = this,
          dif = vec.length - (head + tail),
          ar = vec.slice();
    this.dash && el ? ar.splice(head, dif, el) : ar.splice(head, dif);
    return ar;
  }

  reboot(ar) {
    if (ar) this.vec = ar;
    return this;
  }

  clone(ar) {
    return new Vectogin(ar, this.head, this.tail, this.dash);
  }

}
/**
 *
 * @param {*[]} arr
 * @param {*|number} [head]
 * @param {*|number} [tail]
 * @param {*|boolean} [dash]
 * @param {*|function(*):string} [read]
 * @param {*|string} [hr='..']
 * @param {*|boolean} [validate=true]
 * @return {{raw:*[],text:*[]}}
 */


const vettro = (arr, {
  head,
  tail,
  dash,
  read,
  hr = '...',
  validate = true
} = {}) => {
  let vn = validate ? Vectogin.build(arr, head, tail) : new Vectogin(arr, head, tail, dash);
  return {
    raw: vn.map(x => x).toVector(hr),
    text: vn.stringify(read).toVector(hr)
  };
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
const AURORA = {
  max: Cards.green.accent_4,
  min: Cards.deepPurple.darken_2,
  na: Cards.grey.darken_2
};
const FRESH = {
  max: Cards.lightGreen.accent_3,
  min: Cards.deepOrange.accent_3,
  na: Cards.blue.lighten_3
};
const JUNGLE = {
  max: Cards.lime.accent_4,
  min: Cards.lightGreen.darken_1,
  na: Cards.blue.accent_1
};
const LAVA = {
  max: Cards.amber.accent_4,
  min: Cards.red.base,
  na: Cards.grey.accent_2
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
const METRO = {
  max: Cards.pink.lighten_1,
  min: Cards.blueGrey.lighten_4,
  na: Cards.teal.lighten_3
};
const SUBTLE = {
  max: Cards.grey.lighten_5,
  min: Cards.grey.darken_1,
  na: Cards.indigo.lighten_3
};

const parenth = x => '(' + x + ')';

const bracket = x => '[' + x + ']';

const brace = x => '{' + x + '}';

const anglebr = x => '<' + x + '>';

const br = (x, mode) => {
  if (mode === PAR$1) return parenth(x);
  if (mode === BRK$1) return bracket(x);
  if (mode === BRC$1) return brace(x);
  if (mode === ANBR$1) return anglebr(x);
  return x;
};

const joinLines = (lines, de = '', lv, hover = true) => {
  const IND = lv > 0 ? TB.repeat(lv) : '',
        LFI = LF + IND;
  return hover ? `${LFI + TB}${lines.join(de + LFI + TB)}${de + LFI}` : `${IND + TB}${lines.join(de + LFI + TB)}${de}`;
};

const liner = (lines, {
  discrete = false,
  delim = LF,
  bracket = NONE,
  level = 0
} = {}) => {
  if (discrete) return lines;
  const hover = !!bracket;
  const joined = lines.length && /\n/.test(delim) ? joinLines(lines, /,/.test(delim) ? CO : '', level, hover) : lines.join(delim);
  return br(joined, bracket);
};

/**
 *
 * @param {*[]} entries
 * @param {number} [h] - head margin length
 * @param {number} [t] - tail margin length
 * @param {number} [l] - entries length
 * @returns {*[]}
 */
const marginCopy$1 = (entries, h, t, l) => {
  const kvs = Array(l = l || entries.length),
        s = l - t;
  let ent;

  for (--h; h >= 0; h--) kvs[h] = [(ent = entries[h])[0], ent[1]];

  for (--l; l >= s; l--) kvs[l] = [(ent = entries[l])[0], ent[1]];

  return kvs;
};
/**
 *
 * @param {*[]} entries
 * @param {function(*,number?):*} keyMapper
 * @param {function(*,number?):*} valueMapper
 * @param {number} [h] - head margin length
 * @param {number} [t] - tail margin length
 * @param {number} [l] - entries length
 * @returns {*[]}
 */


const marginMapper$1 = (entries, keyMapper, valueMapper, h, t, l) => {
  const ve = Array(l = l || entries.length),
        s = l - t;
  let ent;

  for (--h; h >= 0; h--) ve[h] = [keyMapper((ent = entries[h])[0], h), valueMapper(ent[1], h)];

  for (--l; l >= s; l--) ve[l] = [keyMapper((ent = entries[l])[0], l), valueMapper(ent[1], l)];

  return ve;
};
/**
 *
 * @param {*[]} entries
 * @param {function(*,number?):*} keyMapper
 * @param {function(*,number?):*} valueMapper
 * @param {number} [h] - head margin length
 * @param {number} [t] - tail margin length
 * @param {number} [l] - entries length
 * @returns {*[]}
 */


const marginMutate$1 = (entries, keyMapper, valueMapper, h, t, l) => {
  l = l || entries.length;
  let s = l - t,
      ent;

  for (--h; h >= 0; h--) (ent = entries[h])[0] = keyMapper(ent[0], h), ent[1] = valueMapper(ent[1], h);

  for (--l; l >= s; l--) (ent = entries[l])[0] = keyMapper(ent[0], l), ent[1] = valueMapper(ent[1], l);

  return entries;
};

class Entrigin extends Vectogin {
  constructor(entries, head, tail, dash) {
    super(entries, head, tail, dash);
  }

  static build(entries, h = 0, t = 0) {
    let d = true,
        l;
    if (!entries || !(l = entries.length)) [entries, h, t, d] = [[], 0, 0, false];
    if (!h && !t || h >= l) [h, t, d] = [l, 0, false];
    return new Entrigin(marginCopy$1(entries, h, t, l), h, t, d);
  }

  map(keyMapper, valueMapper, mutate = false) {
    const {
      vec,
      head,
      tail
    } = this;
    return mutate ? this.reboot(marginMutate$1(vec, keyMapper, valueMapper, head, tail)) : this.clone(marginMapper$1(vec, keyMapper, valueMapper, head, tail));
  }
  /**
   *
   * @param {function} [keyMapper]
   * @param {function} [valueMapper]
   * @param {boolean} [mutate]
   * @return { Entrigin }
   */


  stringify(keyMapper, valueMapper, mutate = true) {
    return this.map(keyMapper ? _ => String(keyMapper(_)) : totx, valueMapper ? _ => String(valueMapper(_)) : totx, mutate);
  }

}
/**
 *
 * @param {*[]} entries
 * @param {number} [head]
 * @param {number} [tail]
 * @param {function(*):string} [keyRead]
 * @param {function(*):string} [read]
 * @param {*} hr
 * @param {boolean} [pad]
 * @return {{text:*[], raw:*[]}}
 */


const enttro = (entries, {
  head,
  tail,
  keyRead,
  read,
  hr = '...'
} = {}) => {
  let vn = Entrigin.build(entries, head, tail);
  return {
    raw: vn.toVector(hr),
    text: vn.stringify(keyRead, read).toVector(hr)
  };
};

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

const hasAnsi = tx => ansiReg.test(tx);

const fixpad = (tx, pd) => hasAnsi(tx) ? tx.length + pd - lange(tx) : pd;

const lpad = String.prototype.padStart;
const rpad = String.prototype.padEnd;

const LPad = ({
  ansi = true,
  fill
} = {}) => ansi ? (tx, pd) => lpad.call(tx, fixpad(tx, pd), fill) : (tx, pd) => lpad.call(tx, pd, fill);

const Pad = ({
  dock,
  ansi = true,
  fill
} = {}) => {
  if (!dock) {
    return ansi ? (tx, pd, v) => (isNumeric$1(v) ? lpad : rpad).call(tx, fixpad(tx, pd), fill) : (tx, pd, v) => (isNumeric$1(v) ? lpad : rpad).call(tx, pd, fill);
  }

  let padder = dock < 0 ? lpad : rpad;
  return ansi ? (tx, pd) => padder.call(tx, fixpad(tx, pd), fill) : (tx, pd) => padder.call(tx, pd, fill);
};

function duozipper(ea, eb) {
  let {
    key,
    value,
    lo,
    hi
  } = this;
  value = value || key, lo = lo || 0, hi = hi || ea && ea.length;
  const entries = Array(hi);

  for (let i = --hi, a, b; i >= lo; i--) {
    a = ea[i], b = eb[i];
    entries[i] = [key(a[0], b[0], i), value(a[1], b[1], i)];
  }

  return entries;
}

function trizipper(ea, eb, ec) {
  let {
    key,
    value,
    lo,
    hi
  } = this;
  value = value || key, lo = lo || 0, hi = hi || ea && ea.length;
  const entries = Array(hi);

  for (let i = --hi, a, b, c; i >= lo; i--) {
    a = ea[i], b = eb[i], c = ec[i];
    entries[i] = [key(a[0], b[0], c[0], i), value(a[1], b[1], c[1], i)];
  }

  return entries;
}
/**
 *
 * @param {function(*,*,number):*} key
 * @param {function(*,*,number):*} [value]
 * @param {number} [lo]
 * @param {number} [hi]
 * @returns {function|function([*,*][],[*,*][],number?):[*,*][]}
 */


const Duozipper = (key, value, {
  lo,
  hi
} = {}) => duozipper.bind({
  key,
  value,
  lo,
  hi
});
/**
 *
 * @param {function(*,*,*,number):*} key
 * @param {function(*,*,*,number):*} [value]
 * @param {number} [lo]
 * @param {number} [hi]
 * @returns {function|function([*,*][],[*,*][],[*,*][],number?):[*,*][]}
 */


const Trizipper = (key, value, {
  lo,
  hi
} = {}) => trizipper.bind({
  key,
  value,
  lo,
  hi
});
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

const STR_ASC = (a, b) => a.localeCompare(b);

const STR_DESC = (a, b) => b.localeCompare(a);

const NUM_ASC = (a, b) => a - b;

const NUM_DESC = (a, b) => b - a;

const max = (a, b) => a > b ? a : b;

const min = (a, b) => a < b ? a : b;

var ComparerCollection = /*#__PURE__*/Object.freeze({
  __proto__: null,
  NUM_ASC: NUM_ASC,
  NUM_DESC: NUM_DESC,
  STR_ASC: STR_ASC,
  STR_DESC: STR_DESC,
  max: max,
  min: min
});

const max$1 = function (entries) {
  const [kpi, vpi] = this;
  return entries.reduce((pe, ce, i) => (pe[0] = max(pe[0], kpi(ce[0], i)), pe[1] = max(pe[1], vpi(ce[1], i)), pe), [kpi(entries[0][0], 0), vpi(entries[0][1], 0)]);
};

const maxBy = (entries, kpi, vpi) => max$1.call([kpi, vpi], entries);

const padEntries = (text, {
  raw,
  dye,
  ansi,
  fill
}) => {
  raw = raw || text;
  const len = ansi ? lange : x => x.length;
  const [kpad, vpad] = maxBy(text, len, len);
  const padder = Pad({
    ansi,
    fill
  }),
        lp = LPad({
    ansi,
    fill
  });
  let zipper;
  return dye ? (zipper = Trizipper((t, v, d) => {
    var _lp;

    return _lp = lp(t, kpad), d(_lp);
  }, (t, v, d) => {
    var _padder;

    return _padder = padder(t, vpad, v), d(_padder);
  }), zipper(text, raw, dye)) : (zipper = Duozipper(t => lp(t, kpad), (t, v) => padder(t, vpad, v)), zipper(text, raw));
};

// let protoType = function (it) {
//   const raw = typeof it;
//   if (raw === "object") {
//     switch (true) {
//       case (it instanceof Array):
//         return "array";
//       case (it instanceof Map):
//         return "map";
//       case (it instanceof Set):
//         return "set";
//       case (it instanceof Function):
//         return "function";
//       default:
//         return raw;
//     }
//   } else {
//     return raw
//   }
// };
const oc = Object.prototype.toString;
/**
 * const rxObj = /^\[object (.*)]$/
 * Equivalent to: Object.prototype.stringify.call(o).match(rxObj)[1]
 * @param {*} o
 * @return {string}
 */

const otype = o => oc.call(o).slice(8, -1);
const NUM$1 = 'number';
const STR$1 = 'string';
const OBJ = 'object';
/**
 * validate
 * @param x
 * @param y
 * @returns {number}
 */


const vdt = (x, y) => isNaN(x - y) ? NaN : y;

class Num {
  // Angular 4.3
  static isNumeric(x) {
    return !isNaN(x - parseFloat(x));
  }

  static numeric(x) {
    return vdt(x, parseFloat(x));
  }

  static inferData(x) {
    const t = typeof x;
    return t === STR$1 ? isNaN(x - parseFloat(x)) ? STR$1 : NUM$1 : t === OBJ ? otype(x).toLowerCase() : t;
  }

}
const STRING = 'string';

/**
 *
 * @param {number} x
 * @returns {number}
 */
/**
 *
 * @param {number} x
 * @returns {number}
 */


const round = x => x + (x > 0 ? 0.5 : -0.5) << 0;

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

const THSD = 1000;
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
  return [round(h), round(s * THSD) / 10, round(l * THSD) / 10];
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

const STAT_BOUND_CONFIG = {
  dif: true,
  level: 2
};
const {
  isNumeric
} = Num;
/**
 * Create a dye from a hsl array
 * @param {[number,number,number]} hsl
 * @returns {function}
 */

const hslToDye = hsl => {
  var _ref, _hsl;

  return _ref = (_hsl = hsl, hslToRgb(_hsl)), Dye(_ref);
};

const leverage = ([h, s, l], base) => [h / base, s / base, l / base];

const amp = (x, min, lever, base) => (x - min) * lever + base;

const dyeBlender = function (x) {
  var _ref;

  const {
    min: m,
    lever: [rH, rS, rL],
    base: [mH, mS, mL]
  } = this;
  return _ref = [amp(x, m, rH, mH), amp(x, m, rS, mS), amp(x, m, rL, mL)], hslToDye(_ref);
};
/**
 *
 * @param {{min:number,dif:number}} valueLeap
 * @param {{min:number[],dif:number[]}} colorLeap
 * @returns {function(*):function}
 * @constructor
 */


const BlendDye = (valueLeap, colorLeap) => dyeBlender.bind({
  min: valueLeap.min,
  lever: leverage(colorLeap.dif, valueLeap.dif),
  base: colorLeap.min
});

const parseHsl = color => {
  var _color;

  return typeof color === STRING ? (_color = color, hexToHsl(_color)) : color;
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

const presetToFlatDye = ({
  na
}) => {
  var _ref, _na;

  return _ref = (_na = na, parseHsl(_na)), hslToDye(_ref);
};
/**
 *
 * @param {*[]} vec
 * @param {*[]} values
 * @param {function(*[],function(*):*):*[]} mapper
 * @param {function} primeDye
 * @param {{dif:number,min:number}} valueLeap
 * @param {{dif:number[],min:number[]}} colorLeap
 * @param {boolean} colorant
 * @returns {function[]|*[]}
 */


const dyeMap = (vec, {
  mapper,
  primeDye,
  valueLeap,
  colorLeap,
  colorant
}) => {
  var _colorLeap$min;

  let blendDye;
  return valueLeap.dif && colorLeap.dif.some(n => !!n) ? (blendDye = BlendDye(valueLeap, colorLeap), colorant ? mapper(vec, x => isNumeric(x) ? blendDye(x) : primeDye) : mapper(vec, x => {
    var _x, _x2;

    return isNumeric(x) ? (_x = x, blendDye(x)(_x)) : (_x2 = x, primeDye(_x2));
  })) : (blendDye = (_colorLeap$min = colorLeap.min, hslToDye(_colorLeap$min)), colorant ? mapper(vec, x => isNumeric(x) ? blendDye : primeDye) : mapper(vec, x => {
    var _x3, _x4;

    return isNumeric(x) ? (_x3 = x, blendDye(_x3)) : (_x4 = x, primeDye(_x4));
  }));
};
/**
 *
 * @param {*[]} keys
 * @param {*[]} values
 * @param {function(*[],function(*)):*[]} mapper
 * @param {function(*[],*[],function(*,*)):*[]} zipper
 * @param {function(*):string} primeDye
 * @param {{dif:number,min:number}} valueLeap
 * @param {{dif:number[],min:number[]}} colorLeap
 * @param {boolean} colorant
 * @returns {function[]|*[]}
 */


const dyeZip = (keys, {
  values,
  mapper,
  zipper,
  primeDye,
  valueLeap,
  colorLeap,
  colorant
}) => {
  var _colorLeap$min;

  if (!values) return dyeMap(keys, {
    mapper,
    primeDye,
    valueLeap,
    colorLeap,
    colorant
  });
  let blendDye;
  const fn = valueLeap.dif && colorLeap.dif.some(n => !!n) ? (blendDye = BlendDye(valueLeap, colorLeap), colorant ? (x, v) => isNumeric(v) ? blendDye(v) : primeDye : (x, v) => {
    var _x, _x2;

    return isNumeric(v) ? (_x = x, blendDye(v)(_x)) : (_x2 = x, primeDye(_x2));
  }) : (blendDye = (_colorLeap$min = colorLeap.min, hslToDye(_colorLeap$min)), colorant ? (x, v) => isNumeric(v) ? blendDye : primeDye : (x, v) => {
    var _x3, _x4;

    return isNumeric(v) ? (_x3 = x, blendDye(_x3)) : (_x4 = x, primeDye(_x4));
  });
  return zipper(keys, values, fn);
};
/**
 *
 * @param {*[]} keys
 * @param {*[]} values
 * @param {function(*[],function(*)):*[]} mapper
 * @param {function(*[],*[],function(*,*)):*[]} zipper
 * @param {function(*[],{dif:boolean,level:number}):{min:number,dif:number}} bound
 * @param {{max:string,min:string,na:string}} preset
 * @param {boolean} colorant
 * @returns {function[]|*[]}
 */


const fluoZip = (keys, {
  values,
  mapper,
  zipper,
  bound,
  preset,
  colorant = false
} = {}) => {
  var _preset, _preset2;

  return dyeZip(keys, {
    values,
    mapper,
    zipper,
    primeDye: (_preset = preset, presetToFlatDye(_preset)),
    colorLeap: (_preset2 = preset, presetToLeap(_preset2)),
    valueLeap: bound(values || keys, STAT_BOUND_CONFIG),
    colorant
  });
};

const iterate = function (vec, fn, l) {
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

const mutate = (vec, fn, l) => {
  l = l || vec && vec.length;

  for (--l; l >= 0; l--) vec[l] = fn(vec[l], l);

  return vec;
};

var Mapper = /*#__PURE__*/Object.freeze({
  __proto__: null,
  iterate: iterate,
  mapper: mapper,
  mutate: mutate,
  reviter: reviter
});

function duozipper$1(a, b) {
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

function trizipper$1(a, b, c) {
  let {
    fn,
    lo,
    hi
  } = this;
  lo = lo || 0;
  const vec = Array(hi = hi || a && a.length);

  for (--hi; hi >= lo; hi--) vec[hi] = fn(a[hi], b[hi], c[hi], hi);

  return vec;
}

function quazipper(a, b, c, d) {
  let {
    fn,
    lo,
    hi
  } = this;
  lo = lo || 0;
  const vec = Array(hi = hi || a && a.length);

  for (--hi; hi >= lo; hi--) vec[hi] = fn(a[hi], b[hi], c[hi], d[hi], hi);

  return vec;
}

const Duozipper$1 = (fn, {
  lo,
  hi
} = {}) => duozipper$1.bind({
  fn,
  lo,
  hi
});

const Trizipper$1 = (fn, {
  lo,
  hi
} = {}) => trizipper$1.bind({
  fn,
  lo,
  hi
});

const Quazipper = (fn, {
  lo,
  hi
} = {}) => quazipper.bind({
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


const zipper = (a, b, fn, l) => duozipper$1.call({
  fn,
  hi: l
}, a, b);

const mutazip$1 = (va, vb, fn, l) => {
  l = l || va && va.length;

  for (--l; l >= 0; l--) va[l] = fn(va[l], vb[l], l);

  return va;
};

var Zipper = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Duozipper: Duozipper$1,
  Quazipper: Quazipper,
  Trizipper: Trizipper$1,
  mutazip: mutazip$1,
  zipper: zipper
});

const {
  iterate: iterate$1,
  reviter: reviter$1,
  mapper: mapper$1,
  mutate: mutate$1
} = Mapper;
const {
  zipper: zipper$1,
  mutazip: mutazip$2,
  Duozipper: Duozipper$2,
  Trizipper: Trizipper$2,
  Quazipper: Quazipper$1
} = Zipper;

/**
 *
 * @param {*[]} ar
 * @param {function(*,*):number} comparer Compare 'prev' & 'next' element in an array. If return < 0, 'prev' comes first. If return > 0, 'next' comes first.
 * @param {function(*):boolean} [filter]
 * @return {number[]} Rank order array, where 0 denote the first.
 */
const rank = (ar, comparer, filter) => {
  const sorted = (!filter ? ar.slice() : ar.filter(filter)).sort(comparer);
  return ar.map(x => sorted.indexOf(x));
};
/**
 *
 * @param {*[]} ar
 * @param {number[]} ranks array of the same length as 'arr', containing rank order of 'arr', 0 comes first.
 * @return {*[]}
 */


const reorderBy = (ar, ranks) => {
  const ve = Array(ar.length);

  for (let [i, ord] of ranks.entries()) ve[ord] = ar[i];

  return ve;
};

var RankVector = /*#__PURE__*/Object.freeze({
  __proto__: null,
  rank: rank,
  reorderBy: reorderBy
});

const {
  NUM_ASC: NUM_ASC$1,
  NUM_DESC: NUM_DESC$1,
  STR_ASC: STR_ASC$1,
  STR_DESC: STR_DESC$1
} = ComparerCollection;
const {
  rank: rankVector
} = RankVector;

// let protoType = function (it) {
//   const raw = typeof it;
//   if (raw === "object") {
//     switch (true) {
//       case (it instanceof Array):
//         return "array";
//       case (it instanceof Map):
//         return "map";
//       case (it instanceof Set):
//         return "set";
//       case (it instanceof Function):
//         return "function";
//       default:
//         return raw;
//     }
//   } else {
//     return raw
//   }
// };
const oc$1 = Object.prototype.toString;
/**
 * const rxObj = /^\[object (.*)]$/
 * Equivalent to: Object.prototype.stringify.call(o).match(rxObj)[1]
 * @param {*} o
 * @return {string}
 */

const otype$1 = o => oc$1.call(o).slice(8, -1);
const NUM$2 = 'number';
const STR$2 = 'string';
const OBJ$1 = 'object';
/**
 * validate
 * @param x
 * @param y
 * @returns {number}
 */


const vdt$1 = (x, y) => isNaN(x - y) ? NaN : y;

class Num$1 {
  // Angular 4.3
  static isNumeric(x) {
    return !isNaN(x - parseFloat(x));
  }

  static numeric(x) {
    return vdt$1(x, parseFloat(x));
  }

  static inferData(x) {
    const t = typeof x;
    return t === STR$2 ? isNaN(x - parseFloat(x)) ? STR$2 : NUM$2 : t === OBJ$1 ? otype$1(x).toLowerCase() : t;
  }

}

const check = x => !!x || x === 0;

class NumLoose {
  static isNumeric(x) {
    return check(+x);
  }

  static numeric(x) {
    x = +x;
    return check(x) ? x : NaN;
  }
  /**
   *
   * @param {*} x
   * @return {string}
   */


  static inferData(x) {
    const t = typeof x;
    return t === STR$2 ? check(+x) ? NUM$2 : STR$2 : t === OBJ$1 ? otype$1(x).toLowerCase() : t;
  }

}

const NUM_LEVEL_NONE = 0;

const IsNum = (level = 0) => {
  switch (level) {
    case 0:
      return x => !isNaN(x);

    case 1:
      return NumLoose.isNumeric;

    case 2:
    default:
      return Num$1.isNumeric;
  }
};

const ToNum = (level = 0) => {
  switch (level) {
    case 0:
      return x => x;

    case 1:
      return NumLoose.numeric;

    case 2:
    default:
      return Num$1.numeric;
  }
};

function boundOutput(max, min) {
  const {
    dif
  } = this;
  return dif ? {
    min,
    dif: max - min
  } : {
    max,
    min
  };
}

const BoundOutput = dif => boundOutput.bind({
  dif
});

const iniNumEntry = (ar, lo, hi, {
  level = 0
} = {}) => {
  for (let el, isNum = IsNum(level); lo < hi; lo++) if (isNum(el = ar[lo])) return [lo, el];

  return [hi, NaN];
};
/**
 *
 * @param {*[]} arr
 * @param {boolean} [dif=false]
 * @param {number} [level=0] 0:no check, 1:loose, 2:strict
 * @returns {{min: *, max: *}|{min: *, dif: *}}}
 */


function bound$1(arr, {
  dif = false,
  level = NUM_LEVEL_NONE
} = {}) {
  const bo = BoundOutput(dif),
        toNum = ToNum(level);
  let l = arr && arr.length;
  if (!l) return bo(NaN, NaN);
  let [i, x] = iniNumEntry(arr, 0, l, {
    level
  });
  let min,
      max = min = toNum(x);

  for (++i; i < l; i++) {
    var _arr$i;

    if ((x = (_arr$i = arr[i], toNum(_arr$i))) < min) {
      min = x;
    } else if (x > max) {
      max = x;
    }
  }

  return bo(max, min);
}

const someNumeric = ar => ar.some(isNumeric);

const allString = ar => ar.every(x => typeof x === 'string');

const allNAString = ar => Array.isArray(ar) && !someNumeric(ar) && allString(ar); // if (!(ar |> Array.isArray)) return false
// if (ar |> someNumeric) return false
// return (ar |> allString)

/**
 *
 * @param {*[]} arr
 * @param {{max:string|number[],min:string|number[],na:string|number[]}} [preset]
 * @param {{max:string|number[],min:string|number[],na:string|number[]}} [stringPreset]
 * @param {boolean} [mutate=true]
 * @param {boolean} [colorant=false]
 */


const fluoVector = (arr, {
  preset = FRESH,
  stringPreset = JUNGLE,
  mutate: mutate$1$1 = false,
  colorant = false
} = {}) => {
  let values;
  if (allNAString(arr)) values = rankVector(arr, STR_ASC$1), preset = stringPreset || preset;
  const [mapper$1$1, zipper$1$1] = mutate$1$1 ? [mutate$1, mutazip$2] : [mapper$1, zipper$1];
  return fluoZip(arr, {
    values,
    mapper: mapper$1$1,
    zipper: zipper$1$1,
    bound: bound$1,
    preset,
    colorant
  });
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
 * @param {*[]} entries
 * @param {{max:string,min:string,na:string}} [preset]
 * @param {{max:string,min:string,na:string}} [stringPreset]
 * @param {boolean} [mutate=true]
 * @param {boolean} [colorant=false]
 */

const fluoEntries = (entries, {
  preset = FRESH,
  stringPreset = JUNGLE,
  mutate = false,
  colorant = false
} = {}) => {
  var _entries;

  let [keys, items] = (_entries = entries, unwind(_entries));
  fluoVector(keys, {
    preset,
    stringPreset,
    mutate: true,
    colorant
  });
  fluoVector(items, {
    preset,
    stringPreset,
    mutate: true,
    colorant
  });
  const rendered = mutazip$2(keys, items, (k, v) => [k, v]);
  return mutate ? mutazip(entries, rendered, (a, b) => b, (a, b) => b) : rendered;
};

const HR_ENTRY = ['..', '..'];
const PAR = 1,
      BRK = 2,
      BRC = 3,
      ANBR = 4;

const parenth$1 = x => '(' + x + ')';

const bracket$1 = x => '[' + x + ']';

const brace$1 = x => '{' + x + '}';

const anglebr$1 = x => '<' + x + '>';

const SelectBr = mode => {
  if (mode === PAR) return parenth$1;
  if (mode === BRK) return bracket$1;
  if (mode === BRC) return brace$1;
  if (mode === ANBR) return anglebr$1;
  return null;
};

const cosmetics = function (entries) {
  var _entries;

  if (!entries) return String(entries);
  if (!((_entries = entries) === null || _entries === void 0 ? void 0 : _entries.length)) return liner([], this);
  const {
    keyRead,
    read,
    preset,
    stringPreset,
    head,
    tail,
    ansi,
    dash,
    delim,
    keyQuote,
    quote,
    bracket
  } = this;
  const {
    raw,
    text
  } = enttro(entries, {
    head,
    tail,
    keyRead: Qt(keyRead, keyQuote),
    read: Qt(read, quote),
    hr: HR_ENTRY
  });
  const dye = preset && fluoEntries(raw, {
    preset,
    stringPreset,
    colorant: true
  });
  entries = /\n/.test(delim) ? padEntries(text, {
    raw,
    dye,
    ansi: preset || ansi
  }) : preset ? Duozipper((t, d) => {
    var _t;

    return _t = t, d(_t);
  })(text, dye) : text;

  const brk = SelectBr(bracket) || (x => x);

  const lines = entries.map(([k, v]) => brk(k + dash + v.trimRight()));
  return liner(lines, this);
};

function cosmetics$1(vec) {
  if (this === null || this === void 0 ? void 0 : this.indexed) return cosmetics.call(this, Object.entries(vec));
  if (!vec) return String(vec);
  const {
    head,
    tail,
    preset,
    stringPreset,
    read,
    quote
  } = this;
  let {
    raw,
    text
  } = vettro(vec, {
    head,
    tail,
    read: Qt(read, quote),
    hr: ELLIP
  });
  if (preset) fluoVector(text, {
    values: raw,
    preset,
    stringPreset,
    mutate: true
  });
  return liner(text, this);
}

const cosmetics$2 = function (o) {
  if (!o) return String(o);
  const entriesOptions = Object.assign({}, this, {
    discrete: true,
    bracket: false
  });
  const lines = cosmetics.call(entriesOptions, Object.entries(o));
  return liner(lines, this);
};

const decoString = x => quote(x.replace(/'/g, '\\\''));

const decoKey = x => /\W/.test(x) || isNumeric$1(x) ? decoString(x) : x;

const PRESET_VE = {
  delim: COSP,
  read: decoValue,
  bracket: BRACKET
};
const PRESET_OB = {
  dash: ':',
  delim: COSP,
  keyRead: decoKey,
  read: decoValue,
  bracket: BRACE
};

function decoValue(x) {
  if (x === void 0 || x === null) return x;
  const t = inferType(x);
  if (t === NUM || t === BOO) return x;
  if (t === STR) return decoString(x);
  if (t === ARRAY) return cosmetics$1.call(PRESET_VE, x);
  if (t === OBJECT) return cosmetics$2.call(PRESET_OB, x);
  return decoString(x.toString());
}

/***
 * @param {Object} p
 *
 * @param {string} [p.dash=', ']
 * @param {string} [p.delim=',\n']
 * @param {number} [p.keyQuote=NONE]
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.keyRead=decoKey]
 * @param {Function} [p.read=decoValue]
 *
 * @param {boolean} [p.objectify=false]
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetEntries = p => {
  p.dash = p.dash || COSP;
  p.delim = p.delim || COLF;
  p.keyRead = p.keyRead || decoKey;
  p.read = p.read || decoValue;
  p.bracket = BRACKET;
  p.discrete = true;
  return p;
};
/***
 * @param {Object} p
 *
 * @param {number} [p.keyQuote]
 * @param {string} [p.dash=', ']
 * @param {string} [p.delim=',\n']
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.keyRead=decoKey]
 * @param {Function} [p.read=decoValue]

 * @param {boolean} [p.objectify=true]
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetEntriesAsObject = p => {
  p.dash = p.dash || ':' + SP;
  p.delim = p.delim || COLF;
  p.keyRead = p.keyRead || decoKey;
  p.read = p.read || decoValue;
  p.bracket = NONE;
  p.discrete = true;
  return p;
};

/**
 * @param {Object} p
 *
 * @param {string} [p.dash=': ']
 * @param {string} [p.delim=',\n']
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.keyRead=decoKey]
 * @param {Function} [p.read=decoValue]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetObject = p => {
  p.dash = p.dash || ':' + SP;
  p.delim = p.delim || COLF;
  p.keyRead = p.keyRead || decoKey;
  p.read = p.read || decoValue;
  p.bracket = BRACKET;
  return p;
};

/**
 * @param {Object} p
 *
 * @param {string} [p.delim=', ']
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.read=decoValue]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetVector = p => {
  p.delim = p.delim || COSP;
  p.read = p.read || decoValue;
  p.bracket = BRACKET;
  return p;
};

/**
 * @param {Object} p
 *
 * @param {string} [p.delim=', ']
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.read=decoValue]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetMatrix = p => {
  p.delim = p.delim || COSP;
  p.read = p.read || decoValue;
  p.bracket = BRACKET;
  p.discrete = true;
  return p;
};

/**
 * @param {Object} p
 *
 * @param {string} [p.delim=', ']
 * @param {number} [p.keyQuote=NONE]
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.read=decoValue]
 * @param {Function} [p.keyRead=decoKey]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetCrostab = p => {
  var _p$level;

  p.delim = p.delim || COSP;
  p.read = p.read || decoValue;
  p.keyRead = p.keyRead || decoKey;
  p.level = ((_p$level = p.level) !== null && _p$level !== void 0 ? _p$level : 0) + 1;
  return p;
};

/**
 * @param {Object} p
 *
 * @param {string} [p.delim=', ']
 * @param {number} [p.keyQuote=NONE]
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.read=decoValue]
 * @param {Function} [p.keyRead=decoKey]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetTable = p => {
  var _p$level;

  p.delim = p.delim || COSP;
  p.read = p.read || decoValue;
  p.keyRead = p.keyRead || decoKey;
  p.level = ((_p$level = p.level) !== null && _p$level !== void 0 ? _p$level : 0) + 1;
  return p;
};

/**
 *
 * @param {Object} p
 *
 * @param {string} [p.delim=', ']
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.keyRead=decoKey]
 * @param {Function} [p.read=decoValue]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetSamples = p => {
  p.indexed = false;
  p.delim = p.delim || COSP;
  p.keyRead = p.keyRead || decoKey;
  p.read = p.read || decoValue;
  p.bracket = NONE;
  p.discrete = true;
  return p;
};

export { presetCrostab, presetEntries, presetEntriesAsObject, presetMatrix, presetObject, presetSamples, presetTable, presetVector };
