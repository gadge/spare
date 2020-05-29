import { matchSlice } from '@analys/crostab-init';
import { matchSlice as matchSlice$1 } from '@analys/table-init';
import { bracket, brace } from '@spare/bracket';
import { cosmetics as cosmetics$1 } from '@spare/deco-entries';
import { cosmetics as cosmetics$3 } from '@spare/deco-matrix';
import { cosmetics as cosmetics$2 } from '@spare/deco-object';
import { cosmetics as cosmetics$4 } from '@spare/deco-samples';
import { cosmetics } from '@spare/deco-vector';
import { BRACE, BRACKET } from '@spare/enum-brackets';
import { liner, joinLines } from '@spare/liner';
import { presetVector, presetEntriesAsObject, presetEntries, presetObject, presetMatrix, presetSamples, presetCrostab, presetTable } from '@spare/preset-verse';

const SIDE = 'side',
      HEAD = 'head',
      ROWS = 'rows';
class Verse {
  /**
   * @param {Array} vector
   * @param {Object} p
   *
   * @param {string} [p.delim=', ']
   * @param {number} [p.quote=NONE]
   *
   * @param {Function} [p.read=decoValue]
   *
   * @param {number} [p.level]
   *
   * @return {string}
   */
  static vector(vector, p = {}) {
    return cosmetics.call(presetVector(p), vector);
  }
  /**
   *
   * @param {[*,*][]} entries
   * @param {Object} p
   *
   * @param {string} [p.dash=', ']
   * @param {string} [p.delim=',\n']
   * @param {number} [p.keyQuote=NONE]
   * @param {number} [p.quote=NONE]
   *
   * @param {Function} [p.keyRead] - if objectify, default to decoKey, otherwise default to decoValue
   * @param {Function} [p.read=decoValue]
   *
   * @param {boolean} [p.objectify=false]
   * @param {number} [p.level]
   *
   * @return {string}
   */


  static entries(entries, p = {}) {
    const [preset, bracket] = (p === null || p === void 0 ? void 0 : p.objectify) ? [presetEntriesAsObject(p), BRACE] : [presetEntries(p), BRACKET];
    const {
      delim,
      level
    } = preset;
    const lines = cosmetics$1.call(preset, entries);
    return liner(lines, {
      bracket,
      delim,
      level
    });
  }
  /**
   * @param {Object} o
   * @param {Object} p
   *
   * @param {string} [p.dash=': ']
   * @param {string} [p.delim=',\n']
   * @param {number} [p.quote=NONE]
   *
   * @param {Function} [p.keyRead=keyRead]
   * @param {Function} [p.read=decoValue]
   *
   * @param {number} [p.level]
   *
   * @returns {string}
   */


  static object(o, p = {}) {
    return cosmetics$2.call(presetObject(p), o);
  }
  /**
   * @param {*[][]} matrix
   * @param {Object} p
   *
   * @param {string} [p.delim=', ']
   * @param {number} [p.quote=NONE]
   *
   * @param {Function} [p.read=decoValue]
   *
   * @param {number} [p.level]
   *
   * @returns {string}
   */


  static matrix(matrix, p = {}) {
    var _joinLines;

    p = presetMatrix(p);
    const {
      delim,
      level
    } = p;
    const lines = cosmetics$3.call(p, matrix);
    return _joinLines = joinLines(lines, delim, level), bracket(_joinLines);
  }
  /**
   * @param {Object[]} samples
   * @param {Object} p
   *
   * @param {string} [p.delim=', ']
   * @param {number} [p.quote=NONE]
   *
   * @param {Function} [p.read=decoValue]
   *
   * @param {number} [p.level]
   *
   * @returns {string}
   */


  static samples(samples, p = {}) {
    var _joinLines2;

    p = presetSamples(p);
    const {
      delim,
      level
    } = p;
    const lines = cosmetics$4.call(p, samples);
    return _joinLines2 = joinLines(lines, delim, level), bracket(_joinLines2);
  }
  /**
   * @param {Object} crostab
   * @param {Object} p
   *
   * @param {string} [p.delim=', ']
   * @param {number} [p.keyQuote=NONE]
   * @param {number} [p.quote=NONE]
   *
   * @param {Function} [p.keyRead=decoKey]
   * @param {Function} [p.read=decoValue]
   *
   * @param {number} [p.level]
   *
   * @returns {string}
   */


  static crostab(crostab, p = {}) {
    var _crostab, _joinLines3;

    p = presetCrostab(p);
    const {
      side,
      head,
      rows
    } = (_crostab = crostab, matchSlice(_crostab));
    const {
      delim,
      level,
      keyRead
    } = p;
    const [s, h, r] = keyRead ? [SIDE, HEAD, ROWS].map(keyRead) : [SIDE, HEAD, ROWS];
    const lines = [s + ': ' + Verse.vector(side, p), h + ': ' + Verse.vector(head, p), r + ': ' + Verse.matrix(rows, p)];
    return _joinLines3 = joinLines(lines, delim, level - 1), brace(_joinLines3);
  }
  /**
   * @param {Object} table
   * @param {Object} p
   *
   * @param {string} [p.delim=', ']
   * @param {number} [p.keyQuote=NONE]
   * @param {number} [p.quote=NONE]
   *
   * @param {Function} [p.keyRead=decoKey]
   * @param {Function} [p.read=decoValue]
   *
   * @param {number} [p.level]
   *
   * @returns {string}
   */


  static table(table, p = {}) {
    var _table, _joinLines4;

    p = presetTable(p);
    const {
      head,
      rows
    } = (_table = table, matchSlice$1(_table));
    const {
      delim,
      level,
      keyRead
    } = p;
    const [h, r] = keyRead ? [HEAD, ROWS].map(keyRead) : [HEAD, ROWS];
    const lines = [h + ': ' + Verse.vector(head, p), r + ': ' + Verse.matrix(rows, p)];
    return _joinLines4 = joinLines(lines, delim, level - 1), brace(_joinLines4);
  }

}

export { Verse };
