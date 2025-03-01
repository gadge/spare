import { simpleObjects } from '@foba/foo'
import { says }     from '@spare/xr'
import { delogger } from '@spare/deco'
import { Verse }    from '../src/Verse.js'
import { test } from 'node:test'
let SimpleObjects = simpleObjects({ h: 12 })
delogger(SimpleObjects)

for (const [key, object] of Object.entries(SimpleObjects)) {
  let words = Verse.object(object)
  words = 'export const ' + key + ' = ' + words
  says[key](words)
}
