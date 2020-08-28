import { SimpleEntries }           from '@foba/foo'
import { fluoMatrix }              from '@palett/fluo-matrix'
import { delogger }                from '@spare/deco'
import { logger }                  from '@spare/logger'
import { mapper as entriesMapper } from '@vect/entries-mapper'
import { padEntries }              from '../src/padEntries'

SimpleEntries |> delogger

for (const [key, entries] of Object.entries(SimpleEntries)) {
  key |> logger
  const text = entriesMapper(entries, String, String)
  const dye = fluoMatrix(text, { colorant: true })
  padEntries(text, { raw: entries, dye, ansi: true })
    .map(row => row.join(' | ')).join('\n')
    |> logger
}


