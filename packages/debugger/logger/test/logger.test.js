import { METRO, SUBTLE } from '@palett/presets'
import { DecoEntries, logger, says } from '../index.js'
import { test } from 'node:test'

const candidates = {
  ob: ({ foo: 'bar', kha: 'mia' }),
  str: 'shakespeare',
  num: 0x200,
  udf: undefined,
  nul: null,
  inf: Number.POSITIVE_INFINITY,
  eps: Number.EPSILON
}

test('logger test', () => {
  logger(candidates)
  says.logger(DecoEntries({ presets: [ SUBTLE, METRO ] })(Object.entries(candidates)))
})

