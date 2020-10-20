import { logger, Xr } from '@spare/logger'
import { trim }       from '../src/trim'

const candidates = [
  ' foo ',
  'bar ',
  '\tzen'
]

for (let word of candidates) {
  Xr(word).p('->').br(trim(word)) |> logger
}