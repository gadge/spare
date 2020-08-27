import { TableCollection } from '@foba/table'
import { says }            from '@spare/logger'
import { Verse }           from '../src/Verse'

const candidates = {
  // void0: null,
  void1: {},
  void2: { head: null, rows: null },
  void3: { head: [], rows: [[]] },
  table: TableCollection.flopShuffle()
}

for (let [key, table] of Object.entries(candidates)) {
  Verse.table(table) |> says[key]
}
