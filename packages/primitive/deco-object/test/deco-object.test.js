import { rand }                   from '@aryth/rand'
import { simpleObjectCollection } from '@foba/foo'
import { LILAC, NORSE }           from '@palett/presets'
import { RTSP }                   from '@texting/enum-chars'
import { indexed }                from '@vect/object-mapper'
import { DecoObject }             from '../index.js'

let SimpleObjects = simpleObjectCollection({ h: 12 })

SimpleObjects |> console.log

for (const [ key, obj ] of indexed(SimpleObjects)) {
  const decoObject = DecoObject({
    head: 5,
    tail: 2,
    pres: {
      str: NORSE,
      num: LILAC,
    },
    bracket: true,
    discrete: false,
    level: rand(3)
  })
  key + RTSP + decoObject(obj, 36, 1, key.length + 2) |> console.log
}
