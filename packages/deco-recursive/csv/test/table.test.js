import { TableCollection } from '@foba/table'
import { says }            from '@spare/logger'
import { promises }        from 'fs'
import { Csv }             from '../src/Csv'

const candidates = {
  // void0: null,
  void1: {},
  void2: { head: null, rows: null },
  void3: { head: [], rows: [ [] ] },
  table: TableCollection.flopShuffle()
}

const test = async () => {
  for (let [ key, table ] of Object.entries(candidates)) {
    const table = Csv.table(table, { top: 2, bottom: 3 })
    table |> says[key]
    await promises.writeFile(process.cwd() + '/packages/deco-recursive/csv/' + key + '.csv', table)
  }
}

test()
