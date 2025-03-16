import { Table }           from '@analys/table'
import { TableCollection } from '@foba/table'
import { says }            from '@spare/logger'
import { POINTWISE }       from '@vect/enum-matrix-directions'
import { iso }             from '@vect/vector-init'
import { test }            from 'node:test'
import { DecoTable }       from '../index.js'

const table = Table.from(TableCollection.flopShuffle())

test('brief table', () => {
  // table.pushColumn('chn', iso(table.ht, [ '五' ]))
  const decoTable = DecoTable({ direct: POINTWISE })
  says['table'](decoTable(table))
})

