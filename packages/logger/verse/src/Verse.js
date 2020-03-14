import { cosmetics as cosmeticsVector } from '@spare/deco-vector'
import { cosmetics as cosmeticsEntries } from '@spare/deco-entries'
import { cosmetics as cosmeticsMatrix } from '@spare/deco-matrix'
import { cosmetics as cosmeticsSamples } from '@spare/deco-samples'
import { joinLines } from '@spare/deco-util'
import { matchSlice as matchSliceTable } from '@analys/table-init'
import { matchSlice as matchSliceCrostab } from '@analys/crostab-init'

export class Verse {
  static vector = (vector, {
    abstract, delimiter = ', ', quote = '\'',
  } = {}) => cosmeticsVector.call({ abstract, delimiter, quote, bracket: true }, vector)

  static entries = (entries, {
    keyAbstract, abstract, dash = ', ', delimiter = ',\n', quote = '\'',
  } = {}) => cosmeticsEntries.call({ keyAbstract, abstract, dash, delimiter, quote, bracket: true }, entries)

  static entriesAsObject = (entries, {
    keyAbstract, abstract, dash = ': ', delimiter = ',\n', keyQuote = null, quote = '\'', level = 0,
  } = {}) => {
    const lines = cosmeticsEntries
      .call({ keyAbstract, abstract, dash, delimiter, keyQuote, quote, bracket: false, discrete: true }, entries)
    return '{' + joinLines(lines, level) + '}'
  }

  static matrix = (matrix, {
    abstract, delimiter = ', ', quote = '\'', level = 0,
  } = {}) => {
    const lines = cosmeticsMatrix
      .call({ abstract, delimiter, quote, bracket: true, discrete: true }, matrix)
    return '[' + joinLines(lines, level) + ']'
  }

  static crostab = (table, {
    abstract, delimiter = ', ', quote = '\'', level = 0,
  } = {}) => {
    const { side, head, rows } = table |> matchSliceCrostab
    const sideText = Verse.vector(side)
    const headText = Verse.vector(head)
    const rowsText = Verse.matrix(rows, { abstract, delimiter, quote, level: level + 1 })
    const lines = [
      'side' + ': ' + sideText,
      'head' + ': ' + headText,
      'rows' + ': ' + rowsText
    ]
    return '{' + joinLines(lines, level) + '}'
  }

  static table = (table, {
    abstract, delimiter = ', ', quote = '\'', level = 0,
  } = {}) => {
    const { head, rows } = table |> matchSliceTable
    const headText = Verse.vector(head)
    const rowsText = Verse.matrix(rows, { abstract, delimiter, quote, level: level + 1 })
    const lines = [
      'head' + ': ' + headText,
      'rows' + ': ' + rowsText
    ]
    return '{' + joinLines(lines, level) + '}'
  }

  static samples = (samples, {
    abstract, delimiter = ', ', quote = '\'', level = 0
  } = {}) => {
    const lines = cosmeticsSamples
      .call({ indexes: false, abstract, delimiter, quote, bracket: false, discrete: true }, samples)
    return '[' + joinLines(lines, level) + ']'
  }

}


