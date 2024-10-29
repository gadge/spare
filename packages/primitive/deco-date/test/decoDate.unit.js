import { logger }       from '@spare/logger'
import { transpose }    from '@vect/matrix'
import { seq }          from '@vect/vector-init'
import { decoDateTime } from '../src/decoDate'

const years = seq(10, x => 1980 + x * 5)
const months = seq(10, x => (x * 10) % 12)
const days = seq(10, x => x * 3)
const hours = seq(10, x => (x * 3) % 24)
const minutes = seq(10, x => (x * 20) % 60)
const seconds = seq(10, x => x * 6)
const dateTimes = ([years, months, days, hours, minutes, seconds,] |> transpose)
  .map(([Y, M, D, h, m, s]) => new Date(Y, M, D, h, m, s))

for (let date of dateTimes) {
  decoDateTime(date) |> logger
}


