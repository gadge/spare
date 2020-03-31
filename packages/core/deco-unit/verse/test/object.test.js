import { simpleObjects } from '@foba/foo'
import { delogger } from '@spare/deco'
import { says } from '@palett/says'
import { Verse } from '../src/Verse'

let SimpleObjects = simpleObjects({ h: 12 })
SimpleObjects |> delogger

for (const [key, object] of Object.entries(SimpleObjects)) {
  let words = Verse.object(object)
  words = 'export const ' + key + ' = ' + words
  words |> says[key]
}
