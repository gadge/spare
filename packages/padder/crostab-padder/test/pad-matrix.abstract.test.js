import { decoMatrix, logger } from '@spare/logger'
import { Pad }                from '@spare/padder'
import { Trizipper } from '@vect/matrix-zipper'

const ax = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

const bx = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3]
]

const cx = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]

const pads = [3, 5, 7]
const padder = Pad()
const zipper = Trizipper((a, b, c, i, j) =>
  padder(a + b + c, pads[j], a + b + c))

zipper(ax, bx, cx) |> decoMatrix |> logger
