import { enttro } from '@spare/enttro';
import { AEU, LF, RTSP } from '@spare/enum-chars';
import { liner, Liner } from '@spare/liner';
import { mattro } from '@spare/mattro';
import { entriesPadder } from '@spare/entries-padder';
import { tablePadder } from '@spare/table-padder';
import { vettro } from '@spare/vettro';
import { size } from '@vect/matrix';

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

    if (!((_entries = entries) === null || _entries === void 0 ? void 0 : _entries.length)) return liner([], option);
    const delim = LF;
    const {
      keyRead,
      read,
      head,
      tail,
      ansi,
      dash = RTSP,
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
    entries = pad ? entriesPadder(text, {
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

    if (!table) return AEU;
    let matrix = table.rows || table.matrix,
        banner = table.head || table.banner;
    const [height, width] = size(matrix),
          labelWidth = banner === null || banner === void 0 ? void 0 : banner.length;
    if (!height || !width || !labelWidth) return AEU;
    const delim = LF;
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
    const x = mattro(matrix, {
      top,
      bottom,
      left,
      right,
      height,
      width,
      read
    });
    const b = vettro(banner, {
      head: left,
      tail: right,
      read: headRead
    });
    let {
      head,
      hr,
      rows
    } = tablePadder(x.text, b.text, {
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

export { Markdown };
