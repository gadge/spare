import { TableCollection } from '@foba/table'
import { says }            from '@spare/logger'
import { DecoTable }       from '../index.js'
import { test } from 'node:test'

const table = TableCollection.flopShuffle()

test('decoTable says', () => {
  says['table'](DecoTable({ top: 5, bottom: 3, left: 3, right: 1 })(table))
})

