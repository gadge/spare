import { logger }                                   from '@spare/logger'
import { deca }                                     from '../src/decoPale'
import { Basics, Matrices, Misc, Objects, Vectors } from './assets/candidates'

const candidates = { ...Basics, ...Vectors, ...Matrices, ...Objects, ...Misc }
for (let [key, something] of Object.entries(candidates)) {
  `${key}: ${something|> deca({ pr: true, wa: 32, wo: 16, qm: '\'' })}`  |> console.log
}

({ y: 2020, m: 2, d: 21 }) |> deca({ vo: 1 }) |> logger
