import { deca } from '../src/deco'
import { Basics, Matrices, Misc, Objects, Vectors } from './candidates'
import { logger } from '@spare/logger'

const candidates = { ...Basics, ...Vectors, ...Matrices, ...Objects, ...Misc }
for (let [key, something] of Object.entries(candidates)) {
  `${key}: ${something|> deca({ pr: false, wa: 32, wo: 16, qm: '\'' })}`  |> console.log
}

({ y: 2020, m: 2, d: 21 }) |> deca({ vo: 1 }) |> logger
