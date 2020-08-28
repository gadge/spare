import { logger } from '@spare/logger'

export const CsvReg = (de, qt) => new RegExp(
  (
    `(\\${de}|\\r?\\n|\\r|^)` + // Delimiters
    `(?:${qt}([^${qt}]*(?:""[^${qt}]*)*)${qt}|` + // Quoted fields
    `([^"\\${de}\\r\\n]*))` // Standard fields
  ),
  'gi')

const csvReg = CsvReg(',', '\'')
csvReg.toString() |> logger

const example = /(,|\r?\n|\r|^)(?:'([^']*(?:""[^']*)*)'|([^",\r\n]*))/gi
