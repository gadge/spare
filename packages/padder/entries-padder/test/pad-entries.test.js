import { SimpleEntriesCollection }           from '@foba/foo'
import { fluoMatrix }              from '@palett/fluo-matrix'
import { delogger }                from '@spare/deco'
import { logger }                  from '@spare/logger'
import { mapper as entriesMapper } from '@vect/entries-mapper'
import { entriesPadder }              from '../src/entriesPadder'

SimpleEntriesCollection |> delogger

for (const [key, entries] of Object.entries(SimpleEntriesCollection)) {
  key |> logger
  const text = entriesMapper(entries, String, String)
  const dye = fluoMatrix(text, { colorant: true })
  entriesPadder(text, { raw: entries, dye, ansi: true })
    .map(row => row.join(' | ')).join('\n')
    |> logger
}


