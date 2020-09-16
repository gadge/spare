'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enttro = require('@spare/enttro');
var enumChars = require('@spare/enum-chars');
var liner = require('@spare/liner');
var mattro = require('@spare/mattro');
var padEntries = require('@spare/pad-entries');
var padTable = require('@spare/pad-table');
var vettro = require('@spare/vettro');
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
    } = enttro.enttro(entries, {
      head,
      tail,
      keyRead,
      read,
      hr: HR_ENTRY
    });
    entries = pad ? padEntries.padEntries(text, {
      raw,
      ansi
    }) : text;
    return _entries$map = entries.map(([k, v]) => (prefix !== null && prefix !== void 0 ? prefix : '') + k + dash + v.trimRight() + (suffix !== null && suffix !== void 0 ? suffix : '')), liner.Liner({
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
    return _ref = ['| ' + head.join(' | ') + ' |', '| ' + hr.join(' | ') + ' |', ...rows.map(row => '| ' + row.join(' | ') + ' |')], liner.Liner({
      delim,
      level
    })(_ref);
  }

}

exports.Markdown = Markdown;
