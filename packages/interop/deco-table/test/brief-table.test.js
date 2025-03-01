import { Table }           from '@analys/table'
import { TableCollection } from '@foba/table'
import { says }            from '@spare/logger'
import { iso }             from '@vect/vector-init'
import { test }            from 'node:test'
import { Deco }            from '../index.js'

const table = Table.from(TableCollection.flopShuffle())

test('brief table', () => {
  table.pushColumn('chn', iso(table.ht, [ '五' ]))

  says['table'](Deco({ top: 5, bottom: 3, left: 3, right: 1, fullAngle: true })(table))
})

