import { logger, logNeL } from '../src/deco'

const candidates = {
  ob: ({ foo: 'bar', kha: 'mia' }),
  str: 'shakespeare',
  num: 0x200,
  udf: undefined,
  nul: null,
  inf: Number.POSITIVE_INFINITY,
  eps: Number.EPSILON
}

for (let k in candidates) {
  logger(candidates[k])
}

for (let k in candidates) {
  logNeL(candidates[k])
}

