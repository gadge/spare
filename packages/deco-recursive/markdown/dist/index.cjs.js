'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var entriesMargin = require('@spare/entries-margin');
var entriesPadder = require('@spare/entries-padder');
var enumChars = require('@spare/enum-chars');
var liner = require('@spare/liner');
var matrixMargin = require('@spare/matrix-margin');
var tablePadder = require('@spare/table-padder');
var vectorMargin = require('@spare/vector-margin');
var matrix = require('@vect/matrix');

const HR_ENTRY = ['..', '..'];
class Markdown {
  /***
   *
   * @param {Object} ob
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
  static object(ob = {}, option = {}) {
    return Markdown.entries(Object.entries(ob), option);
  }
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

    if (!((_entries = entries) != null && _entries.length)) return liner.liner([], option);
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
    } = entriesMargin.enttro(entries, {
      head,
      tail,
      keyRead,
      read,
      rule: HR_ENTRY
    });
    entries = pad ? entriesPadder.entriesPadder(text, {
      raw,
      ansi
    }) : text;
    return _entries$map = entries.map(([k, v]) => (prefix ?? '') + k + dash + v.trimRight() + (suffix ?? '')), liner.Liner({
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
          labelWidth = banner == null ? void 0 : banner.length;
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
    const x = matrixMargin.mattro(matrix$1, {
      top,
      bottom,
      left,
      right,
      height,
      width,
      read
    });
    const b = vectorMargin.vettro(banner, {
      head: left,
      tail: right,
      read: headRead
    });
    let {
      head,
      rule,
      rows
    } = tablePadder.tablePadder(x.alt, b.alt, {
      raw: x.raw,
      ansi,
      fullAngle
    });
    return _ref = ['| ' + head.join(' | ') + ' |', '| ' + rule.join(' | ') + ' |', ...rows.map(row => '| ' + row.join(' | ') + ' |')], liner.Liner({
      delim,
      level
    })(_ref);
  }

}

exports.Markdown = Markdown;
