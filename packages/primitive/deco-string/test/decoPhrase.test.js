import { ObjectCollection } from '@foba/object-string'
import { says }             from '@spare/xr'
import { logger }     from '@spare/logger'
import { decoPhrase } from '../archive/specific.js'
import { test }       from 'node:test'

const items = Object.assign({},
  ObjectCollection.flopShuffle({ keyed: true }),
  ObjectCollection.flopShuffle({ keyed: true }),
  ObjectCollection.flopShuffle({ keyed: true })
)

test('decoPhrase', () => {
  for (const [ title, o ] of Object.entries(items)) {
    logger(title)
    for (const [ key, text ] of Object.entries(o)) {
      says[key].asc(decoPhrase(text))
    }
    logger('')
  }
  logger(decoPhrase('bundle/min/gzip', { delim: '/' }))
})


