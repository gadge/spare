import { NumberObjects, StringObjects } from '@foba/object'
import { indexed }                      from '@vect/object-mapper'
import { DecoEntries }                  from '../index.js'
import { test } from 'node:test'

export const ENTRIES_COLLECTION = Object.fromEntries([
  NumberObjects.flopShuffle({ entry: true }),
  NumberObjects.flopShuffle({ entry: true }),
  NumberObjects.flopShuffle({ entry: true }),
  StringObjects.flopShuffle({ entry: true }),
  StringObjects.flopShuffle({ entry: true }),
  StringObjects.flopShuffle({ entry: true })
])

console.log(ENTRIES_COLLECTION)

const decoEntries = DecoEntries({ thres: NaN })

for (const [ key, object ] of indexed(ENTRIES_COLLECTION)) {
  const entries = [ ...indexed(object) ]
  console.log(key)
  console.log(decoEntries(entries))
}