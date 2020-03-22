import { cosmetics as cosmeticsVector } from '@spare/deco-vector'
import { cosmetics as cosmeticsEntries } from '@spare/deco-entries'
import { cosmetics as cosmeticsObject } from '@spare/deco-object'
import { cosmetics as cosmeticsMatrix } from '@spare/deco-matrix'
import { cosmetics as cosmeticsSamples } from '@spare/deco-samples'
import { joinLines, liner } from '@spare/deco-util'
import { matchSlice as matchSliceTable } from '@analys/table-init'
import { matchSlice as matchSliceCrostab } from '@analys/crostab-init'
import { brace, bracket as doBracket } from '@spare/bracket'
import { isNumeric } from '@typen/num-loose'
import { BRACE, BRACKET } from '@spare/enum-brackets'

const keyer = x => (/\W/.test(x) || isNumeric(x)) ? ('\'' + x + '\'') : x
const SIDE = 'side', HEAD = 'head', ROWS = 'rows'

export class Verse {
  static vector (vector, {
    read, delim = ', ', quote = '\'', level
  } = {}) { return cosmeticsVector.call({ read, delim, quote, bracket: BRACKET, level }, vector) }

  static entries (entries, {
    keyRead = keyer, read, dash = ', ', delim = ',\n', quote = '\'', level
  } = {}) { return cosmeticsEntries.call({ keyRead, read, dash, delim, quote, bracket: BRACKET, level }, entries) }

  static object (o, {
    keyRead = keyer, read, dash = ': ', delim = ',\n', quote = '\'', level
  } = {}) { return cosmeticsObject.call({ keyRead, read, dash, delim, quote, bracket: BRACE, level }, o) }

  static matrix (matrix, {
    read, delim = ', ', quote = '\'', level = 0,
  } = {}) {
    const lines = cosmeticsMatrix
      .call({ read, delim, quote, bracket: BRACKET, discrete: true }, matrix)
    return joinLines(lines, delim, level) |> doBracket
  }

  static crostab (table, {
    read, delim = ', ', quote = '\'', level = 0,
  } = {}) {
    const { side, head, rows } = table |> matchSliceCrostab
    const sideText = Verse.vector(side, { read, delim, quote, level: level + 1 })
    const headText = Verse.vector(head, { read, delim, quote, level: level + 1 })
    const rowsText = Verse.matrix(rows, { read, delim, quote, level: level + 1 })
    const lines = [
      SIDE + ': ' + sideText,
      HEAD + ': ' + headText,
      ROWS + ': ' + rowsText
    ]
    return joinLines(lines, delim, level) |> brace
  }

  static table (table, {
    read, delim = ', ', quote = '\'', level = 0,
  } = {}) {
    const { head, rows } = table |> matchSliceTable
    const headText = Verse.vector(head, { read, delim, quote, level: level + 1 })
    const rowsText = Verse.matrix(rows, { read, delim, quote, level: level + 1 })
    const lines = [
      HEAD + ': ' + headText,
      ROWS + ': ' + rowsText
    ]
    return joinLines(lines, delim, level) |> brace
  }

  static samples (samples, {
    read, delim = ', ', quote = '\'', level = 0
  } = {}) {
    const lines = cosmeticsSamples
      .call({ indexes: false, read, delim, quote, bracket: false, discrete: true }, samples)
    return joinLines(lines, delim, level) |> doBracket
  }

  static entriesAsObject (entries, {
    keyRead = keyer, read,
    dash = ': ', delim = ',\n', keyQuote = null, quote = '\'', level = 0,
  } = {}) {
    const lines = cosmeticsEntries
      .call({ keyRead, read, dash, delim, keyQuote, quote, bracket: false, discrete: true }, entries)
    return liner(lines, { bracket: BRACE, delim, level })
  }

}


