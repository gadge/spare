import { NumberObjects, StringObjects } from '@foba/object'
import { indexed }                      from '@vect/object-mapper'
import { test }                         from 'node:test'
import { DecoEntries }                  from '../index.js'

export const ENTRIES_COLLECTION = Object.fromEntries([
  NumberObjects.flopShuffle({ entry: true }),
  NumberObjects.flopShuffle({ entry: true }),
  NumberObjects.flopShuffle({ entry: true }),
  StringObjects.flopShuffle({ entry: true }),
  StringObjects.flopShuffle({ entry: true }),
  StringObjects.flopShuffle({ entry: true }),
])

console.log(ENTRIES_COLLECTION)

const decoEntries = DecoEntries({ thres: NaN }) // thres = 0, list vertically

test('decoEntries', () => {
  for (const [ key, object ] of indexed(ENTRIES_COLLECTION)) {
    const entries = [ ...indexed(object) ]
    console.log(key)
    console.log(decoEntries(entries))
  }
})