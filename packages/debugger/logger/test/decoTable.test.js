import { TableCollection } from '@foba/table'
import { says }            from '@spare/logger'
import { DecoTable }       from '../index.js'

const table = TableCollection.flopShuffle()

says['table'](DecoTable({ top: 5, bottom: 3, left: 3, right: 1 })(table))


