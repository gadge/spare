import { rand }                              from '@aryth/rand'
import { simpleObjectCollection }            from '@foba/foo'
import { KELLY, LAVA, LILAC, NORSE, PAGODA } from '@palett/presets'
import { RTSP }                              from '@texting/enum-chars'
import { indexed }                           from '@vect/object-mapper'
import { DecoObject }                        from '../index.js'

let SimpleObjects = simpleObjectCollection({ h: 12 })

SimpleObjects |> console.log

for (const [ key, obj ] of indexed(SimpleObjects)) {
  const decoObject = DecoObject({
    head: 5,
    tail: 2,
    pres: {
      str: PAGODA,
      num: KELLY,
    },
    bracket: true,
    discrete: false,
    level: rand(3),
  })
  key + RTSP + decoObject(obj, 0, 0, key.length + 2) |> console.log
}
