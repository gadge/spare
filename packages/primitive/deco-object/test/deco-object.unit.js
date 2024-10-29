import { NumberObjects, StringObjects } from '@foba/object'
import { PAGODA, SUBTLE }               from '@palett/presets'
import { RTSP }                         from '@texting/enum-chars'
import { indexed }                      from '@vect/object-mapper'
import { DecoObject }                   from '../index.js'

let SimpleObjects = Object.fromEntries([
  NumberObjects.flopShuffle({ entry: true }),
  NumberObjects.flopShuffle({ entry: true }),
  NumberObjects.flopShuffle({ entry: true }),
  StringObjects.flopShuffle({ entry: true }),
  StringObjects.flopShuffle({ entry: true }),
  StringObjects.flopShuffle({ entry: true })
])


console.log(SimpleObjects)

for (const [ key, obj ] of indexed(SimpleObjects)) {
  const decoObject = DecoObject({ thres: 0, pres: { str: SUBTLE, num: PAGODA } })
  console.log(key + RTSP + decoObject(obj))
}
