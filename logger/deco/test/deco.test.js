import { deca } from '../index'
import { Basics, Matrices, Misc, Objects, Vectors } from './candidates'
import { logger } from '@spare/logger'

const candidates = { ...Basics, ...Vectors, ...Matrices, ...Objects, ...Misc }
for (let [key, something] of Object.entries(candidates)) {
  `${key}: ${something|> deca({ wa: 16, wo: 16 })}`  |> console.log
}

({ y: 2020, m: 2, d: 21 }) |> deca({ vo: 1 }) |> logger
