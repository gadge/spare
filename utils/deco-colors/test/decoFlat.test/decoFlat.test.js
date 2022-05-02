import { logger } from '@spare/logger'
import { deflat } from '../../index'

const a = [[1], [2, 3]]
const b = { foo: 1, bar: 2, date: new Date(), kha: [[1], [2, 3]] }
deflat(123) |> logger
deflat(a) |> logger
deflat(b) |> logger
