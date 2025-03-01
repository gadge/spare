import { logger }       from '@spare/logger'
import { transpose }    from '@vect/matrix'
import { seq }          from '@vect/vector-init'
import { decoDateTime } from '../src/decoDate.js'
import { test } from 'node:test'

const years = seq(10, x => 1980 + x * 5)
const months = seq(10, x => (x * 10) % 12)
const days = seq(10, x => x * 3)
const hours = seq(10, x => (x * 3) % 24)
const minutes = seq(10, x => (x * 10) % 60)
const seconds = seq(10, x => x * 6)
const dateTimes = transpose([years, months, days, hours, minutes, seconds,])
  .map(([Y, M, D, h, m, s]) => new Date(Y, M, D, h, m, s));

for (let date of dateTimes) {
  logger(decoDateTime(date))
}


