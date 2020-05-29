import { decoLog }                  from '@spare/deco'
import { copyMargin, copyMxMargin } from '../../utils/copyMargin'
import { mapMargin, mapMxMargin }   from '../../utils/mapMargin'

const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

copyMargin(ar, 3, 2, 10) |> decoLog
mapMargin(ar, x => (x << 2), 3, 2, 10) |> decoLog

const mx = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 2, 3, 5, 8, 13, 21, 34, 55],
  [-2014, -256, -16, -4, -1, 1, 4, 16, 256, 1024]
]

copyMxMargin(mx, 2, 1, 3, 3, 5, 10) |> decoLog
mapMxMargin(mx, x => x >> 31, 2, 1, 3, 3, 5, 10) |> decoLog

