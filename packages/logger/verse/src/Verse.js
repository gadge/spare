import { cosmetics as cosmeticsVector } from '@spare/deco-vector'
import { cosmetics as cosmeticsEntries } from '@spare/deco-entries'
import { cosmetics as cosmeticsObject } from '@spare/deco-object'
import { cosmetics as cosmeticsMatrix } from '@spare/deco-matrix'
import { cosmetics as cosmeticsSamples } from '@spare/deco-samples'
import { matchSlice as matchSliceTable } from '@analys/table-init'
import { matchSlice as matchSliceCrostab } from '@analys/crostab-init'
import { brace, bracket as doBracket } from '@spare/bracket'
import { joinLines, liner } from '@spare/deco-util'
import { BRACE } from '@spare/enum-brackets'
import {
  presetCrostab,
  presetEntries,
  presetEntriesAsObject,
  presetMatrix,
  presetObject,
  presetSamples,
  presetTable,
  presetVector
} from '@spare/preset-verse'

const SIDE = 'side', HEAD = 'head', ROWS = 'rows'

export class Verse {
  /**
   * @param {Array} vector
   * @param {Object} p
   * @param {Function} [p.read]
   * @param {string} [p.delim=', ']
   * @param {string} [p.quote='\'']
   * @param {number} [p.level]
   * @return {string}
   */
  static vector (vector, p = {}) {
    return cosmeticsVector.call(presetVector(p), vector)
  }

  /**
   *
   * @param {[*,*][]} entries
   * @param {Object} p
   * @param {Function} [p.keyRead]
   * @param {Function} [p.read]
   * @param {string} [p.keyQuote]
   * @param {string} [p.quote='\'']
   * @param {string} [p.dash=', ']
   * @param {string} [p.delim=',\n']
   * @param {boolean} [p.objectify=false]
   * @param {number} [p.level]
   * @return {string}
   */
  static entries (entries, p = {}) {
    if (!p?.objectify) return cosmeticsEntries.call(presetEntries(p), entries)
    p = presetEntriesAsObject(p)
    const { delim, level } = p
    const lines = cosmeticsEntries.call(presetEntriesAsObject(p), entries)
    return liner(lines, { bracket: BRACE, delim, level })
  }

  /**
   * @param {Object} o
   * @param {Object} p
   * @param {Function} [p.keyRead=keyRead]
   * @param {Function} [p.read]
   * @param {string} [p.dash=': ']
   * @param {string} [p.delim=',\n']
   * @param {string} [p.quote='\'']
   * @param {number} [p.level]
   * @returns {string}
   */
  static object (o, p = {}) {
    return cosmeticsObject.call(presetObject(p), o)
  }

  /**
   * @param {*[][]} matrix
   * @param {Object} p
   * @param {Function} [p.read]
   * @param {string} [p.delim=', ']
   * @param {string} [p.quote='\'']
   * @param {number} [p.level]
   * @returns {string}
   */
  static matrix (matrix, p = {}) {
    p = presetMatrix(p)
    const { delim, level } = p
    const lines = cosmeticsMatrix.call(p, matrix)
    return joinLines(lines, delim, level) |> doBracket
  }

  /**
   * @param {Object[]} samples
   * @param {Object} p
   * @param {Function} [p.read]
   * @param {string} [p.delim=', ']
   * @param {string} [p.quote='\'']
   * @param {number} [p.level]
   * @returns {string}
   */
  static samples (samples, p = {}) {
    p = presetSamples(p)
    const { delim, level } = p
    const lines = cosmeticsSamples.call(p, samples)
    return joinLines(lines, delim, level) |> doBracket
  }

  /***
   * @param {[*,*][]} entries
   * @param {Object} p
   * @param {Function} [p.keyRead]
   * @param {Function} [p.read]
   * @param {string} [p.keyQuote]
   * @param {string} [p.dash=', ']
   * @param {string} [p.delim=',\n']
   * @param {string} [p.quote='\'']
   * @param {number} [p.level]
   * @returns {string}
   */
  static entriesAsObject (entries, p = {}) {
    p = presetEntriesAsObject(p)
    const { delim, level } = p
    const lines = cosmeticsEntries.call(p, entries)
    return liner(lines, { bracket: BRACE, delim, level })
  }

  /**
   * @param {Object} crostab
   * @param {Object} p
   * @param {Function} [p.read]
   * @param {string} [p.delim=', ']
   * @param {string} [p.quote='\'']
   * @param {number} [p.level]
   * @returns {string}
   */
  static crostab (crostab, p = {}) {
    p = presetCrostab(p)
    const { side, head, rows } = crostab |> matchSliceCrostab
    const { delim, level } = p
    const lines = [
      SIDE + ': ' + Verse.vector(side, p),
      HEAD + ': ' + Verse.vector(head, p),
      ROWS + ': ' + Verse.matrix(rows, p)
    ]
    return joinLines(lines, delim, level - 1) |> brace
  }

  /**
   * @param {Object} table
   * @param {Object} p
   * @param {Function} [p.read]
   * @param {string} [p.delim=', ']
   * @param {string} [p.quote='\'']
   * @param {number} [p.level]
   * @returns {string}
   */
  static table (table, p = {}) {
    p = presetTable(p)
    const { head, rows } = table |> matchSliceTable
    const { delim, level } = p
    const lines = [
      HEAD + ': ' + Verse.vector(head, p),
      ROWS + ': ' + Verse.matrix(rows, p)
    ]
    return joinLines(lines, delim, level - 1) |> brace
  }

}


