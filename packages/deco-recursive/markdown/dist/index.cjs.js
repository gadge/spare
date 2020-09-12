'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vettro = require('@spare/vettro');
var enumChars = require('@spare/enum-chars');
var liner = require('@spare/liner');
var mattro = require('@spare/mattro');
var padTable = require('@spare/pad-table');
var matrix = require('@vect/matrix');

const HR_ENTRY = ['..', '..'];

/**
 *
 * @param {*} x
 * @return {string}
 */


const totx = x => `${x}`;

/**
 *
 * @param {*[]} entries
 * @param {number} [h] - head margin length
 * @param {number} [t] - tail margin length
 * @param {number} [l] - entries length
 * @returns {*[]}
 */
const marginCopy = (entries, h, t, l) => {
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


const marginMapper = (entries, keyMapper, valueMapper, h, t, l) => {
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


const marginMutate = (entries, keyMapper, valueMapper, h, t, l) => {
  l = l || (entries === null || entries === void 0 ? void 0 : entries.length);
  let s = l - t,
      ent;

  for (--h; h >= 0; h--) (ent = entries[h])[0] = keyMapper(ent[0], h), ent[1] = valueMapper(ent[1], h);

  for (--l; l >= s; l--) (ent = entries[l])[0] = keyMapper(ent[0], l), ent[1] = valueMapper(ent[1], l);

  return entries;
};

class Entrigin extends vettro.Vectogin {
  constructor(entries, head, tail, dash) {
    super(entries, head, tail, dash);
  }

  static build(entries, h = 0, t = 0) {
    var _entries;

    let d = true,
        l;
    if (!(l = (_entries = entries) === null || _entries === void 0 ? void 0 : _entries.length)) [entries, h, t, d] = [[], 0, 0, false];
    if (!h && !t || h >= l) [h, t, d] = [l, 0, false];
    return new Entrigin(marginCopy(entries, h, t, l), h, t, d);
  }

  map(keyMapper, valueMapper, mutate = false) {
    const {
      vec,
      head,
      tail
    } = this;
    return mutate ? this.reboot(marginMutate(vec, keyMapper, valueMapper, head, tail)) : this.clone(marginMapper(vec, keyMapper, valueMapper, head, tail));
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

const NONE = 0;
const PAR = 1,
      BRK = 2,
      BRC = 3,
      ANBR = 4;

const parenth = x => '(' + x + ')';

const bracket = x => '[' + x + ']';

const brace = x => '{' + x + '}';

const anglebr = x => '<' + x + '>';

const br = (x, mode) => {
  if (mode === PAR) return parenth(x);
  if (mode === BRK) return bracket(x);
  if (mode === BRC) return brace(x);
  if (mode === ANBR) return anglebr(x);
  return x;
};

/**
 *
 * @param {string[]} lines - input string[]
 * @param {string} delim - trailing punctuation added to each line
 * @param {number} level - level of indent to each line
 * @param {boolean} hover - first and last line hang up
 * @return {*}
 */

const joinLines = (lines, delim = '', level, hover = true) => {
  const IND = level > 0 ? enumChars.TB.repeat(level) : '';
  return hover ? `${enumChars.LF + IND + enumChars.TB}${lines === null || lines === void 0 ? void 0 : lines.join(delim + enumChars.LF + IND + enumChars.TB)}${delim + enumChars.LF + IND}` : `${IND + enumChars.TB}${lines === null || lines === void 0 ? void 0 : lines.join(delim + enumChars.LF + IND + enumChars.TB)}${delim}`;
};
const LINEFEED = /\n/;
const COMMA = /,/;

const linesHandler = function (lines) {
  const {
    discrete = false,
    delim = enumChars.LF,
    bracket = NONE,
    level = 0
  } = this;
  if (discrete) return lines;
  const hover = !!bracket;
  const joined = lines.length && LINEFEED.test(delim) ? joinLines(lines, COMMA.test(delim) ? enumChars.CO : '', level, hover) : lines.join(delim);
  return br(joined, bracket);
};
/**
 *
 * @param {Object} p
 * @param {boolean}       [p.discrete=false] - if true, return the input lines as string[]
 * @param {string}        [p.delim=LF] - trailing punctuation added to each line
 * @param {number|string} [p.bracket=NONE] - bracket added to the start and end of the entire rendered lines
 * @param {number}        [p.level=0] - level of indent to each line
 * @return { Function|function(string[]):string|string[] }
 */

const Liner = (p = {}) => linesHandler.bind(p);

const ANSI_ALPHA = /(?:(?:[a-zA-Z\d]*(?:;[-a-zA-Z\d\/#&.:=?%@~_]*)*)?)/;
const ANSI_BETA = /(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-ntqry=><~])/;
const ANSI = new RegExp(`[][[\\]()#;?]*(?:${ANSI_ALPHA.source}|${ANSI_BETA.source})`);
const ASTRAL = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
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

const hasAnsi = tx => ANSI.test(tx);

/**
 *
 * @type {Function|function(*):string}
 */
const protoType = Function.prototype.call.bind(Object.prototype.toString);

const isNumeric = x => !isNaN(x - parseFloat(x));

const ansiPadLength = (tx, pd) => hasAnsi(tx) ? tx.length + pd - lange(tx) : pd;

const lpad = String.prototype.padStart;
const rpad = String.prototype.padEnd;

const LPad = ({
  ansi = true,
  fill
} = {}) => ansi ? (tx, pd) => lpad.call(tx, ansiPadLength(tx, pd), fill) : (tx, pd) => lpad.call(tx, pd, fill);

const Pad = ({
  dock,
  ansi = true,
  fill
} = {}) => {
  if (!dock) {
    return ansi ? (tx, pd, v) => (isNumeric(v) ? lpad : rpad).call(tx, ansiPadLength(tx, pd), fill) : (tx, pd, v) => (isNumeric(v) ? lpad : rpad).call(tx, pd, fill);
  }

  let padder = dock < 0 ? lpad : rpad;
  return ansi ? (tx, pd) => padder.call(tx, ansiPadLength(tx, pd), fill) : (tx, pd) => padder.call(tx, pd, fill);
};

const max = (a, b) => a > b ? a : b;

const max$1 = function (entries) {
  const [kpi, vpi] = this;
  return entries.reduce((pe, ce, i) => (pe[0] = max(pe[0], kpi(ce[0], i)), pe[1] = max(pe[1], vpi(ce[1], i)), pe), [kpi(entries[0][0], 0), vpi(entries[0][1], 0)]);
};

const maxBy = (entries, kpi, vpi) => max$1.call([kpi, vpi], entries);

function duozipper(ea, eb) {
  let {
    key,
    value,
    lo,
    hi
  } = this;
  value = value || key, lo = lo || 0, hi = hi || (ea === null || ea === void 0 ? void 0 : ea.length);
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
  value = value || key, lo = lo || 0, hi = hi || (ea === null || ea === void 0 ? void 0 : ea.length);
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

const padEntries = (text, {
  raw,
  dye,
  ansi,
  fill
}) => {
  raw = raw || text;
  const len = ansi ? lange : x => x.length;
  const [kwd, vwd] = maxBy(text, len, len);
  const pad = Pad({
    ansi,
    fill
  }),
        lpad = LPad({
    ansi,
    fill
  });
  let zipper;
  return dye ? (zipper = Trizipper((tx, va, dy) => {
    var _lpad;

    return _lpad = lpad(tx, kwd), dy(_lpad);
  }, (tx, va, dy) => {
    var _pad;

    return _pad = pad(tx, vwd, va), dy(_pad);
  }), zipper(text, raw, dye)) : (zipper = Duozipper(tx => lpad(tx, kwd), (tx, va) => pad(tx, vwd, va)), zipper(text, raw));
};

class Markdown {
  /***
   *
   * @param {[*,*][]} entries
   * @param {Object} option
   *
   * @param {string} [option.dash=': ']
   *
   * @param {Function} [option.keyRead]
   * @param {Function} [option.read]
   *
   * @param {number} [option.head]
   * @param {number} [option.tail]
   *
   * @param {boolean} [option.ansi]
   * @param {number} [option.level=0]
   *
   * @param {string} [option.pad]
   * @param {string} [option.prefix]
   * @param {string} [option.suffix]
   *
   * @returns {string}
   */
  static entries(entries = [], option = {}) {
    var _entries, _entries$map;

    if (!((_entries = entries) === null || _entries === void 0 ? void 0 : _entries.length)) return liner.liner([], option);
    const delim = enumChars.LF;
    const {
      keyRead,
      read,
      head,
      tail,
      ansi,
      dash = enumChars.RTSP,
      level,
      prefix,
      suffix,
      pad
    } = option;
    const {
      raw,
      text
    } = enttro(entries, {
      head,
      tail,
      keyRead,
      read,
      hr: HR_ENTRY
    });
    entries = pad ? padEntries(text, {
      raw,
      ansi
    }) : text;
    return _entries$map = entries.map(([k, v]) => (prefix !== null && prefix !== void 0 ? prefix : '') + k + dash + v.trimRight() + (suffix !== null && suffix !== void 0 ? suffix : '')), Liner({
      delim,
      level
    })(_entries$map);
  }
  /***
   *
   * @param {Object} table
   * @param {Object} option
   *
   *
   * @param {Function} [option.read]
   * @param {Function} [option.headRead]
   *
   * @param {number} [option.top]
   * @param {number} [option.bottom]
   * @param {number} [option.left]
   * @param {number} [option.right]
   *
   * @param {boolean} [option.ansi=true]
   * @param {boolean} [option.fullAngle]
   * @param {number} [option.level=0]
   *
   * @returns {string}
   */


  static table(table, option = {}) {
    var _ref;

    if (!table) return enumChars.AEU;
    let matrix$1 = table.rows || table.matrix,
        banner = table.head || table.banner;
    const [height, width] = matrix.size(matrix$1),
          labelWidth = banner === null || banner === void 0 ? void 0 : banner.length;
    if (!height || !width || !labelWidth) return enumChars.AEU;
    const delim = enumChars.LF;
    const {
      read,
      headRead,
      top,
      left,
      bottom,
      right,
      ansi,
      fullAngle,
      level
    } = option;
    const x = mattro.mattro(matrix$1, {
      top,
      bottom,
      left,
      right,
      height,
      width,
      read
    });
    const b = vettro.vettro(banner, {
      head: left,
      tail: right,
      read: headRead
    });
    let {
      head,
      hr,
      rows
    } = padTable.padTable(x.text, b.text, {
      raw: x.raw,
      ansi,
      fullAngle
    });
    return _ref = ['| ' + head.join(' | ') + ' |', '| ' + hr.join(' | ') + ' |', ...rows.map(row => '| ' + row.join(' | ') + ' |')], Liner({
      delim,
      level
    })(_ref);
  }

}

exports.Markdown = Markdown;
