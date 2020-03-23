import { cosmetics as cosmeticsVector } from '@spare/deco-vector'
import { cosmetics as cosmeticsEntries } from '@spare/deco-entries'
import { cosmetics as cosmeticsObject } from '@spare/deco-object'
import { cosmetics as cosmeticsMatrix } from '@spare/deco-matrix'
import { cosmetics as cosmeticsSamples } from '@spare/deco-samples'
import { matchSlice as matchSliceTable } from '@analys/table-init'
import { matchSlice as matchSliceCrostab } from '@analys/crostab-init'
import { brace, bracket as doBracket } from '@spare/bracket'
import { joinLines, liner } from '@spare/liner'
import { BRACE, BRACKET } from '@spare/enum-brackets'
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
import { qt } from '@spare/quote'

const SIDE = 'side', HEAD = 'head', ROWS = 'rows'

export class Verse {
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
  static vector (vector, p = {}) {
    return cosmeticsVector.call(presetVector(p), vector)
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
  static entries (entries, p = {}) {
    const [preset, bracket] = (p?.objectify)
      ? [presetEntriesAsObject(p), BRACE]
      : [presetEntries(p), BRACKET]
    const { delim, level } = preset
    const lines = cosmeticsEntries.call(preset, entries)
    return liner(lines, { bracket, delim, level })
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
  static object (o, p = {}) {
    return cosmeticsObject.call(presetObject(p), o)
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
  static matrix (matrix, p = {}) {
    p = presetMatrix(p)
    const { delim, level } = p
    const lines = cosmeticsMatrix.call(p, matrix)
    return joinLines(lines, delim, level) |> doBracket
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
  static samples (samples, p = {}) {
    p = presetSamples(p)
    const { delim, level } = p
    const lines = cosmeticsSamples.call(p, samples)
    return joinLines(lines, delim, level) |> doBracket
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
  static crostab (crostab, p = {}) {
    p = presetCrostab(p)
    const { side, head, rows } = crostab |> matchSliceCrostab
    const { delim, level, keyQuote } = p
    const lines = [
      qt(SIDE, keyQuote) + ': ' + Verse.vector(side, p),
      qt(HEAD, keyQuote) + ': ' + Verse.vector(head, p),
      qt(ROWS, keyQuote) + ': ' + Verse.matrix(rows, p)
    ]
    return joinLines(lines, delim, level - 1) |> brace
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
  static table (table, p = {}) {
    p = presetTable(p)
    const { head, rows } = table |> matchSliceTable
    const { delim, level, keyQuote } = p
    const lines = [
      qt(HEAD, keyQuote) + ': ' + Verse.vector(head, p),
      qt(ROWS, keyQuote) + ': ' + Verse.matrix(rows, p)
    ]
    return joinLines(lines, delim, level - 1) |> brace
  }

}


