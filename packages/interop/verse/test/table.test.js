import { TableCollection } from '@foba/table'
import { says }            from '@spare/logger'
import { Verse }           from '../src/Verse.js'
import { terminfo }        from './assets/terminfo.js'
import { test } from 'node:test'

const candidates = {
  // void0: null,
  void1: {},
  void2: { head: null, rows: null },
  void3: { head: [], rows: [ [] ] },
  table: TableCollection.flopShuffle(),
  table2: terminfo,
}

for (let [ key, table ] of Object.entries(candidates)) {
  says[key](Verse.table(table))
}
