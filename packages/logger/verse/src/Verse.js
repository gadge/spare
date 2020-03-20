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

export class Verse {
  static vector (vector, {
    abstract, delim = ', ', quote = '\'', level
  } = {}) { return cosmeticsVector.call({ abstract, delim, quote, bracket: BRACKET, level }, vector) }

  static entries (entries, {
    keyAbstract = keyer, abstract, dash = ', ', delim = ',\n', quote = '\'', level
  } = {}) { return cosmeticsEntries.call({ keyAbstract, abstract, dash, delim, quote, bracket: BRACKET, level }, entries) }

  static object (o, {
    keyAbstract = keyer, abstract, dash = ': ', delim = ',\n', quote = '\'', level
  } = {}) { return cosmeticsObject.call({ keyAbstract, abstract, dash, delim, quote, bracket: BRACE, level }, o) }

  static matrix (matrix, {
    abstract, delim = ', ', quote = '\'', level = 0,
  } = {}) {
    const lines = cosmeticsMatrix
      .call({ abstract, delim, quote, bracket: BRACKET, discrete: true }, matrix)
    return joinLines(lines, level) |> doBracket
  }

  static crostab (table, {
    abstract, delim = ', ', quote = '\'', level = 0,
  } = {}) {
    const { side, head, rows } = table |> matchSliceCrostab
    const sideText = Verse.vector(side)
    const headText = Verse.vector(head)
    const rowsText = Verse.matrix(rows, { abstract, delim, quote, level: level + 1 })
    const lines = [
      'side' + ': ' + sideText,
      'head' + ': ' + headText,
      'rows' + ': ' + rowsText
    ]
    return joinLines(lines, level) |> brace
  }

  static table (table, {
    abstract, delim = ', ', quote = '\'', level = 0,
  } = {}) {
    const { head, rows } = table |> matchSliceTable
    const headText = Verse.vector(head)
    const rowsText = Verse.matrix(rows, { abstract, delim, quote, level: level + 1 })
    const lines = [
      'head' + ': ' + headText,
      'rows' + ': ' + rowsText
    ]
    return joinLines(lines, level) |> brace
  }

  static samples (samples, {
    abstract, delim = ', ', quote = '\'', level = 0
  } = {}) {
    const lines = cosmeticsSamples
      .call({ indexes: false, abstract, delim, quote, bracket: false, discrete: true }, samples)
    return joinLines(lines, level) |> doBracket
  }

  static entriesAsObject (entries, {
    keyAbstract = keyer, abstract,
    dash = ': ', delim = ',\n', keyQuote = null, quote = '\'', level = 0,
  } = {}) {
    const lines = cosmeticsEntries
      .call({ keyAbstract, abstract, dash, delim, keyQuote, quote, bracket: false, discrete: true }, entries)
    return liner(lines, { bracket: BRACE, delim, level })
  }

}


