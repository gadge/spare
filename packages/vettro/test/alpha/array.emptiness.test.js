import { copyMargin, mapMargin } from '../..'
import { logger, logNeL } from '@spare/logger'
import { decoLog } from '@spare/deco'

let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const alpha = copyMargin(ar, 4, 3)
alpha |> decoLog

alpha.map(x => (x << 2)) |> logger
alpha.map(x => x + '+') |> logNeL

const beta = mapMargin(ar, x => [x, x], 4, 3)
beta |> decoLog

beta.forEach(v => v.splice(1, 1, 0))
beta |> decoLog
beta.forEach(x => x + '-')
beta |> logger

