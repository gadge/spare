import { matchSlice } from '@analys/crostab-init';
import { matchSlice as matchSlice$1 } from '@analys/table-init';
import { bracket, brace } from '@texting/bracket';
import { _decoEntries } from '@spare/deco-entries';
import { _decoMatrix } from '@spare/deco-matrix';
import { _decoObject } from '@spare/deco-object';
import { _decoSamples } from '@spare/deco-samples';
import { _decoVector } from '@spare/deco-vector';
import { BRACE, BRACKET } from '@texting/enum-brackets';
import { liner, joinLines } from '@texting/liner';
import { presetVector, presetEntriesAsObject, presetEntries, presetObject, presetMatrix, presetSamples, presetCrostab, presetTable } from '@spare/preset-verse';

const SIDE = 'side', HEAD = 'head', ROWS = 'rows';

class Verse {
  /**
   * @param {Array} vector
   * @param {Object} p
   * @param {string} [p.delim=', ']
   * @param {Function} [p.read=decoValue]
   * @param {number} [p.level]
   * @return {string}
   */
  static vector(vector, p = {}) {
    return _decoVector.call(presetVector(p), vector)
  }

  /**
   *
   * @param {[*,*][]} entries
   * @param {Object} p
   *
   * @param {string} [p.dash=', ']
   * @param {string} [p.delim=',\n']
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
    const [ preset, bracket ] = (p?.objectify)
      ? [ presetEntriesAsObject(p), BRACE ]
      : [ presetEntries(p), BRACKET ];
    const { delim, level } = preset;
    const lines = _decoEntries.call(preset, entries);
    return liner(lines, { bracket, delim, level })
  }

  /**
   * @param {Object} o
   * @param {Object} p
   *
   * @param {string} [p.dash=': ']
   * @param {string} [p.delim=',\n']
   *
   *
   * @param {Function} [p.keyRead=keyRead]
   * @param {Function} [p.read=decoValue]
   *
   * @param {number} [p.level]
   *
   * @returns {string}
   */
  static object(o, p = {}) { return _decoObject.call(presetObject(p), o) }

  /**
   * @param {*[][]} matrix
   * @param {Object} p
   *
   * @param {string} [p.delim=', ']
   *
   *
   * @param {Function} [p.read=decoValue]
   *
   * @param {number} [p.level]
   *
   * @returns {string}
   */
  static matrix(matrix, p = {}) {
    p = presetMatrix(p);
    const { delim, level } = p;
    const lines = _decoMatrix.call(p, matrix);
    return bracket(joinLines(lines, delim, level))
  }

  /**
   * @param {Object[]} samples
   * @param {Object} p
   *
   * @param {string} [p.delim=', ']
   *
   *
   * @param {Function} [p.read=decoValue]
   *
   * @param {number} [p.level]
   *
   * @returns {string}
   */
  static samples(samples, p = {}) {
    p = presetSamples(p);
    const { delim, level } = p;
    const lines = _decoSamples.call(p, samples);
    return bracket(joinLines(lines, delim, level))
  }

  /**
   * @param {Object} crostab
   * @param {Object} p
   *
   * @param {string} [p.delim=', ']
   *
   *
   *
   * @param {Function} [p.keyRead=decoKey]
   * @param {Function} [p.read=decoValue]
   *
   * @param {number} [p.level]
   *
   * @returns {string}
   */
  static crostab(crostab, p = {}) {
    p = presetCrostab(p);
    const { side, head, rows } = matchSlice(crostab);
    const { delim, level, keyRead } = p;
    const [ s, h, r ] = keyRead ? [ SIDE, HEAD, ROWS ].map(keyRead) : [ SIDE, HEAD, ROWS ];
    const lines = [
      s + ': ' + Verse.vector(side, p),
      h + ': ' + Verse.vector(head, p),
      r + ': ' + Verse.matrix(rows, p)
    ];
    return brace(joinLines(lines, delim, level - 1))
  }

  /**
   * @param {Object} table
   * @param {Object} p
   *
   * @param {string} [p.delim=', ']
   *
   *
   *
   * @param {Function} [p.keyRead=decoKey]
   * @param {Function} [p.read=decoValue]
   *
   * @param {number} [p.level]
   *
   * @returns {string}
   */
  static table(table, p = {}) {
    p = presetTable(p);
    const { head, rows } = matchSlice$1(table);
    // if (!head?.length) return brace()
    const { delim, level, keyRead } = p;
    const [ h, r ] = keyRead ? [ HEAD, ROWS ].map(keyRead) : [ HEAD, ROWS ];
    const lines = [
      h + ': ' + Verse.vector(head, p),
      r + ': ' + Verse.matrix(rows, p)
    ];
    return brace(joinLines(lines, delim, level - 1))
  }
}

export { Verse };
