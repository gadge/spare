'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var crostabInit = require('@analys/crostab-init');
var tableInit = require('@analys/table-init');
var bracket = require('@spare/bracket');
var decoEntries = require('@spare/deco-entries');
var decoMatrix = require('@spare/deco-matrix');
var decoObject = require('@spare/deco-object');
var decoSamples = require('@spare/deco-samples');
var decoVector = require('@spare/deco-vector');
var enumBrackets = require('@spare/enum-brackets');
var liner = require('@spare/liner');
var presetVerse = require('@spare/preset-verse');

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
   * @param {Function} [p.keyRead] - if objectify, default to decoKey, otherwise default to decoValue
   * @param {Function} [p.read=decoValue]
   *
   * @param {boolean} [p.objectify=false]
   * @param {number} [p.level]
   *
   * @return {string}
   */


  static entries(entries, p = {}) {
    const [preset, bracket] = (p === null || p === void 0 ? void 0 : p.objectify) ? [presetVerse.presetEntriesAsObject(p), enumBrackets.BRACE] : [presetVerse.presetEntries(p), enumBrackets.BRACKET];
    const {
      delim,
      level
    } = preset;
    const lines = decoEntries.cosmetics.call(preset, entries);
    return liner.liner(lines, {
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
    return decoObject.cosmetics.call(presetVerse.presetObject(p), o);
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

    p = presetVerse.presetMatrix(p);
    const {
      delim,
      level
    } = p;
    const lines = decoMatrix.cosmetics.call(p, matrix);
    return _joinLines = liner.joinLines(lines, delim, level), bracket.bracket(_joinLines);
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

    p = presetVerse.presetSamples(p);
    const {
      delim,
      level
    } = p;
    const lines = decoSamples.cosmetics.call(p, samples);
    return _joinLines2 = liner.joinLines(lines, delim, level), bracket.bracket(_joinLines2);
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

    p = presetVerse.presetCrostab(p);
    const {
      side,
      head,
      rows
    } = (_crostab = crostab, crostabInit.matchSlice(_crostab));
    const {
      delim,
      level,
      keyRead
    } = p;
    const [s, h, r] = keyRead ? [SIDE, HEAD, ROWS].map(keyRead) : [SIDE, HEAD, ROWS];
    const lines = [s + ': ' + Verse.vector(side, p), h + ': ' + Verse.vector(head, p), r + ': ' + Verse.matrix(rows, p)];
    return _joinLines3 = liner.joinLines(lines, delim, level - 1), bracket.brace(_joinLines3);
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

    p = presetVerse.presetTable(p);
    const {
      head,
      rows
    } = (_table = table, tableInit.matchSlice(_table));
    const {
      delim,
      level,
      keyRead
    } = p;
    const [h, r] = keyRead ? [HEAD, ROWS].map(keyRead) : [HEAD, ROWS];
    const lines = [h + ': ' + Verse.vector(head, p), r + ': ' + Verse.matrix(rows, p)];
    return _joinLines4 = liner.joinLines(lines, delim, level - 1), bracket.brace(_joinLines4);
  }

}

exports.Verse = Verse;
