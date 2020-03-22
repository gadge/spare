'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var util = require('@spare/util');
var preci = require('@spare/preci');
var string = require('@spare/string');
var palett = require('palett');
var veho = require('veho');

class CrosTabX {
  /**
   *
   * @param {{side:*[],banner:*[],matrix:*[][],[title]:string}} crosTab
   * @param {?function(*):string} [read]
   * @param {{[read]:?function(*):string,[head]:?number,[tail]:?number}} [_s]
   * @param {{[read]:?function(*):string,[head]:?number,[tail]:?number}} [_b]
   * @param {{
   *          [on]:boolean,
   *          [mark]:{
   *            [max]:string|number[],
   *            [min]:string|number[],
   *            [na]:string|number[],
   *          },
   *          [direct]:number
   *         }} [visual]
   * @param {boolean} [ansi=false]
   * @param {boolean} [chinese=false]
   * @return {string}
   */
  static brief(crosTab, {
    read,
    side: _s = {
      read,
      head: 0,
      tail: 0
    },
    banner: _b = {
      read,
      head: 0,
      tail: 0
    },
    visual = {
      on: true,
      mark: {
        max: palett.Greys.grey.lighten_5,
        min: palett.Greys.grey.darken_1,
        na: palett.Palett.indigo.lighten_2
      },
      direct: 2
    },
    ansi = false,
    chinese = false
  } = {}) {
    var _visual, _s2, _b2;

    let {
      side,
      banner,
      matrix
    } = crosTab,
        title,
        cue;
    const [ht, wd] = veho.Mx.size(matrix);
    if (!ht || !wd) return util.AEU;
    const visualOn = (_visual = visual, util.isVisual(_visual));
    ansi = visualOn ? true : ansi;
    side = preci.Preci.fromArr(side, _s.head, _s.tail).stringify(_s.read).toList('..');
    banner = preci.Preci.fromArr(banner, _b.head, _b.tail).stringify(_b.read).toList('..');
    const {
      rawx,
      palx,
      wordx
    } = preci.destructPreX(matrix, (_s2 = _s, util.readCrop(_s2)), (_b2 = _b, util.readCrop(_b2)), {
      read,
      visual,
      ansi
    }, [ht, wd]);
    ({
      title,
      cue,
      side
    } = padSide(side, crosTab.title || '', ansi, chinese));
    const {
      head,
      blanc,
      rows
    } = preci.padTable(banner, wordx, rawx, palx, ansi, chinese);
    head.unshift(title);
    blanc.unshift(cue);
    veho.Ar.zip(side, rows, (s, row) => row.unshift(s));
    return [head.join(' | '), blanc.join('-+-')].concat(rows.map(row => row.join(' | '))).join(util.RN);
  }

}

const padSide = (side, title, ansi, chinese) => {
  if (chinese) return padSideCn(side, title, ansi);
  const ts = [title].concat(side),
        pad = util.maxLen(ts, ansi),
        cue = '-'.repeat(pad);
  title = util.rpad(title, pad, ansi);
  side = side.map(x => util.lpad(x, pad, ansi));
  return {
    title,
    cue,
    side
  };
};

const padSideCn = (side, title, ansi) => {
  const {
    dash,
    space
  } = util.zhChars,
        ts = [title].concat(side),
        pad = util.maxLen(ts, ansi),
        cn = ts.some(string.hasChn);

  if (cn) {
    title = util.rpad(string.toFullAngle(title), pad, ansi, space);
    const cue = dash.repeat(pad);
    side = side.map(x => util.lpad(string.toFullAngle(x), pad, ansi, space));
    return {
      title,
      cue,
      side
    };
  } else {
    return padSide(side, title, ansi);
  }
};

exports.CrosTabX = CrosTabX;
