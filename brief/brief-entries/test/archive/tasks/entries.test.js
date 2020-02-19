import { SimpleEntries } from '@foba/foo'
import { brief } from '../../../src/brief'
import { logger, logNeL } from '@spare/logger'

export function entriesTest () {
  for (let [k, entries] of Object.entries(SimpleEntries)) {
    k |> logger
    entries |> brief |> logNeL
  }
}

entriesTest()
