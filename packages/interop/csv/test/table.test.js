import { TableCollection } from '@foba/table'
import { says }            from '@spare/logger'
import { promises }        from 'fs'
import { Csv }             from '../src/Csv'

const candidates = {
  // void0: null,
  void1: {},
  void2: { head: null, rows: null },
  void3: { head: [], rows: [ [] ] },
  table1: {
    head: [ 'foo', 'bar' ],
    rows: [
      [ '1,1', 'a' ],
      [ '10,2', 'b' ]
    ]
  },
  table2: TableCollection.flopShuffle()
}

const test = async () => {
  for (let [ key, table ] of Object.entries(candidates)) {
    const DEST = process.cwd() + '/packages/interop/csv/test/' + key + '.csv'
    DEST |> says[key]
    const csv = Csv.table(table, { top: 2, bottom: 3 })
    csv |> says[key]
    await promises.writeFile(DEST, csv)
  }
}

test()
