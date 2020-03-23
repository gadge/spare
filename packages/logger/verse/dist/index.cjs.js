'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var decoVector = require('@spare/deco-vector');
var decoEntries = require('@spare/deco-entries');
var decoObject = require('@spare/deco-object');
var decoMatrix = require('@spare/deco-matrix');
var decoSamples = require('@spare/deco-samples');
var tableInit = require('@analys/table-init');
var crostabInit = require('@analys/crostab-init');
var bracket = require('@spare/bracket');
var decoUtil = require('@spare/deco-util');
var enumBrackets = require('@spare/enum-brackets');
var presetVerse = require('@spare/preset-verse');
var quote = require('@spare/quote');

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
   * @param {Function} [p.read=smartValueRead]
   *
   * @param {number} [p.level]
   *
   * @return {string}
   */
  static vector(vector, p = {}) {
    return decoVector.cosmetics.call(presetVerse.presetVector(p), vector);
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
   * @param {Function} [p.keyRead=smartKeyRead]
   * @param {Function} [p.read=smartValueRead]
   *
   * @param {boolean} [p.objectify=false]
   * @param {number} [p.level]
   *
   * @return {string}
   */


  static entries(entries, p = {}) {
    var _p;

    if (!((_p = p) === null || _p === void 0 ? void 0 : _p.objectify)) return decoEntries.cosmetics.call(presetVerse.presetEntries(p), entries);
    p = presetVerse.presetEntriesAsObject(p);
    const {
      delim,
      level
    } = p;
    const lines = decoEntries.cosmetics.call(presetVerse.presetEntriesAsObject(p), entries);
    return decoUtil.liner(lines, {
      bracket: enumBrackets.BRACE,
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
   * @param {Function} [p.read=smartValueRead]
   *
   * @param {number} [p.level]
   *
   * @returns {string}
   */


  static object(o, p = {}) {
    return decoObject.cosmetics.call(presetVerse.presetObject(p), o);
  }
  /**
   * @param {*[][]} matrix
   * @param {Object} p
   *
   * @param {string} [p.delim=', ']
   * @param {number} [p.quote=NONE]
   *
   * @param {Function} [p.read=smartValueRead]
   *
   * @param {number} [p.level]
   *
   * @returns {string}
   */


  static matrix(matrix, p = {}) {
    var _joinLines;

    p = presetVerse.presetMatrix(p);
    const {
      delim,
      level
    } = p;
    const lines = decoMatrix.cosmetics.call(p, matrix);
    return _joinLines = decoUtil.joinLines(lines, delim, level), bracket.bracket(_joinLines);
  }
  /**
   * @param {Object[]} samples
   * @param {Object} p
   *
   * @param {string} [p.delim=', ']
   * @param {number} [p.quote=NONE]
   *
   * @param {Function} [p.read=smartValueRead]
   *
   * @param {number} [p.level]
   *
   * @returns {string}
   */


  static samples(samples, p = {}) {
    var _joinLines2;

    p = presetVerse.presetSamples(p);
    const {
      delim,
      level
    } = p;
    const lines = decoSamples.cosmetics.call(p, samples);
    return _joinLines2 = decoUtil.joinLines(lines, delim, level), bracket.bracket(_joinLines2);
  }
  /***
   * @param {[*,*][]} entries
   * @param {Object} p
   *
   * @param {string} [p.dash=', ']
   * @param {string} [p.delim=',\n']
   * @param {number} [p.keyQuote=NONE]
   * @param {number} [p.quote=NONE]
   *
   * @param {Function} [p.keyRead=smartKeyRead]
   * @param {Function} [p.read=smartValueRead]
    * @param {boolean} [p.objectify=true]
   * @param {number} [p.level]
   *
   * @returns {string}
   */


  static entriesAsObject(entries, p = {}) {
    p = presetVerse.presetEntriesAsObject(p);
    const {
      delim,
      level
    } = p;
    const lines = decoEntries.cosmetics.call(p, entries);
    return decoUtil.liner(lines, {
      bracket: enumBrackets.BRACE,
      delim,
      level
    });
  }
  /**
   * @param {Object} crostab
   * @param {Object} p
   *
   * @param {string} [p.delim=', ']
   * @param {number} [p.keyQuote=NONE]
   * @param {number} [p.quote=NONE]
   *
   * @param {Function} [p.read=smartValueRead]
   *
   * @param {number} [p.level]
   *
   * @returns {string}
   */


  static crostab(crostab, p = {}) {
    var _crostab, _joinLines3;

    p = presetVerse.presetCrostab(p);
    const {
      side,
      head,
      rows
    } = (_crostab = crostab, crostabInit.matchSlice(_crostab));
    const {
      delim,
      level,
      keyQuote
    } = p;
    const lines = [quote.qt(SIDE, keyQuote) + ': ' + Verse.vector(side, p), quote.qt(HEAD, keyQuote) + ': ' + Verse.vector(head, p), quote.qt(ROWS, keyQuote) + ': ' + Verse.matrix(rows, p)];
    return _joinLines3 = decoUtil.joinLines(lines, delim, level - 1), bracket.brace(_joinLines3);
  }
  /**
   * @param {Object} table
   * @param {Object} p
   *
   * @param {string} [p.delim=', ']
   * @param {number} [p.keyQuote=NONE]
   * @param {number} [p.quote=NONE]
   *
   * @param {Function} [p.read=smartValueRead]
   *
   * @param {number} [p.level]
   *
   * @returns {string}
   */


  static table(table, p = {}) {
    var _table, _joinLines4;

    p = presetVerse.presetTable(p);
    const {
      head,
      rows
    } = (_table = table, tableInit.matchSlice(_table));
    const {
      delim,
      level,
      keyQuote
    } = p;
    const lines = [quote.qt(HEAD, keyQuote) + ': ' + Verse.vector(head, p), quote.qt(ROWS, keyQuote) + ': ' + Verse.matrix(rows, p)];
    return _joinLines4 = decoUtil.joinLines(lines, delim, level - 1), bracket.brace(_joinLines4);
  }

}

exports.Verse = Verse;
