import { delogger } from '@spare/deco'
import { mapper as entriesMapper } from '@vect/entries-mapper'
import { logger } from '@spare/logger'
import { fluo } from '@palett/fluo-matrix'
import { SimpleEntries } from '@foba/foo'
import { padEntries } from '../src/padEntries'

SimpleEntries |> delogger

for (const [key, entries] of Object.entries(SimpleEntries)) {
  key |> logger
  const text = entriesMapper(entries, String, String)
  const dye = fluo(text, { colorant: true })
  padEntries(text, { raw: entries, dye, ansi: true })
    .map(row => row.join(' | ')).join('\n')
    |> logger
}


