import { logger } from '@spare/logger'
import { xr }     from '@spare/xr'
import { quoter } from '../src/quoter'

const candidates = [
  'abc',
  'abc\'',
  '\'abc',
  '\'abc\'',
  'a\'b\'c'
]

for (let word of candidates) {
  xr().word(word).process(quoter(word)) |> logger
}
