import { NumberObjects, StringObjects } from '@foba/object'
import { indexed }                      from '@vect/object-mapper'
import { DecoEntries }                  from '../index.js'

export const ENTRIES_COLLECTION = Object.fromEntries([
  NumberObjects.flopShuffle({ entry: true }),
  NumberObjects.flopShuffle({ entry: true }),
  NumberObjects.flopShuffle({ entry: true }),
  StringObjects.flopShuffle({ entry: true }),
  StringObjects.flopShuffle({ entry: true }),
  StringObjects.flopShuffle({ entry: true })
])

ENTRIES_COLLECTION |> console.log

const decoEntries = DecoEntries({ thres: NaN })

for (const [ key, object ] of indexed(ENTRIES_COLLECTION)) {
  const entries = [ ...indexed(object) ]
  key |> console.log
  entries |> decoEntries |> console.log
}