import { delogger } from '@spare/deco'
import { tapSnake } from '../src/tap'

const candidates = [
  undefined,
  'the',
  'raging',
  'bull'
]

tapSnake(...candidates) |> delogger
